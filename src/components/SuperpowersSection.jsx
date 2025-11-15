import React from 'react';

const features = {
  "Unlimited reminders": {
    description: "An alarm on your phone, a note on a post-it note, a message you sent yourself on WhatsApp...",
    quote: "You don't need more reminders. You need one that works."
  },
  "Your calendars": {
    description: "Google, Outlook. Your appointments, events, and tasks together. You won't miss a thing.",
    quote: "Memorae brings your schedule into one simple conversation."
  },
  "Your lists": {
    description: "Shopping lists, ideas, or whatever. Just say it, type it, or drop it in and your list is saved.",
    quote: "No more sticky notes. Just sticky memory."
  },
  "Voice notes": {
    description: "Your voice is enough. Memorae listens, transcribes, and organizes what you say.",
    quote: "Talk to Memorae like a friend. It remembers better than one."
  },
  "Image analysis": {
    description: "Send a photo of a bill, flyer, or handwritten note. Memorae extracts info and turns it into a task.",
    quote: "Your camera becomes your command center."
  },
  "Reminders among friends": {
    description: "Set reminders for others, share tasks, and make sure your group never forgets what matters.",
    quote: "Memorae is the friend who reminds your friends."
  },
  "Your control center": {
    description: "View everything in one place: reminders, lists, calendar events, and shared tasks.",
    quote: "Finally, your brain has a dashboard."
  },
  "Dynamic Reminder": {
    description: "Memorae adapts to your habits. It nudges you when you’re likely to forget.",
    quote: "Reminders that feel human. Because they learn like one."
  }
};

const SuperpowersSection = ({ selected }) => {
  if (!selected) return null;

  const feature = features[selected];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex">
      <main className="flex-1 p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{selected}</h1>
        <p className="text-lg text-gray-700 mb-8">{feature.description}</p>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="italic text-gray-600">"{feature.quote}"</p>
          <p className="mt-4 text-right font-bold text-green-600">— MEMORAE</p>
        </div>
      </main>
    </section>
  );
};

export default SuperpowersSection;
