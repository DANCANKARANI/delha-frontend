// pages/privacy-policy.tsx
import Head from "next/head";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
      <Head>
        <title>Privacy Policy | DELHA DESTINY SOLUTION LIMITED</title>
        <meta
          name="description"
          content="Privacy policy for Delha Destiny Solutions. Learn how we collect, use, and protect your data."
        />
      </Head>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-gray-800">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
            Privacy Policy
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Introduction
            </h2>
            <p className="mb-4">
              At Delha Destiny Solutions, we value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect the following types of personal information when you visit our site or use our services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Payment details (for transactions)</li>
              <li>Browsing information (IP address, device information, cookies)</li>
              <li>Location data (if you enable location services)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We may use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and improve our services</li>
              <li>To process transactions and communicate with you regarding your account</li>
              <li>To send marketing communications, promotions, and updates</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Data Protection and Security
            </h2>
            <p className="mb-4">
              We take appropriate measures to protect your personal data. We use industry-standard encryption to secure any sensitive information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Third-Party Sharing
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal data to third parties. However, we may share your information with trusted third-party service providers who assist in operating our website or business. These third parties are obligated to protect your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your browsing experience. These technologies help us understand how you interact with our site, which enables us to improve our services and provide relevant content.
            </p>
            <p className="mb-4">
              You can control cookies through your browser settings. However, disabling cookies may affect your experience on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Your Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access, update, or delete your personal information</li>
              <li>The right to object to or restrict the processing of your data</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us at support@delhadestiny.com.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We reserve the right to update or modify this privacy policy at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions or concerns regarding this privacy policy or your data, please contact us at:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> support@delhadestiny.com
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +254 712 345678
            </p>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}
