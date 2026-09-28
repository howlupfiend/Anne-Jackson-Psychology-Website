import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Therapies from './pages/Therapies';
import FAQs from './pages/FAQs';
import Fees from './pages/Fees';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define the company name for easy updates across the site
  const companyName = "Kind Mind Therapy";

  const handleNavClick = (item) => {
    setCurrentPage(item);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <Home navigate={handleNavClick} />;
      case 'About Anne': return <About navigate={handleNavClick} />;
      case 'Therapies': return <Therapies navigate={handleNavClick} />;
      case 'FAQs': return <FAQs navigate={handleNavClick} />;
      case 'Fees': return <Fees navigate={handleNavClick} />;
      case 'Contact': return <Contact navigate={handleNavClick} />;
      default: return <Home navigate={handleNavClick} />;
    }
  };

  const navItems = ['Home', 'About Anne', 'Therapies', 'FAQs', 'Fees', 'Contact'];

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans text-stone-800">

      <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick('Home')}
            >
              <Leaf className="w-6 h-6 text-emerald-700 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-lg md:text-2xl font-serif text-stone-800">{companyName}</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-semibold tracking-wide uppercase py-2 transition-colors ${currentPage === item
                    ? 'text-emerald-700 border-b-2 border-emerald-700'
                    : 'text-stone-500 hover:text-stone-800 border-b-2 border-transparent'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className="lg:hidden p-2"
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
                  className="block w-full text-left px-3 py-3 text-base font-medium text-stone-600 hover:text-emerald-700 hover:bg-stone-50 rounded-md"
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
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <span className="text-xl font-serif text-white">{companyName}</span>
            </div>
            <p className="text-sm text-stone-400 max-w-xs">
              A compassionate, non-judgmental space for healing and growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Anne', 'Therapies', 'FAQs'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
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
              {['Fees', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Get in Touch</h4>
            <div className="space-y-3 text-sm text-stone-400">
              <p>Ready to start your journey?</p>
              <a
                href="mailto:anne.th.jacksoncbp@gmail.com"
                className="inline-block text-emerald-500 hover:text-emerald-400 transition-colors font-medium break-all"
              >
                anne.th.jacksoncbp@gmail.com
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} {companyName}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}