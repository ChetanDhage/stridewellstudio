// DrProfile.jsx
import React from 'react';

const DoctorCard = ({ name, specialization, bio, qualifications, email, phone, availability }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-lg text-blue-600 font-medium">{specialization}</p>
        </div>
        
        <p className="text-gray-600 mb-4">{bio}</p>
        
        <div className="mb-4">
          {qualifications.map((qual, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">{qual}</span>
            </div>
          ))}
        </div>
        
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <span className="mr-2">☐</span>
            <span>{email}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📍</span>
            <span>{phone}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🗥</span>
            <span>{availability}</span>
          </div>
        </div>
        
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
          + Know More
        </button>
      </div>
    </div>
  );
};

const DrProfile = () => {
  const doctors = [
    {
      name: "Dr. Ashwini Nathani",
      specialization: "Musculoskeletal Physiotherapy",
      bio: "Hi, I am Dr. Ashwini. I am a dedicated physiotherapist specialising in musculoskeletal...",
      qualifications: ["Master's degree Physiotherapy", "Certified manual practitioner"],
      email: "dreadnwinbathani48@gmail.com",
      phone: "9789057159",
      availability: "9 am to 12 pm"
    },
    {
      name: "Dr. Sarah Chen",
      specialization: "Geriatric Physiotherapist",
      bio: "12 years specializing in elderly care and mobility improvement. Expert in fall prevention,...",
      qualifications: ["M.Sc. Geriatric PT"],
      email: "dreadnwinbathani48@gmail.com",
      phone: "9789057159",
      availability: "9 am to 12 pm"
    },
    {
      name: "Dr. Robert Garcia",
      specialization: "Orthopedic Specialist",
      bio: "10+ years focusing on post-surgical rehabilitation and complex orthopedic cases....",
      qualifications: ["DPT Orthopedics"],
      email: "dreadnwinbathani48@gmail.com",
      phone: "9789057159",
      availability: "9 am to 12 pm"
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Pediatric Specialist",
      bio: "8 years dedicated to pediatric physical therapy. Expert in developmental disorders,...",
      qualifications: ["M.Sc. Pediatric PT"],
      email: "dreadnwinbathani48@gmail.com",
      phone: "9789057159",
      availability: "9 am to 12 pm"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Specialist Doctors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrProfile;