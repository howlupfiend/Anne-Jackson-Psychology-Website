import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How long is a session?", a: "Each therapy session lasts for 50 minutes. We typically meet on a weekly basis at a regular time." },
    { q: "Is what we discuss confidential?", a: "Yes, confidentiality is a cornerstone of therapy. Everything discussed remains strictly between us, subject to standard professional and legal limits which we will discuss in our first session." },
    { q: "Do you offer online sessions?", a: "Yes, I offer both face-to-face sessions and secure online video sessions via Zoom, depending on your preference and location." }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-light mb-10 text-stone-800 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-stone-200 rounded-lg bg-white overflow-hidden">
            <button 
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-stone-700">{faq.q}</span>
              {openIndex === index ? <ChevronUp className="w-5 h-5 text-stone-400" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}