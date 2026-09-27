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
              Based in Kent | Online Therapy for Adults
            </p>
          </div>
          
          <h1 className="text-5xl lg:text-[4rem] font-serif text-[#242221] mb-8 leading-[1.1]">
            Evidence-based therapy, tailored to you.
          </h1>
          
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg">
            Specialist CBT therapy for adults, with particular expertise in eating disorders.
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
          You may have been managing things on your own for a long time, or simply reached a point where the ways you have been coping no longer feel helpful. Whatever has brought you here, you don’t have to work it all out alone.
        </p>
        <p className="text-lg text-stone-600 leading-relaxed mb-6">
          I’m a BABCP-accredited Cognitive Behavioural Psychotherapist with over 20 years’ experience supporting people through difficult and often overwhelming challenges. I provide warm, compassionate and evidence-based therapy, creating a calm and non-judgemental space where you can feel safe to talk openly and at your own pace.
        </p>        
        <p className="text-lg text-stone-600 leading-relaxed">
          I work with adults experiencing a range of difficulties, including eating disorders, anxiety, depression, social anxiety, phobias, OCD, health anxiety and trauma. I have a particular specialism in eating disorders and difficulties relating to food, eating and body image, including Binge Eating Disorder, Anorexia Nervosa, Bulimia Nervosa and Avoidant Restrictive Food Intake Disorder (ARFID).
        </p>
      </div>

      {/* 3. Approach & Specialisms Grid */}
      <div className="text-center mb-24">
        <h2 className="text-3xl font-serif text-[#242221] mb-4">Evidence-based therapy, tailored to you</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          
          <div className="bg-emerald-50/50 p-10 rounded-3xl border border-emerald-100">
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              Understanding what keeps difficulties going
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              CBT looks at the relationship between our thoughts, feelings, behaviours and physical responses, and how these can become caught in patterns that keep difficulties going. Together, we’ll develop an understanding of what you’re experiencing and explore the patterns that may be maintaining it.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Your therapy will be individualised, collaborative and appropriately challenging. I draw on evidence-based CBT and, where appropriate, other evidence-informed psychological approaches to make sure therapy is suited to your particular difficulties, needs and goals. The aim is not simply to understand what is happening, but to help you develop new ways of responding and make meaningful, sustainable changes.
            </p>
          </div>

          <div className="bg-emerald-50/50 p-10 rounded-3xl border border-emerald-100">
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              Specialist experience in eating disorders
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              My specialist training includes a Postgraduate Diploma in Cognitive Behavioural Therapy specialising in Eating Disorders from University College London (UCL), alongside further specialist training in CBT supervision for eating disorders. I also serve as Secretary of the Eating Disorders Specialist Interest Group at the BABCP and have experience supervising and training other clinicians.
            </p>
            <p className="text-stone-600 leading-relaxed">
              I remain committed to developing my knowledge and keeping my practice current through ongoing professional development, including recent training in neurodiversity-informed CBT, dissociation and ARFID.
            </p>
          </div>

          <div className="bg-emerald-50/50 p-10 rounded-3xl border border-emerald-100">
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              A space to understand, change and move forward
            </h3>
            <p className="text-stone-600 leading-relaxed mb-4">
              I believe therapy works best when you feel understood, respected and able to be yourself. I’ll work alongside you with warmth, honesty and care, while helping you gently challenge patterns that may be keeping you stuck.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              I’m based in Kent and offer therapy online, providing flexible access to support from wherever you feel most comfortable.
            </p>
            <p className="text-stone-600 leading-relaxed font-medium">
              Change is possible. Understanding where you are now is the first step towards finding a way forward.
            </p>
          </div>

        </div>
      </div>
      {/* 4. Call to Action */}
      <div className="text-center mb-24">
        <h2 className="text-3xl font-serif text-[#242221] mb-4">Take the first step</h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
          If you’re considering therapy and would like to find out more, you’re very welcome to get in touch. You don’t need to have everything figured out before contacting me. We can start with a conversation about what you’re experiencing and whether therapy with me feels like the right fit for you.
        </p>
        <button 
          onClick={() => navigate('Contact')}
          className="bg-[#242221] text-white px-10 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors"
        >
          Get in touch →
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