import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  MessageSquare,
  Calendar,
  Mic,
  Clock,
  Users,
  Image,
  LayoutDashboard,
  Zap
} from 'lucide-react';
import { SuperpowersSection } from '../components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  let dropdownTimeout;

  const navLinks = [
    { name: "Dashboard", href: "#dashboard" },
    { name: "Pricing", href: "#pricing" },
  ];

  const superpowers = [
    { name: "Unlimited reminders", icon: Clock },
    { name: "Your calendars", icon: Calendar },
    { name: "Your lists", icon: MessageSquare },
    { name: "Voice notes", icon: Mic },
    { name: "Image analysis", icon: Image },
    { name: "Reminders among friends", icon: Users },
    { name: "Your control center", icon: LayoutDashboard },
    { name: "Dynamic Reminder", icon: Zap },
  ];

  return (
    <>
      <header>
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-2 px-4 text-sm font-medium shadow-md z-50">
          BF20: 20% OFF Black Friday. Valid until 11/30!
        </div>
        <nav className="bg-white/80 backdrop-blur-md shadow-sm mt-9 relative z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <a href="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              Memorae
            </a>
            <div className="hidden md:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(dropdownTimeout);
                  setIsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimeout = setTimeout(() => setIsDropdownOpen(false), 200); // delay close
                }}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition-colors">
                  Superpowers <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max max-w-lg bg-white shadow-2xl rounded-xl border border-gray-100 p-6 z-50">
                    <p className="text-sm text-gray-500 mb-4 font-medium">Explore what Memorae can do:</p>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {superpowers.map((item, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            setSelectedFeature(item.name);
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors cursor-pointer group"
                        >
                          <item.icon size={18} className="text-gray-400 group-hover:text-green-600 transition-all" />
                          <span className="font-medium text-sm">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setSelectedFeature(null);
                  }}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#pricing"
                className="hidden md:flex px-4 py-2 rounded-md font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                Try for Free
              </a>
              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-6 space-y-4 border-t border-gray-100 z-50">
              
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-700 hover:text-green-600 list-none">
                  Superpowers
                  <ChevronDown size={20} className="group-open:rotate-180 transition-transform" />
                </summary>
                <ul className="mt-4 pl-4 space-y-3 border-l border-gray-200">
                  {superpowers.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setSelectedFeature(item.name);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors cursor-pointer group"
                    >
                      <item.icon size={16} className="text-gray-400 group-hover:text-green-600 transition-all" />
                      <span className="font-medium text-sm">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </details>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg text-gray-700 font-medium hover:text-green-600 transition-colors"
                >
                  {link.name}
                </a>
                ))}
              <a
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition-colors"
              >
                Try for Free
              </a>
            </div>
          )}
        </nav>
      </header>
      {selectedFeature && <SuperpowersSection selected={selectedFeature} />}
    </>
  );
};

export default Header;
