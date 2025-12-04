/* eslint-disable react/no-unescaped-entities */
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
    <div>
      <div data-aos="fade-up">
        <CommonHeader
          heroImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
          heroTitle="Privacy Policy"
          heroDescription="Your privacy is important to us. Learn how we protect your information."
        />
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-28 py-20">
        <div className="prose prose-lg max-w-none" data-aos="fade-up">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Aldi Grocery Web ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website
              or services. By accessing or using Aldi Grocery Web, you agree to
              this policy.
            </p>
          </div>

          {/* Collecting and Using Your Personal Data */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Collecting and Using Your Personal Data
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Types of Data Collected
            </h3>

            <h4 className="text-lg font-medium text-gray-800 mb-3">
              Personal Data
            </h4>
            <p className="text-gray-700 mb-4">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Email Address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Usage Data</li>
            </ul>

            <h4 className="text-lg font-medium text-gray-800 mb-3">
              Usage Data
            </h4>
            <p className="text-gray-700 mb-4">
              Usage Data is collected automatically when using the Service.
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>

            <p className="text-gray-700 mb-6">
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data. We may also
              collect information that Your browser sends whenever You visit our
              Service or when You access the Service by or through a mobile
              device.
            </p>
          </section>

          {/* Tracking Technologies and Cookies */}
          <section className="mb-12" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tracking Technologies and Cookies
            </h3>

            <p className="text-gray-700 mb-4">
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. The
              technologies We use may include:
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Cookies or Browser Cookies:
              </h4>
              <p className="text-gray-700 mb-4">
                A cookie is a small file placed on Your Device. You can instruct
                Your browser to refuse all Cookies or to indicate when a Cookie
                is being sent. However, if You do not accept Cookies, You may
                not be able to use some parts of our Service. Unless you have
                adjusted Your browser setting so that it will refuse Cookies,
                our Service may use Cookies.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Web Beacons:
              </h4>
              <p className="text-gray-700 mb-4">
                Certain sections of our Service and our emails may contain small
                electronic files known as web beacons (also referred to as clear
                gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to count users who have visited those
                pages or opened an email and for other related website
                statistics (for example, recording the popularity of a certain
                section and verifying system and server integrity).
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on Your personal computer or mobile device when You
              go offline, while Session Cookies are deleted as soon as You close
              Your web browser. We use both Session and Persistent Cookies for
              the purposes set out below:
            </p>
          </section>

          {/* Disclosure of Your Personal Data */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Disclosure of Your Personal Data
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Business Transactions
            </h3>
            <p className="text-gray-700 mb-6">
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Law enforcement
            </h3>
            <p className="text-gray-700 mb-6">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
          </section>

          {/* Changes to this Privacy Policy */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Changes to this Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-gray-700 mb-6">
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated&quot; date at the top of this Privacy Policy.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies</h2>
            <p className="text-gray-700 mb-6">
              We use cookies to track and identify users and their preferences.
              You can adjust your browser settings to reject cookies, but this
              may affect site functionality.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>By email: privacy@aldigroceryweb.com</li>
              <li>By phone: +1 (555) 123-4567</li>
              <li>
                On our contact page:{" "}
                <a href="/contact" className="text-red-600 hover:text-red-800">
                  Contact Us
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
