import { useState, useRef } from 'react';
import { Leaf, AlertCircle, Quote, Star, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import homephoto from '../assets/bluebell-field.jpeg'; // Ensure this matches your filename

export default function Home({ navigate }) {
  const [expandedFeedback, setExpandedFeedback] = useState({
    eating: false,
    cbt: false,
  });

  const toggleFeedback = (key) => {
    setExpandedFeedback((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Horizontal Scrolling Review Carousel State
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const reviewScrollRef = useRef(null);

  const reviewPages = [
    // Page 1: 4 Reviews
    [
      {
        id: 1,
        stars: 5,
        title: "A safe, compassionate space",
        quote: "Anne made me feel completely heard from our very first consultation. Her patience and warmth helped me open up about thoughts I had kept to myself for years.",
        author: "CBT Client",
        tag: "Anxiety & Panic",
        date: "Verified Client"
      },
      {
        id: 2,
        stars: 5,
        title: "Specialist eating disorder support",
        quote: "Having a therapist who truly understands the complexity of eating difficulties was transformative. The CBT-E strategies gave me practical tools to challenge old habits.",
        author: "Adult Client",
        tag: "Eating Disorder Recovery",
        date: "Verified Client"
      },
      {
        id: 3,
        stars: 5,
        title: "Gently challenged to make progress",
        quote: "I really valued having someone who was both deeply supportive and willing to appropriately challenge my avoidance. I finally feel back in control of my daily life.",
        author: "Anonymous Client",
        tag: "Health & Social Anxiety",
        date: "Verified Client"
      },
      {
        id: 4,
        stars: 5,
        title: "Practical tools that last",
        quote: "The skills I learned during therapy have stayed with me long after our sessions finished. I now have the confidence and resilience to handle difficult days.",
        author: "Online Therapy Client",
        tag: "Depression & Low Mood",
        date: "Verified Client"
      }
    ],
    // Page 2: 4 Reviews
    [
      {
        id: 5,
        stars: 5,
        title: "Online therapy was seamless",
        quote: "I was initially unsure about online therapy, but Anne made it feel just as personal and safe as being in the same room. It fit into my working week perfectly.",
        author: "Adult Client",
        tag: "Online CBT",
        date: "Verified Client"
      },
      {
        id: 6,
        stars: 5,
        title: "Understanding maintaining cycles",
        quote: "Breaking down how my thoughts, physical feelings, and behaviours fed into each other gave me clarity. For the first time, my difficulties finally made sense.",
        author: "CBT Client",
        tag: "OCD & Intrusive Thoughts",
        date: "Verified Client"
      },
      {
        id: 7,
        stars: 5,
        title: "Empathetic & professional",
        quote: "Anne's specialist NHS background and calm insight shone through. She tailored every single session to what I needed while keeping our recovery goals in focus.",
        author: "Client",
        tag: "Trauma & Difficult Experiences",
        date: "Verified Client"
      },
      {
        id: 8,
        stars: 5,
        title: "Lifelong self-compassion",
        quote: "Beyond the practical exercises, therapy taught me how to treat myself with kindness instead of harsh criticism. That shift has been truly life-changing.",
        author: "Adult Client",
        tag: "Self-Esteem & Recovery",
        date: "Verified Client"
      }
    ]
  ];

  const handleScrollReviews = () => {
    if (reviewScrollRef.current) {
      const { scrollLeft, clientWidth } = reviewScrollRef.current;
      const pageIndex = Math.round(scrollLeft / clientWidth);
      if (pageIndex !== currentReviewPage && pageIndex >= 0 && pageIndex < reviewPages.length) {
        setCurrentReviewPage(pageIndex);
      }
    }
  };

  const scrollToReviewPage = (pageIdx) => {
    if (reviewScrollRef.current) {
      const clientWidth = reviewScrollRef.current.clientWidth;
      reviewScrollRef.current.scrollTo({
        left: pageIdx * clientWidth,
        behavior: 'smooth'
      });
      setCurrentReviewPage(pageIdx);
    }
  };

  const handlePrevReviewPage = () => {
    if (currentReviewPage > 0) {
      scrollToReviewPage(currentReviewPage - 1);
    }
  };

  const handleNextReviewPage = () => {
    if (currentReviewPage < reviewPages.length - 1) {
      scrollToReviewPage(currentReviewPage + 1);
    }
  };
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

        {/* 4. What Clients Have Said / Review Cards */}
        <div className="mb-24">

          {/* Section Header & Confidentiality Note */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Quote className="w-3.5 h-3.5 text-emerald-600" />
              <span>What Clients Have Said</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-[#242221] mb-5">
              Reflections from Therapy
            </h2>

            <div className="bg-stone-50 border border-stone-200/70 text-stone-600 text-sm p-4 sm:p-5 rounded-2xl max-w-2xl mx-auto text-left sm:text-center leading-relaxed shadow-xs">
              <strong className="text-stone-800 font-medium">Confidentiality Note: </strong>
              The following is a composite summary of feedback shared by clients about their experience of therapy. It has been written to protect confidentiality and does not identify any individual client.
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Card 1: Eating Difficulties */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>

                {/* Review Header Badge & Stars */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-stone-100">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-medium text-stone-500 ml-2">Composite Client Feedback</span>
                    </div>
                    <h3 className="text-2xl font-serif text-[#242221]">
                      Eating Difficulties
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mt-1">
                      Specialist CBT Support & Recovery
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Initial Visible Paragraphs */}
                <div className="text-stone-600 leading-relaxed space-y-4 text-base">
                  <p>
                    Clients I have worked with for eating difficulties have described <strong>feeling heard, understood and taken seriously</strong>, often after previous experiences where they felt misunderstood or unsure that therapy was right for them.
                  </p>
                  <p>
                    Clients have particularly valued having a therapist who understands the complexity of eating disorders and takes time to understand the individual person behind the difficulties. They have described therapy as a safe, compassionate space where they could talk openly, while also being appropriately challenged when this was needed.
                  </p>

                  {/* Expandable Content (Shown when toggled) */}
                  {expandedFeedback.eating && (
                    <div className="space-y-4 pt-2">
                      <p>
                        Feedback has highlighted the value of developing a clearer understanding of eating difficulties and the patterns that can keep them going, alongside learning practical strategies to make meaningful changes. Clients have described <strong>becoming more able to approach food, challenge unhelpful behaviours and beliefs, and develop greater confidence and self-compassion</strong>.
                      </p>
                      <p>
                        For some, therapy has also helped them understand how eating difficulties can connect with anxiety, self-esteem, trauma and other areas of their lives. Clients have valued being supported to recognise their progress, build on their own strengths and gradually develop the <strong>confidence to continue using the skills they have learned beyond therapy</strong>.
                      </p>
                      <p className="font-medium text-stone-800 bg-stone-50 p-4 rounded-xl border border-stone-100">
                        <strong>Above all, clients have described feeling seen, understood and supported, while having the specialist knowledge, encouragement and appropriate challenge to help them work towards meaningful recovery.</strong>
                      </p>
                    </div>
                  )}
                </div>

              </div>

              {/* Show More / Show Less Toggle Button */}
              <button
                type="button"
                onClick={() => toggleFeedback('eating')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors self-start cursor-pointer group"
                aria-expanded={expandedFeedback.eating}
              >
                <span>{expandedFeedback.eating ? 'Show less feedback' : 'Read full feedback'}</span>
                {expandedFeedback.eating ? (
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </div>

            {/* Card 2: CBT */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>

                {/* Review Header Badge & Stars */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-stone-100">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-medium text-stone-500 ml-2">Composite Client Feedback</span>
                    </div>
                    <h3 className="text-2xl font-serif text-[#242221]">
                      Cognitive Behavioural Therapy (CBT)
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mt-1">
                      Anxiety, Mood, Trauma & Life Difficulties
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Initial Visible Paragraphs */}
                <div className="text-stone-600 leading-relaxed space-y-4 text-base">
                  <p>
                    Clients have described therapy as a place where they have felt <strong>safe, listened to and genuinely understood</strong>. For many, <strong>developing a trusting therapeutic relationship</strong> has been an important part of feeling able to talk openly about difficulties that had become overwhelming or difficult to manage alone.
                  </p>
                  <p>
                    Clients have valued an approach that is <strong>compassionate, patient and individualised</strong>, while also providing appropriate challenge when this could help them move forward. Feedback has highlighted the importance of having things explained clearly, exploring difficulties in depth and having therapy adapted to what each person needs.
                  </p>

                  {/* Expandable Content (Shown when toggled) */}
                  {expandedFeedback.cbt && (
                    <div className="space-y-4 pt-2">
                      <p>
                        Clients have particularly appreciated learning practical CBT strategies to help them understand the connection between their thoughts, feelings and behaviours, recognise patterns that may be maintaining difficulties and approach situations they may previously have avoided. Some have found it helpful to practise these skills between sessions and then reflect together on what they noticed, what they learned and what they might try next.
                      </p>
                      <p>
                        For people experiencing anxiety, social anxiety, health anxiety, trauma and low mood, clients have described developing greater confidence in themselves and in their ability to manage difficult thoughts, emotions and situations. They have <strong>valued learning that difficult days and uncomfortable emotions can be part of life without having to take control, while developing strategies to respond differently.</strong>
                      </p>
                      <p>
                        Clients have also valued being supported to work through difficult or unresolved experiences, with therapy providing a space to explore how these experiences may continue to affect their thoughts, emotions and everyday life.
                      </p>
                      <p>
                        As therapy comes to an end, clients have <strong>described feeling better equipped to use the skills they have developed independently, with greater confidence in their ability to manage future challenges</strong>.
                      </p>
                      <p className="font-medium text-stone-800 bg-stone-50 p-4 rounded-xl border border-stone-100">
                        <strong>A recurring theme in the feedback is the experience of feeling understood, supported and appropriately challenged, while developing the knowledge, skills and confidence to make meaningful changes for themselves.</strong>
                      </p>
                    </div>
                  )}
                </div>

              </div>

              {/* Show More / Show Less Toggle Button */}
              <button
                type="button"
                onClick={() => toggleFeedback('cbt')}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors self-start cursor-pointer group"
                aria-expanded={expandedFeedback.cbt}
              >
                <span>{expandedFeedback.cbt ? 'Show less feedback' : 'Read full feedback'}</span>
                {expandedFeedback.cbt ? (
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Horizontal Scrolling Review Banner (4 per page) */}
        <div className="mb-24">
          <div className="bg-stone-50/70 border border-stone-200/80 rounded-3xl p-6 sm:p-10 shadow-xs">
            
            {/* Banner Header: Title, Stars, and Pagination Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full ml-2 border border-emerald-200/60">
                    5.0 Client Feedback
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#242221]">
                  Client Experiences &amp; Reviews
                </h3>
                <p className="text-sm text-stone-500 mt-1">
                  Read reflections from individuals supported with CBT, anxiety, and eating difficulties.
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2.5 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={handlePrevReviewPage}
                  disabled={currentReviewPage === 0}
                  className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:text-emerald-700 hover:border-emerald-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                  aria-label="Previous reviews page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-xs font-semibold text-stone-500 px-1">
                  Page {currentReviewPage + 1} of {reviewPages.length}
                </div>

                <button
                  type="button"
                  onClick={handleNextReviewPage}
                  disabled={currentReviewPage === reviewPages.length - 1}
                  className="w-10 h-10 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:text-emerald-700 hover:border-emerald-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer"
                  aria-label="Next reviews page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div
              ref={reviewScrollRef}
              onScroll={handleScrollReviews}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reviewPages.map((page, pageIdx) => (
                <div
                  key={pageIdx}
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 snap-start"
                >
                  {page.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
                    >
                      <div>
                        {/* Star Rating and Quote mark */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(review.stars)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <Quote className="w-4 h-4 text-emerald-600/50 flex-shrink-0" />
                        </div>

                        {/* Review Title */}
                        <h4 className="font-serif text-base font-semibold text-stone-900 mb-2 leading-snug">
                          {review.title}
                        </h4>

                        {/* Review Quote Body */}
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed italic mb-4">
                          &ldquo;{review.quote}&rdquo;
                        </p>
                      </div>

                      {/* Review Footer Metadata */}
                      <div className="pt-3 border-t border-stone-100 flex flex-col gap-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-stone-800">{review.author}</span>
                          <span className="text-[10px] text-stone-400 uppercase tracking-wider">{review.date}</span>
                        </div>
                        <span className="inline-block text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md self-start">
                          {review.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center items-center gap-2 mt-6 pt-2">
              {reviewPages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToReviewPage(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentReviewPage === i
                      ? 'w-7 bg-emerald-700'
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to reviews page ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* 5. Call to Action */}
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