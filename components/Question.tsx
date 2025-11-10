"use client";
import React, { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const Question = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(3);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How can I apply for a job at [Your Grocery Store]",
      answer:
        "You can apply for positions at our grocery store through our online application portal, by visiting our store in person, or by submitting your resume via email. We regularly post job openings on our website and local job boards.",
    },
    {
      id: 2,
      question: "Do you offer part-time and full-time positions?",
      answer:
        "Yes, we offer both part-time and full-time positions across various departments including cashier, stock clerk, deli, bakery, and management roles. We try to accommodate different scheduling needs.",
    },
    {
      id: 3,
      question: "What should I wear to the interview?",
      answer:
        "Competitive hourly wages Employee discounts on groceries Flexible scheduling Career advancement opportunities Health & retirement benefits (for eligible full-time employees)",
    },
    {
      id: 4,
      question: "What are the basic requirements to work here?",
      answer:
        "Basic requirements include being at least 16 years old (18+ for some positions), having reliable transportation, being able to work flexible hours including weekends and holidays, and having good communication skills.",
    },
    {
      id: 5,
      question: "How long does the hiring process take?",
      answer:
        "Our hiring process typically takes 1-2 weeks from application to final decision. This includes application review, initial interview, background check, and final interview with management.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className=" bg-white">
      <div className="max-w-8xl mx-auto px-4 lg:px-28 py-20">
        {/* FAQ Questions */}
        <div className="flex flex-col gap-4 mb-12">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-rose-100 rounded-2xl overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-rose-200/50 transition-colors duration-200 cursor-pointer"
              >
                <h3
                  className={`text-lg font-medium pr-4 ${
                    openFAQ === faq.id ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      openFAQ === faq.id
                        ? "border-red-400 bg-red-50 rotate-180"
                        : "border-red-300"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors duration-200 ${
                        openFAQ === faq.id ? "text-red-600" : "text-red-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General FAQs Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            General FAQs
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div
                key={`general-${faq.id}`}
                className="bg-rose-100 rounded-2xl overflow-hidden"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(faq.id + 10)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-rose-200/50 transition-colors duration-200 cursor-pointer"
                >
                  <h3
                    className={`text-lg font-medium pr-4 ${
                      openFAQ === faq.id + 10 ? "text-red-600" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        openFAQ === faq.id + 10
                          ? "border-red-400 bg-red-50 rotate-180"
                          : "border-red-300"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-200 ${
                          openFAQ === faq.id + 10
                            ? "text-red-600"
                            : "text-red-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id + 10
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
