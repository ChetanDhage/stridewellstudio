import { FiAward, FiUsers, FiActivity, FiStar, FiHeart } from 'react-icons/fi';

const About = () => {



  return (
    <div className="pt-24 pb-12 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to <span className="text-teal-300">Lifelong Wellness</span> Starts Here
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Bridging the gap between injury recovery and lifelong wellness through personalized care
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="StrideWell team" 
                  className="w-full h-auto"
                />
                
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Your Health Journey
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Welcome to StrideWell Studio, where we bridge the gap between injury recovery and lifelong wellness. 
                  Founded and led by experienced physiotherapists and consultants, our mission is to empower you with 
                  the knowledge and tools to take control of your health.
                </p>
                <p className="text-lg text-gray-600">
                  We don't believe in one-size-fits-all solutions; instead, we excel at creating customized exercise 
                  plans that precisely fit your unique needs, helping you regain strength, improve mobility, and build 
                  lasting resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 rounded-full text-sm font-medium mb-4">
            OUR APPROACH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Makes StrideWell Different
          </h2>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FiAward className="w-8 h-8" />,
              title: "Personalized Plans",
              description: "Tailored exercise programs designed specifically for your body and goals",
              color: "text-blue-600 bg-blue-50"
            },
            {
              icon: <FiActivity className="w-8 h-8" />,
              title: "Holistic Wellness",
              description: "Addressing not just injuries but your overall movement health",
              color: "text-teal-600 bg-teal-50"
            },
            {
              icon: <FiUsers className="w-8 h-8" />,
              title: "Empowerment Focus",
              description: "Teaching you the tools to maintain wellness long after therapy ends",
              color: "text-indigo-600 bg-indigo-50"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${value.color}`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default About;