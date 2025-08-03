// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../../assets/logo.png"; 

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Exercises", path: "/exercises" },
//     { name: "Appointment", path: "/appointment" },
//     { name: "Blog", path: "/blog" },
//     { name: "Experts", path: "/experts" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo with Image */}
//           <Link
//             to="/"
//             className="flex items-center space-x-2 transform transition-transform duration-500 hover:-translate-x-1"
//           >
//            <img src={logo} alt="StrideWellStudio Logo" className="h-22 w-auto" />

//             <span className="text-xl font-bold text-gray-800">StrideWellStudio</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${
//                   location.pathname === link.path
//                     ? "text-blue-600"
//                     : "text-gray-700 hover:text-blue-600"
//                 }`}
//               >
//                 {link.name}
//                 {location.pathname === link.path && (
//                   <span className="absolute bottom-0 left-1/2 w-3/4 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transform -translate-x-1/2" />
//                 )}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-3">
//             <Link
//               to="/login"
//               className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-white hover:bg-blue-600 rounded-full transition"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/register"
//               className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 rounded-full transition shadow-md transform hover:scale-105 active:scale-95"
//             >
//               Get Started
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none transition transform hover:scale-110"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-white shadow-lg rounded-xl mt-4 py-4 px-6 space-y-4 transition-all duration-300">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`block text-base font-medium py-2 px-2 rounded-lg ${
//                   location.pathname === link.path
//                     ? "text-blue-600 bg-blue-50"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <div className="pt-4 border-t border-gray-200 space-y-3">
//               <Link
//                 to="/login"
//                 className="block w-full text-center px-4 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Sign In
//               </Link>
//               <Link
//                 to="/register"
//                 className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 rounded-lg transition shadow-md transform hover:scale-105 active:scale-95"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Exercises", path: "/exercises" },
    { name: "Appointment", path: "/appointment" },
    { name: "Blog", path: "/blog" },
    { name: "Experts", path: "/experts" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left aligned */}
          <div className="flex items-center flex-shrink-0">
            <Link
              to="/"
              className="flex items-center"
              onClick={closeMobileMenu}
            >
              <img 
                src={logo} 
                alt="StrideWellStudio Logo" 
                className="h-24 w-auto" 
              />
              <span className="ml-3 text-xl font-semibold text-gray-800 hidden sm:block">
                StrideWellStudio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop Auth Buttons - Right aligned */}
          <div className="hidden md:flex items-center justify-end space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-sm"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button - Right aligned */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full width */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white pt-2 pb-4 space-y-1 shadow-lg rounded-lg mx-2 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 text-base font-medium ${
                  location.pathname === link.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <Link
                to="/login"
                className="block px-4 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 mx-4 rounded-lg"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;