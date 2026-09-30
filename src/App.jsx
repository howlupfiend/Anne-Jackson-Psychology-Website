import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Bluebell } from './components/Bluebell';
import Home from './pages/Home';
import About from './pages/About';
import Therapies from './pages/Therapies';
import FAQs from './pages/FAQs';
import Fees from './pages/Fees';
import Contact from './pages/Contact';
import CookiePolicy from './pages/CookiePolicy';
import Privacy from './pages/Privacy';
import babcpLogo from './assets/babcp.jpg';
import CookieBanner from './components/CookieBanner';
import practiceInfo from './data/practiceInfo.json';
import navigationData from './data/navigation.json';

// Cookie Helpers
const setCookie = (name, value, days = 365) => {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
};

const getCookie = (name) => {
  if (typeof document === 'undefined') return null;
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : null;
};

const navItems = navigationData.mainNav;

const ALL_VALID_PAGES = [...navItems, 'Cookies', 'Cookie Policy', 'Privacy', 'Privacy & Confidentiality'];

const PAGE_TO_HASH = {
  'Home': 'home',
  'About Anne': 'about-anne',
  'Therapies': 'therapies',
  'FAQs': 'faqs',
  'Fees': 'fees',
  'Contact': 'contact',
  'Privacy': 'privacy',
  'Privacy & Confidentiality': 'privacy',
  'Cookies': 'cookies',
  'Cookie Policy': 'cookies',
};

const normalizeHashToPage = (hash) => {
  if (!hash) return null;
  const clean = decodeURIComponent(hash).toLowerCase().replace(/^#\/?/, '').trim();
  if (!clean || clean === 'home') return 'Home';
  if (clean === 'about-anne' || clean === 'about anne' || clean === 'about') return 'About Anne';
  if (clean === 'therapies' || clean === 'therapy') return 'Therapies';
  if (clean === 'faqs' || clean === 'faq') return 'FAQs';
  if (clean === 'fees' || clean === 'fee') return 'Fees';
  if (clean === 'contact') return 'Contact';
  if (clean === 'privacy' || clean === 'privacy-policy' || clean === 'confidentiality' || clean === 'privacy-and-confidentiality') return 'Privacy';
  if (clean === 'cookie-policy' || clean === 'cookies' || clean === 'cookie') return 'Cookies';
  return null;
};

export default function App() {
  // Determine initial page from URL hash, cookie, or localStorage
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const fromHash = normalizeHashToPage(window.location.hash);
      if (fromHash) return fromHash;
    }

    const cookiePage = getCookie('current_page');
    if (cookiePage && ALL_VALID_PAGES.includes(cookiePage)) {
      return cookiePage === 'Cookie Policy' ? 'Cookies' : (cookiePage === 'Privacy & Confidentiality' ? 'Privacy' : cookiePage);
    }

    try {
      const localPage = localStorage.getItem('current_page');
      if (localPage && ALL_VALID_PAGES.includes(localPage)) {
        return localPage === 'Cookie Policy' ? 'Cookies' : (localPage === 'Privacy & Confidentiality' ? 'Privacy' : localPage);
      }
    } catch (e) {
      // Ignore localStorage errors if any
    }

    return 'Home';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cookie consent state
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    const existingConsent = getCookie('cookie_consent') || localStorage.getItem('cookie_consent');
    return !existingConsent;
  });

  // Define the company name for easy updates across the site
  const companyName = practiceInfo.practiceName;

  // Sync state with URL hash and listen for browser back/forward buttons
  useEffect(() => {
    // If there is no hash in URL yet, set it to the initial page
    const currentHashPage = normalizeHashToPage(window.location.hash);
    if (!currentHashPage && currentPage) {
      window.location.hash = PAGE_TO_HASH[currentPage] || 'home';
    }

    const handleHashChange = () => {
      const pageFromHash = normalizeHashToPage(window.location.hash) || 'Home';
      setCurrentPage(pageFromHash);
      setCookie('current_page', pageFromHash, 365);
      try {
        localStorage.setItem('current_page', pageFromHash);
      } catch (e) { }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const handleNavClick = (item) => {
    setCurrentPage(item);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);

    // Update URL hash
    const hash = PAGE_TO_HASH[item] || 'home';
    window.location.hash = hash;

    // Persist active page to cookie and localStorage
    setCookie('current_page', item, 365);
    try {
      localStorage.setItem('current_page', item);
    } catch (e) { }
  };

  const handleAcceptAllCookies = () => {
    setCookie('cookie_consent', 'accepted', 365);
    try {
      localStorage.setItem('cookie_consent', 'accepted');
    } catch (e) { }
    setShowCookieBanner(false);
  };

  const handleEssentialOnlyCookies = () => {
    setCookie('cookie_consent', 'essential', 365);
    try {
      localStorage.setItem('cookie_consent', 'essential');
    } catch (e) { }
    setShowCookieBanner(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home navigate={handleNavClick} />;
      case 'About Anne': return <About navigate={handleNavClick} />;
      case 'Therapies': return <Therapies navigate={handleNavClick} />;
      case 'FAQs': return <FAQs navigate={handleNavClick} />;
      case 'Fees': return <Fees navigate={handleNavClick} />;
      case 'Contact': return <Contact navigate={handleNavClick} />;
      case 'Privacy':
      case 'Privacy & Confidentiality':
        return <Privacy navigate={handleNavClick} />;
      case 'Cookies':
      case 'Cookie Policy':
        return <CookiePolicy navigate={handleNavClick} onOpenCookieSettings={() => setShowCookieBanner(true)} />;
      default: return <Home navigate={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-stone-800">

      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick('Home')}
            >
              <Bluebell className="w-6 h-6 text-blue-600 flex-shrink-0" strokeWidth={2.3} />
              <span className="text-lg md:text-2xl font-serif text-stone-800">{companyName}</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-semibold tracking-wide uppercase py-2 transition-colors cursor-pointer ${currentPage === item
                    ? 'text-emerald-700 border-b-2 border-emerald-700'
                    : 'text-stone-500 hover:text-stone-800 border-b-2 border-transparent'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="lg:hidden p-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-stone-600" /> : <Menu className="w-6 h-6 text-stone-600" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-stone-600 hover:text-emerald-700 hover:bg-stone-50 rounded-md cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {renderPage()}
      </main>

      <footer className="bg-[#242221] text-stone-300 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Bluebell className="w-6 h-6 text-blue-400 flex-shrink-0" strokeWidth={2.2} />
              <span className="text-xl font-serif text-white">{companyName}</span>
            </div>
            <p className="text-sm text-stone-400 max-w-xs">
              {practiceInfo.tagline}
            </p>

            <div className="mt-5 space-y-0.5 text-sm">
              <p className="font-semibold text-white text-base">Anne TH Jackson</p>
              <p className="text-stone-300">Cognitive Behavioural Psychotherapist</p>
              <p className="text-emerald-400 font-medium">BABCP Accredited</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {navigationData.quickLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-stone-400 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Patient Info</h4>
            <ul className="space-y-3">
              {navigationData.patientInfoLinks.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className="text-stone-400 hover:text-white transition-colors text-sm cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Get in Touch</h4>
            <div className="space-y-3 text-sm text-stone-400 mb-5">
              <p>Ready to start your journey?</p>
              <a
                href={`mailto:${practiceInfo.email.toLowerCase()}`}
                className="inline-block text-emerald-500 hover:text-emerald-400 transition-colors font-medium break-all"
              >
                {practiceInfo.email.toLowerCase()}
              </a>
            </div>

            {/* Professional Accreditation & Registration */}
            <div className="pt-4 border-t border-stone-800 space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-lg shadow-xs inline-block flex-shrink-0">
                  <img
                    src={babcpLogo}
                    alt="BABCP Accredited"
                    className="h-11 w-11 object-contain rounded"
                  />
                </div>
                <div className="text-xs">
                  <span className="text-stone-200 font-semibold block">BABCP Accredited</span>
                  <span className="text-stone-400 block">Cognitive Behavioural Psychotherapist</span>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-snug">
                ICO Data Protection Registration Number: <span className="font-mono text-emerald-400 font-medium">{practiceInfo.icoRegistration}</span>
              </p>
              <p className="text-xs text-stone-400 italic">
                {companyName} est. {practiceInfo.established}
              </p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} {companyName}. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => handleNavClick('Privacy')}
              className="text-stone-400 hover:text-white transition-colors text-sm underline underline-offset-4 cursor-pointer"
            >
              Privacy &amp; Confidentiality
            </button>
            <button
              onClick={() => handleNavClick('Cookies')}
              className="text-stone-400 hover:text-white transition-colors text-sm underline underline-offset-4 cursor-pointer"
            >
              Cookies
            </button>
            <button
              onClick={() => setShowCookieBanner(true)}
              className="text-stone-400 hover:text-white transition-colors text-sm underline underline-offset-4 cursor-pointer"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Cookie Consent Banner */}
      <CookieBanner
        isOpen={showCookieBanner}
        onAcceptAll={handleAcceptAllCookies}
        onEssentialOnly={handleEssentialOnlyCookies}
        onClose={() => setShowCookieBanner(false)}
        onViewPolicy={() => handleNavClick('Cookies')}
      />

    </div>
  );
}