# Neverland Money - Landing Page

A Next.js 15.3 landing page with TypeScript, Tailwind CSS 4, and advanced AI chat integration. Features animated starfield backgrounds, responsive design, smooth scroll animations, and vector-powered knowledge base using OpenAI + Pinecone.

## Quick Start

### Prerequisites

- **Node.js 20+**
- **pnpm** (package manager)
- **OpenAI** API key (for chat functionality)
- **Pinecone** API key (for vector search)
- **React 19** compatible dependencies
- **Windows users**: **WSL** (Windows Subsystem for Linux) recommended

### Install pnpm

If you don't have pnpm installed:

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using Scoop (Windows)
scoop install pnpm

# Or using the installation script
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd neverland-landing-v2
   ```

2. **Install dependencies and initialize Husky**

   ```bash
   pnpm install
   ```

   The installation automatically initializes Husky via the `prepare` script in package.json.

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your API keys:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   PINECONE_API_KEY=your_pinecone_api_key_here
   PINECONE_INDEX=your_pinecone_index_name_here
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm dev:hostname` - Start development server with specific hostname (0.0.0.0)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm clean` - Clean .next, storybook-static, coverage and node_modules directories, then reinstall dependencies
- `pnpm build-storybook` - Build Storybook for production
- `pnpm storybook` - Start Storybook component library

## Analytics

This project uses Vercel Analytics for tracking user interactions and engagement:

### Implemented Tracking Features

- **Page Tracking**: Automatic page view tracking via Vercel Analytics
- **User Interaction Tracking**:
  - Header navigation and social icon clicks
  - Footer navigation and social link clicks
  - Hero and Footer section CTA button interactions
  - Scroll to Top button interactions
  - Chat assistant interactions (open, minimize, close)
  - FAQ accordion expand/collapse actions
- **Section Time Tracking**: Measures how long users spend viewing each section of the page using the `SectionTracker` component

### Analytics Component

The `SectionTracker` component uses the Intersection Observer API (via `react-intersection-observer`) to monitor user engagement with different page sections. It sends periodic analytics events with section ID, name, and accumulated view duration.

## Project Structure

```
src/                         # Source code directory
├── app/                     # Next.js App Router pages
│   ├── about/               # About us page (redirect)
│   ├── api/                 # API routes
│   │   └── chat/            # AI chat API endpoint
│   ├── contact/             # Contact page (redirect)
│   ├── explore/             # Explore features page (redirect)
│   ├── faq/                 # FAQ page (redirect)
│   ├── features/            # Feature details page (redirect)
│   ├── partners/            # Partners page (redirect)
│   ├── privacy-policy/      # Privacy policy page (redirect)
│   ├── security/            # Security page (redirect)
│   ├── stats/               # Statistics page (redirect)
│   └── terms-of-service/    # Terms of service page (redirect)
├── components/              # Reusable component directory
│   ├── assistant-ui/        # AI chat interface components
│   ├── hooks/               # Custom React hooks
│   ├── layout/              # Structural layout components
│   ├── sections/            # Page-specific content sections
│   └── ui/                  # Core UI primitives and elements
├── lib/                     # Core utility functions
└── utils/                   # Helper utilities for specific features
```

## Key Components

### StarrySky Component

Dynamic animated starfield with customizable:

- Star count and density
- Shooting star effects
- Glow effects
- Full page vs viewport sizing
- Z-index layering
- GSAP-powered animations

### Smooth Scrolling

- Lenis smooth scrolling integration
- Optimized performance
- Custom scroll triggers and animations
- Enhanced user experience

### AI Chat System

- OpenAI GPT integration with AI-SDK
- Pinecone vector database with LangChain
- Context-aware responses
- Real-time streaming
- Knowledge base search
- Advanced Assistant UI components
- Rich markdown rendering
- Improved response handling

### Responsive Design

- Mobile-first approach
- Tailwind CSS utility classes
- Custom breakpoints
- Smooth animations

## API Setup

### Required API Keys

1. **OpenAI API Key**

   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Add billing information (pay-per-use)

2. **Pinecone API Key**

   - Visit [Pinecone](https://www.pinecone.io/)
   - Create a new project
   - Create an index for vector storage
   - Copy your API key and index name

## Configuration

### Tailwind CSS 4

Custom configuration with:

- Extended color palette
- Custom fonts (Cinzel, Lexend)
- Animation utilities
- Responsive breakpoints
- Advanced utility classes
- Optimized for React 19

### Next.js Config

- Image optimization for external sources
- TypeScript strict mode
- ESLint integration
- Path aliases (@/\*)

### ESLint, Prettier & Husky

- Strict TypeScript rules
- Import ordering
- Tailwind class sorting
- Auto-formatting on save
- Git hooks with Husky to enforce code quality:
  - Pre-commit hook runs linting and formatting on staged files
  - Prevents committing code that doesn't meet quality standards

## Storybook Component Library (v9)

This project includes a comprehensive Storybook setup for developing and testing UI components in isolation.

### Features

- **Component Documentation**: Auto-generated docs for all components
- **Interactive Controls**: Live editing of component props
- **Accessibility Testing**: Built-in a11y testing with @storybook/addon-a11y
- **Visual Testing**: Component testing with Vitest integration
- **Responsive Design**: Test components across different viewport sizes
- **Next.js Vite Integration**: Optimized for faster development experience

### Available Stories

- **UI Components**: Button, StarrySky, StarIcon, Tooltip, etc.
- **Layout Components**: Header, sections, and page layouts
- **Assistant Components**: ChatButton, Thread, and AI chat interface

### Running Storybook

```bash
# Build static Storybook for deployment
pnpm build-storybook

# Start Storybook development server
pnpm storybook
```

Access Storybook at [http://localhost:6006](http://localhost:6006)

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform supporting Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### Environment Variables for Production

Ensure all required environment variables are set:

```env
OPENAI_API_KEY=your_production_openai_key
PINECONE_API_KEY=your_production_pinecone_key
PINECONE_INDEX=your_production_index_name
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [Business Source License 1.1](./LICENSE) (BSL 1.1). The source code is made available for inspection and auditing, but you may not use this software or deploy it in production or commercial environments outside of the Neverland Foundation without explicit permission.

After July 20, 2028 (the Change Date), the project will transition to the MIT license.

This is a source-available license, not an open-source license as defined by the Open Source Initiative. The primary goal is to provide transparency while protecting Neverland's intellectual property.

## Acknowledgments

- Built with [Next.js 15.3](https://nextjs.org/)
- [React 19](https://react.dev/) for improved performance
- Styled with [Tailwind CSS 4](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/gsap/)
- Smooth scrolling with [Lenis](https://github.com/studio-freight/lenis)
- Enhanced scrolling with [OverlayScrollbars](https://kingsora.github.io/OverlayScrollbars/)
- AI powered by [OpenAI](https://openai.com/) and [AI SDK](https://sdk.vercel.ai/docs)
- Vector search by [Pinecone](https://www.pinecone.io/) and [LangChain](https://js.langchain.com/)
- Icons by [Lucide](https://lucide.dev/)
- Parallax effects with [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- Analytics by [Vercel Analytics](https://vercel.com/analytics) and [Speed Insights](https://vercel.com/docs/speed-insights)
