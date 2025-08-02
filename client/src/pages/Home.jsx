import { FiArrowRight, FiCheck, FiPlay, FiUsers, FiActivity, FiHeart, FiUser, FiCalendar, FiStar, FiClock, FiMapPin, FiPhone, FiMail, FiPlus } from 'react-icons/fi';
import ExerciseCard from '../components/ExerciseCard';
import TestimonialCard from '../components/TestimonialCard';
import PricingCard from '../components/PricingCard';

const Home = () => {
  const featuredExercises = [ 
    {
      id: 1,
      title: 'Knee Rehabilitation',
      description: 'Gentle exercises to strengthen knee joints',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'Knee',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Back Pain Relief',
      description: 'Stretches to alleviate lower back pain',
      duration: '20 min',
      difficulty: 'Intermediate',
      category: 'Back',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80'
    },
    {
      id: 3,
      title: 'Shoulder Mobility',
      description: 'Improve range of motion in shoulders',
      duration: '10 min',
      difficulty: 'Beginner',
      category: 'Shoulder',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'After my knee surgery, PhysioFlex helped me regain full mobility in just 8 weeks. The personalized exercises made all the difference!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Orthopedic Surgeon',
      content: 'I recommend PhysioFlex to all my post-op patients. The platform makes it easy to track progress and adjust treatment plans.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Senior Patient',
      content: 'As an older adult, I was nervous about exercising at home. The clear instructions and modifications made me feel safe and confident.',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '$19',
      period: 'month',
      features: [
        'Access to basic exercises',
        '1 consultation per month',
        'Progress tracking',
        'Email support'
      ],
      featured: false,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Premium',
      price: '$49',
      period: 'month',
      features: [
        'All exercises unlocked',
        '4 consultations per month',
        'Personalized plans',
        'Priority support',
        'Video call sessions'
      ],
      featured: true,
      color: 'teal'
    },
    {
      id: 3,
      name: 'Annual',
      price: '$399',
      period: 'year',
      features: [
        'All premium features',
        'Unlimited consultations',
        'Family plan (up to 3 users)',
        '24/7 support',
        'Free health assessments'
      ],
      featured: false,
      color: 'indigo'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ashwini",
      title: "Musculoskeletal Physiotherapy",
      bio: "Hi, I am Dr. Ashwini. I am a dedicated physiotherapist specialising in musculoskeletal conditions. With a Bachelor's and Master's degree in Physiotherapy...",
      qualifications: [
        "Master's degree Physiotherapy",
        "Certified manual practitioner"
      ],
      email: "dreachwinbathani48@gmail.com",
      address: "Shop no 06, building number 12, Dignity chapel, Kedamath mandir, Nehru Nagar, Kurla East",
      phone: "9789057159",
      hours: "9 am to 12 pm",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      title: "Geriatric Physiotherapist",
      bio: "12 years specializing in elderly care and mobility improvement. Expert in fall prevention, arthritis management, and gentle rehabilitation techniques...",
      qualifications: [
        "M.Sc. Geriatric PT"
      ],
      email: "dreachwinbathani48@gmail.com",
      address: "Shop no 06, building number 12, Dignity chapel, Kedamath mandir, Nehru Nagar, Kurla East",
      phone: "9789057159",
      hours: "9 am to 12 pm",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
    },
    {
      id: 3,
      name: "Dr. Robert Garcia",
      title: "Orthopedic Specialist",
      bio: "10+ years focusing on post-surgical rehabilitation and complex orthopedic cases. Specializes in spine health, joint replacements...",
      qualifications: [
        "DPT Orthopedics"
      ],
      email: "dreachwinbathani48@gmail.com",
      address: "Shop no 06, building number 12, Dignity chapel, Kedamath mandir, Nehru Nagar, Kurla East",
      phone: "9789057159",
      hours: "9 am to 12 pm",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      title: "Pediatric Specialist",
      bio: "8 years dedicated to pediatric physical therapy. Expert in developmental disorders, childhood injuries, and creating engaging therapy programs...",
      qualifications: [
        "M.Sc. Pediatric PT"
      ],
      email: "dreachwinbathani48@gmail.com",
      address: "Shop no 06, building number 12, Dignity chapel, Kedamath mandir, Nehru Nagar, Kurla East",
      phone: "9789057159",
      hours: "9 am to 12 pm",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Modern Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/30 to-indigo-900/90"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-teal-300 font-medium">AI-Powered Physiotherapy</span>
                <span className="ml-2 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional <span className="text-teal-300">Rehabilitation</span> From The Comfort Of Home
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Clinically-proven rehabilitation programs powered by motion AI and designed by top physiotherapists.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-blue-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Start Free Assessment
                </button>
                <button className="flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg transition-all duration-300 group">
                  <FiPlay className="mr-2 group-hover:scale-110 transition-transform" /> Watch Demo
                </button>
              </div>
              
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((item) => (
                    <img 
                      key={item}
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}${item}${item}.jpg`} 
                      alt="Patient" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" 
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <p className="font-medium">Trusted by 10,000+ patients</p>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <FiStar key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-blue-100 text-sm ml-1">4.9/5 from 2,345 reviews</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Woman doing physiotherapy exercises" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                  <div className="flex items-center">
                    <div className="bg-teal-500 rounded-lg p-2 shadow-md">
                      <FiActivity className="text-white w-5 h-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 font-semibold">Live Session in Progress</p>
                      <p className="text-teal-600 text-sm">Join now to participate</p>
                    </div>
                    <div className="ml-auto flex items-center bg-teal-500 text-white px-3 py-1 rounded-full shadow-sm">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-medium">LIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: "Medical Association", logo: "/medical-assoc-logo.png" },
              { name: "Health Authority", logo: "/health-auth-logo.png" },
              { name: "Technology Partner", logo: "/tech-partner-logo.png" },
              { name: "University", logo: "/university-logo.png" }
            ].map((partner, index) => (
              <div key={index} className="flex items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-full mr-3"></div>
                <span className="text-gray-600 font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section - Cleaner Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clinical Expertise <span className="text-teal-500">Made Accessible</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our evidence-based approach combines professional knowledge with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiUser className="w-6 h-6 text-teal-500" />,
                title: "Comprehensive Assessment",
                description: "Our AI-powered assessment analyzes your condition and creates a personalized treatment plan.",
                bg: "bg-teal-50"
              },
              {
                icon: <FiActivity className="w-6 h-6 text-teal-500" />,
                title: "Smart Exercise Programs",
                description: "3D-animated guides with real-time form correction ensure proper technique.",
                bg: "bg-blue-50"
              },
              {
                icon: <FiCalendar className="w-6 h-6 text-teal-500" />,
                title: "Progress Optimization",
                description: "Our system continuously adapts your program based on recovery metrics.",
                bg: "bg-indigo-50"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`${feature.bg} p-8 rounded-xl hover:shadow-md transition-all duration-300`}
              >
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <button className="text-teal-600 font-medium flex items-center group">
                  Learn more
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Exercises - Professional Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
                EXERCISE LIBRARY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Evidence-Based <span className="text-blue-500">Protocols</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Clinically-proven routines for targeted rehabilitation
              </p>
            </div>
            <button className="flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all">
              View all exercises <FiArrowRight className="ml-2" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Professional */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Patients Helped', icon: <FiUsers className="w-8 h-8 mb-4 text-teal-300" /> },
              { value: '98%', label: 'Satisfaction Rate', icon: <FiHeart className="w-8 h-8 mb-4 text-teal-300" /> },
              { value: '250+', label: 'Clinical Protocols', icon: <FiCheck className="w-8 h-8 mb-4 text-teal-300" /> },
              { value: '40+', label: 'Expert Physios', icon: <FiUser className="w-8 h-8 mb-4 text-teal-300" /> }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold mb-2 text-teal-300">
                  {stat.value}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Professional Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-teal-500">Patients</span> & Clinicians
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Professional endorsements and patient success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Professional Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
              PRICING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Plans for <span className="text-blue-500">Every Need</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Professional-grade rehabilitation at accessible prices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking Section - Professional */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-b from-blue-700 to-indigo-800 text-white p-10">
                <h2 className="text-3xl font-bold mb-6">Book Your Consultation</h2>
                <p className="mb-8 text-blue-100 text-lg">Schedule an appointment with our certified physiotherapists</p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-teal-400/20 p-2 rounded-lg mr-4">
                      <FiClock className="text-teal-300 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Hours</h3>
                      <p className="text-blue-100">Monday – Friday: 9:00 AM – 12:00 PM</p>
                      <p className="text-blue-100">Saturday: 10:00 AM – 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-400/20 p-2 rounded-lg mr-4">
                      <FiMapPin className="text-teal-300 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-blue-100">123 Wellness Street, Health City</p>
                      <p className="text-blue-100 text-sm mt-1">Free parking available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-teal-400/20 p-2 rounded-lg mr-4">
                      <FiPhone className="text-teal-300 w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Contact</h3>
                      <p className="text-blue-100">+1 (555) 123-4567</p>
                      <p className="text-blue-100">support@physioflex.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-10">
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="ageGroup">
                        Age Group
                      </label>
                      <select
                        id="ageGroup"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                        required
                      >
                        <option value="">Select Age Group</option>
                        <option value="18-25">18-25 years</option>
                        <option value="26-35">26-35 years</option>
                        <option value="36-45">36-45 years</option>
                        <option value="46-55">46-55 years</option>
                        <option value="56+">56+ years</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="healthBackground">
                      Health Background
                    </label>
                    <textarea
                      id="healthBackground"
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Please mention any historical diseases, injuries, or conditions"
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
                        Preferred Time
                      </label>
                      <select
                        id="time"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibDYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                        required
                      >
                        <option value="">Select Time</option>
                        <option value="9:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="assessment"
                          name="assessment"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="assessment" className="font-medium text-gray-700">
                          I confirm I have filled the assessment form
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                    >
                      Book Appointment Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section - Professional */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
              OUR TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-500">Expert Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Certified physiotherapists with specialized expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                  
                  <div className="space-y-2 mb-6">
                    {member.qualifications.map((qual, index) => (
                      <div key={index} className="flex items-center">
                        <FiCheck className="text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{qual}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiMail className="text-blue-500 mr-2" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiPhone className="text-blue-500 mr-2" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiClock className="text-blue-500 mr-2" />
                      <span>{member.hours}</span>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 flex items-center justify-center">
                    <FiPlus className="mr-2" /> Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Professional */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-teal-600 bg-teal-50 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-teal-500">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I prepare for my first physiotherapy session?",
                answer: "Wear comfortable clothing that allows movement, bring any medical reports or scans related to your condition, and arrive 10 minutes early to complete paperwork."
              },
              {
                question: "Do I need a doctor's referral to book an appointment?",
                answer: "No, you don't need a referral to see our physiotherapists. However, some insurance plans may require one for reimbursement."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, HSA/FSA cards, and cash. We also work with most major insurance providers."
              },
              {
                question: "Can I reschedule or cancel my appointment?",
                answer: "Yes, you can reschedule or cancel up to 24 hours before your appointment without charge. Late cancellations may incur a fee."
              },
              {
                question: "How many sessions will I need?",
                answer: "This depends on your specific condition and goals. After your initial assessment, your physiotherapist will recommend a treatment plan with estimated duration."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none group">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{faq.question}</h3>
                  <svg className="h-6 w-6 text-gray-500 group-hover:text-blue-600 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/30 to-indigo-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-teal-300">Transform</span> Your Recovery?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience professional physiotherapy from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-blue-900 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Start Free Assessment
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg transition-all duration-300 group">
                Speak to a Physio <FiArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;