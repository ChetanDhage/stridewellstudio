import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const links = [
    { title: "Company", items: ["About", "Press", "Blog"] },
    { title: "Product", items: ["Features", "Pricing", "Demo", "Updates"] },
    { title: "Support", items: ["Help Center", "Contact Us", "Privacy", "Terms"] },
  ];

  const contactInfo = [
    { icon: <FiMail className="text-blue-300" />, text: "hello@physioflex.com" },
    { icon: <FiPhone className="text-blue-300" />, text: "+1 (555) 123-4567" },
    { icon: <FiMapPin className="text-blue-300" />, text: "123 Therapy St, San Francisco, CA" }
  ];

  const socialLinks = [
    { icon: <FiFacebook size={18} />, name: "Facebook" },
    { icon: <FiTwitter size={18} />, name: "Twitter" },
    { icon: <FiInstagram size={18} />, name: "Instagram" },
    { icon: <FiLinkedin size={18} />, name: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-gray-800">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/5 to-transparent"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
               StrideWell Studio
              </h3>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-md text-[15px] leading-relaxed">
              Empowering recovery through personalized physiotherapy programs accessible anytime, anywhere with our cutting-edge digital platform.
            </p>

            {/* Newsletter Subscription */}
           
            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2.5 rounded-lg bg-gray-800 hover:bg-gray-700/80 flex items-center justify-center hover:-translate-y-0.5 transition-transform"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {links.map((link, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-gray-300 mb-5 uppercase tracking-wider">{link.title}</h4>
              <ul className="space-y-3.5">
                {link.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors flex items-center group text-[15px]"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PhysioFlex. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
              Cookies
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
              Accessibility
            </a>
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full blur-sm animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-teal-400/30 rounded-full blur-sm animate-float animation-delay-2000"></div>
    </footer>
  );
};

export default Footer;