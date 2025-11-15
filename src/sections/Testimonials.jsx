import React, { useState } from 'react';

const testimonials = [
  { title: "Tool of the year", name: "Christopher Fox", role: "Founder", text: "Without a doubt, it's the best tool I've subscribed to this year. Keep up the good work!" },
  { title: "Game-changer", name: "Robbie Lockie", role: "Founder", text: "I have ADHD and this tool has completely changed my life. It's like having a second brain! 🧠" },
  { title: "It's a lifesaver", name: "Yukari Aotani", role: "Violinist", text: "Thanks to Memorae! It's something that has changed my life and saved it. Yesterday I discovered the friend reminders feature and it was like: wooooooooooooooooooow!" },
  { title: "A miracle!", name: "Sergio Argüero", role: "Financial advisor", text: "A marvel. Now my memory has a name, and it's called Memorae." },
  { title: "The best invention of the century", name: "Fabiola Pérez", role: "Dentist", text: "Impossible for me to forget anything. Imagine now that I can also make sure others don't forget! The best invention of the century for people who live life at 200 km/h." },
  { title: "The best thing that ever happened to me", name: "Santiago Nicolás", role: "Student", text: "The best tool I've ever subscribed to. I haven't forgotten a task or a gift since. It's been one of the best investments of my life." },
  { title: "I love it!", name: "Check Eng Mok", role: "Marketing Head", text: "Finally, a new version of the Asian saying: 'Remind me to remind you so you remember to do such and such.' I love it! 😄" },
  { title: "Finally my mind is free", name: "Pablo Lopez", role: "Student", text: "Memorae has been a game-changer for me! Now my mind is free to focus on what really matters, because Memorae remembers everything for me." },
  { title: "This is brilliant!", name: "Lassi Paasi", role: "Carpenter", text: "My first real test was asking Memorae to remind me to cancel my subscription the day before the trial period ended. Obviously, that was the most useless reminder ever. This is brilliant!" }
];

const getAvatarUrl = (index) => `https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${10 + index}.jpg`;

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, testimonials.length - 3);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-green-600">
          60k+ users love Memorae
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Real stories from real people who finally feel organized.
        </p>
      </div>

      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleTestimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl cursor-pointer shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-400"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={getAvatarUrl(i)}
                alt={`${t.name} avatar`}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <div className="flex gap-1 text-yellow-400 text-xl">
                {Array(5).fill().map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
            </div>

            <h3 className="text-green-600 font-semibold text-lg mb-2">{t.title}</h3>
            <p className="text-gray-700 mb-4 italic">"{t.text}"</p>

            <div className="mt-auto">
              <div className="font-bold text-gray-900">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block px-6 py-3 rounded-full font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md"
        >
          {showAll ? "View Less" : "60k+ users love Memorae | View more"}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
