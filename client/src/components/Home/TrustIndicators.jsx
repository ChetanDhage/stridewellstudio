const TrustIndicators = () => {
  return (
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
  );
};

export default TrustIndicators;