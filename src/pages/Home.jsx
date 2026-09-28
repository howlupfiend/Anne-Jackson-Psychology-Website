import { Leaf, AlertCircle } from 'lucide-react';
import homephoto from '../assets/bluebell-field.jpeg'; // Ensure this matches your filename

export default function Home({ navigate }) {
  return (
    <div className="w-full">
      
      {/* 1. Full-Bleed Hero Section (Touches navbar, full width) */}
      <div className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center mb-24">
        
        {/* Background Image */}
        <img
          src={homephoto}
          alt="Warm and welcoming therapy space"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Global Overlay - Kept light so the photo edges still shine through */}
        <div className="absolute inset-0 bg-white/30 md:bg-gradient-to-r md:from-white/70 md:via-white/40 md:to-transparent z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          
          {/* TEXT CONTAINER with Frosted Glass effect for mobile legibility */}
          <div className="max-w-2xl bg-white/85 backdrop-blur-md p-6 sm:p-10 rounded-3xl md:bg-transparent md:backdrop-blur-none md:p-0 shadow-lg shadow-black/5 md:shadow-none">
            
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
              <p className="text-emerald-700 font-semibold tracking-wider text-sm uppercase mt-1">
                Based in Kent | Online therapy for adults
              </p>
            </div>

            <h1 className="text-5xl lg:text-[4rem] font-serif text-[#242221] mb-6 leading-[1.1]">
              Evidence-based therapy, tailored to you.
            </h1>

            <p className="text-lg text-stone-800 font-medium mb-8 leading-relaxed max-w-lg">
              Specialist Cognitive Behavioural Therapy (CBT) for adults, with particular expertise in eating disorders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('Therapies')}
                className="border-2 border-emerald-700 text-emerald-700 bg-white/80 backdrop-blur-sm px-8 py-3.5 rounded-full font-medium hover:bg-emerald-50 transition-colors"
              >
                Explore approaches
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Rest of the page content - Wrapped in the standard width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        
        {/* 2. Welcome & Credentials */}
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-stone-100 mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#242221] mb-6">
            You don’t have to figure it all out alone.
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-6">
            I offer a calm, compassionate and safe space where you can feel heard, understood and supported to make meaningful and sustainable changes.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed font-medium">
            I’m a BABCP-accredited Cognitive Behavioural Psychotherapist with over 20 years’ experience supporting adults with difficulties including eating disorders, anxiety, depression, and trauma.
          </p>
        </div>

        {/* 3. Approach & Specialisms Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          
          <div className="bg-emerald-50/50 p-10 rounded-3xl border border-emerald-100">
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              A collaborative, individualised approach
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              My approach is collaborative and individualised. Using evidence-based CBT and other psychological approaches where appropriate, we’ll work together to understand how your difficulties have developed and what may be keeping them going. 
            </p>
            <p className="text-stone-600 leading-relaxed">
              We’ll develop a shared understanding of what you’re experiencing and find ways forward that are right for you.
            </p>
          </div>

          <div className="bg-emerald-50/50 p-10 rounded-3xl border border-emerald-100">
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              Specialist expertise
            </h3>
            <p className="text-stone-600 leading-relaxed">
              I have a particular specialism in eating disorders and difficulties with food, eating and body image, including Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder and ARFID.
            </p>
          </div>

        </div>

        {/* 4. Call to Action */}
        <div className="text-center mb-24">
          <p className="text-xl text-stone-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            If you’re considering therapy, I’m here to answer your questions and help you decide whether working together feels right for you.
          </p>
          <button 
            onClick={() => navigate('Contact')}
            className="bg-[#242221] text-white px-10 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors"
          >
            Get in touch &rarr;
          </button>
        </div>

      {/* 5. Crisis / Emergency Disclaimer */}
      <div className="bg-rose-50 p-6 md:p-8 rounded-2xl border border-rose-100 text-sm text-rose-800 max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-start shadow-sm">
        
        <AlertCircle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
        
        <div>
          <p className="font-bold text-rose-900 mb-2 uppercase tracking-wider text-xs">
            Important Information
          </p>
          <p className="mb-2">
            <strong>This practice is not a crisis service.</strong>
          </p>
          <p>
            If you or someone else is in immediate danger, please call <strong>999</strong> or go to your nearest A&E.
          </p>
          <p>
            For urgent mental health support, call <strong>NHS 111</strong>, contact your GP, or reach out to your local mental health service.
          </p>
        </div>
        
      </div>

      </div>
    </div>
  );
}