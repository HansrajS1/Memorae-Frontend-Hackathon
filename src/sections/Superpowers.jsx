import React, { useState } from 'react';
import { 
  MessageSquare, 
  Calendar, 
  Mic, 
  Clock, 
  Users, 
  Image,
  LayoutDashboard,
  Zap
} from 'lucide-react';
import { ChatBubble } from '../components';

const Superpowers = () => {
  const features = [
    { 
      id: 'lists', 
      name: "Notes that never get lost", 
      icon: MessageSquare,
      description: "Shopping lists, ideas, or whatever. Just say it, type it, or drop it in and your list is saved.",
      chat: [
        { text: "Memorae, add Stranger Things to my watch list!", isUser: true, time: "17:48" },
        { text: "Added 'Stranger Things' to your watch list.", isUser: false, time: "17:48" },
      ]
    },
    { 
      id: 'calendar', 
      name: "All your calendars in one chat", 
      icon: Calendar,
      description: "Google, Outlook. Your appointments, events, and tasks together. You won't miss a thing, even if you try.",
      chat: [
        { text: "Memorae, cancel all events after Thursday at 6PM.", isUser: true, time: "17:48" },
        { text: "Cancelled all your events after Thursday at 6pm.", isUser: false, time: "17:48" },
      ]
    },
    { 
      id: 'voice', 
      name: "Voice notes that become tasks", 
      icon: Mic,
      description: "Your voice is enough. Memorae listens, transcribes, and organizes what you say. That easy.",
      chat: [
        { text: "[Voice Note: 0:08s]", isUser: true, time: "17:48" },
        { text: "Created reminder: family lunch at Aunt Luisa's Sunday at 1:00 PM.", isUser: false, time: "17:48" },
      ]
    },
    { 
      id: 'reminders', 
      name: "Unlimited automatic reminders", 
      icon: Clock,
      description: "Unique or repeating. Weekly, monthly... Memorae reminds you whenever needed!",
      chat: [
        { text: "Remind me to meditate tomorrow at 8AM!", isUser: true, time: "17:48" },
        { text: "I've set your reminder for tomorrow at 8:00 to meditate. Don't forget to take that time to take care of yourself! 🧘‍♀️", isUser: false, time: "17:48" },
      ]
    },
    { 
      id: 'friends', 
      name: "Reminders between friends", 
      icon: Users,
      description: "Tell Memorae what to say, to whom, and when. Memorae will handle the rest.",
      chat: [
        { text: "Memorae, remind Marcos that he has to send me all the reports on Monday at 10:30.", isUser: true, time: "17:48" },
        { text: "Understood! I'll remind Marcos to send you the reports on Monday at 10:30.", isUser: false, time: "17:48" },
      ]
    },
    { 
      id: 'dashboard', 
      name: "Your control center", 
      icon: LayoutDashboard,
      description: "Your reminders, lists, calendars, contacts... Everything that was once scattered is now organized.",
      chat: [
        { text: "Memorae, send me the direct link to my Dashboard.", isUser: true, time: "17:48" },
        { text: "Here is the secure link to your Control Center: https://app.memorae.ai/dashboard", isUser: false, time: "17:48" },
      ]
    },
    { 
      id: 'dynamic', 
      name: "Dynamic Reminders", 
      icon: Zap,
      description: "Memorae goes out to explore the world for you and comes back with what you need to know.",
      chat: [
        { text: "Send me a summary of my Google Calendar meetings for the week, every Monday at 9:00.", isUser: true, time: "17:48" },
        { text: "Perfect! I'll send you a summary of all your meetings for the week, every Monday morning.", isUser: false, time: "17:48" },
      ]
    },
    { 
      id: 'image', 
      name: "From image to order", 
      icon: Image,
      description: "A timetable, a list, a whiteboard... Take a photo, send it, and turn it into whatever you need.",
      chat: [
        { text: "[Image attached]", isUser: true, time: "17:48" },
        { text: "Add this to my shopping list.", isUser: true, time: "17:48" },
        { text: "Done! I've added everything to your shopping list.", isUser: false, time: "17:48" },
      ]
    },
  ];

  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const currentFeature = features.find(f => f.id === activeFeature);

  return (
    <section id="superpowers" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Superpowers for people who can't do it all
          </h2>
          <p className="text-lg text-gray-600">
            Click each superpower to see exactly how it works in a real chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-4 lg:sticky lg:top-24">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'bg-white cursor-pointer shadow-lg border border-transparent -translate-y-1'
                    : 'bg-gray-100 cursor-pointer hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeFeature === feature.id ? 'bg-green-100' : 'bg-gray-200'
                  } transition-colors`}>
                    <feature.icon className={`w-6 h-6 ${
                      activeFeature === feature.id ? 'text-green-600' : 'text-gray-500'
                    } transition-colors`} />
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-gray-900">{feature.name}</span>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </button>
            ))}
            <button className="font-semibold text-green-600 cursor-pointer p-4 w-full text-center hover:bg-green-50 rounded-lg">
              Discover all the superpowers &rarr;
            </button>
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="bg-gray-200 border-8 border-gray-900 rounded-3xl max-w-lg mx-auto shadow-2xl">
            
              <div className="bg-gray-100 p-3 flex rounded-full items-center gap-3 border-b border-gray-300">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-white">M</div>
                <div>
                  <h3 className="font-semibold  text-gray-900">Memorae</h3>
                  <p className="text-xs text-gray-500">remembers everything for you</p>
                </div>
              </div>
              <div className="h-96 p-4 overflow-y-auto bg-cover" style={{ backgroundImage: "url('https://i.pinimg.com/736x/85/70/f6/8570f6339d31801c3c004d410711917a.jpg')" }}>
                {currentFeature.chat.map((msg, i) => (
                  <ChatBubble key={i} text={msg.text} isUser={msg.isUser} time={msg.time} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Superpowers;