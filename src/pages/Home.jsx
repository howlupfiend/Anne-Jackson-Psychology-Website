import { Leaf } from 'lucide-react';
// Make sure this matches your actual image filename and extension!
import homephoto from '../assets/home-temp.png';
export default function Home({ navigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Text Content */}
        <div>
          {/* Branded Leaf Header */}
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
            <p className="text-emerald-700 font-semibold tracking-wider text-sm uppercase mt-1">
              Welcome to a safe space
            </p>
          </div>
          
          <h1 className="text-5xl lg:text-[4rem] font-serif text-[#242221] mb-8 leading-[1.1]">
            Healing your relationship with food & body.
          </h1>
          
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg">
            A compassionate, non-judgmental space offering specialist therapy for eating disorders, disordered eating, and body image concerns. You don't have to navigate this journey alone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('Contact')}
              className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-800 transition-colors"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => navigate('Therapies')}
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3.5 rounded-full font-medium hover:bg-emerald-50 transition-colors"
            >
              Explore Therapies
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="rounded-3xl w-full overflow-hidden shadow-sm">
          <img 
            src={homephoto} 
            alt="Home Photo"
            className="w-full h-auto"
          /> 
        </div>
        
      </div>
    </div>
  );
}