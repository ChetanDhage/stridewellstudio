import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
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
  );
};

export default CTASection;