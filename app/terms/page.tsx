import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | KitUp",
  description: "Terms and conditions for using KitUp, including our affiliate disclosure and content policy.",
  openGraph: {
    title: "Terms of Use | KitUp",
    description: "Terms and conditions for using KitUp, including our affiliate disclosure and content policy.",
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | KitUp",
    description: "Terms and conditions for using KitUp, including our affiliate disclosure and content policy.",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-16">
      <h1 className="text-[#1a1a1a] font-bold text-4xl mb-2">Terms of Use</h1>
      <p className="text-[#888888] text-sm mb-10">Last updated: March 2026</p>

      <div className="space-y-8 text-[#333333] text-base leading-relaxed">
        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">1. Acceptance of terms</h2>
          <p>
            By accessing or using KitUp (<strong>kitup.webapps.life</strong>), you agree to
            be bound by these Terms of Use. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">2. Amazon Associates disclosure</h2>
          <p className="mb-3">
            KitUp is a participant in the <strong>Amazon Associates Programme</strong>, an
            affiliate advertising programme designed to provide a means for sites to earn
            advertising fees by advertising and linking to Amazon.co.uk and Amazon.com.
          </p>
          <p className="mb-3">
            Product links on this site are <strong>paid affiliate links</strong>. When you
            click a product link and make a qualifying purchase on Amazon, KitUp earns a
            small commission. This commission comes entirely from Amazon. It does not
            increase the price you pay.
          </p>
          <p>
            The required Amazon Associates disclosure is:{" "}
            <strong>
              &ldquo;As an Amazon Associate I earn from qualifying purchases.&rdquo;
            </strong>
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">3. Content accuracy</h2>
          <p className="mb-3">
            We take care to ensure our product recommendations are accurate and up to date,
            but we cannot guarantee that information such as product availability or
            specifications is current at the time you read it. Product prices are not
            displayed on KitUp. Always check the current price on Amazon before purchasing.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">4. No professional advice</h2>
          <p>
            The content on KitUp is for informational and entertainment purposes only. It
            does not constitute professional advice of any kind. Any decisions you make
            based on content from this site are your own responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">5. External links</h2>
          <p>
            KitUp links to external websites, primarily Amazon. We are not responsible for
            the content, privacy practices, or terms of any third-party sites. Visiting
            external links is at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">6. Intellectual property</h2>
          <p>
            All original content on KitUp, including text, design, and layout, is the
            property of KitUp and may not be reproduced without permission. Product images
            are sourced from Amazon and remain the property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">7. Limitation of liability</h2>
          <p>
            KitUp is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable
            for any damages arising from your use of the site or your reliance on any
            content or product recommendations found here.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">8. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The date at the top of this page
            reflects the most recent revision. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-[#1a1a1a] font-bold text-xl mb-3">9. Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes shall
            be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <p>
            For privacy-related matters, please see our{" "}
            <Link href="/privacy" className="text-[#2d6a4f] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
