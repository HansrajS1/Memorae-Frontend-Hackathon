import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What is Memorae and how can it help me?", a: "Memorae is your second brain that lives in WhatsApp, Telegram, and email soon! It helps you remember things, keep your week organized, and manage your tasks without opening a million apps. It’s always awake, never forgets, and truly listens when you talk." },
    { q: "What types of reminders and features does Memorae offer?", a: "Memorae lets you create and manage reminders, lists, files, and events directly from WhatsApp and Telegram, even using voice notes or images instead of typing. It syncs with Google and Outlook calendars so everything stays organized automatically. And if you ever need a clearer view, the web Dashboard gives you an overview in one simple space." },
    { q: "Can I set recurring reminders?", a: "Yes. You can set up reminders that repeat daily, weekly, monthly, or on your own schedule. Paying for the gym, watering your plants, … Once you set them, Memorae takes care of the rest." },
    { q: "Does Memorae spy on me or can I sleep peacefully knowing my data is safe?", a: "Sleep like a baby: Memorae only collects the data needed to remind you of your tasks. It doesn't snoop through your messages or sell your secrets. It's all about organization, not espionage." },
    { q: "How does Memorae protect my privacy and data security?", a: "Your information is safe and encrypted. We don't sell data or listen to your conversations. For more information, visit our legal pages." },
    { q: "What advantages does Memorae offer compared to other tools?", a: "Memorae lives where you already are (WhatsApp, Telegram, and many more channels soon!). No downloads, no learning curve. You text him, and he delivers." },
    { q: "Is Memorae available 24/7?", a: "Memorae is like that insomniac friend who always answers. If you need a reminder at 3AM or a summary of your tasks at midnight, Memorae is there." },
    { q: "Does Memorae sync with calendars like Google Calendar?", a: "Yes. You can sync Memorae with your Google and Outlook calendars and manage all your events directly from there. Just ask Memorae to schedule a meeting or cancel an appointment, and he will handle it for you." },
    { q: "Are there limits to the number of reminders I can set up?", a: "Depends on the plan you choose. The Pro and Supernova plans include unlimited one-time and recurring reminders, but there are limits for dynamic and friend-to-friend reminders. For more details, check the Pricing page." },
  ];

  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions? We answer them here.
        </p>
        <div>
          {faqs.slice(0, visibleCount).map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
        {visibleCount < faqs.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount(faqs.length)}
              className="px-6 py-3 rounded-full cursor-pointer font-semibold transition-all duration-300 bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
