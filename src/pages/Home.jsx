import { Leaf } from 'lucide-react';
import homephoto from '../assets/home-temp.png'; // Ensure this matches your filename

export default function Home({ navigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      {/* 1. Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
            <p className="text-emerald-700 font-semibold tracking-wider text-sm uppercase mt-1">
              Based in Kent | Online therapy for adults
            </p>
          </div>

          <h1 className="text-5xl lg:text-[4rem] font-serif text-[#242221] mb-8 leading-[1.1]">
            Evidence-based therapy, tailored to you.
          </h1>

          <p className="text-lg text-stone-600 mb-4 leading-relaxed max-w-lg">
            Specialist CBT therapy for adults, with particular expertise in eating disorders.
          </p>
          <p className="text-lg text-stone-600 font-medium mb-10">
            You don’t have to figure it all out alone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('Contact')}
              className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-800 transition-colors"
            >
              Take the first step
            </button>
            <button
              onClick={() => navigate('Therapies')}
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3.5 rounded-full font-medium hover:bg-emerald-50 transition-colors"
            >
              Explore approaches
            </button>
          </div>
        </div>

        <div className="rounded-3xl w-full overflow-hidden shadow-sm">
          <img
            src={homephoto}
            alt="Warm and welcoming therapy space"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* 2. Welcome & Credentials */}
      <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-stone-100 mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#242221] mb-6">
          Taking the first step towards therapy can feel daunting.
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
        <h2 className="text-3xl font-serif text-[#242221] mb-4">Take the first step</h2>
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
      <div className="bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-200 text-sm text-stone-600 max-w-4xl mx-auto">
        <p className="font-semibold text-stone-800 mb-3 uppercase tracking-wider text-xs">Important Information</p>
        <p className="font-medium text-stone-700 mb-2">This private practice is not an emergency or crisis service.</p>
        <p className="mb-2">
          If you are in immediate danger or believe that you or someone else is at immediate risk of serious harm, contact <strong>999</strong> or attend your nearest Accident & Emergency department.
        </p>
        <p>
          For urgent mental health support in England, you can contact <strong>NHS 111</strong> and select the mental health option where available. You may also contact your GP or local urgent mental health service.
        </p>
      </div>

    </div>
  );
}