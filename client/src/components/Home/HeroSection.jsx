import { FiArrowRight, FiPlay, FiUsers, FiStar, FiActivity } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden pt-20">

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
  );
};

export default HeroSection;