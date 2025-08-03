import { FiCheck, FiMail, FiPhone, FiClock, FiArrowLeft } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';

const DoctorProfile = ({ doctors }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the doctor with the matching ID
  const doctor = doctors.find(doc => doc.id === id);
  
  if (!doctor) {
    return <div className="container mx-auto py-12 text-center">Doctor not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition duration-200"
        >
          <FiArrowLeft className="mr-2" /> Back to Team
        </button>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Doctor Image */}
            <div className="md:w-1/3">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Doctor Details */}
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
              <p className="text-blue-600 text-xl font-medium mb-6">{doctor.title}</p>
              
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 mb-4">{doctor.bio}</p>
                
                {doctor.fullBio && (
                  <div className="text-gray-700">
                    {doctor.fullBio.split('\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Qualifications */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualifications</h3>
                  <ul className="space-y-3">
                    {doctor.qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Specializations */}
                {doctor.specializations && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Specializations</h3>
                    <ul className="space-y-3">
                      {doctor.specializations.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Contact Info */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FiMail className="text-blue-500 mr-3 text-lg" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${doctor.email}`} className="text-blue-600 hover:underline">
                        {doctor.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="text-blue-500 mr-3 text-lg" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${doctor.phone}`} className="text-blue-600 hover:underline">
                        {doctor.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiClock className="text-blue-500 mr-3 text-lg" />
                    <div>
                      <p className="text-sm text-gray-500">Availability</p>
                      <p className="text-gray-700">{doctor.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;