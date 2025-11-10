"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "@/components/Common/CommonHeader";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div data-aos="fade-up">
        <CommonHeader
          heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
          heroTitle="Terms of Use"
          heroDescription="Please read these terms and conditions carefully before using our services."
        />
      </div>

      {/* Terms Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-28">
        <div className="prose prose-lg max-w-none" data-aos="fade-up">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Terms of Use
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              By John | 9 April 2020 | 6 mins read | 20k views
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read these Terms of Service ("Terms", "Terms of Service")
              carefully before using the https://evara.com website (the
              "Service") operated by Evara ("us", "we", or "our"). Your access
              to and use of the Service is conditioned on your acceptance of and
              compliance with these Terms. These Terms apply to all visitors,
              users and others who access or use the Service. By accessing or
              using the Service you agree to be bound by these Terms. If you
              disagree with any part of the terms then you may not access the
              Service.
            </p>
          </div>

          {/* Rights & restrictions */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Rights & restrictions
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using the https://evara.com website (the
                "Service") operated by Evara ("us", "we", or "our").
              </p>
              <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who access or use the Service.
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you may
                not access the Service.
              </p>
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using the https://evara.com website (the
                "Service") operated by Evara ("us", "we", or "our&quot;).
              </p>
              <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who access or use the Service.
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you may
                not access the Service.
              </p>
            </div>
          </section>

          {/* Links To Other Web Sites */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Links To Other Web Sites
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Evara.
              </p>
              <p>
                Evara has no control over, and assumes no responsibility for,
                the content, privacy policies, or practices of any third party
                web sites or services. You further acknowledge and agree that
                Evara shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such
                content, goods or services available on or through any such web
                sites or services.
              </p>
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Evara.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Termination
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Evara.
              </p>
              <p>
                Evara has no control over, and assumes no responsibility for,
                the content, privacy policies, or practices of any third party
                web sites or services. You further acknowledge and agree that
                Evara shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such
                content, goods or services available on or through any such web
                sites or services.
              </p>
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Evara.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Governing Law
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Evara.
              </p>
              <p>
                Evara has no control over, and assumes no responsibility for,
                the content, privacy policies, or practices of any third party
                web sites or services. You further acknowledge and agree that
                Evara shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such
                content, goods or services available on or through any such web
                sites or services.
              </p>
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Evara.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Evara.
              </p>
              <p>
                Evara has no control over, and assumes no responsibility for,
                the content, privacy policies, or practices of any third party
                web sites or services. You further acknowledge and agree that
                Evara shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with use of or reliance on any such
                content, goods or services available on or through any such web
                sites or services.
              </p>
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Evara.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please{" "}
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                contact us
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
