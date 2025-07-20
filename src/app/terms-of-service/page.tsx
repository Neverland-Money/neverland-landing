import type { Metadata } from 'next';

import { ChatButton } from '@/components/assistant-ui/ChatButton';
import Header from '@/components/layout/Header';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import StarrySky from '@/components/ui/StarrySky';

export const metadata: Metadata = {
  title: 'Terms of Service | Neverland Money',
  description: 'Neverland Money Terms of Service - Last updated: July 20, 2025',
  metadataBase: new URL('https://neverland.money'),
  alternates: {
    canonical: '/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | Neverland Money',
    description:
      'Neverland Money Terms of Service - Last updated: July 20, 2025',
    url: 'https://neverland.money/terms-of-service',
    siteName: 'Neverland Money',
    images: [
      {
        url: '/assets/images/tos-page.webp',
        width: 1200,
        height: 675,
        alt: 'Terms of Service | Neverland Money',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Neverland Money',
    description:
      'Neverland Money Terms of Service - Last updated: July 20, 2025',
    images: ['/assets/images/tos-page.webp'],
  },
  keywords: [
    'decentralized finance',
    'lending',
    'crypto',
    'interest',
    'blockchain',
  ],
};

export default function TermsOfService() {
  return (
    <main className='min-h-screen bg-[#01020D]'>
      <StarrySky
        starCount={300}
        shootingStarCount={0}
        glowPercentage={0}
        fullPage={true}
        zIndex={1}
      />
      {/* Unified Background Layer */}
      <div className='fixed inset-0 z-0'>
        {/* Base gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#0b0414] via-[#2d1b69]/30 to-[#090016]' />
        {/* Subtle radial overlay */}
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent' />
      </div>

      {/* Content */}
      <div className='relative z-10'>
        <Header />

        <article className='mx-auto max-w-4xl px-6 py-16'>
          <header className='mb-12 text-center'>
            <h1 className='font-cinzel-decorative mt-32 mb-4 text-4xl font-bold text-white md:text-5xl'>
              Terms of Service
            </h1>
            <div className='mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400' />
            <p className='font-lexend mx-auto max-w-3xl font-extralight text-purple-200'>
              Please read these Terms of Service carefully before using the
              Neverland Money platform.
            </p>
            <p className='font-lexend mt-4 text-sm text-purple-300'>
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          <div className='font-lexend max-w-none space-y-12 text-gray-300'>
            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                1. Welcome to Neverland Money and the Interface!
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  These Terms of Use (&quot;Terms&quot;) govern your access to
                  and use of both the Neverland.money website (referred to as
                  &quot;Neverland.money&quot;) and our DeFi interface (referred
                  to as the &quot;Interface&quot;) collectively referred to as
                  the &quot;Services.&quot; The Services are brought to you by
                  Neverland Foundation, incorporated in the Cayman Islands
                  (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                  Neverland.money provides information and resources about the
                  fundamentals of the decentralized non-custodial liquidity
                  protocol called the Neverland Protocol, comprised of
                  open-source self-executing smart contracts that are deployed
                  on various permissionless public blockchains, such as Monad
                  (the &quot;Neverland Protocol&quot; or the
                  &quot;Protocol&quot;). Neverland Money does not control or
                  operate any version of the Neverland Protocol on any
                  blockchain network. Neverland.money acts solely as an
                  infrastructure provider for the Protocol and does not provide
                  custodial, broker, or financial services to users.
                </p>
                <p>
                  The Interface provides one of the available applications
                  through which users, via their self-custodial wallets,
                  interact with the Neverland Protocol.
                </p>
                <p>
                  ARBITRATION NOTICE: THESE TERMS CONTAIN AN ARBITRATION CLAUSE
                  BELOW. EXCEPT FOR CERTAIN TYPES OF DISPUTES MENTIONED IN THAT
                  ARBITRATION CLAUSE, YOU AND WE AGREE THAT ANY DISPUTES
                  RELATING TO THE SERVICES WILL BE RESOLVED BY MANDATORY BINDING
                  ARBITRATION, AND YOU WAIVE ANY RIGHT TO A TRIAL BY JURY OR TO
                  PARTICIPATE IN A CLASS-ACTION LAWSUIT OR CLASS-WIDE
                  ARBITRATION.
                </p>
                <p>You are entering into a binding Agreement.</p>
                <p>
                  BY ACCESSING OR USING OUR SERVICES, YOU ARE ENTERING INTO A
                  BINDING AGREEMENT WITH US THAT INCLUDES THESE TERMS, PRIVACY
                  POLICY, AND OTHER POLICIES REFERENCED HEREIN (COLLECTIVELY,
                  THE &quot;AGREEMENT&quot;).
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                2. Use of the Services
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  Access to and use of the Services is prohibited for any
                  individual or entity who is a citizen, resident, or located in
                  a jurisdiction where such access or use is restricted or
                  prohibited under applicable laws, regulations, or sanctions
                  regimes. This includes, without limitation, the United States,
                  the United Kingdom, any European Union member state, the
                  Cayman Islands, and jurisdictions subject to sanctions imposed
                  by the United Nations, the European Union, or the U.S. Office
                  of Foreign Assets Control (OFAC).
                </p>
                <p>
                  To use Services, you must be at least 18 years old and have
                  full legal capacity to enter into binding agreements. If you
                  are under the age of 18 or lack the legal capacity, use the
                  Services with the explicit permission and supervision of your
                  parent or legal guardian. In such cases, your parent or legal
                  guardian must read and agree to these Terms on your behalf and
                  will be responsible for all activities conducted through
                  Services.
                </p>
                <p>
                  If you are a parent or legal guardian permitting a minor or
                  someone without full legal capacity to use the Services, you
                  agree to these Terms on their behalf and assume full
                  responsibility for their compliance with these Terms.
                </p>
                <p>
                  If you are accepting these Terms on behalf of a company or
                  other legal entity, you represent and warrant that you have
                  the legal authority to bind such entity to these Terms. In
                  such cases, the terms &quot;User&quot; &quot;you&quot; and
                  &quot;your&quot; shall refer to both you as an individual and
                  the entity you represent.
                </p>
                <p>
                  We may change or update the Services, the Agreement, and any
                  part of the Terms at any time, for any reason, at our sole
                  discretion. Once any part of the Agreement is updated and in
                  effect, you will be bound by the Terms if you continue to use
                  the Services.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                3. Services
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  <strong>Nature of the Service.</strong> Neverland.money
                  provides an informational Interface to interact with the
                  Neverland Protocol. All content, materials, data, and other
                  information made available through the Interface are for
                  general informational purposes only. While we endeavor to
                  ensure that the information is accurate and up to date, we do
                  not warrant or guarantee its accuracy, completeness,
                  reliability, suitability, or timeliness. You acknowledge that
                  any reliance on the information is at your sole risk.
                </p>
                <p>
                  <strong>Non Custodial Service.</strong> We do not hold,
                  possess, custody, or control any crypto assets, fiat currency,
                  or other digital or tangible assets belonging to you or any
                  other user.
                </p>
                <p>
                  <strong>User Control.</strong> At all times, you retain
                  exclusive control over your crypto assets. You agree that any
                  transfers, trades, swaps, deposits, withdrawals, or other
                  transactions you initiate through the Interface occur directly
                  on underlying blockchain networks, and that we are not a
                  counterparty to any such transactions.
                </p>
                <p>
                  <strong>Self Custodial Wallets.</strong> To use the Interface,
                  you must connect a self custodial wallet supported by the
                  Neverland protocol. All wallet software or hardware is
                  developed and maintained by third parties.
                </p>
                <p>
                  <strong>Separate Terms.</strong> Your use of any Wallet is
                  subject to the separate terms, privacy policies, and risk
                  disclosures of the wallet provider. We do not endorse,
                  guarantee, or warrant any third party wallet, and we shall not
                  be liable for any failure or compromise of such wallet.
                </p>
                <p>
                  <strong>No Intermediary.</strong> We are not an intermediary,
                  agent, broker, exchange, clearinghouse, custodian, or
                  financial institution with respect to any blockchain
                  transaction you effect.
                </p>
                <p>
                  <strong>No Fiduciary Relationship.</strong> Nothing in these
                  Terms creates a fiduciary, advisory, or special relationship
                  between you and us. You bear sole responsibility for your
                  decisions and actions when using the Interface or interacting
                  with the Protocol.
                </p>
                <p>
                  <strong>No Financial, Tax or Legal Advice.</strong> The
                  Protocol is not registered with any financial regulatory
                  authority in any jurisdiction and is not intended to
                  constitute an offer of securities or investment services. The
                  Information provided through the Neverland.money and Interface
                  does not constitute financial, investment, tax, legal, or
                  other professional advice, and you should not rely on it as
                  such. Users should consult independent advisors before
                  engaging with the Protocol. Rewards, yields, or returns are
                  not guaranteed and are determined solely by decentralized
                  governance.
                </p>
                <p>
                  <strong>Independent Judgment.</strong> You agree to seek your
                  own professional advice and to perform your own due diligence
                  before entering into any transaction or investment.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                4. Assumption of Risk
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  By accessing or using the Neverland.money, you expressly
                  acknowledge, accept, and assume all risks associated with
                  blockchain technology, smart contracts and digital assets,
                  including but not limited to:
                </p>
                <ul className='ml-6 list-disc space-y-2'>
                  <li>
                    <strong>Cryptocurrency Volatility:</strong> The value of
                    tokens, and other digital items is inherently subjective and
                    volatile, and you may lose financial value permanently.
                  </li>
                  <li>
                    <strong>Ecosystem Risks:</strong> The utility and value of
                    tokens depend on the adoption, functionality, and growth of
                    blockchain ecosystems, which may fail or evolve
                    unpredictably.
                  </li>
                  <li>
                    <strong>Regulatory Uncertainty:</strong> Laws governing
                    cryptocurrencies, and blockchain technologies are unsettled
                    and may adversely impact the Neverland.money&apos;s
                    operations or your assets.
                  </li>
                  <li>
                    <strong>Internet and Security Risks:</strong> Use of the
                    Services may expose you to cyberattacks, unauthorized access
                    to your wallet or internet disruptions.
                  </li>
                  <li>
                    <strong>Third-Party Dependencies:</strong> The
                    Neverland.money relies on third-party services, and
                    disruptions to these services may impair functionality.
                  </li>
                  <li>
                    <strong>Smart Contract Administration:</strong> All
                    transactions are governed entirely by smart contracts
                    technology. Once the predetermined conditions for collateral
                    liquidation are met, liquidation will occur automatically
                    and cannot be halted or reversed.
                  </li>
                </ul>
                <p>
                  WE ARE NOT RESPONSIBLE FOR THE CONTENT OR SERVICES OF ANY
                  THIRD-PARTY, INCLUDING ANY NETWORK OR APPS LIKE DISCORD OR
                  METAMASK, AND WE MAKE NO REPRESENTATIONS REGARDING THE CONTENT
                  OR ACCURACY OF ANY THIRD-PARTY SERVICES OR MATERIALS.
                </p>
                <p>
                  <strong>User Responsibility.</strong> You are solely
                  responsible for keeping your self custodial wallet and all
                  associated private keys, seed phrases, passwords, and
                  credentials, secure. You agree that you alone bear all risk of
                  loss or theft of your crypto assets resulting from
                  unauthorized access to your wallet.
                </p>
                <p>
                  <strong>No Access or Control.</strong> We do not have and will
                  never request access to your private keys or seed phrases, nor
                  do we store, transmit, or manage them on your behalf. Under no
                  circumstances will we be able to recover your private keys if
                  they are lost or stolen.
                </p>
                <p>
                  <strong>Best Practices.</strong> You should employ appropriate
                  security measures, including but not limited to:
                </p>
                <ul className='ml-6 list-disc space-y-2'>
                  <li>
                    Storing private keys offline in hardware wallets or other
                    cold storage solutions;
                  </li>
                  <li>Enabling multi factor authentication where supported;</li>
                  <li>Regularly updating and patching your wallet software;</li>
                  <li>
                    Keeping backups of seed phrases in secure, geographically
                    diverse locations.
                  </li>
                </ul>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                5. Taxes
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  <strong>
                    You are responsible for your taxes and duties.
                  </strong>
                </p>
                <p>
                  Users bear sole responsibility for paying any and all taxes,
                  duties, and assessments now or hereafter claimed or imposed by
                  any governmental authority associated with their use of the
                  Services. Blockchain-based transactions are novel, and their
                  tax treatment is uncertain.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                6. Ownership
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  <strong>We grant you a license to use our Services.</strong>
                </p>
                <p>
                  Contingent upon your ongoing compliance with the Agreement, we
                  grant you a personal, worldwide, revocable, non-exclusive, and
                  non-assignable license to use the software provided to you as
                  part of our Services.
                </p>
                <p>
                  <strong>We own all rights in the Services.</strong>
                </p>
                <p>
                  We own any and all right, title, and interest in and to the
                  Services, including any and all copyrights in and to any
                  content, code, data, or other materials that you may access or
                  use on or through the Services.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                7. Prohibited Content
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  You may only use the Services if you comply with this
                  Agreement, applicable third-party policies, and all applicable
                  laws, rules, regulations, and related guidance.
                </p>
                <p>The following conduct is prohibited:</p>
                <ul className='ml-6 list-disc space-y-2'>
                  <li>
                    Engaging in or promoting any unlawful, fraudulent, or
                    illegal activity
                  </li>
                  <li>
                    Exploiting the Services for any unauthorized commercial
                    purpose
                  </li>
                  <li>
                    Uploading or transmitting viruses, worms, Trojan horses, or
                    other harmful code
                  </li>
                  <li>
                    Copying, reproducing, or making unauthorized use of any
                    portion of the Services
                  </li>
                  <li>
                    Harvesting, scraping, mining, or otherwise collecting data
                    without authorization
                  </li>
                  <li>
                    Using the Services under false or fraudulent pretenses
                  </li>
                  <li>
                    Interfering with other users&apos; access to or use of the
                    Services
                  </li>
                  <li>
                    Engaging in any attack, hack, denial-of-service attack, or
                    exploit
                  </li>
                  <li>
                    Engaging in any anticompetitive behavior or market
                    manipulation
                  </li>
                  <li>
                    Any conduct that, in our sole discretion, interferes with or
                    disrupts the Services or other users&apos; access may result
                    in restricted access or termination.
                  </li>
                </ul>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                8. Disclaimers and Limitations of Liability
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  <strong>We make no representations or warranties.</strong>
                </p>
                <p>
                  <strong>Service Provided &quot;AS IS.&quot;</strong> The
                  Neverland.money and its services are provided on an &quot;as
                  is&quot; and &quot;as available&quot; basis, without any
                  express or implied warranties of any kind. We expressly
                  disclaim all warranties, whether express, implied, statutory,
                  or otherwise, including but not limited to any warranties of
                  merchantability, fitness for a particular purpose,
                  non-infringement, title, or that the Neverland.money&apos;s
                  content or services will be accurate, error-free,
                  uninterrupted, secure, or free of harmful components. Users
                  are solely responsible for verifying any information obtained
                  through the Neverland.money before relying on it for any
                  purpose. We do not warrant that the Neverland.money will be
                  continuous, error-free, secure, or free of viruses, malware,
                  or other harmful components.
                </p>
                <p>
                  <strong>Limitation of Liability.</strong> To the maximum
                  extent permitted by law, in no event shall the we, our
                  affiliates, officers, directors, employees, contractors,
                  licensors, or agents be liable for any direct, indirect,
                  incidental, special, consequential, exemplary, or punitive
                  damages, including but not limited to lost profits, lost
                  revenues, lost data, business interruption, reputational harm,
                  or any other losses arising out of or in connection with:
                </p>
                <ul className='ml-6 list-disc space-y-2'>
                  <li>
                    The use of, inability to use, or reliance on the
                    Neverland.money or its content;
                  </li>
                  <li>
                    Any inaccuracies, errors, or omissions in the
                    Neverland.money`s content;
                  </li>
                  <li>
                    Any third-party actions, services displayed on the
                    Neverland.money; or
                  </li>
                  <li>
                    Any modifications, discontinuation, suspension, or
                    termination of the Neverland.money or its services.
                  </li>
                </ul>
                <p>
                  This limitation applies regardless of the legal theory of
                  liability, whether based on contract, tort, negligence, strict
                  liability, or any other cause of action, and whether or not we
                  were advised of the possibility of such damages.
                </p>
                <p>
                  If, notwithstanding the foregoing, we are found liable for any
                  claims arising from or related to the use of the
                  Neverland.money, our aggregate liability shall in no event
                  exceed the amount of $1,000 (one thousand US dollars).
                </p>
                <p>
                  Some jurisdictions may not permit the exclusion or limitation
                  of certain damages; in those cases, the limitations shall
                  apply to the maximum extent permitted.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                9. Indemnification
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  You agree to indemnify, defend, and hold harmless Neverland
                  Money from any claim or demand, including reasonable
                  attorneys&apos; fees, made by any third party due to or
                  arising out of:
                </p>
                <ul className='ml-6 list-disc space-y-2'>
                  <li>Your breach or alleged breach of the Agreement</li>
                  <li>Anything you contribute to the Services</li>
                  <li>
                    Your misuse of the Services, or any smart contract related
                    thereto
                  </li>
                  <li>
                    Your violation of any laws, rules, regulations, codes,
                    statutes, ordinances, or orders
                  </li>
                  <li>Your violation of the rights of any third party</li>
                  <li>
                    Your use of a third-party product, service, and/or website
                  </li>
                  <li>Any misrepresentation made by you</li>
                </ul>
                <p>
                  This indemnification applies only to the extent that such
                  claims arise from your actions or omissions and not from our
                  negligence or willful misconduct.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                10. Arbitration Agreement and Waiver of Rights
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  <strong>Initial Negotiations.</strong> In the event of any
                  dispute or claim arising out of or relating to these Terms or
                  your use of the Neverland.money, both parties (i.e., you and
                  the Company) agree to first attempt to resolve the matter
                  through good faith negotiations. We encourage open
                  communication and a mutual effort to settle any issues before
                  proceeding further.
                </p>
                <p>
                  <strong>Mediation.</strong> If a resolution cannot be reached
                  through negotiation, both parties agree to submit the dispute
                  to mediation. The mediator shall be chosen by mutual
                  agreement. If you and the Company are unable to agree on a
                  mediator within a reasonable timeframe, the Company will
                  appoint a mediator on behalf of both parties. Mediation is
                  intended to be a non-binding process aimed at facilitating an
                  amicable resolution.
                </p>
                <p>
                  <strong>Binding Arbitration.</strong> Any dispute,
                  controversy, or claim arising out of or relating to these
                  Terms, including their formation, validity, interpretation,
                  performance, breach, or termination, shall be finally settled
                  by arbitration under the LCIA Arbitration Rules. The seat
                  (legal place) of arbitration shall be London, United Kingdom.
                  The language of the arbitration shall be English.
                </p>
                <p>
                  The arbitration shall be conducted by a sole arbitrator
                  appointed in accordance with the LCIA Rules. If you are a
                  consumer subject to laws prohibiting mandatory arbitration
                  clauses, this clause does not apply to you and you may have
                  the right to bring claims before your local courts.
                </p>
                <p>
                  <strong>Language of Proceedings.</strong> All negotiations,
                  mediation sessions, and arbitration hearings shall be
                  conducted exclusively in the English language.
                </p>
                <p>
                  <strong>Time Limit for Claims.</strong> Any claim or cause of
                  action arising from or relating to these Terms or the use of
                  the Neverland.money must be initiated within one (1) year from
                  the date the cause of action arises. If a claim is not brought
                  within this timeframe, it will be deemed waived and barred.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                11. Termination
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  This Agreement is effective unless and until terminated by
                  either you or us. Provisions of this Agreement which by their
                  nature should survive termination (e.g., ownership,
                  disclaimers, limitations of liability, and arbitration) shall
                  remain in effect. You may terminate your Agreement with us at
                  any time by ceasing all access to the Services. If, in our
                  sole judgment, you fail, or we suspect that you have failed,
                  to comply with any term or provision of the Agreement, we
                  reserve the right to terminate our Agreement with you and deny
                  you access to the Services.
                </p>
                <p>
                  WE RESERVE THE RIGHT TO MODIFY THE SERVICES AT ANY TIME, BUT
                  WE HAVE NO OBLIGATION TO UPDATE THE SERVICES. YOU AGREE THAT
                  WE MAY REMOVE THE SERVICES FOR INDEFINITE PERIODS OF TIME OR
                  CANCEL THE SERVICES AT ANY TIME, WITHOUT NOTICE TO YOU.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                12. Governing Law
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  These Terms and any separate agreements whereby we provide you
                  Services shall be governed by and construed in accordance with
                  the laws of the Cayman Islands.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                13. Contact Information
              </h2>
              <div className='space-y-4 leading-relaxed'>
                <p>
                  You may contact us with questions about your use of the
                  Services at{' '}
                  <a
                    className='text-purple-200 hover:underline'
                    href='mailto:legal@neverland.money'
                  >
                    legal@neverland.money
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* End of document marker */}
            <div className='mt-16 text-center'>
              <div className='text-2xl font-light tracking-widest text-purple-300/50'>
                • • •
              </div>
            </div>
          </div>
        </article>

        <ChatButton />

        <ScrollToTopButton />
      </div>
    </main>
  );
}
