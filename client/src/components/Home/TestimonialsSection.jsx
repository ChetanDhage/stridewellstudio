import TestimonialCard from '../shared/TestimonialCard';

const TestimonialsSection = ({ testimonials }) => {
  return (
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
  );
};

export default TestimonialsSection;