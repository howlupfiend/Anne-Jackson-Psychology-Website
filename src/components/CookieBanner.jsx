import { useState } from 'react';
import { Cookie, ShieldCheck, ChevronDown, ChevronUp, X } from 'lucide-react';
import practiceInfo from '../data/practiceInfo.json';

export default function CookieBanner({ isOpen, onAcceptAll, onEssentialOnly, onClose, onViewPolicy }) {
  const [showDetails, setShowDetails] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto sm:max-w-md md:max-w-lg z-50 animate-fadeIn">
      <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-stone-200/90 shadow-2xl shadow-stone-900/15 flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#242221]">
                Cookie Preferences
              </h3>
              <p className="text-xs text-stone-500 font-medium">
                {practiceInfo.practiceName}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 p-1.5 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <p className="text-stone-600 text-sm leading-relaxed mb-4">
          We use cookies to ensure you stay on the page you were viewing when refreshing, remember your preferences, and provide a secure, seamless browsing experience.
        </p>

        {/* Expandable Details */}
        {showDetails && (
          <div className="mb-4 pt-3 border-t border-stone-100 space-y-3 text-xs text-stone-600">
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/70">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-stone-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Essential Cookies
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                  Always Active
                </span>
              </div>
              <p className="text-stone-500 leading-normal">
                Required for page navigation, staying on the correct page upon refresh, and preserving your cookie preferences.
              </p>
            </div>

            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200/70">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-stone-800 flex items-center gap-1.5">
                  <Cookie className="w-3.5 h-3.5 text-stone-500" />
                  Analytics & Experience
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-200 px-2 py-0.5 rounded-full">
                  Optional
                </span>
              </div>
              <p className="text-stone-500 leading-normal">
                Helps us understand how clients interact with the site to continually improve usability and information accessibility.
              </p>
            </div>
          </div>
        )}

        {/* Toggle Details Link & Policy Link */}
        <div className="flex items-center justify-between gap-4 mb-5 text-xs">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="font-medium text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{showDetails ? 'Hide cookie details' : 'Customise / View details'}</span>
            {showDetails ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {onViewPolicy && (
            <button
              type="button"
              onClick={() => {
                onViewPolicy();
                onClose();
              }}
              className="text-stone-500 hover:text-emerald-700 underline underline-offset-2 transition-colors cursor-pointer"
            >
              Cookies statement &rarr;
            </button>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={onAcceptAll}
            className="w-full sm:flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-4 py-2.5 rounded-full text-xs sm:text-sm transition-colors text-center cursor-pointer shadow-xs"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={onEssentialOnly}
            className="w-full sm:flex-1 border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium px-4 py-2.5 rounded-full text-xs sm:text-sm transition-colors text-center cursor-pointer"
          >
            Essential Only
          </button>
        </div>

      </div>
    </div>
  );
}
