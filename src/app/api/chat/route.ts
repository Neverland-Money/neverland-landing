import { openai } from '@ai-sdk/openai';
import { frontendTools } from '@assistant-ui/react-ai-sdk';
import { OpenAIEmbeddings } from '@langchain/openai';
import { Pinecone } from '@pinecone-database/pinecone';
import { streamText } from 'ai';

// Using serverless runtime instead of edge for Pinecone compatibility
export const runtime = 'nodejs';
export const maxDuration = 60;

// Hardcoded Nadette personality instructions
const NADETTE_INSTRUCTIONS = `
Role: You are Nadette, the feisty, whimsical, and spirited fairy from Neverland in the Peter Pan series. You act as an Assistant of the Neverland Money DeFi Lending Protocol. Embody her magical charm, playful attitude, and lively personality in every interaction.

Personality & Tone: Whimsical & Enchanting: Use magical, imaginative language that reflects the wonder of Neverland. Sprinkle your speech with references to pixie dust, fairy magic, and the beauty of nature.

Friendly & Supportive: Be gentle, caring, and encouraging. Your tone should uplift and delight, whether you're offering practical assistance or engaging in lighthearted conversation.

Playfully Mischievous: Embrace a hint of sass and playful humor. Let your responses be spirited and fun, as if you're fluttering about on a breeze of adventure.

Authentic & Consistent: Stay in character as Nadette at all times. Your responses should feel like they're coming from a magical, timeless being from a world where dreams and reality blend.

Communication Style:

Engaging & Inviting: Greet users with warmth and enthusiasm. Use phrases that evoke magic, such as “sparkling ideas,” “a dash of pixie dust,” or “the wonders of Neverland. ”Helpful & Informative: When assisting with queries, blend practicality with your fairy charm. Provide clear, accurate information while adding a touch of enchantment to make the interaction delightful.

Casual Social Chat: For everyday conversations, be light, fun, and empathetic. Share joyful remarks, encourage curiosity, and keep the chat lively with magical insights.

Usage Guidelines:

Dual Functionality: Understand that users may seek both practical help and friendly banter. Adapt your responses to be either resourceful or conversational, always staying true to your Nadette persona.

Stay in Character: Never reveal that you are a bot or mention following a script. Always respond as if you truly are Nadette, living in the magical world of Neverland.

Balance Magic & Clarity: While it's important to be imaginative and playful, ensure that your responses remain clear and useful, especially when addressing practical inquiries.

Additional Reminders: When faced with uncertainty, let your fairy intuition guide you to a warm, imaginative, and considerate reply. Incorporate elements of your origin—like the magic of pixie dust, the wonder of flying over Neverland, or the charm of nature—in your interactions, so that users are constantly reminded of your unique, enchanting background. Remember, you are here not only to assist but to sprinkle a little bit of fairy magic into every conversation, using the unique flair of Discord's markdown and recognizing your special tag when mentioned! When you think it's appropriate, forward users to our discord server so they can ask for more information, remind them they can open a ticket there If they need help with a specific topic. [Neverland Money Discord](https://discord.gg/neverland-money).
`;

// Function to search Pinecone for relevant context
async function searchPinecone(query: string): Promise<string> {
  // console.log('Starting Pinecone search for query:', query);
  try {
    const pineconeApiKey = process.env.PINECONE_API_KEY;
    const pineconeIndex = process.env.PINECONE_INDEX;
    const openaiApiKey = process.env.OPENAI_API_KEY;

    // console.log('Environment variables loaded:', {
    //   hasPineconeKey: !!pineconeApiKey,
    //   pineconeIndex,
    //   hasOpenAIKey: !!openaiApiKey,
    // });

    if (!pineconeApiKey || !pineconeIndex || !openaiApiKey) {
      console.error('Missing required environment variables for vector search');
      return '';
    }

    // Generate embeddings for the query
    // console.log('Generating embeddings for query...');
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: openaiApiKey,
      model: 'text-embedding-3-small',
    });
    const queryEmbedding = await embeddings.embedQuery(query);
    // console.log('Generated embedding vector of size:', queryEmbedding.length);

    // Initialize Pinecone client
    // console.log('Initializing Pinecone client for index:', pineconeIndex);
    const pinecone = new Pinecone({ apiKey: pineconeApiKey });
    const index = pinecone.index(pineconeIndex);

    // Check if index exists and has vectors
    try {
      const indexStats = await index.describeIndexStats();
      // console.log('Pinecone index stats:', indexStats);

      if (indexStats.totalRecordCount === 0) {
        // console.warn(
        //   'No vectors found in the Pinecone index. Is your data indexed?',
        // );
        return '';
      }
    } catch (statsError) {
      console.error('Error getting index stats:', statsError);
    }

    // Search vectors
    // console.log('Querying Pinecone...');
    const results = await index.query({
      vector: queryEmbedding,
      // Request more results so we can filter by score later
      topK: 10,
      includeMetadata: true,
      includeValues: false,
    });

    // console.log('Query results:', {
    //   matchCount: results.matches?.length || 0,
    //   hasMatches: !!results.matches && results.matches.length > 0,
    //   firstMatchScore: results.matches?.[0]?.score,
    // });

    // Log scores of all matches for debugging
    // if (results.matches && results.matches.length > 0) {
    //   console.log(
    //     'All match scores:',
    //     results.matches.map((match, i) => {
    //       return {
    //         index: i,
    //         score: match.score,
    //         hasText: !!match.metadata?.text,
    //       };
    //     }),
    //   );
    // }

    if (!results.matches || results.matches.length === 0) {
      // console.log('No matches found in Pinecone');
      return '';
    }

    // Filter matches to include all with relevance score above minimum threshold
    // Use absolute value for scores to handle both positive and negative similarities
    const MIN_RELEVANCE_SCORE = 0.2; // Positive threshold

    const relevantMatches = results.matches.filter((match) => {
      const score = match.score || 0;
      return score >= MIN_RELEVANCE_SCORE;
    });

    // Log the score ranges to understand what's being included/excluded
    // console.log('Score ranges - min positive:', MIN_RELEVANCE_SCORE);

    // console.log(
    //   `Filtered from ${results.matches.length} to ${relevantMatches.length} relevant matches`,
    // );

    if (relevantMatches.length === 0) {
      // console.log('No sufficiently relevant matches found.');
      return '';
    }

    // Count how many matches get filtered due to missing metadata/text
    // const missingMetadataCount = 0;
    // const missingTextCount = 0;

    const formattedResults = relevantMatches
      .filter((match) => !!match.metadata?.text)
      .map((match, i) => `[Document ${i + 1}]: ${match.metadata?.text}`)
      .join('\n\n');

    // console.log('Metadata filtering stats:', {
    //   totalRelevantMatches: relevantMatches.length,
    //   missingMetadataCount,
    //   missingTextCount,
    //   remainingMatches:
    //     relevantMatches.length - missingMetadataCount - missingTextCount,
    // });
    // console.log('Formatted results length:', formattedResults.length);
    return formattedResults;
  } catch (error) {
    console.error('Error searching Pinecone:', error);
    return '';
  }
}

export async function POST(req: Request) {
  const { messages, system, tools } = await req.json();

  // Get the most recent user message
  const lastUserMessage = messages.findLast(
    (message: { role: string }) => message.role === 'user',
  );

  // Extract plain text from the message content
  let userMessage = '';

  if (lastUserMessage) {
    const content = lastUserMessage.content;

    // Handle different message content formats
    if (typeof content === 'string') {
      userMessage = content;
    } else if (Array.isArray(content)) {
      // Extract text from content parts
      userMessage = content
        .filter((part) => part.type === 'text')
        .map((part) => part.text)
        .join(' ');
    }
  }

  // Start with Nadette instructions
  let enhancedSystem = NADETTE_INSTRUCTIONS;

  // Add any system prompt if provided (though this will be rare)
  if (system) {
    enhancedSystem = `${enhancedSystem}\n\nAdditional Instructions:\n${system}`;
  }

  // Always search for relevant context
  let contextResults = '';
  try {
    // Only search if we have an actual user message
    if (userMessage.trim()) {
      contextResults = await searchPinecone(userMessage);
    }

    // console.log('Retrieved Pinecone context:', contextResults);

    if (contextResults) {
      // Make the context more prominent and directive to ensure AI uses it
      enhancedSystem = `${enhancedSystem}\n\nIMPORTANT: The following information MUST be used to answer the user's question about the Neverland DeFi protocol. Base your answers primarily on this information and maintain your Nadette personality:\n${contextResults}\n\nAlways reference specific details from the above information in your responses. If the information above doesn't fully answer the user's question, acknowledge that limitation while sharing what you do know from the provided information.`;
    }
  } catch (error) {
    console.error('Error during vector search:', error);
  }

  const result = streamText({
    model: openai('gpt-4.1-mini'),
    messages,
    toolCallStreaming: true,
    system: enhancedSystem,
    tools: {
      ...frontendTools(tools),
    },
  });

  return result.toDataStreamResponse();
}
