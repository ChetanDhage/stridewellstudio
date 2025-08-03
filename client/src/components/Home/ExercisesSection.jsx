import { FiArrowRight } from 'react-icons/fi';
import ExerciseCard from '../shared/ExerciseCard';

const ExercisesSection = ({ featuredExercises }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
              EXERCISE LIBRARY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Evidence-Based <span className="text-blue-500">Protocols</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Clinically-proven routines for targeted rehabilitation
            </p>
          </div>
          <button className="flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all">
            View all exercises <FiArrowRight className="ml-2" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExercisesSection;