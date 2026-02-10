import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "How is Longitude Health different from a GPO?", a: "Unlike a GPO that focuses on purchasing volume, we build and operate new infrastructure and companies that solve systemic operational problems." },
    { q: "Who governs Longitude Health?", a: "We are governed by a board composed of leaders from our member health systems, ensuring alignment with provider needs." },
    { q: "How can my health system join?", a: "Membership is currently by invitation, but we are actively seeking forward-thinking partners. Please contact us to learn more." }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-light">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface p-8 rounded-xl border border-border">
              <h3 className="font-bold text-lg text-light mb-3">{faq.q}</h3>
              <p className="text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;