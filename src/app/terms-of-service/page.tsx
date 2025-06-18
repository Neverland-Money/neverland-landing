import type { Metadata } from 'next';

import { ChatButton } from '@/components/assistant-ui/ChatButton';
import Header from '@/components/layout/Header';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import StarrySky from '@/components/ui/StarrySky';

export const metadata: Metadata = {
  title: 'Terms of Service | Neverland Money',
  description: 'Terms of Service for Neverland Money platform',
  robots: {
    index: true,
    follow: true,
  },
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
        {/* Shared Header */}
        <Header />

        {/* Article Content */}
        <article className='mx-auto max-w-4xl px-6 py-16'>
          {/* Title */}
          <header className='mb-12 text-center'>
            <h1 className='font-cinzel-decorative mt-32 mb-4 text-4xl font-bold text-white md:text-5xl'>
              Terms of Service
            </h1>
            <div className='mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400' />
            <p className='font-lexend mx-auto max-w-2xl font-extralight text-purple-200'>
              Please read these Terms of Service carefully before using the
              Neverland Money platform.
            </p>
            <p className='mt-4 text-sm text-purple-200/50'>
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          {/* Content Sections */}
          <div className='font-lexend max-w-none'>
            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                1. Welcome to Neverland Money and the Interface!
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-100'>
                <p>
                  These Terms of Use (&quot;Terms&quot;) govern your access to
                  and use of both the Neverland.money website (referred to as
                  &quot;Neverland.money&quot;) and our DeFi interface (referred
                  to as the &quot;Interface&quot;) collectively referred to as
                  the &quot;Services.&quot; The Services are brought to you by
                  Neverland Money (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;).
                </p>
                <p>
                  Neverland.money provides information and resources about the
                  fundamentals of the decentralized non-custodial liquidity
                  protocol called the Neverland Protocol, comprised of
                  open-source self-executing smart contracts that are deployed
                  on various permissionless public blockchains, such as Ethereum
                  (the &quot;Neverland Protocol&quot; or the
                  &quot;Protocol&quot;). Neverland Money does not control or
                  operate any version of the Neverland Protocol on any
                  blockchain network.
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
                <p>
                  <strong>You are entering into a binding Agreement.</strong>
                </p>
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
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  To use the Services, you must legally be able to enter into
                  the Agreement. By using the Services, you represent and
                  warrant that you meet the eligibility requirement. If you do
                  not meet the requirement, you must not access or use the Site
                  or the Services.
                </p>
                <p>
                  <strong>We may update the Services and the Terms.</strong>
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
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  <strong>
                    Neverland.money is an informational resource about the
                    Protocol.
                  </strong>
                </p>
                <p>
                  All information provided in connection with your access and
                  use of the Services is intended for informational purposes
                  only. While we strive to provide accurate and reliable
                  information, we cannot guarantee the accuracy, completeness,
                  or timeliness of the information provided.
                </p>
                <p>
                  <strong>
                    Users retain full control over their crypto assets.
                  </strong>
                </p>
                <p>
                  It is important to understand that neither we nor any
                  affiliated entity is a party to any transaction on the
                  blockchain networks underlying the Neverland Protocol; we do
                  not have possession, custody or control over any crypto
                  assets, or any user&apos;s funds. You understand that when you
                  interact with Neverland Protocol, you retain control over your
                  crypto assets at all times.
                </p>
                <p>
                  <strong>
                    Users use third-party self-custodial wallets to interact
                    with the Neverland Protocol.
                  </strong>
                </p>
                <p>
                  To interact with the Neverland Protocol using the Interface,
                  you will need to connect and engage with it through your
                  self-custodial wallet. Your self-custodial wallet is provided
                  by a third-party entity and is generally governed by separate
                  terms and conditions set by the respective third-party service
                  provider.
                </p>
                <p>
                  <strong>
                    We are not intermediaries to blockchain transactions.
                  </strong>
                </p>
                <p>
                  Due to the non-custodial and decentralized nature of the
                  technology, we are not intermediaries, agents, advisors, or
                  custodians, and we do not have a fiduciary relationship or
                  obligation to you regarding any decisions, actions, or
                  transactions you make when using our Services.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                4. Assumption of Risk
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  <strong>
                    You assume the risks of engaging in novel and experimental
                    technology.
                  </strong>
                </p>
                <p>
                  Technologies such as smart contracts on various blockchains,
                  cryptographic tokens generated by the smart contracts, and
                  other nascent software, applications, and systems that
                  interact with blockchain-based networks are experimental,
                  speculative, inherently risky, and subject to change.
                </p>
                <p>
                  <strong>
                    We are not liable for any third-party services or links.
                  </strong>
                </p>
                <p>
                  WE ARE NOT RESPONSIBLE FOR THE CONTENT OR SERVICES OF ANY
                  THIRD-PARTY, INCLUDING ANY NETWORK OR APPS LIKE DISCORD OR
                  METAMASK, AND WE MAKE NO REPRESENTATIONS REGARDING THE CONTENT
                  OR ACCURACY OF ANY THIRD-PARTY SERVICES OR MATERIALS.
                </p>
                <p>
                  <strong>
                    You are solely responsible for the security of your
                    self-custodial wallet.
                  </strong>
                </p>
                <p>
                  You understand and agree that you are solely responsible for
                  maintaining the security of your self-custodial wallet. You
                  alone are responsible for securing your private keys. We do
                  not have access to your private keys.
                </p>
                <p>
                  <strong>
                    We reserve the right to restrict your access from engaging
                    with the Services.
                  </strong>
                </p>
                <p>
                  You agree that we have the right to restrict your access to
                  the Services if we suspect, in our sole discretion, that you
                  are using the Services for money laundering, illegal activity,
                  fraudulent activity, or are the target of any sanctions.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                5. Taxes
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
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
              <div className='space-y-4 leading-relaxed text-gray-300'>
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
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  You may only use the Services if you comply with this
                  Agreement, applicable third-party policies, and all applicable
                  laws, rules, regulations, and related guidance. The following
                  conduct is prohibited:
                </p>
                <ul className='ml-4 list-inside list-disc space-y-2'>
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
                </ul>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                8. Disclaimers and Limitations of Liability
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  <strong>We make no representations or warranties.</strong>
                </p>
                <p>
                  THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; BASIS. WE MAKE NO GUARANTEES OF ANY KIND IN
                  CONNECTION WITH THE SERVICES. TO THE MAXIMUM EXTENT PERMITTED
                  UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES AND
                  CONDITIONS, WHETHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  <strong>Limitation of Liability.</strong>
                </p>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ANY
                  NEVERLAND MONEY PARTY BE LIABLE TO YOU FOR ANY LOSS, DAMAGE,
                  OR INJURY OF ANY KIND INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
                  INCIDENTAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE LOSSES OR
                  DAMAGES.
                </p>
                <p>
                  IN NO EVENT WILL OUR CUMULATIVE LIABILITY TO YOU OR ANY OTHER
                  USER, FROM ALL CAUSES OF ACTION AND ALL THEORIES OF LIABILITY
                  EXCEED ONE THOUSAND U.S. DOLLARS (U.S. $1,000.00).
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                9. Indemnification
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  You agree to indemnify, defend, and hold harmless Neverland
                  Money from any claim or demand, including reasonable
                  attorneys&apos; fees, made by any third party due to or
                  arising out of:
                </p>
                <ul className='ml-4 list-inside list-disc space-y-2'>
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
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                10. Arbitration Agreement and Waiver of Rights
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  <strong>
                    PLEASE READ THIS SECTION CAREFULLY: IT MAY SIGNIFICANTLY
                    AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A
                    LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIMS.
                  </strong>
                </p>
                <p>
                  <strong>
                    Agreement to Attempt to Resolve Disputes Through Good Faith
                    Negotiations
                  </strong>
                </p>
                <p>
                  Prior to commencing any legal proceeding against us, you and
                  we agree that we will attempt to resolve any dispute, claim,
                  or controversy between us by engaging in good faith
                  negotiations.
                </p>
                <p>
                  <strong>Agreement to Arbitrate</strong>
                </p>
                <p>
                  You and we agree that any Dispute that cannot be resolved
                  through the procedures set forth above will be resolved
                  through binding arbitration. The arbitrator&apos;s award of
                  damages must be consistent with the terms of the
                  &quot;Limitation of Liability&quot; subsection of these Terms.
                </p>
                <p>
                  UNLESS YOU PROVIDE US WITH AN ARBITRATION OPT-OUT NOTICE, YOU
                  ACKNOWLEDGE AND AGREE THAT YOU AND WE ARE EACH WAIVING THE
                  RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE AS A PLAINTIFF OR
                  CLASS MEMBER IN ANY PURPORTED CLASS ACTION OR REPRESENTATIVE
                  PROCEEDING.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                11. Termination
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  This Agreement is effective unless and until terminated by
                  either you or us. You may terminate your Agreement with us at
                  any time by ceasing all access to the Services.
                </p>
                <p>
                  If, in our sole judgment, you fail, or we suspect that you
                  have failed, to comply with any term or provision of the
                  Agreement, we reserve the right to terminate our Agreement
                  with you and deny you access to the Services.
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
              <div className='space-y-4 leading-relaxed text-gray-300'>
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
              <div className='space-y-4 leading-relaxed text-gray-300'>
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
          </div>
        </article>

        {/* Chat Button */}
        <ChatButton />

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </div>
    </main>
  );
}
