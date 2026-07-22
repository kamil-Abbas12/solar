import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Top Dog Leads Solar",
  description:
    "Terms of Use for solar.topdoglead.com — the rules that govern your use of our site and services.",
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-3 text-sm font-semibold text-cyan-dark">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / Terms of Use
        </p>

        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          Terms of Use
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
            These Terms of Use (&quot;Terms&quot;) govern your access to and
            use of solar.topdoglead.com (the &quot;Site&quot;), operated by
            Top Dog Leads (&quot;Company,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). By accessing or using the
            Site, you agree to be bound by these Terms. If you do not agree,
            please do not use the Site.
          </p>

          <div>
            <h2 className="text-xl font-bold text-ink">1. Use of the Site</h2>
            <p className="mt-3">
              You may use the Site only for lawful purposes and in accordance
              with these Terms. You agree not to use the Site in any way
              that could damage, disable, overburden, or impair it, or
              interfere with anyone else&apos;s use of the Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">2. Intellectual Property</h2>
            <p className="mt-3">
              All content on the Site — including text, graphics, logos, and
              images — is owned by or licensed to Top Dog Leads and is
              protected by copyright and other intellectual property laws.
              You may not copy, reproduce, distribute, or create derivative
              works from any part of the Site without our prior written
              consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">3. Requesting a Call / Submitting Information</h2>
            <p className="mt-3">
              When you submit a form to request a call or otherwise contact
              us, you confirm that the information you provide is accurate
              and that you are authorized to provide it on behalf of any
              company you represent. Submitting a request does not create
              any obligation on either party until a separate services
              agreement is signed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">4. Prohibited Uses</h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 flex flex-col gap-2 list-disc pl-5">
              <li>Use the Site in violation of any applicable law or regulation;</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its systems;</li>
              <li>Use automated means (bots, scrapers) to access or collect data from the Site without permission;</li>
              <li>Impersonate any person or entity, or misrepresent your affiliation with any person or entity.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">5. Third-Party Links</h2>
            <p className="mt-3">
              The Site may link to third-party websites for your convenience.
              We do not control and are not responsible for the content or
              practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">6. Disclaimers</h2>
            <p className="mt-3">
              The Site and its content are provided &quot;as is&quot; and
              &quot;as available&quot; without warranties of any kind, either
              express or implied. We do not guarantee that the Site will be
              uninterrupted, secure, or error-free, or that any results
              described on the Site will be achieved.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">7. Limitation of Liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Top Dog Leads will not
              be liable for any indirect, incidental, special, or
              consequential damages arising from your use of, or inability
              to use, the Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">8. Termination</h2>
            <p className="mt-3">
              We may suspend or terminate your access to the Site at any
              time, without notice, for conduct that we believe violates
              these Terms or is otherwise harmful to other users or to us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">9. Governing Law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of the jurisdiction in
              which Top Dog Leads operates, without regard to conflict-of-law
              principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">10. Changes to These Terms</h2>
            <p className="mt-3">
              We may update these Terms from time to time. Continued use of
              the Site after changes are posted means you accept the revised
              Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-ink">11. Contact Us</h2>
            <p className="mt-3">
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:legal@topdoglead.com"
                className="text-cyan-dark underline"
              >
                legal@topdoglead.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}