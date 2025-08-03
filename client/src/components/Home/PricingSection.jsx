import PricingCard from '../shared/PricingCard';

const PricingSection = ({ pricingPlans }) => {
  return (
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
  );
};

export default PricingSection;