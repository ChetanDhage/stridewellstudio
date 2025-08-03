import { FiMail, FiPhone, FiClock, FiArrowRight, FiCheck } from 'react-icons/fi';
import DrAshwiniImage from '../assets/Dr.Ashwini.jpg'; 


const Experts = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ashwini",
      specialty: "Musculoskeletal Physiotherapy",
      bio: "Specializing in musculoskeletal conditions with extensive experience in manual therapy and pain management to help patients regain mobility and improve quality of life.",
      qualifications: [
        "Master's degree in Physiotherapy","Certified manual practitioner",  "10+ years clinical experience"
      ],
      contact: {
        email: "drashwininathani48@gmail.com",
        phone: "9769057159",
        hours: "Mon-Fri: 9am - 12pm"
      },
     image: DrAshwiniImage},
    {
      id: 2,
      name: "Dr. Sarah Chen",
      specialty: "Geriatric Physiotherapist",
      bio: "12 years specializing in elderly care, mobility improvement, fall prevention, and arthritis management with personalized exercise programs.",
      qualifications: [
        "M.Sc. Geriatric PT",
        "Balance specialist",
        "Fall prevention certified"
      ],
      contact: {
        email: "dr.chen@physioflex.com",
        phone: "+1 (555) 123-4568",
        hours: "Mon-Wed-Fri: 1pm - 5pm"
      },
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      name: "Dr. Robert Garcia",
      specialty: "Orthopedic Specialist",
      bio: "Focusing on post-surgical rehabilitation and complex orthopedic cases with expertise in spine health and joint replacements.",
      qualifications: [
        "DPT Orthopedics",
        "Sports medicine certified",
        "15+ publications"
      ],
      contact: {
        email: "dr.garcia@physioflex.com",
        phone: "+1 (555) 123-4569",
        hours: "Tue-Thu: 10am - 4pm"
      },
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80"
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      specialty: "Pediatric Specialist",
      bio: "Creating fun, engaging therapy programs for children with developmental disorders and childhood injuries.",
      qualifications: [
        "M.Sc. Pediatric PT",
        "Child development expert",
        "8 years experience"
      ],
      contact: {
        email: "dr.sharma@physioflex.com",
        phone: "+1 (555) 123-4570",
        hours: "Mon-Fri: 8am - 2pm"
      },
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
    }
  ];

  return (
    <div className="pt-16 pb-12 bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-800 text-white py-28">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/dot-grid-pattern.svg')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            MEET THE TEAM
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Our Expert <span className="text-teal-300">Physiotherapists</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Certified specialists dedicated to your recovery and wellness journey
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-teal-300 font-medium">{member.specialty}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{member.bio}</p>

                  <div className="space-y-3 mb-6">
                    {member.qualifications.map((qualification, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FiCheck className="w-5 h-5 text-teal-500 mt-1" />
                        <span className="text-gray-700">{qualification}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-sm text-gray-700 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3">
                      <FiMail className="w-5 h-5 text-blue-500" />
                      <a href={`mailto:${member.contact.email}`} className="hover:text-blue-600 transition-colors">
                        {member.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiPhone className="w-5 h-5 text-blue-500" />
                      <a href={`tel:${member.contact.phone.replace(/\D/g, '')}`} className="hover:text-blue-600 transition-colors">
                        {member.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiClock className="w-5 h-5 text-blue-500" />
                      <span>{member.contact.hours}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-md">
                    View Profile
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/circle-grid-pattern.svg')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Recovery?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our specialists are here to create a personalized treatment plan just for you
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-gray-900 font-bold rounded-xl shadow-lg transition-all">
              Book Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl transition-colors hover:bg-white/10">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experts;
