export default function Fees({ navigate }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-emerald-700 font-semibold tracking-wider text-sm mb-4 uppercase">
          Investment in your wellbeing
        </p>
        <h2 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-6">
          Session Fees
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          Transparent pricing for individual therapy sessions. I offer an initial consultation at a reduced rate so we can explore working together to ensure it is the right fit for you.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        
        {/* Initial Consultation */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-serif text-[#242221] mb-2">Initial Consultation</h3>
            <p className="text-stone-500 mb-6">60 minutes</p>
          </div>
          <div>
            <span className="text-4xl font-serif text-emerald-700">£40</span>
          </div>
        </div>

        {/* Standard Session */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col justify-between relative">
          <div>
            <h3 className="text-xl font-serif text-[#242221] mb-2">Standard Session</h3>
            <p className="text-stone-500 mb-6">60 minutes</p>
          </div>
          <div>
            <span className="text-4xl font-serif text-emerald-700">£80</span>
          </div>
        </div>

        {/* Block Booking (Highlighted) */}
        <div className="bg-emerald-50 p-8 rounded-3xl shadow-sm border border-emerald-100 flex flex-col justify-between relative">
          <div className="absolute -top-3 -right-2 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
            Save £60
          </div>
          <div>
            <h3 className="text-xl font-serif text-[#242221] mb-2">6 Session Block Booking</h3>
            <p className="text-stone-500 mb-6">360 minutes total</p>
          </div>
          <div>
            <div className="text-stone-400 line-through text-lg mb-1">£480</div>
            <span className="text-4xl font-serif text-emerald-700">£420</span>
          </div>
        </div>

      </div>

      {/* Policies Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="grid md:grid-cols-2">
          
          {/* Payment */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-100">
            <h3 className="text-2xl font-serif text-[#242221] mb-6">Payment</h3>
            <ul className="space-y-4 text-stone-600">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3 mt-1">•</span>
                Payment is due 48 hours before each session.
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3 mt-1">•</span>
                Payment methods include bank transfer, secure card payments via Stripe, or other mutually agreed methods.
              </li>
            </ul>
          </div>

          {/* Cancellations */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-serif text-[#242221] mb-6">Cancellations & Missed Appointments</h3>
            <ul className="space-y-4 text-stone-600">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3 mt-1">•</span>
                Please provide more than 48 hours' notice for cancellations.
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3 mt-1">•</span>
                The full session fee may be charged for cancellations made with less than 48 hours' notice.
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3 mt-1">•</span>
                The cancellation charge reflects the time reserved specifically for you and the inability to offer that appointment to another client.
              </li>
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
          className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-medium hover:bg-emerald-800 transition-colors"
        >
          Book an Initial Consultation
        </button>
      </div>

    </div>
  );
}