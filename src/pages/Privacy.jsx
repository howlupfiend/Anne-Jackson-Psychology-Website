import { Shield, ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';
import babcpLogo from '../assets/babcp.jpg';
import privacyData from '../data/privacy.json';
import practiceInfo from '../data/practiceInfo.json';

export default function Privacy({ navigate }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

      {/* Back button */}
      <button
        onClick={() => navigate('Home')}
        className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-blue-600 transition-colors mb-8 cursor-pointer group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Home</span>
      </button>

      {/* Header */}
      <div className="mb-10 pb-8 border-b border-stone-200">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Shield className="w-3.5 h-3.5 text-blue-600" />
          <span>{privacyData.badge}</span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-4">
          {privacyData.title}
        </h1>

        <p className="text-sm text-stone-500 italic">
          Last updated: {privacyData.lastUpdated}
        </p>
      </div>

      {/* Introduction Card */}
      <div className="bg-blue-50/50 border border-blue-200/70 rounded-3xl p-6 sm:p-8 mb-12 shadow-xs space-y-4">
        <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
          {privacyData.intro[0]}
        </p>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {privacyData.intro[1]}
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-12 text-stone-600 leading-relaxed text-base">

        {/* 1. What information do I collect? */}
        <section>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-blue-100/60 text-blue-700 flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <h2 className="text-2xl font-serif text-[#242221]">
              {privacyData.collection.title}
            </h2>
          </div>

          <p className="mb-4">
            {privacyData.collection.description}
          </p>

          <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-sm space-y-2">
            <p className="font-semibold text-stone-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              {privacyData.collection.specialCategoryTitle}
            </p>
            <p className="text-stone-600">
              {privacyData.collection.specialCategoryDescription}
            </p>
          </div>
        </section>

        {/* 2. How do I use your information? */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            {privacyData.usage.title}
          </h2>
          <p className="mb-3">
            {privacyData.usage.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 mb-4 text-stone-700">
            {privacyData.usage.purposes.map((purpose, idx) => (
              <li key={idx}>{purpose}</li>
            ))}
          </ul>
          <p>
            {privacyData.usage.closing}
          </p>
        </section>

        {/* 3. Confidentiality */}
        <section>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-blue-100/60 text-blue-700 flex items-center justify-center flex-shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-2xl font-serif text-[#242221]">
              {privacyData.confidentiality.title}
            </h2>
          </div>

          <p className="mb-4">
            {privacyData.confidentiality.description}
          </p>

          <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-sm mb-4 space-y-3">
            <p className="font-semibold text-stone-800">
              {privacyData.confidentiality.limitsTitle}
            </p>
            {privacyData.confidentiality.limitsPoints.map((point, idx) => (
              <p key={idx} className="text-stone-600">
                {point}
              </p>
            ))}
          </div>

          <p>
            {privacyData.confidentiality.supervision}
          </p>
        </section>

        {/* 4. How is your information stored? */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            {privacyData.storage.title}
          </h2>
          <p className="mb-4">
            {privacyData.storage.description}
          </p>
          <p className="mb-4">
            {privacyData.storage.thirdParties}
          </p>
          <div className="bg-amber-50/70 border border-amber-200/70 p-4 rounded-2xl text-sm text-amber-900 leading-relaxed">
            <p>
              <strong>Email Communication Notice: </strong>
              {privacyData.storage.emailNotice.replace(/^Information may also be communicated by email where appropriate\. /, '')}
            </p>
          </div>
        </section>

        {/* 5. Clinical records and retention */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            {privacyData.retention.title}
          </h2>
          <p className="mb-4">
            {privacyData.retention.description}
          </p>
          <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-xs space-y-2 text-sm">
            <p className="font-semibold text-stone-800">
              Retention Schedule:
            </p>
            <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
              {privacyData.retention.schedule.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.label}:</strong> {item.detail}
                </li>
              ))}
            </ul>
            <p className="text-stone-500 pt-2 text-xs">
              {privacyData.retention.destructionNote}
            </p>
          </div>
        </section>

        {/* 6. Sharing information */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            {privacyData.sharing.title}
          </h2>
          <div className="space-y-3">
            {privacyData.sharing.points.map((point, idx) => (
              <p key={idx}>{point}</p>
            ))}
          </div>
        </section>

        {/* 7. Your rights */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            {privacyData.rights.title}
          </h2>
          <p className="mb-3">
            {privacyData.rights.intro}
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 mb-4 text-stone-700">
            {privacyData.rights.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-stone-500 mb-6">
            {privacyData.rights.exemptionNote}
          </p>

          {/* Questions & Contact Card */}
          <div className="bg-stone-50 border border-stone-200/80 p-6 sm:p-7 rounded-2xl space-y-5">
            <div>
              <h3 className="text-lg font-serif text-[#242221] mb-2">
                Questions &amp; Contact
              </h3>
              <p className="text-sm text-stone-600 mb-3">
                If you have any questions about how I use your information or would like to exercise your data protection rights, please feel free to get in touch:
              </p>
              <div className="text-sm text-stone-700 space-y-1">
                <p className="font-semibold text-stone-900">{practiceInfo.practiceName}</p>
                <p>{practiceInfo.practitioner} &ndash; {practiceInfo.qualification}</p>
                <p>{practiceInfo.location}</p>
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${practiceInfo.email}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {practiceInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 text-sm">
              <p className="text-stone-700 mb-4">
                {privacyData.rights.icoConcernNote}
              </p>

              {/* Professional Registrations & Accreditation Badge */}
              <div className="pt-1">
                <div className="inline-flex items-center gap-3.5 bg-white px-4 py-3 rounded-2xl border border-stone-200/90 shadow-2xs max-w-full">
                  <img
                    src={babcpLogo}
                    alt="BABCP Logo"
                    className="h-10 w-10 object-contain flex-shrink-0 rounded-md"
                  />
                  <div className="min-w-0">
                    <span className="block font-semibold text-stone-800 text-xs sm:text-sm">
                      ICO Data Protection Registration Number
                    </span>
                    <span className="block font-mono text-xs font-semibold text-emerald-700">
                      {practiceInfo.icoRegistration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Changes to this notice */}
        <section className="pt-4 border-t border-stone-200">
          <h2 className="text-xl font-serif text-[#242221] mb-2">
            {privacyData.changes.title}
          </h2>
          <p className="text-sm text-stone-600 mb-2">
            {privacyData.changes.description}
          </p>
          <p className="text-xs text-stone-500 italic">
            Last updated: {privacyData.lastUpdated}
          </p>
        </section>

      </div>

    </div>
  );
}
