import TeamCard from './TeamCard';

const TeamSection = ({ teamMembers }) => {
  return (
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
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;