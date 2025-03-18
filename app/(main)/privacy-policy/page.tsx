import Card from "@/components/elements/Card";
import Container from "@/components/elements/Container";

export default function PrivacyPolicyPage() {
  return (
    <Container className="space-y-4">
      <Card>
        <h1 className="text-3xl font-bold mb-4 text-purple-500">
          Privacy Policy
        </h1>
        <p className="text-sm mb-8">
          Effective Date:{" "}
          <strong className="text-purple-500">11/16/2024</strong>
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            Welcome to <strong className="text-purple-500">Phenom</strong>. We
            are committed to protecting your privacy and ensuring that your
            personal information is handled securely. This Privacy Policy
            outlines how we collect, use, and safeguard your information when
            you use our platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
            <li>
              <strong className="text-purple-500">Personal Information:</strong>{" "}
              Name, email address, phone number, and other contact details.
            </li>
            <li>
              <strong className="text-purple-500">Usage Data:</strong>{" "}
              Information about how you interact with our platform, including
              pages visited, features used, and session duration.
            </li>
            <li>
              <strong className="text-purple-500">
                Cookies and Tracking Technologies:
              </strong>{" "}
              Data collected through cookies to improve your experience.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p>We use your information for the following purposes:</p>
          <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
            <li>To provide and maintain our services.</li>
            <li>To personalize your experience on our platform.</li>
            <li>To communicate updates, offers, or respond to inquiries.</li>
            <li>To improve our services based on user feedback.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Sharing Your Information
          </h2>
          <p>
            We do not sell your personal information. We may share your data
            with:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
            <li>Service providers that help us operate our platform.</li>
            <li>Authorities, if required by law or to protect our rights.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside pl-4 space-y-2 mt-2">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your data.</li>
            <li>Withdraw consent for data processing where applicable.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with a new effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
          </p>
          <p className="mt-2">
            Email:{" "}
            <span className="text-purple-500">contact@phenomnet.ng </span>
            <br />
            Phone:{" "}
            <a href="tel:+2347076159894" className="text-purple-500">
              +234 707 615 9894
            </a>
          </p>
        </section>
      </Card>
    </Container>
  );
}
