import React, { useState } from 'react';

// 1. Accept the 'navigate' function as a prop
export default function Therapies({ navigate }) {
  // Track which card indices are expanded (e.g., [0] means the first card is open)
  const [expandedCards, setExpandedCards] = useState([]);

  // Toggle function for a specific card index
  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter((i) => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-emerald-700 font-semibold tracking-wider text-sm mb-4 uppercase">
          Specialist Treatment
        </p>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-6">
          Therapeutic Approaches
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          I provide a warm, non-judgmental space tailored to your unique needs. By drawing on evidence-based models and the latest clinical training, we can work together to find the most effective path forward for your healing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        
        {/* --- Card 1: Eating Disorders (Index 0) --- */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 transition-shadow hover:shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              Eating Disorders
            </h3>
            
            {/* Short preview text always visible */}
            <p className="text-stone-600 leading-relaxed">
              Eating difficulties can affect far more than what, when or how much someone eats. They can influence how a person feels about themselves, their body and their relationships, and may become intertwined with emotional wellbeing, self-worth, perfectionism, previous experiences or sensory sensitivities. I offer specialist, evidence-based CBT for adults experiencing eating disorders and difficulties relating to food and body image, with treatment tailored to the individual.
            </p>

            {/* Hidden content shown only when expanded */}
            {expandedCards.includes(0) && (
              <p className="text-stone-600 leading-relaxed mt-4">
                <br />
                Eating disorders can present in many different ways. They may involve restricting food, following increasingly rigid rules, binge eating, purging, excessive exercise, checking or avoiding particular foods and situations. For some people, concerns about weight or shape are central. For others, including people experiencing ARFID, difficulties may be associated with sensory characteristics of food, a fear of consequences such as choking or vomiting, or having little interest in eating. The reasons behind an eating difficulty can therefore be very different from one person to another.
                <br /><br />
                Enhanced Cognitive Behavioural Therapy (CBT-E) is my main approach, a leading evidence-based and internationally recommended approach used with a range of adult eating disorders. Where appropriate, I may also draw on other specialist CBT approaches to tailor therapy to your individual needs. These may include Cognitive Behavioural Therapy-Ten (CBT-T), a shorter CBT approach for eating disorders, and Cognitive Behavioural Therapy-Twenty (CBT-20-AN), an emerging approach specifically developed for anorexia nervosa. The treatment we use will depend on your individual difficulties, needs and goals. For ARFID, Cognitive Behavioural Therapy for ARFID (CBT-AR) is a specialist approach developed specifically to address the different pathways through which ARFID can develop and be maintained. Other evidence-based CBT strategies may also be incorporated according to your individual needs including from Schema Therapy, or Compassion Focused Therapy (CFT).
                <br /><br />
                The aim is to provide specialist support that recognises the complexity of eating difficulties while helping you work towards greater flexibility around food, eating and body image, and a life that is less restricted by the eating difficulty.
              </p>
            )}
          </div>

          <button 
            onClick={() => toggleCard(0)} 
            className="mt-6 text-emerald-700 font-medium hover:text-emerald-800 text-left transition-colors self-start cursor-pointer"
          >
            {expandedCards.includes(0) ? 'Show Less ↑' : 'Read More ↓'}
          </button>
        </div>

        {/* --- Card 2: Anxiety (Index 1) --- */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 transition-shadow hover:shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              Anxiety
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Anxiety is a natural response that helps us recognise potential danger, prepare for challenges and respond to situations that feel important. However, anxiety can become problematic when fear and worry begin to have too much influence over everyday life. This might involve avoiding situations, seeking reassurance, checking, trying to control uncertainty or spending a great deal of time anticipating what might go wrong.
            </p>

            {expandedCards.includes(1) && (
              <p className="text-stone-600 leading-relaxed mt-4">
                <br />
                Anxiety can present in many different ways. For some people, it may involve panic attacks or fears relating to social situations, health, travelling, or particular situations. For others, worry may move between different areas of life, making it difficult to switch off or feel confident about the future. Anxiety can also be influenced by previous experiences, physical sensations, sensory sensitivities and other individual circumstances, meaning that two people experiencing anxiety may have very different experiences.
                <br /><br />
                Treatment uses Cognitive Behavioural Therapy (CBT), a well-established psychological therapy with a substantial body of research supporting its effectiveness, and is recommended by the National Institute for Health and Care Excellence (NICE) for many common mental health difficulties. Other evidence-based CBT strategies may also be incorporated according to your individual needs including from Schema Therapy, or Compassion Focused Therapy (CFT).
                <br /><br />
                Therapy starts with understanding your individual experience of anxiety and the role it plays in your life. We will explore what you are afraid might happen, how you currently respond when anxiety appears and whether those responses are helping in the longer term. Together, we can identify patterns that may be maintaining anxiety and consider new ways of responding. This may include gradually approaching situations that have become difficult, testing anxious predictions, reducing unhelpful safety behaviours or developing greater tolerance of uncertainty.
                <br /><br />
                The goal is not necessarily to eliminate anxiety completely. Anxiety is a normal part of being human, and some level of uncertainty and discomfort cannot always be avoided. Instead, therapy aims to help you feel more confident in responding to anxiety, so that fear and worry have less control over your choices and you can spend more time living in ways that are meaningful to you.
              </p>
            )}
          </div>

          <button 
            onClick={() => toggleCard(1)} 
            className="mt-6 text-emerald-700 font-medium hover:text-emerald-800 text-left transition-colors self-start cursor-pointer"
          >
            {expandedCards.includes(1) ? 'Show Less ↑' : 'Read More ↓'}
          </button>
        </div>

        {/* --- Card 3: Trauma (Index 2) --- */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 transition-shadow hover:shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              Trauma
            </h3>
            <p className="text-stone-600 leading-relaxed">
              I offer evidence-based, trauma informed therapy for people who have been affected by experiences that have felt overwhelming, frightening or difficult to process. Trauma can result from a single event or from experiences that happen repeatedly over time. It can include difficult relationships, loss, or situations where you have felt powerless, unsafe or unable to influence what was happening. The impact of an experience is personal, and something that may not appear traumatic to others can still have a significant effect.
            </p>

            {expandedCards.includes(2) && (
              <p className="text-stone-600 leading-relaxed mt-4">
                <br />
                Following difficult experiences, the mind and body can remain sensitive to reminders of what happened, even when the original situation has ended. This can lead to intrusive memories or nightmares, avoidance, feeling constantly alert, emotional numbness, difficulties with trust or relationships, shame, self-blame or feeling disconnected from yourself or others. Sometimes reactions can seem difficult to explain, particularly when your body responds strongly to something before you consciously recognise the connection with the past.
                <br /><br />
                Therapy provides an opportunity to understand how your experiences have affected you and why certain responses may have developed. Together, we will explore what is happening now and identify patterns that may be keeping you feeling stuck. Depending on your individual needs, therapy can incorporate evidence-based Trauma-Focused Cognitive Behavioural Therapy (TF-CBT), a well-established, evidence-based approach that helps people process traumatic experiences and reduce the ongoing impact of trauma-related thoughts, memories, emotions and behaviours. Other evidence-based CBT strategies may also be incorporated according to your individual needs including from Schema Therapy, or Compassion Focused Therapy (CFT).
                <br /><br />
                The aim is not to change or erase your past, but to reduce the hold that past experiences may have on your present, helping you develop greater choice, safety and freedom in how you respond to yourself, others and the world around you.
              </p>
            )}
          </div>

          <button 
            onClick={() => toggleCard(2)} 
            className="mt-6 text-emerald-700 font-medium hover:text-emerald-800 text-left transition-colors self-start cursor-pointer"
          >
            {expandedCards.includes(2) ? 'Show Less ↑' : 'Read More ↓'}
          </button>
        </div>

        {/* --- Card 4: Depression (Index 3) --- */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 transition-shadow hover:shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-serif text-[#242221] mb-4">
              Depression
            </h3>
            <p className="text-stone-600 leading-relaxed">
              I offer evidence-based therapy for depression and persistent low mood. Depression is more than simply feeling sad; it can affect motivation, energy, sleep, concentration, confidence, relationships and the ability to enjoy things that previously felt meaningful. It can develop following difficult life experiences or gradually over time, sometimes without an obvious cause.
            </p>

            {expandedCards.includes(3) && (
              <p className="text-stone-600 leading-relaxed mt-4">
                <br />
                Depression can affect everyday life in many ways. You may find yourself withdrawing from others, struggling to complete everyday tasks, losing interest in activities or spending more time thinking about problems, mistakes or perceived shortcomings. Low mood can also influence how you view yourself, other people and the future, sometimes leading to feelings of hopelessness, worthlessness or disconnection.
                <br /><br />
                Depression can become self-perpetuating when low mood leads to withdrawing, avoiding activities or doing less of the things that previously provided enjoyment, connection or a sense of achievement. Negative thinking and self-criticism can further reinforce these patterns, making it increasingly difficult to see possibilities for change. Therapy helps us understand these cycles and identify manageable ways to begin changing them.
                <br /><br />
                Treatment uses Cognitive Behavioural Therapy (CBT), a well-established psychological therapy with a substantial body of research supporting its effectiveness, and is recommended by the National Institute for Health and Care Excellence (NICE) for many common mental health difficulties. Other evidence-based CBT strategies may also be incorporated according to your individual needs including from Schema Therapy, or Compassion Focused Therapy (CFT).
              </p>
            )}
          </div>

          <button 
            onClick={() => toggleCard(3)} 
            className="mt-6 text-emerald-700 font-medium hover:text-emerald-800 text-left transition-colors self-start cursor-pointer"
          >
            {expandedCards.includes(3) ? 'Show Less ↑' : 'Read More ↓'}
          </button>
        </div>

      </div>

      <div className="mt-16 text-center">
        <p className="text-stone-600 mb-6">
          Unsure which approach is right for you? We can discuss this during your initial consultation.
        </p>
        <button 
          onClick={() => navigate('Contact')}
          className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-800 transition-colors"
        >
          Book a Consultation
        </button>
      </div>

    </div>
  );
}