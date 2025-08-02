import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Exercises', 
      path: '/exercises',
      submenu: [
        { name: 'Knee Rehabilitation', path: '/exercises/knee' },
        { name: 'Back Pain Relief', path: '/exercises/back' },
        { name: 'Shoulder Mobility', path: '/exercises/shoulder' }
      ]
    },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },    
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center transform transition-transform duration-500 hover:-translate-x-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              StrideWellStudio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <button 
                      onClick={() => toggleSubmenu(index)}
                      className="p-1 text-gray-500 hover:text-blue-600"
                    >
                      <FiChevronDown className={`transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {link.submenu && activeSubmenu === index && (
                  <div
                    className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200"
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-4 py-3 text-sm ${location.pathname === subItem.path ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-full transition"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 rounded-full transition shadow-md transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none transition transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 py-4 px-6 space-y-4 transition-all duration-300">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <div className="flex items-center justify-between">
                  <Link
                    to={link.path}
                    className={`text-base font-medium ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <button 
                      onClick={() => toggleSubmenu(index)}
                      className="p-2 text-gray-500"
                    >
                      <FiChevronDown className={`transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {link.submenu && activeSubmenu === index && (
                  <div className="pl-4 mt-2 space-y-2 transition-all duration-200">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block py-2 text-sm ${location.pathname === subItem.path ? 'text-blue-600' : 'text-gray-600'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Link
                to="/login"
                className="block w-full text-center px-4 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 rounded-lg transition shadow-md transform hover:scale-105 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
