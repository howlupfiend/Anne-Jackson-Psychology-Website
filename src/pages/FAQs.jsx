import { useState, useMemo } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { SYNONYM_MAP } from '../data/synonyms';
import { categories, getFaqs } from '../data/faqsData';

export default function FAQs({ navigate }) {
  const [openIds, setOpenIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqs = useMemo(() => getFaqs(navigate), [navigate]);

  // Smart Search & Filter logic
  const filteredFaqs = useMemo(() => {
    // Sanitize search query: lowercase, trim, strip punctuation (e.g., "fees." -> "fees")
    const cleanQuery = searchQuery.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '');

    if (!cleanQuery) {
      if (selectedCategory === 'All') return faqs;
      return faqs.filter((faq) => faq.category === selectedCategory);
    }

    // Split query into terms
    const rawTokens = cleanQuery.split(/\s+/).filter(Boolean);

    // Expand search terms: evaluate full phrase (e.g. "local surgery") as well as individual tokens
    const queryPhrases = cleanQuery.includes(' ') ? [cleanQuery, ...rawTokens] : rawTokens;
    const expandedTerms = new Set();

    queryPhrases.forEach((phrase) => {
      expandedTerms.add(phrase);

      // Check synonyms
      if (SYNONYM_MAP[phrase]) {
        SYNONYM_MAP[phrase].forEach((syn) => expandedTerms.add(syn));
      }

      // Basic singular/plural checks for single tokens
      if (!phrase.includes(' ')) {
        if (phrase.endsWith('s') && phrase.length > 2) {
          const singular = phrase.slice(0, -1);
          expandedTerms.add(singular);
          if (SYNONYM_MAP[singular]) {
            SYNONYM_MAP[singular].forEach((syn) => expandedTerms.add(syn));
          }
        } else {
          const plural = phrase + 's';
          expandedTerms.add(plural);
          if (SYNONYM_MAP[plural]) {
            SYNONYM_MAP[plural].forEach((syn) => expandedTerms.add(syn));
          }
        }
      }
    });

    const searchPool = Array.from(expandedTerms);

    return faqs.filter((faq) => {
      // If actively searching with a query, search across ALL categories so the user never misses results
      const matchesCategory = selectedCategory === 'All' || searchQuery.trim() !== '' || faq.category === selectedCategory;
      if (!matchesCategory) return false;

      // Build comprehensive searchable corpus for the FAQ item
      const corpus = `${faq.q} ${faq.category} ${faq.plainText || ''} ${(faq.keywords || []).join(' ')}`.toLowerCase();

      // Check if any query term or expanded synonym matches
      return searchPool.some((term) => {
        if (term.length <= 4) {
          const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b${escaped}\\b`, 'i');
          return regex.test(corpus);
        }
        return corpus.includes(term);
      });
    });
  }, [selectedCategory, searchQuery, faqs]);


  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
          <span>Help &amp; Information</span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-4">
          Frequently Asked Questions
        </h1>

        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Here you will find answers to common questions about starting therapy, what to expect, and practical arrangements for working together.
        </p>
      </div>

      {/* Search and Category Filters */}
      <div className="mb-10 space-y-5">

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. fees, costs, online, CBT, crisis)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-stone-400 hover:text-stone-600 bg-stone-100 px-2 py-0.5 rounded-md cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                if (searchQuery) setSearchQuery('');
              }}
              className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all cursor-pointer ${selectedCategory === category
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-blue-50/50 border border-stone-200/80 hover:text-blue-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between text-xs text-stone-500 px-2 pt-2">
          <span>
            {searchQuery ? (
              <span>
                Found <strong>{filteredFaqs.length}</strong> matching questions for &ldquo;{searchQuery}&rdquo;
              </span>
            ) : (
              <span>
                Showing <strong>{filteredFaqs.length}</strong> of {faqs.length} questions
              </span>
            )}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Expand all
            </button>
            <span className="text-stone-300">•</span>
            <button
              onClick={collapseAll}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Collapse all
            </button>
          </div>
        </div>

      </div>

      {/* FAQs List */}
      <div className="space-y-4 mb-16">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-3xl border border-stone-200 p-10 text-center space-y-3">
            <p className="text-stone-600 text-base">
              No questions matched your search query &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
            >
              Reset search and view all questions
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                  ? 'border-blue-200 shadow-sm'
                  : 'border-stone-200/80 hover:border-stone-300'
                  } ${faq.isCrisis ? 'border-red-200/90' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-start gap-4 p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 flex-1">
                    <span className="font-serif text-lg sm:text-xl font-medium text-[#242221] group-hover:text-blue-700 transition-colors">
                      {faq.q}
                    </span>
                    {searchQuery.trim() && (
                      <span className="self-start text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                        {faq.category}
                      </span>
                    )}
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-stone-50 text-stone-400 group-hover:bg-stone-100 group-hover:text-stone-600'
                    }`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-stone-100 text-stone-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions CTA Card */}
      <div className="bg-gradient-to-br from-blue-50/70 to-emerald-50/50 border border-blue-200/70 rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif text-[#242221] mb-3">
          Have a question that isn&rsquo;t answered here?
        </h3>
        <p className="text-stone-600 text-base max-w-xl mx-auto mb-6">
          Choosing therapy is an important step. If you have any further questions or would like to discuss whether my approach is right for you, please do get in touch.
        </p>
        <button
          onClick={() => navigate && navigate('Contact')}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3.5 rounded-full text-sm sm:text-base transition-colors cursor-pointer shadow-xs"
        >
          <span>Get in Touch</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}