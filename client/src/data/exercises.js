export const exercises = [
  {
    id: 1,
    name: "Pelvic Tilt Exercise",
    description: "A gentle core strengthening exercise that helps with lower back pain and posture",
    category: "Core Strengthening",
    difficulty: "Beginner",
    duration: "5-10 minutes",
    equipment: "None",
    instructions: [
      "Lie on your back with knees bent and feet flat on the floor",
      "Place your hands on your hips",
      "Gently tilt your pelvis to flatten your lower back against the floor",
      "Hold for 5 seconds, then release",
      "Repeat 10 times for 3 sets"
    ],
    benefits: [
      "Strengthens core muscles",
      "Improves posture",
      "Reduces lower back pain",
      "Increases pelvic stability"
    ],
    contraindications: [
      "Severe back pain",
      "Recent back surgery",
      "Pregnancy (consult doctor first)"
    ],
    videoUrl: "https://example.com/exercise1",
    imageUrl: "/src/assets/exercise1.jpg",
    tags: ["core", "back pain", "posture", "beginner"]
  },
  {
    id: 2,
    name: "Cat-Cow Stretch",
    description: "A gentle spinal movement that improves flexibility and reduces back tension",
    category: "Flexibility",
    difficulty: "Beginner",
    duration: "3-5 minutes",
    equipment: "None",
    instructions: [
      "Start on hands and knees with wrists under shoulders and knees under hips",
      "Inhale and arch your back, lifting your head and tailbone (Cow pose)",
      "Exhale and round your back, tucking your chin and tailbone (Cat pose)",
      "Move slowly and smoothly between poses",
      "Repeat 8 times for 2 sets"
    ],
    benefits: [
      "Improves spinal flexibility",
      "Reduces back tension",
      "Enhances breathing",
      "Gentle warm-up exercise"
    ],
    contraindications: [
      "Severe back injury",
      "Recent spinal surgery",
      "Consult doctor if pregnant"
    ],
    videoUrl: "https://example.com/exercise2",
    imageUrl: "/src/assets/exercise2.jpg",
    tags: ["flexibility", "spine", "warm-up", "beginner"]
  },
  {
    id: 3,
    name: "Wall Squats",
    description: "A safe leg strengthening exercise that builds quadriceps and glute strength",
    category: "Leg Strengthening",
    difficulty: "Intermediate",
    duration: "8-10 minutes",
    equipment: "Wall",
    instructions: [
      "Stand with your back against a wall",
      "Feet shoulder-width apart, about 2 feet from the wall",
      "Slide down the wall until your thighs are parallel to the floor",
      "Keep your back flat against the wall",
      "Hold for 30 seconds, then slide back up",
      "Repeat 12 times for 3 sets"
    ],
    benefits: [
      "Strengthens quadriceps",
      "Builds glute strength",
      "Improves balance",
      "Safe for knee rehabilitation"
    ],
    contraindications: [
      "Severe knee pain",
      "Recent knee surgery",
      "Consult doctor for knee problems"
    ],
    videoUrl: "https://example.com/exercise3",
    imageUrl: "/src/assets/exercise3.jpg",
    tags: ["legs", "strength", "knee rehab", "intermediate"]
  },
  {
    id: 4,
    name: "Neck Retraction",
    description: "A posture correction exercise that helps with forward head posture",
    category: "Posture Correction",
    difficulty: "Beginner",
    duration: "2-3 minutes",
    equipment: "None",
    instructions: [
      "Sit or stand with your back straight",
      "Look straight ahead",
      "Gently pull your chin back toward your neck",
      "You should feel a stretch in the back of your neck",
      "Hold for 5 seconds, then release",
      "Repeat 15 times for 4 sets"
    ],
    benefits: [
      "Corrects forward head posture",
      "Reduces neck strain",
      "Improves breathing",
      "Relieves tension headaches"
    ],
    contraindications: [
      "Severe neck pain",
      "Recent neck injury",
      "Consult doctor for neck problems"
    ],
    videoUrl: "https://example.com/exercise4",
    imageUrl: "/src/assets/exercise4.jpg",
    tags: ["posture", "neck", "tension relief", "beginner"]
  },
  {
    id: 5,
    name: "Shoulder Blade Squeezes",
    description: "An upper body exercise that improves shoulder stability and posture",
    category: "Upper Body",
    difficulty: "Beginner",
    duration: "4-5 minutes",
    equipment: "None",
    instructions: [
      "Sit or stand with your arms at your sides",
      "Keep your arms relaxed",
      "Squeeze your shoulder blades together",
      "Hold the squeeze for 3 seconds",
      "Release and relax",
      "Repeat 20 times for 3 sets"
    ],
    benefits: [
      "Strengthens upper back muscles",
      "Improves shoulder stability",
      "Corrects rounded shoulders",
      "Reduces shoulder tension"
    ],
    contraindications: [
      "Severe shoulder pain",
      "Recent shoulder surgery",
      "Consult doctor for shoulder problems"
    ],
    videoUrl: "https://example.com/exercise5",
    imageUrl: "/src/assets/exercise5.jpg",
    tags: ["upper body", "shoulders", "posture", "beginner"]
  },
  {
    id: 6,
    name: "Ankle Alphabet",
    description: "A gentle ankle mobility exercise that improves range of motion",
    category: "Mobility",
    difficulty: "Beginner",
    duration: "3-4 minutes",
    equipment: "None",
    instructions: [
      "Sit with your leg extended",
      "Point your toes and draw the alphabet with your big toe",
      "Make each letter as large as possible",
      "Keep your leg still, only move your ankle",
      "Complete the alphabet 2 times"
    ],
    benefits: [
      "Improves ankle mobility",
      "Reduces stiffness",
      "Helps with balance",
      "Gentle rehabilitation exercise"
    ],
    contraindications: [
      "Severe ankle pain",
      "Recent ankle surgery",
      "Consult doctor for ankle problems"
    ],
    videoUrl: "https://example.com/exercise6",
    imageUrl: "/src/assets/exercise6.jpg",
    tags: ["mobility", "ankle", "rehabilitation", "beginner"]
  }
];

export const treatmentPlans = [
  {
    id: 1,
    patientId: 1,
    patientName: "Sarah Johnson",
    doctorId: 1,
    doctorName: "Dr. Ashwini Patel",
    diagnosis: "Lower back pain with sciatica",
    startDate: "2024-03-15",
    endDate: "2024-04-15",
    status: "Active",
    goals: [
      "Reduce lower back pain from 7/10 to 3/10",
      "Improve mobility score from 6/10 to 8/10",
      "Increase core strength for daily activities",
      "Return to normal daily function"
    ],
    exercises: [
      {
        exerciseId: 1,
        name: "Pelvic Tilt Exercise",
        frequency: "3 times daily",
        sets: 3,
        reps: 10,
        duration: "5 minutes",
        notes: "Start with gentle movements, increase intensity gradually"
      },
      {
        exerciseId: 2,
        name: "Cat-Cow Stretch",
        frequency: "2 times daily",
        sets: 2,
        reps: 8,
        duration: "3 minutes",
        notes: "Focus on smooth, controlled movements"
      }
    ],
    progressNotes: [
      {
        date: "2024-03-18",
        notes: "Patient showing good progress. Pain reduced from 7/10 to 5/10. Can increase pelvic tilt reps to 12.",
        nextSteps: "Continue current exercises, add gentle walking 10 minutes daily"
      }
    ],
    recommendations: [
      "Avoid heavy lifting",
      "Maintain good posture throughout the day",
      "Use lumbar support when sitting",
      "Apply heat therapy for pain relief"
    ]
  },
  {
    id: 2,
    patientId: 2,
    patientName: "Michael Chen",
    doctorId: 2,
    doctorName: "Dr. Prasenjeet Kale",
    diagnosis: "ACL tear rehabilitation post-surgery",
    startDate: "2024-02-01",
    endDate: "2024-05-01",
    status: "Active",
    goals: [
      "Restore full knee range of motion",
      "Rebuild quadriceps and hamstring strength",
      "Improve balance and proprioception",
      "Return to sports activities safely"
    ],
    exercises: [
      {
        exerciseId: 3,
        name: "Wall Squats",
        frequency: "2 times daily",
        sets: 3,
        reps: 12,
        duration: "8 minutes",
        notes: "Focus on proper form and knee alignment"
      },
      {
        exerciseId: 6,
        name: "Ankle Alphabet",
        frequency: "3 times daily",
        sets: 2,
        reps: 1,
        duration: "3 minutes",
        notes: "Helps with overall lower limb coordination"
      }
    ],
    progressNotes: [
      {
        date: "2024-03-16",
        notes: "Excellent recovery progress. Knee feeling stronger, able to walk longer distances. Can progress to single-leg exercises.",
        nextSteps: "Add single-leg balance exercises, continue with current protocol"
      }
    ],
    recommendations: [
      "Wear knee brace during activities",
      "Avoid high-impact activities",
      "Continue with home exercise program",
      "Gradually increase activity level"
    ]
  },
  {
    id: 3,
    patientId: 3,
    patientName: "Emily Rodriguez",
    doctorId: 3,
    doctorName: "Dr. Sanket Devlekar",
    diagnosis: "Chronic neck pain with forward head posture",
    startDate: "2024-01-20",
    endDate: "2024-04-20",
    status: "Active",
    goals: [
      "Reduce neck pain from 6/10 to 2/10",
      "Correct forward head posture",
      "Improve neck mobility and strength",
      "Reduce frequency of tension headaches"
    ],
    exercises: [
      {
        exerciseId: 4,
        name: "Neck Retraction",
        frequency: "4 times daily",
        sets: 4,
        reps: 15,
        duration: "2 minutes",
        notes: "Perform gently, avoid jerky movements"
      },
      {
        exerciseId: 5,
        name: "Shoulder Blade Squeezes",
        frequency: "3 times daily",
        sets: 3,
        reps: 20,
        duration: "4 minutes",
        notes: "Focus on upper back activation"
      }
    ],
    progressNotes: [
      {
        date: "2024-03-17",
        notes: "Patient needs to be more consistent with home exercises. Posture improving but neck still stiff.",
        nextSteps: "Emphasize importance of daily exercise routine, add neck stretches"
      }
    ],
    recommendations: [
      "Maintain good posture at work",
      "Take regular breaks from computer work",
      "Use ergonomic office setup",
      "Apply gentle heat therapy for pain relief"
    ]
  }
];
