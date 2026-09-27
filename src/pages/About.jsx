import annePhoto from '../assets/anne-photo.jpeg';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-8">
            About Anne
          </h2>

          <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
            <p>
              I am a Cognitive Behavioural Psychotherapist, accredited by the BABCP, with over 20 years’ experience supporting people through difficult and often overwhelming challenges. I know how hard it can be to take that first step, so I aim to offer a calm, compassionate space where you feel safe to talk openly and at your own pace.
            </p>
            <p>
              My career has been within NHS services, working across inpatient, outpatient, and psychological therapies settings. This has given me a broad and flexible approach, helping me support people with a wide range of difficulties, including eating disorders (Binge Eating Disorder, Anorexia Nervosa, Bulimia Nervosa and Avoidant Restrictive Food Intake Disorder), depression, anxiety, social anxiety, phobias, Obsessive Compulsive Disorder, health anxiety, and complex trauma.
            </p>
            <p>
              My professional journey shows both dedication and continuous growth: following an initial degree in Law, I completed a Conversion Diploma in Psychology, a Master’s in Occupational Therapy, and a two-year Postgraduate Diploma in Cognitive Behavioural Therapy, specialising in Eating Disorders, at University College London.
            </p>
            <p>
              My specialist training in CBT Supervision for Eating Disorders at UCL, and my role as the Secretary for the Eating Disorders Specialist Interest Group at the BABCP reflects both my expertise and my passion for this field. I have supervised and trained other clinicians, supporting the development of high-quality, compassionate care. My zeal to want to help people keeps me continuing to learn and stay up to date with current effective approaches, recent Continued Professional Development training include ‘The Neurodiversity Shift: Practical Strategies to Increase the Effectiveness and Inclusiveness of Cognitive Behavior Therapy, May 2026’, ‘Identifying, Assessing and Formulating Dissociation Across Disorders, April 2026’, and ‘Evidence-based approaches to working with people with Avoidant Restrictive Food Intake Disorder, March 2026” with Bespoke Mental Health. This diverse background strengthens my holistic understanding of both mental health and the wider challenges individuals face.
            </p>
            <p>
              I’m based in Kent and offer online therapy, making support more accessible and flexible. Above all, I believe that change is possible, and I will work alongside you with honesty, warmth, and care to help you move towards a life that feels more manageable and fulfilling.
            </p>
          </div>
        </div>

        {/* Right Column: The Actual Image */}
        <div className="w-full h-full">
          {/* 2. Use the imported variable in the src attribute */}
          <img
            src={annePhoto}
            alt="Portrait of Anne"
            className="w-full h-[400px] md:h-[550px] object-cover rounded-3xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}