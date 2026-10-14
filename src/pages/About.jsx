import { ExternalLink } from 'lucide-react';
import annePhoto from '../assets/anne-photo.jpeg';
import babcpLogo from '../assets/babcp.jpg';
import aboutData from '../data/about.json';
import practiceInfo from '../data/practiceInfo.json';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Side-by-Side Layout Grid */}
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Image & Credentials Column (Takes up 5 out of 12 columns on desktop) */}
        <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-24 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-50 rounded-3xl transform translate-x-3 translate-y-3 -z-10"></div>
            <img
              src={annePhoto}
              alt={aboutData.imageAlt}
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-sm border border-stone-100"
            />
          </div>

          {/* Professional Credentials & Verified Profiles */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Professional Credentials
            </h3>

            <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
              <div className="bg-stone-50 p-1 rounded-lg border border-stone-200/60 flex-shrink-0">
                <img
                  src={babcpLogo}
                  alt="BABCP Accredited"
                  className="h-10 w-10 object-contain rounded"
                />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-stone-900 block">BABCP Accredited</span>
                <span className="text-stone-500">Cognitive Behavioural Psychotherapist</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-2">
                Verified Directory Listings
              </span>
              <div className="space-y-2">
                {practiceInfo.directoryProfiles?.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-200/60 hover:border-emerald-200 text-stone-700 hover:text-emerald-800 transition-all text-xs font-medium group cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <span>{profile.name}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-stone-400 group-hover:text-emerald-700">
                      <span>{profile.badge}</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-stone-400 pt-1">
              ICO Registered: <span className="font-mono text-stone-600 font-medium">{practiceInfo.icoRegistration}</span>
            </p>
          </div>
        </div>
        {/* Text Column (Takes up 7 out of 12 columns on desktop) */}
        <div className="md:col-span-7 lg:col-span-8 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-8">
            {aboutData.title}
          </h1>

          <div className="text-lg text-stone-600 leading-relaxed space-y-6">
            {aboutData.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}