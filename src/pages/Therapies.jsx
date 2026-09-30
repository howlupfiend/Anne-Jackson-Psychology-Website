import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import therapiesData from '../data/therapies.json';

function TherapyCard({ item, isExpanded, isRowExpanded, onToggle }) {
  // When collapsed, both cards in the row use h-full justify-between to ensure identical height and bottom-aligned buttons
  // When the row has an expanded card, cards use self-start h-auto so unexpanded cards never stretch with empty space
  const cardLayoutClasses = isRowExpanded
    ? 'self-start h-auto'
    : 'h-full justify-between';

  return (
    <div
      className={`bg-white p-7 sm:p-9 rounded-3xl shadow-xs border border-stone-100 hover:shadow-md transition-shadow flex flex-col ${cardLayoutClasses}`}
    >
      <div>
        <h3 className="text-2xl font-serif text-[#242221] mb-4">
          {item.title}
        </h3>

        {/* Short preview text always visible */}
        <p className="text-stone-600 leading-relaxed">
          {item.preview}
        </p>

        {/* Hidden content shown only when expanded */}
        {isExpanded && (
          <div className="text-stone-600 leading-relaxed mt-4 space-y-4 pt-4 border-t border-stone-100">
            {item.fullContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onToggle}
        className="mt-6 text-blue-600 font-semibold hover:text-blue-700 text-left transition-colors self-start cursor-pointer inline-flex items-center gap-1.5 group"
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        ) : (
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        )}
      </button>
    </div>
  );
}

export default function Therapies({ navigate }) {
  // Track which card indices are expanded
  const [expandedCards, setExpandedCards] = useState([]);

  // Check if either row has an expanded card
  const isRow1Expanded = expandedCards.includes(0) || expandedCards.includes(1);
  const isRow2Expanded = expandedCards.includes(2) || expandedCards.includes(3);

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
        <p className="text-blue-700 font-semibold tracking-wider text-sm mb-4 uppercase">
          Specialist Treatment
        </p>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-6">
          Therapeutic Approaches
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          I provide a warm, non-judgmental space tailored to your unique needs. By drawing on evidence-based models and the latest clinical training, we can work together to find the most effective path forward for your healing.
        </p>
      </div>

      {/* 2x2 Grid: perfectly aligned rows (Row 1: Eating Disorders & Anxiety, Row 2: Trauma & Depression) */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {therapiesData.map((item) => {
          const isExpanded = expandedCards.includes(item.id);
          const isRow1 = item.id === 0 || item.id === 1;
          const isRowExpanded = isRow1 ? isRow1Expanded : isRow2Expanded;

          return (
            <TherapyCard
              key={item.id}
              item={item}
              isExpanded={isExpanded}
              isRowExpanded={isRowExpanded}
              onToggle={() => toggleCard(item.id)}
            />
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <p className="text-stone-600 mb-6">
          Unsure which approach is right for you? We can discuss this during your initial consultation.
        </p>
        <button
          onClick={() => navigate('Contact')}
          className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
        >
          Book a Consultation
        </button>
      </div>

    </div>
  );
}