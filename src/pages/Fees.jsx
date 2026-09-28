import feesData from '../data/fees.json';

export default function Fees({ navigate }) {
  const { pricingTiers, paymentTerms, cancellationTerms } = feesData;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-6">
          Session Fees
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          Transparent pricing for individual therapy sessions. I offer an initial consultation at a reduced rate so we can explore working together to ensure it is the right fit for you.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-8 rounded-3xl shadow-sm border flex flex-col justify-between relative ${
              tier.isHighlighted
                ? 'bg-emerald-50 border-emerald-100'
                : 'bg-white border-stone-100'
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3 -right-2 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                {tier.badge}
              </div>
            )}
            <div>
              <h3 className="text-xl font-serif text-[#242221] mb-2">{tier.title}</h3>
              <p className="text-stone-500 mb-6">{tier.duration}</p>
            </div>
            <div>
              {tier.originalPrice && (
                <div className="text-stone-400 line-through text-lg mb-1">{tier.originalPrice}</div>
              )}
              <span className="text-4xl font-serif text-emerald-700">{tier.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Policies Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="grid md:grid-cols-2">
          
          {/* Payment */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-100">
            <h3 className="text-2xl font-serif text-[#242221] mb-6">Payment</h3>
            <ul className="space-y-4 text-stone-600">
              {paymentTerms.map((term, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellations */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-serif text-[#242221] mb-6">Cancellations &amp; Missed Appointments</h3>
            <ul className="space-y-4 text-stone-600">
              {cancellationTerms.map((term, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-stone-600 mb-6">
          Ready to begin? Contact me to arrange your initial consultation.
        </p>
        <button 
          onClick={() => navigate('Contact')}
          className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-800 transition-colors cursor-pointer"
        >
          Book an Initial Consultation
        </button>
      </div>

    </div>
  );
}