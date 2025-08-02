import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const links = [
    { title: "Company", items: ["About", "Careers", "Press", "Blog"] },
    { title: "Product", items: ["Features", "Pricing", "Demo", "Updates"] },
    { title: "Support", items: ["Help Center", "Contact Us", "Privacy", "Terms"] },
    { title: "Resources", items: ["Guides", "Research", "Experts", "Partners"] }
  ];

  const contactInfo = [
    { icon: <FiMail className="text-blue-400" />, text: "hello@physioflex.com" },
    { icon: <FiPhone className="text-blue-400" />, text: "+1 (555) 123-4567" },
    { icon: <FiMapPin className="text-blue-400" />, text: "123 Therapy St, San Francisco, CA" }
  ];

  const socialLinks = [
    { icon: <FiFacebook size={20} />, name: "Facebook" },
    { icon: <FiTwitter size={20} />, name: "Twitter" },
    { icon: <FiInstagram size={20} />, name: "Instagram" },
    { icon: <FiLinkedin size={20} />, name: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
              PhysioFlex
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering recovery through personalized physiotherapy programs accessible anytime, anywhere.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
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
              <h4 className="text-lg font-semibold text-white mb-4">{link.title}</h4>
              <ul className="space-y-3">
                {link.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PhysioFlex. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements (no animation now) */}
      <div className="absolute bottom-20 left-10 w-8 h-8 bg-blue-400/20 rounded-full blur-md"></div>
      <div className="absolute top-1/3 right-16 w-12 h-12 bg-teal-400/15 rounded-full blur-md"></div>
    </footer>
  );
};

export default Footer;
