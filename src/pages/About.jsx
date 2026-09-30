import annePhoto from '../assets/anne-photo.jpeg';
import aboutData from '../data/about.json';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Side-by-Side Layout Grid */}
      <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Image Column (Takes up 5 out of 12 columns on desktop) */}
        <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-24">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-50 rounded-3xl transform translate-x-3 translate-y-3 -z-10"></div>
            <img
              src={annePhoto}
              alt={aboutData.imageAlt}
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-sm border border-stone-100"
            />
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