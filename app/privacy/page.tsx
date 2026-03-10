import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KitUp",
  description: "How KitUp collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy | KitUp",
    description: "How KitUp collects, uses, and protects your information.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | KitUp",
    description: "How KitUp collects, uses, and protects your information.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-16">
      <h1 className="text-[#1a1a1a] font-bold text-4xl mb-2">Privacy Policy</h1>
      <p className="text-[#888888] text-sm mb-10">Last updated: January 2025</p>

      <div className="space-y-8 text-[#333333] text-base leading-relaxed">
        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">Who we are</h2>
          <p>
            KitUp (<strong>kitup.webapps.life</strong>) is a hobby recommendation
            website that helps beginners find the right gear. We are based in the
            United Kingdom.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">
            Information we collect
          </h2>
          <p className="mb-3">
            We collect minimal information and only when you actively provide it:
          </p>
          <ul className="list-disc list-inside space-y-1 text-[#333333]">
            <li>
              <strong>Email address</strong> — if you subscribe to our newsletter.
              This is stored by our email service provider, Resend.
            </li>
            <li>
              <strong>Usage data</strong> — standard web server logs (IP address,
              browser type, pages visited). We may use analytics tools for this.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">
            How we use your information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To send you new hobby kit guides (if you subscribed)</li>
            <li>To understand how the site is used and improve it</li>
          </ul>
          <p className="mt-3">
            We do not sell your data to third parties. We do not use your email
            for advertising.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">
            Amazon affiliate links
          </h2>
          <p>
            KitUp participates in the Amazon Associates Programme. When you click
            a product link, you are redirected to Amazon&apos;s website. Amazon
            may set cookies on your device according to their own privacy policy.
            We earn a commission if you make a purchase — this does not affect the
            price you pay.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">Cookies</h2>
          <p>
            KitUp does not set cookies directly. Amazon and any analytics tools
            we use may set cookies. You can control cookies through your browser
            settings.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">Your rights</h2>
          <p>
            Under UK GDPR, you have the right to access, correct, or delete your
            personal data. To unsubscribe from our newsletter, click the
            unsubscribe link in any email we send. For other data requests, please
            contact us by replying to any newsletter email.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">
            Changes to this policy
          </h2>
          <p>
            We may update this policy occasionally. The date at the top of this
            page reflects the most recent revision.
          </p>
        </section>
      </div>
    </div>
  );
}
