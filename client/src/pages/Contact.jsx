import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiClock, FiAlertCircle, FiExternalLink, FiUser } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Contact form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-12 bg-gradient-to-b from-lightBlueTint to-white font-body text-darkGray">
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutralGray font-body">
            <h3 className="text-2xl font-semibold text-primaryBlue mb-6 font-heading">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-darkGray mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutralGray rounded-xl focus:ring-2 focus:ring-freshGreen focus:border-freshGreen transition-all"
                  required
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-darkGray mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutralGray rounded-xl focus:ring-2 focus:ring-freshGreen focus:border-freshGreen transition-all"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-darkGray mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutralGray rounded-xl focus:ring-2 focus:ring-freshGreen focus:border-freshGreen transition-all"
                  required
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-primaryBlue to-freshGreen hover:from-freshGreen hover:to-primaryBlue text-white font-medium rounded-xl transition-all shadow-md ${
                  isSubmitting ? 'opacity-80' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 font-body">
            {/* Location Card with Google Maps */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutralGray">
              <div className="flex items-center mb-6">
                <div className="bg-lightBlueTint rounded-xl p-3 mr-4">
                  <FiMapPin className="text-freshGreen" size={20} />
                </div>
                <h3 className="text-2xl font-semibold text-primaryBlue font-heading">Clinic Location</h3>
              </div>

              <div className="mb-6 pl-16 text-darkGray">
                <p className="mb-2">Shop no 06, Building number 12</p>
                <p className="mb-2">Dignity CHS, Near Kedarnath Mandir</p>
                <p>Nehru Nagar, Kurla East</p>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715998981592!2d72.8765603153796!3d19.066774258729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0x7f3e9c3f4f4f4f4f!2sKedarnath%20Mandir%2C%20Nehru%20Nagar%2C%20Kurla%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Clinic Location"
                ></iframe>
              </div>

              <div className="mt-4 flex justify-end">
                <a
                  href="https://maps.google.com?q=Shop+no+06,+building+number+no+12,+Dignity+chs+,+near+Kedarnath+mandir,+Nehru+Nagar+,+Kurla+East"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-freshGreen hover:text-primaryBlue font-medium transition"
                >
                  Open in Google Maps <FiExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
