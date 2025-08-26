
import { useState, useEffect } from 'react';
import { FiFilter, FiSearch, FiX } from 'react-icons/fi';
import ExerciseCard from '../components/Shared/ExerciseCard';

const Exercises = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const exerciseCategories = [
    { id: 'all', name: 'All Exercises' },
    { id: 'knee', name: 'Knee' },
    { id: 'back', name: 'Back' },
    { id: 'shoulder', name: 'Shoulder' },
    { id: 'neck', name: 'Neck' },
    { id: 'post-surgery', name: 'Post-Surgery' }
  ];

  const difficultyLevels = [
    { id: 'beginner', name: 'Beginner', color: 'bg-green-100 text-green-800' },
    { id: 'intermediate', name: 'Intermediate', color: 'bg-blue-100 text-blue-800' },
    { id: 'advanced', name: 'Advanced', color: 'bg-purple-100 text-purple-800' }
  ];

  const exercises = [
    {
      id: 1,
      title: 'Knee Strengthening',
      description: 'Gentle exercises to strengthen knee joints and improve mobility',
      duration: '15 min',
      difficulty: 'beginner',
      category: 'knee',
      image: '/images/knee-exercise.jpg',
      equipment: ['None'],
      calories: 120,
      rating: 4.8,
      completed: 320,
      therapist: { name: 'Dr. Sarah', specialty: 'Orthopedic' }
    },
    {
      id: 2,
      title: 'Lower Back Pain Relief',
      description: 'Stretches and exercises to alleviate chronic lower back pain',
      duration: '20 min',
      difficulty: 'intermediate',
      category: 'back',
      image: '/images/back-exercise.jpg',
      equipment: ['Yoga Mat'],
      calories: 180,
      rating: 4.6,
      completed: 500,
      therapist: { name: 'Dr. Michael', specialty: 'Sports Medicine' }
    },
    {
      id: 3,
      title: 'Shoulder Mobility Routine',
      description: 'Improve range of motion and reduce stiffness in shoulders',
      duration: '10 min',
      difficulty: 'beginner',
      category: 'shoulder',
      image: '/images/shoulder-exercise.jpg',
      equipment: ['Resistance Band'],
      calories: 90,
      rating: 4.7,
      completed: 280,
      therapist: { name: 'Dr. Emily', specialty: 'Geriatric' }
    },
    {
      id: 4,
      title: 'Post-Surgery Recovery',
      description: 'Safe exercises to regain strength after orthopedic surgery',
      duration: '25 min',
      difficulty: 'beginner',
      category: 'post-surgery',
      image: '/images/surgery-exercise.jpg',
      equipment: ['None'],
      calories: 150,
      rating: 4.9,
      completed: 430,
      therapist: { name: 'Dr. Sarah', specialty: 'Orthopedic' }
    },
    {
      id: 5,
      title: 'Neck Pain Relief',
      description: 'Exercises to relieve tension and improve neck mobility',
      duration: '12 min',
      difficulty: 'intermediate',
      category: 'neck',
      image: '/images/neck-exercise.jpg',
      equipment: ['None'],
      calories: 80,
      rating: 4.5,
      completed: 370,
      therapist: { name: 'Dr. Emily', specialty: 'Geriatric' }
    },
    {
      id: 6,
      title: 'Advanced Knee Rehabilitation',
      description: 'Challenging exercises for advanced knee recovery',
      duration: '18 min',
      difficulty: 'advanced',
      category: 'knee',
      image: '/images/knee-advanced.jpg',
      equipment: ['Resistance Band', 'Yoga Mat'],
      calories: 200,
      rating: 4.7,
      completed: 620,
      therapist: { name: 'Dr. Michael', specialty: 'Sports Medicine' }
    }
  ];

  const toggleDifficulty = (difficulty) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty) ? prev.filter((d) => d !== difficulty) : [...prev, difficulty]
    );
  };

  const filteredExercises = exercises.filter((exercise) => {
    const matchesCategory = activeFilter === 'all' || exercise.category === activeFilter;
    const matchesSearch =
      exercise.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(exercise.difficulty.toLowerCase());
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const clearFilters = () => {
    setActiveFilter('all');
    setSearchQuery('');
    setSelectedDifficulties([]);
  };

  return (
    <div className="pt-24 pb-12">
      {/* Sticky Search + Filters Bar */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-40 py-2 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search exercises..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="ml-4 flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700"
            >
              <FiFilter className="mr-2" />
              Filters
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Exercise Library</h1>
          <p className="text-lg text-gray-600">Browse our collection of physiotherapy exercises curated by professionals</p>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:block mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="relative flex-grow max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search exercises by title or description..."
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {(searchQuery || activeFilter !== 'all' || selectedDifficulties.length > 0) && (
              <button onClick={clearFilters} className="flex items-center text-sm text-blue-600 hover:text-blue-700 whitespace-nowrap">
                <FiX className="mr-1" /> Clear filters
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {exerciseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-700">Difficulty:</span>
            {difficultyLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => toggleDifficulty(level.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  selectedDifficulties.includes(level.id)
                    ? `${level.color} border border-transparent shadow-inner`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filters Button */}
        <div className="md:hidden mb-6">
          <button
            className="w-full flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-700"
          >
            <FiFilter className="mr-2" />
            Filter Exercises
          </button>
        </div>

        {/* Exercises Grid */}
        {filteredExercises.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                index={index}
                isFavorite={favorites.includes(exercise.id)}
                onToggleFavorite={() => toggleFavorite(exercise.id)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No exercises found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
