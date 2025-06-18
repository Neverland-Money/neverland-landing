import type { Metadata } from 'next';

import { ChatButton } from '@/components/assistant-ui/ChatButton';
import Header from '@/components/layout/Header';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import StarrySky from '@/components/ui/StarrySky';

export const metadata: Metadata = {
  title: 'Privacy Policy | Neverland Money',
  description: 'Privacy Policy for Neverland Money platform',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const effectiveDate = new Date('2024-01-01');

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
              Privacy Policy
            </h1>
            <div className='mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400' />
            <p className='font-lexend mx-auto max-w-2xl font-extralight text-purple-200'>
              Learn how we collect, use, and protect your information when using
              the Neverland Money platform.
            </p>
            <p className='font-lexend mt-4 text-sm text-purple-300'>
              Last updated:{' '}
              {effectiveDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          {/* Content Sections */}
          <div className='font-lexend max-w-none'>
            <section className='mb-12'>
              <div className='space-y-4 leading-relaxed text-gray-100'>
                <p>
                  The Neverland Protocol operates in a decentralized and
                  permissionless manner. Although we may collect and process
                  information about users of Neverland.money or the Interface in
                  accordance with this Privacy Policy, we do not have
                  information about all protocol users beyond what is already
                  publicly available and recorded on the blockchain.
                </p>
                <p>
                  This Privacy Policy (the &quot;Privacy Policy&quot;) explains
                  how Neverland Money (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) collects, uses, and shares information in
                  connection with our Services as well as your rights and
                  choices regarding such information in accordance with
                  applicable data protection legislation, including the Data
                  Protection Act (as amended) of the Cayman Islands (together,
                  &quot;Data Protection Legislation&quot;). These terms apply to
                  Neverland.money and the Interface and any other online
                  location that links to this Privacy Policy (collectively, the
                  &quot;Services&quot;).
                </p>
                <p>
                  By using the Services, you also agree to our collection, use,
                  and sharing of your information as described in this Privacy
                  Policy. If you do not agree with the Terms of Use, you should
                  not use or access the Interface or the Services.
                </p>
                <p>
                  If you are an individual, this Privacy Policy will be relevant
                  to you directly. If you are an entity or arrangement that
                  provides us with personal data on individuals connected to you
                  for any reason, this Privacy Policy will be relevant for those
                  individuals and you should transmit this Privacy Policy to
                  such individuals or otherwise advise them of its content.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                1. Information Collection
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <h3 className='text-xl font-semibold text-white'>
                  A. Information You Provide
                </h3>
                <p>
                  We may collect the following information about you when you
                  use the Services:
                </p>
                <p>
                  <strong>Correspondence and Content:</strong> When you contact
                  us for support or other inquiries, you may share with us your
                  contact details and contextual information relevant to your
                  issue (such as wallet type, token or transaction details,
                  device type, or error codes). This helps us respond and
                  improve the Services.
                </p>
                <p>
                  You may choose to voluntarily provide other information to us
                  that we have not solicited from you, and, in such instances,
                  you are solely responsible for such information.
                </p>
                <h3 className='text-xl font-semibold text-white'>
                  B. Information Collected Automatically
                </h3>
                <p>We collect the following information:</p>
                <p>
                  <strong>Wallet Address:</strong> We may collect the wallet
                  address you use to connect to the Interface to block wallets
                  that are associated with certain legally prohibited conduct
                  from Interface. Separately, we may collect your wallet address
                  as part of &quot;Usage Information&quot; (as described below)
                  to improve the Interface and user experience of the Services.
                </p>
                <p>
                  <strong>Device Information:</strong> We may collect
                  information about the device you use to access the Interface,
                  such as the device type, operating system, browser type, and
                  screen height and width. This information helps us optimize
                  the Interface for different devices and troubleshoot any
                  technical issues.
                </p>
                <p>
                  <strong>Usage Information:</strong> We may collect information
                  about how you use the Interface and Services, including your
                  wallet address, the time you access the Interface, pages you
                  visit, the features and assets you interact with, the links
                  you click, and the search queries you make. By analyzing this
                  data, we gain a deeper understanding of user behavior, which
                  in turn allows us to make continuous improvements to the
                  Interface and enhance the overall user experience.
                </p>
                <p>
                  We will not take decisions producing legal effects concerning
                  you, or otherwise significantly affecting you, based solely on
                  automated processing of your personal data, unless we have
                  considered the proposed processing in a particular case and
                  concluded in writing that it meets the applicable requirements
                  under the Data Protection Legislation.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                2. Use of Information
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  We may collect and use information for our legitimate business
                  purposes in accordance with the practices described in this
                  Privacy Policy, including where this is necessary for the
                  performance of a contract, where this is necessary for
                  compliance with applicable legal or regulatory obligations or
                  otherwise in pursuance of our legitimate interests or those of
                  a third party to whom your personal data is disclosed. In
                  particular, our business purposes for collecting and using
                  information includes, but is not limited to:
                </p>
                <p>
                  <strong>Operating and managing the Services:</strong> To make
                  the Services available to you and perform services requested
                  by you, such as responding to your comments, questions, and
                  requests, and providing information support; sending you
                  technical notices, updates, security alerts, information
                  regarding changes to our policies, and support, administrative
                  messages; detecting, preventing, and addressing fraud, breach
                  of Terms, and threats, or harm; and compliance with legal and
                  regulatory requirements.
                </p>
                <p>
                  <strong>Improving the Services:</strong> To continually
                  improve the Services and fulfill any other legitimate business
                  purpose, as permitted under applicable laws.
                </p>
                <p>
                  <strong>Security and Compliance with Laws:</strong> As we
                  believe necessary or appropriate to operate and maintain the
                  security or integrity of the Interface, including to prevent
                  or stop an attack on our computer systems or networks,
                  investigate possible wrongdoing in connection with the
                  Interface, enforce our Terms, and comply with applicable laws,
                  lawful requests, and legal process.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                3. Sharing and Disclosure of Information
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  We may share or disclose information that we collect in
                  accordance with the practices described in this Privacy Policy
                  and for the purposes set out in the &quot;Use of
                  Information&quot; section above.
                </p>
                <p>
                  The categories of parties with whom we may share information
                  include:
                </p>
                <p>
                  <strong>Affiliates:</strong> We share information with our
                  affiliates and related entities, including where they act as
                  our service providers or for their own internal purposes.
                </p>
                <p>
                  <strong>Professional Advisors:</strong> We share information
                  with our professional advisors for purposes of audits and
                  compliance with our legal obligations.
                </p>
                <p>
                  <strong>Service Providers:</strong> We share information with
                  third-party service providers for business purposes, including
                  fraud detection and prevention, security threat detection,
                  data analytics, information technology and storage, and
                  blockchain transaction monitoring.
                </p>
                <p>
                  <strong>Regulatory and government authorities:</strong> In
                  certain circumstances, we may be legally obliged to share your
                  personal data and other information with relevant regulatory
                  or governmental authorities.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                4. Third-Party Services
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  We may also integrate technologies operated or controlled by
                  other parties into parts of the Services. For example, the
                  Services may include links that hyperlink to websites,
                  platforms, and other services not operated or controlled by
                  us.
                </p>
                <p>
                  Please note that when you interact with other parties,
                  including when you leave the Interface, those parties may
                  independently collect information about you and solicit
                  information from you. The information collected and stored by
                  those parties remains subject to their own policies and
                  practices.
                </p>
                <p>
                  For example, by using a third-party wallet to engage in
                  transactions on public blockchains, your interactions with any
                  third-party wallet provider are governed by the applicable
                  terms of service and privacy policy of that wallet provider.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                5. Cookies Policy
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  We understand that your privacy is important to you and are
                  committed to being transparent about the technologies we use.
                  In the spirit of transparency, this Cookies Policy provides
                  detailed information about how and when we use cookies on our
                  Services.
                </p>
                <h3 className='text-xl font-semibold text-white'>
                  A. Do we use cookies?
                </h3>
                <p>
                  We do not use cookies. If we were, we would use cookies and
                  other technologies to understand how you use our Interface so
                  we can improve its design and functionality.
                </p>
                <h3 className='text-xl font-semibold text-white'>
                  B. What types of cookies might we use?
                </h3>
                <p>
                  <strong>Strictly Necessary Cookies:</strong> These cookies are
                  essential for the Interface to function properly and enable
                  basic features such as page navigation and access to secure
                  areas of the site.
                </p>
                <p>
                  <strong>Analytical/Performance Cookies:</strong> These cookies
                  allow us to analyze how visitors use the Interface, which
                  helps us improve its functionality and performance.
                </p>
                <p>
                  <strong>Functional Cookies:</strong> These cookies enable
                  enhanced functionality and personalization of the website.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                6. Data Security
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  We implement and maintain reasonable administrative, physical,
                  and technical security safeguards to help protect information
                  about you from loss, theft, misuse, unauthorized access,
                  disclosure, alteration, and destruction. Nevertheless,
                  transmission via the Internet is not completely secure and we
                  cannot guarantee the security of information about you.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                7. Data Retention
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  Please note that we retain information we collect as long as
                  it is necessary to fulfill the purpose for which it was
                  collected, as outlined in this Privacy Policy, and to the
                  extent permitted by applicable legal requirements. Where you
                  request the deletion of your information, we may continue to
                  retain and use your information as permitted or required under
                  applicable laws.
                </p>
                <p>
                  We expect to delete your personal data (at the latest) once
                  there is no longer any legal or regulatory requirement or
                  legitimate business purpose for retaining your personal data.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                8. Your Rights
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  You have certain data protection rights under the Data
                  Protection Legislation, including the right to:
                </p>
                <ul className='list-disc space-y-2 pl-6'>
                  <li>
                    be informed about the purposes for which your personal data
                    are processed
                  </li>
                  <li>access your personal data</li>
                  <li>stop direct marketing</li>
                  <li>restrict the processing of your personal data</li>
                  <li>have incomplete or inaccurate personal data corrected</li>
                  <li>ask us to stop processing your personal data</li>
                  <li>
                    be informed of a personal data breach (unless the breach is
                    unlikely to be prejudicial to you)
                  </li>
                  <li>
                    complain, including to the Data Protection Ombudsman of the
                    Cayman Islands
                  </li>
                  <li>
                    require us to delete your personal data in some limited
                    circumstances
                  </li>
                </ul>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                9. Children
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  The Services are intended for general audiences and are not
                  directed at children. To use the Services, you must legally be
                  able to enter into the Agreement. We do not knowingly collect
                  personal information (as defined by the U.S. Children&apos;s
                  Privacy Protection Act, or &quot;COPPA&quot;) from children.
                  If you are a parent or guardian and believe we have collected
                  personal information in violation of COPPA, please contact us
                  at contact@neverland.money and we will remove the personal
                  information in accordance with COPPA.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                10. Changes to this Privacy Policy
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  We reserve the right to revise and reissue this Privacy Policy
                  at any time. Any changes will be effective immediately upon
                  our posting of the revised Privacy Policy. For the avoidance
                  of doubt, your continued use of the Services indicates your
                  consent to the revised Privacy Policy then posted.
                </p>
              </div>
            </section>

            <section className='mb-12'>
              <h2 className='font-cinzel mb-6 border-b border-purple-300/50 pb-3 text-2xl font-bold text-white'>
                11. Contact Us
              </h2>
              <div className='space-y-4 leading-relaxed text-gray-300'>
                <p>
                  If you have any questions or comments about this Privacy
                  Policy, our data practices, or our compliance with applicable
                  law, please contact us by email:{' '}
                  <a
                    href='mailto:contact@neverland.money'
                    className='text-purple-400 transition-colors hover:text-purple-300'
                  >
                    contact@neverland.money
                  </a>
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
