import { Shield, ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';
import babcpLogo from '../assets/babcp.jpg';

export default function Privacy({ navigate }) {
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
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>Privacy &amp; Data Protection</span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-4">
          Privacy &amp; Confidentiality
        </h1>

        <p className="text-sm text-stone-500 italic">
          Last updated: September 2026
        </p>
      </div>

      {/* Introduction Card */}
      <div className="bg-emerald-50/50 border border-emerald-200/70 rounded-3xl p-6 sm:p-8 mb-12 shadow-xs">
        <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-4">
          Your privacy is important to me. I understand that sharing personal information about your mental health and personal circumstances requires trust, and I take care to handle your information respectfully, securely and in accordance with UK data protection law.
        </p>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          This notice explains what information I collect, why I use it, how I protect it and your rights in relation to your personal information.
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-12 text-stone-600 leading-relaxed text-base">

        {/* 1. What information do I collect? */}
        <section>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100/60 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <h2 className="text-2xl font-serif text-[#242221]">
              What information do I collect?
            </h2>
          </div>

          <p className="mb-4">
            Depending on how you use my services, I may collect your name, contact details, appointment information, payment information and information you choose to share about your mental or physical health, personal circumstances and therapy.
          </p>

          <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-sm space-y-2">
            <p className="font-semibold text-stone-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              Special Category Health Data (UK GDPR)
            </p>
            <p className="text-stone-600">
              Information about your health is classed as special category data under UK GDPR and is subject to additional protection. I only collect and use information that is relevant and necessary for providing safe and appropriate therapy and managing my practice.
            </p>
          </div>
        </section>

        {/* 2. How do I use your information? */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            How do I use your information?
          </h2>
          <p className="mb-3">
            I use your information to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 mb-4 text-stone-700">
            <li>respond to enquiries and communicate with you;</li>
            <li>arrange and manage appointments;</li>
            <li>assess your needs and provide psychological therapy;</li>
            <li>maintain appropriate clinical records;</li>
            <li>support your safety and ongoing care;</li>
            <li>process payments and manage my practice; and</li>
            <li>meet my professional, legal and regulatory responsibilities.</li>
          </ul>
          <p>
            I will only use your information where I have an appropriate lawful basis under UK data protection law. For health information, I will also meet the additional requirements that apply to special category data.
          </p>
        </section>

        {/* 3. Confidentiality */}
        <section>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100/60 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="text-2xl font-serif text-[#242221]">
              Confidentiality
            </h2>
          </div>

          <p className="mb-4">
            What you share with me during therapy will normally remain confidential. I will not routinely share information with family members, friends, employers or other professionals without your knowledge and, where appropriate, your agreement.
          </p>

          <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl text-sm mb-4 space-y-3">
            <p className="font-semibold text-stone-800">
              Limits of Confidentiality
            </p>
            <p className="text-stone-600">
              There are some circumstances where confidentiality may need to be limited, for example where there is a serious risk of harm to you or another person, a significant safeguarding concern, or where disclosure is required by law.
            </p>
            <p className="text-stone-600">
              Where possible, I will discuss this with you beforehand and explain what information needs to be shared and why.
            </p>
          </div>

          <p>
            I also undertake professional supervision. Clinical information may be discussed as part of supervision, but I take care to protect your identity and maintain confidentiality.
          </p>
        </section>

        {/* 4. How is your information stored? */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            How is your information stored?
          </h2>
          <p className="mb-4">
            I use secure systems and appropriate safeguards to protect your personal information from unauthorised access, loss or misuse.
          </p>
          <p className="mb-4">
            My practice uses trusted service providers to support the delivery and administration of therapy. These may include <strong>Zanda</strong> for practice and clinical administration and <strong>Stripe</strong> for payment processing. Where third-party providers process information on my behalf, appropriate data protection arrangements will be in place.
          </p>
          <div className="bg-amber-50/70 border border-amber-200/70 p-4 rounded-2xl text-sm text-amber-900 leading-relaxed">
            <p>
              <strong>Email Communication Notice:</strong> Information may also be communicated by email where appropriate. Please avoid including detailed or highly sensitive clinical information in ordinary email correspondence unless we have agreed that this is appropriate.
            </p>
          </div>
        </section>

        {/* 5. Clinical records and retention */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            Clinical records and retention
          </h2>
          <p className="mb-4">
            I keep appropriate clinical records to support safe and effective therapy and to meet my professional, legal and regulatory responsibilities.
          </p>
          <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-xs space-y-2 text-sm">
            <p className="font-semibold text-stone-800">
              Retention Schedule:
            </p>
            <ul className="list-disc list-inside space-y-1 text-stone-600 pl-1">
              <li>
                <strong>Clinical Records:</strong> Retained securely for <strong>7 years</strong> after therapy ends.
              </li>
              <li>
                <strong>Initial Enquiries:</strong> Retained for <strong>12 months</strong> from the date of the last contact for enquiries that do not proceed to therapy.
              </li>
            </ul>
            <p className="text-stone-500 pt-2 text-xs">
              After these retention periods, records will be securely deleted or destroyed in accordance with my records management procedures.
            </p>
          </div>
        </section>

        {/* 6. Sharing information */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            Sharing information
          </h2>
          <p className="mb-3">
            Where appropriate, I may need to communicate with another professional involved in your care, such as your GP. I will normally discuss this with you and seek your agreement before doing so.
          </p>
          <p>
            Information may be shared without your agreement where there is a legal requirement or where this is necessary to protect you or another person from serious harm.
          </p>
        </section>

        {/* 7. Your rights */}
        <section>
          <h2 className="text-2xl font-serif text-[#242221] mb-3">
            Your rights
          </h2>
          <p className="mb-3">
            Under UK data protection law, you have rights relating to the personal information I hold about you. Depending on the circumstances, these may include the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 mb-4 text-stone-700">
            <li>request access to your personal information;</li>
            <li>ask for inaccurate information to be corrected;</li>
            <li>request restriction of processing in certain circumstances;</li>
            <li>object to certain processing; and</li>
            <li>request deletion where the legal requirements for this are met.</li>
          </ul>
          <p className="text-sm text-stone-500 mb-6">
            Some rights are subject to legal and professional exemptions, particularly in relation to clinical records.
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
                <p className="font-semibold text-stone-900">Kind Mind Therapy</p>
                <p>Anne Jackson &ndash; Cognitive Behavioural Psychotherapist</p>
                <p>Based in Kent | Online therapy for adults</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:Anne.TH.JacksonCBP@gmail.com"
                    className="text-emerald-700 font-medium hover:underline"
                  >
                    Anne.TH.JacksonCBP@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 text-sm">
              <p className="text-stone-700 mb-4">
                You also have the right to raise a concern with the Information Commissioner&rsquo;s Office (ICO) if you are unhappy with how your information has been handled.
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
                      CSN8376103
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
            Changes to this notice
          </h2>
          <p className="text-sm text-stone-600 mb-2">
            I may update this notice from time to time to reflect changes to my practice, the services I use or relevant legal and professional requirements. The latest version will always be available on this website.
          </p>
          <p className="text-xs text-stone-500 italic">
            Last updated: September 2026
          </p>
        </section>

      </div>

    </div>
  );
}
