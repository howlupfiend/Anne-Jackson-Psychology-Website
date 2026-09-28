import { Cookie, ShieldCheck, ArrowLeft, Settings } from 'lucide-react';
import cookiesData from '../data/cookies.json';

export default function CookiePolicy({ navigate, onOpenCookieSettings }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Back button */}
      <button
        onClick={() => navigate('Home')}
        className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-emerald-700 transition-colors mb-8 cursor-pointer group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Home</span>
      </button>

      {/* Header */}
      <div className="mb-10 pb-8 border-b border-stone-200">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Cookie className="w-3.5 h-3.5 text-emerald-600" />
          <span>Privacy &amp; Transparency</span>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-4">
          Cookies
        </h1>
        
        <p className="text-sm text-stone-500 italic">
          Last updated: September 2026
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-10 text-stone-600 leading-relaxed text-base">
        
        {/* 1. What are cookies? */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            What are cookies?
          </h2>
          <p>
            Cookies are small files that are stored on your device when you visit a website. They help websites work properly and, depending on how they are used, can remember your preferences or provide information about how the website is being used.
          </p>
        </section>

        {/* 2. How I use cookies */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            How I use cookies
          </h2>
          <p className="mb-3">
            My website may use cookies to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 mb-4 text-stone-700">
            <li>make the website function correctly and securely;</li>
            <li>remember your preferences;</li>
            <li>understand how visitors use the website and improve its content and performance; and</li>
            <li>support certain website features.</li>
          </ul>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/70 space-y-3 mt-4">
            <p>
              <strong>Some cookies are strictly necessary for the website to work.</strong> These do not require your consent.
            </p>
            <p>
              Other cookies, such as analytics or tracking cookies, are not essential. I will only use these where you have given your consent. You can choose whether to accept or reject non-essential cookies.
            </p>
          </div>
        </section>

        {/* 3. Cookies used on this website */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            Cookies currently used on my website
          </h2>
          <p className="mb-4">
            In keeping with my commitment to privacy, I only use the technical cookies strictly required for the website to operate smoothly:
          </p>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-stone-600">
                <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-semibold">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Cookie / Key</th>
                    <th className="py-3.5 px-4">Type</th>
                    <th className="py-3.5 px-4">Purpose</th>
                    <th className="py-3.5 px-4">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {cookiesData.map((cookie, index) => (
                    <tr key={index}>
                      <td className="py-3.5 px-4 sm:px-6 font-mono text-xs font-semibold text-emerald-800">
                        {cookie.key}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <ShieldCheck className="w-3 h-3" /> {cookie.type}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        {cookie.purpose}
                      </td>
                      <td className="py-3.5 px-4 text-xs text-stone-500 whitespace-nowrap">
                        {cookie.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. Managing your cookie preferences */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            Managing your cookie preferences
          </h2>
          <p className="mb-4">
            When you visit my website, you may be given the option to accept or reject non-essential cookies. You can change your preferences at any time using the cookie settings available on the website.
          </p>

          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-5 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-stone-800 text-sm mb-1">
                Website Cookie Settings
              </p>
              <p className="text-xs text-stone-600">
                Click here to view or update your cookie consent choices.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenCookieSettings}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2.5 rounded-full text-xs sm:text-sm transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              <Settings className="w-4 h-4" />
              <span>Change Cookie Settings</span>
            </button>
          </div>

          <p>
            You can also control or delete cookies through your web browser. Please be aware that blocking some cookies may affect how parts of the website work.
          </p>
        </section>

        {/* 5. Third-party cookies */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            Third-party cookies
          </h2>
          <p>
            Some features or services provided by other companies may place their own cookies on your device. Where this applies, I will provide information about the relevant third parties and obtain consent where required.
          </p>
        </section>

        {/* Review statement */}
        <section className="pt-4 border-t border-stone-200">
          <p className="italic text-stone-500 text-sm">
            I regularly review the cookies used on my website to ensure that the information provided remains accurate.
          </p>
        </section>

        {/* Contact details */}
        <section className="bg-stone-50 p-6 sm:p-7 rounded-2xl border border-stone-200/80">
          <h3 className="text-lg font-serif text-[#242221] mb-2">
            Questions &amp; Contact
          </h3>
          <p className="text-sm text-stone-600 mb-3">
            If you have any questions about this Cookies statement, please feel free to get in touch:
          </p>
          <div className="text-sm text-stone-700 space-y-1">
            <p className="font-semibold text-stone-900">Kind Mind Therapy</p>
            <p>Anne Jackson &ndash; Cognitive Behavioural Psychotherapist</p>
            <p>Based in Kent | Online therapy for adults</p>
            <p>
              Email:{' '}
              <a
                href="mailto:anne.th.jacksoncbp@gmail.com"
                className="text-emerald-700 font-medium hover:underline"
              >
                anne.th.jacksoncbp@gmail.com
              </a>
            </p>
          </div>
        </section>

      </div>

    </div>
  );
}
