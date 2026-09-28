import annePhoto from '../assets/anne-photo.jpeg'; // Make sure this matches your image name

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Side-by-Side Layout Grid */}
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Image Column (Takes up 5 out of 12 columns on desktop) */}
        {/* We use 'sticky top-24' so the image stays in view if the text is very long */}
        <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-24">
          <div className="relative">
            {/* Optional decorative background block to make the image pop */}
            <div className="absolute inset-0 bg-emerald-50 rounded-3xl transform translate-x-3 translate-y-3 -z-10"></div>
            <img
              src={annePhoto}
              alt="Anne - Cognitive Behavioural Psychotherapist"
              // We switch back to object-cover, but force a nice portrait aspect ratio
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-sm border border-stone-100"
            />
          </div>
        </div>
        {/* Text Column (Takes up 7 out of 12 columns on desktop) */}
        <div className="md:col-span-7 lg:col-span-8 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-8">
            About Me
          </h1>

          <div className="text-lg text-stone-600 leading-relaxed space-y-6">
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
      </div>
    </div>
  );
}