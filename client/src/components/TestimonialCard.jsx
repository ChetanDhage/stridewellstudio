import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 transform hover:-translate-y-1">
      
      {/* Decorative quote icon */}
      <div className="absolute top-4 right-6 text-gray-300 opacity-5 scale-100 transition duration-300">
        <FaQuoteRight size={60} />
      </div>

      <div className="p-8 relative z-10">
        {/* Rating stars */}
        <div className="flex mb-5 transition-all duration-300">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="mr-1 transform transition-transform duration-200 hover:scale-110"
            >
              <FiStar
                className={`text-xl ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
              />
            </div>
          ))}
        </div>

        {/* Testimonial content */}
        <p className="text-gray-600 mb-6 text-lg leading-relaxed relative">
          <FaQuoteLeft className="absolute -top-2 -left-2 text-gray-300" />
          {testimonial.content}
          <FaQuoteRight className="absolute -bottom-2 -right-2 text-gray-300" />
        </p>

        {/* Author information */}
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md transform transition-transform hover:scale-105">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            {testimonial.company && (
              <p className="text-xs text-gray-400 mt-1">{testimonial.company}</p>
            )}
          </div>
        </div>
      </div>

      {/* Hover effect bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

export default TestimonialCard;
