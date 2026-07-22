import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Top Dog Leads Solar",
  description:
    "Privacy Policy for solar.topdoglead.com — how Top Dog Leads collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-3 text-sm font-semibold text-cyan-dark">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / Privacy Policy
        </p>

        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="prose-custom mt-10 flex flex-col gap-8 text-slate-700">
          <p>
            Top Dog Leads (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot;) operates solar.topdoglead.com (the
            &quot;Site&quot;). This Privacy Policy explains what information
            we collect when you visit or interact with the Site, how we use
            it, and the choices available to you. By using the Site, you
            agree to the practices described below.
          </p>

          <div>
            <h2 className="text-xl font-bold text-ink">1. Information We Collect</h2>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>
                <strong>Information you give us</strong> — your name, email
                address, phone number, company name, and any other details
                you submit through a form, such as our schedule-a-call
                request.
              </li>
              <li>
                <strong>Information collected automatically</strong> — IP
                address, browser type, device information, pages visited, and
                referring URLs, gathered through standard web logging and
                analytics tools.
              </li>
              <li>
                <strong>Cookies and similar technologies</strong> — small
                files used to remember your preferences, measure traffic, and
                understand how visitors use the Site.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">2. How We Use Your Information</h2>
            <p className="mt-3">We use the information above to:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>Respond to inquiries and schedule calls you request;</li>
              <li>Operate, maintain, and improve the Site and our services;</li>
              <li>
                Send you relevant updates, offers, or marketing
                communications, which you may opt out of at any time;
              </li>
              <li>
                Analyze aggregate usage trends to improve site performance
                and content.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">3. How We Share Information</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share
              information with service providers who help us run the Site
              (such as hosting, email delivery, or analytics providers),
              solely to perform those services on our behalf. We may also
              disclose information if required by law, to protect our legal
              rights, or in connection with a business transfer such as a
              merger or acquisition.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">4. Cookies &amp; Analytics</h2>
            <p className="mt-3">
              We use analytics tools (such as Google Analytics) and, where
              applicable, advertising platforms to understand how visitors
              use the Site and to measure the performance of our marketing.
              These providers may set their own cookies; you can control or
              disable cookies through your browser settings, and opt out of
              interest-based advertising through the relevant provider&apos;s
              settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">5. Third-Party Links</h2>
            <p className="mt-3">
              The Site may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those
              sites, and we encourage you to review their own privacy
              policies before providing any information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">6. Children&apos;s Privacy</h2>
            <p className="mt-3">
              The Site is not directed to children under 13, and we do not
              knowingly collect personal information from children. If we
              learn that we have inadvertently collected such information,
              we will delete it promptly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">7. Data Security</h2>
            <p className="mt-3">
              We use reasonable administrative and technical safeguards to
              protect the information we collect. No method of transmission
              or storage is completely secure, so we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">8. Your Choices</h2>
            <p className="mt-3">
              You may unsubscribe from marketing emails at any time using the
              link included in those messages. Depending on your location,
              you may also have additional rights to access, correct, or
              delete your personal information — contact us using the
              details below to make such a request.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">9. Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">10. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:privacy@topdoglead.com"
                className="text-cyan-dark underline"
              >
                privacy@topdoglead.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}