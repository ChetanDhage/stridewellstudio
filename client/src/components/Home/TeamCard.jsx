import { FiCheck, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const TeamCard = ({ member }) => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate(`/doctors/${member.id}`);
  };

  return(
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
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
        
        <button 
        onClick={handleKnowMore} 
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 flex items-center justify-center">
          <FiPlus className="mr-2" /> Know More
        </button>
      </div>
    </div>
  );
};

export default TeamCard;


