import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiActivity, FiStar, FiHeart, FiClock, FiBarChart2 } from 'react-icons/fi';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      bio: "Board-certified physiotherapist with 15+ years of clinical experience",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      specialty: "Orthopedic Rehabilitation"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Head of Technology",
      bio: "Tech entrepreneur specializing in healthcare solutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      specialty: "AI & Motion Tracking"
    },
    {
      id: 3,
      name: "Emma Johnson",
      role: "Lead Physiotherapist",
      bio: "Specialist in sports medicine and injury prevention",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      specialty: "Sports Rehabilitation"
    }
  ];

  // Stats data
  const stats = [
    { value: "10,000+", label: "Patients Helped", icon: <FiUsers className="w-6 h-6" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <FiStar className="w-6 h-6" /> },
    { value: "40+", label: "Expert Physios", icon: <FiHeart className="w-6 h-6" /> },
    { value: "4.9/5", label: "Average Rating", icon: <FiAward className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-24 pb-12 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Redefining <span className="text-teal-300">Physiotherapy</span> Through Innovation
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Combining clinical expertise with cutting-edge technology to deliver personalized rehabilitation programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="PhysioFlex team" 
                  className="w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg w-2/3">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Founded in 2020</h4>
                  <p className="text-gray-600 text-sm">By a team of physiotherapists and technologists</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-6">
                OUR MISSION
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bridging the Gap Between Patients and Therapists
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  At PhysioFlex, we're transforming physiotherapy through digital innovation. Our platform combines evidence-based protocols with AI-powered personalization to deliver exceptional outcomes.
                </p>
                <p className="text-lg text-gray-600">
                  We believe everyone deserves access to high-quality rehabilitation, regardless of location or mobility constraints. Our solutions are designed by clinicians, for clinicians, with patient experience at the core.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              OUR TEAM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Experts Behind PhysioFlex
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A multidisciplinary team of healthcare professionals and technologists
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium mb-4">
                    {member.specialty}
                  </div>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <button className="w-full py-2.5 px-4 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-4">
              OUR VALUES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Guides Our Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiAward className="w-8 h-8" />,
                title: "Clinical Excellence",
                description: "All programs are evidence-based and designed by licensed physiotherapists",
                color: "text-blue-600 bg-blue-50"
              },
              {
                icon: <FiActivity className="w-8 h-8" />,
                title: "Innovation",
                description: "Leveraging technology to enhance traditional physiotherapy methods",
                color: "text-teal-600 bg-teal-50"
              },
              {
                icon: <FiUsers className="w-8 h-8" />,
                title: "Patient-Centered",
                description: "Tailored programs that adapt to individual needs and progress",
                color: "text-indigo-600 bg-indigo-50"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Rehabilitation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of patients and therapists using PhysioFlex
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-blue-900 font-bold rounded-xl shadow-lg transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl transition-colors"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;