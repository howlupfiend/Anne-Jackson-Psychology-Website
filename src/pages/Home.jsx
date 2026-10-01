import { useState, useRef } from 'react';
import { AlertCircle, Quote, Star, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import bluebellPhoto from '../assets/bluebell.jpg';
import homephoto from '../assets/bluebell-field.jpeg'; // Ensure this matches your filename
import reviewPages from '../data/reviews.json';
import reflectionsData from '../data/reflections.json';
import practiceInfo from '../data/practiceInfo.json';

const renderFormattedText = (text) => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

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
  // Set to true once real client reviews are ready to display
  const SHOW_REVIEWS_BANNER = false;
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const reviewScrollRef = useRef(null);


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

            <div className="flex items-center gap-2.5 mb-6">
              <img
                src={bluebellPhoto}
                alt="English Bluebell"
                className="w-6 h-6 object-cover rounded-full shadow-2xs border border-emerald-100 flex-shrink-0"
              />
              <p className="text-emerald-700 font-semibold tracking-wider text-sm uppercase mt-0.5">
                {practiceInfo.location}
              </p>
            </div>

            <h1 className="text-5xl lg:text-[4rem] font-serif text-[#242221] mb-6 leading-[1.1]">
              Evidence-based therapy, fit for your unique story.
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
            I’m a {practiceInfo.qualification} with over 20 years’ experience supporting adults with difficulties including eating disorders, anxiety, depression, and trauma.
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
              <span>{reflectionsData.sectionBadge}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-[#242221] mb-5">
              {reflectionsData.sectionTitle}
            </h2>

            <div className="bg-stone-50 border border-stone-200/70 text-stone-600 text-sm p-4 sm:p-5 rounded-2xl max-w-2xl mx-auto text-left sm:text-center leading-relaxed shadow-xs">
              <strong className="text-stone-800 font-medium">Confidentiality Note: </strong>
              {reflectionsData.confidentialityNote}
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {reflectionsData.cards.map((card) => {
              const isExpanded = !!expandedFeedback[card.id];
              return (
                <div
                  key={card.id}
                  className="bg-white p-7 sm:p-9 rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
                >
                  <div className="flex-1">
                    {/* Review Header Badge & Stars */}
                    <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-stone-100">
                      <div>
                        <div className="flex items-center gap-1 text-amber-400 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-xs font-medium text-stone-500 ml-2">{card.badge}</span>
                        </div>
                        <h3 className="text-2xl font-serif text-[#242221]">
                          {card.title}
                        </h3>
                        <p className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mt-1">
                          {card.subtitle}
                        </p>
                      </div>
                      <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Quote className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Initial Visible Paragraphs */}
                    <div className="text-stone-600 leading-relaxed space-y-4 text-base">
                      {card.initialParagraphs.map((para, idx) => (
                        <p key={idx}>{renderFormattedText(para)}</p>
                      ))}

                      {/* Expandable Content (Shown when toggled) */}
                      {isExpanded && (
                        <div className="space-y-4 pt-2">
                          {card.expandedParagraphs.map((para, idx) => (
                            <p key={idx}>{renderFormattedText(para)}</p>
                          ))}
                          {card.highlight && (
                            <p className="font-medium text-stone-800 bg-stone-50 p-4 rounded-xl border border-stone-100">
                              <strong>{card.highlight}</strong>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Show More / Show Less Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleFeedback(card.id)}
                    className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors self-start cursor-pointer group"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Show less feedback' : 'Read full feedback'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    ) : (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Horizontal Scrolling Review Banner (Hidden until real reviews are available) */}
        {SHOW_REVIEWS_BANNER && (
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
                    className={`h-2 rounded-full transition-all cursor-pointer ${currentReviewPage === i
                        ? 'w-7 bg-emerald-700'
                        : 'w-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                    aria-label={`Go to reviews page ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        )}

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
              If you or someone else is in immediate danger, please call <strong>{practiceInfo.emergency.immediate}</strong> or go to your nearest A&E.
            </p>
            <p>
              For urgent mental health support, call <strong>NHS {practiceInfo.emergency.nhsMentalHealth}</strong>, contact your GP, or reach out to your local mental health service.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}