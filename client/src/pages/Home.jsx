import HeroSection from '../components/Home/HeroSection';
import TrustIndicators from '../components/Home/TrustIndicators';
import FeaturesSection from '../components/Home/FeaturesSection';
import ExercisesSection from '../components/Home/ExercisesSection';
import StatsSection from '../components/Home/StatsSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import PricingSection from '../components/Home/PricingSection';
import AppointmentSection from '../components/Home/AppointmentSection';
import TeamSection from '../components/Home/TeamSection';
import FAQSection from '../components/Home/FAQSection';
import CTASection from '../components/Home/CTASection';
import DrAshwiniImage from '../assets/dr_ashwini.jpg';
import TestimonialCard from '../components/shared/TestimonialCard';




const mainHome = () => {
  // Data for the exercises section 
  const featuredExercises = [ 
    {
      id: 1,
      title: 'Knee Rehabilitation',
      description: 'Gentle exercises to strengthen knee joints',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'Knee',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Back Pain Relief',
      description: 'Stretches to alleviate lower back pain',
      duration: '20 min',
      difficulty: 'Intermediate',
      category: 'Back',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80'
    },
    {
      id: 3,
      title: 'Shoulder Mobility',
      description: 'Improve range of motion in shoulders',
      duration: '10 min',
      difficulty: 'Beginner',
      category: 'Shoulder',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  // Data for testimonials section
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Patient',
      content: 'After my knee surgery, PhysioFlex helped me regain full mobility in just 8 weeks. The personalized exercises made all the difference!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Orthopedic Surgeon',
      content: 'I recommend PhysioFlex to all my post-op patients. The platform makes it easy to track progress and adjust treatment plans.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Senior Patient',
      content: 'As an older adult, I was nervous about exercising at home. The clear instructions and modifications made me feel safe and confident.',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  // Data for pricing section
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      price: '$19',
      period: 'month',
      features: [
        'Access to basic exercises',
        '1 consultation per month',
        'Progress tracking',
        'Email support'
      ],
      featured: false,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Premium',
      price: '$49',
      period: 'month',
      features: [
        'All exercises unlocked',
        '4 consultations per month',
        'Personalized plans',
        'Priority support',
        'Video call sessions'
      ],
      featured: true,
      color: 'teal'
    },
    {
      id: 3,
      name: 'Annual',
      price: '$399',
      period: 'year',
      features: [
        'All premium features',
        'Unlimited consultations',
        'Family plan (up to 3 users)',
        '24/7 support',
        'Free health assessments'
      ],
      featured: false,
      color: 'indigo'
    }
  ];

  // Data for team section
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ashwini",
      title: "Musculoskeletal Physiotherapy",
      bio: "Hi, I am Dr. Ashwini. I am a dedicated physiotherapist specialising in musculoskeletal conditions. With a Bachelor's and Master's degree in Physiotherapy...",
      qualifications: [
        "Master's degree Physiotherapy",
        "Certified manual practitioner"
      ],
      email: "dreachwinbathani48@gmail.com",
      address: "Shop no 06, building number 12, Dignity chapel, Kedamath mandir, Nehru Nagar, Kurla East",
      phone: "9789057159",
      hours: "9 am to 12 pm",
      image: DrAshwiniImage },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      title: "Geriatric Physiotherapist",
      bio: "12 years specializing in elderly care and mobility improvement. Expert in fall prevention, arthritis management, and gentle rehabilitation techniques...",
      qualifications: [
        "M.Sc. Geriatric PT"
      ],
      email: "dreachwinbathani48@gmail.com",
      address: "Shop no 06, building number 12, Dignity chapel, Kedamath mandir, Nehru Nagar, Kurla East",
      phone: "9789057159",
      hours: "9 am to 12 pm",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
    },
    {
      id: 3,
      name: "Dr. Robert Garcia",
      title: "Orthopedic Specialist",
      bio: "10+ years focusing on post-surgical rehabilitation and complex orthopedic cases. Specializes in spine health, joint replacements...",
      qualifications: [
        "DPT Orthopedics"
      ],
      email: "dreachwinbathani48@gmail.com",
      address: "Shop no 06, building number 12, Dignity chapel, Kedamath mandir, Nehru Nagar, Kurla East",
      phone: "9789057159",
      hours: "9 am to 12 pm",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      title: "Pediatric Specialist",
      bio: "8 years dedicated to pediatric physical therapy. Expert in developmental disorders, childhood injuries, and creating engaging therapy programs...",
      qualifications: [
        "M.Sc. Pediatric PT"
      ],
      email: "dreachwinbathani48@gmail.com",
      address: "Shop no 06, building number 12, Dignity chapel, Kedamath mandir, Nehru Nagar, Kurla East",
      phone: "9789057159",
      hours: "9 am to 12 pm",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TrustIndicators />
      <FeaturesSection />
      <ExercisesSection featuredExercises={featuredExercises} />
      <StatsSection />
      <TestimonialsSection testimonials={testimonials} />
      <PricingSection pricingPlans={pricingPlans} />
      <AppointmentSection />
      <TeamSection teamMembers={teamMembers} />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default mainHome;