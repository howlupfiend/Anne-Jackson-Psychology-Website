import { useState } from 'react';
import contactData from '../data/contact.json';
import practiceInfo from '../data/practiceInfo.json';

const renderFormattedText = (text) => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Initial Consultation');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

  const showToast = (msg, type) => {
    setToast({ show: true, message: msg, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true); 

    try {
      const endpoint = practiceInfo.contactEndpoint || '/contact.php';
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ name, email, phone, inquiryType, message, honeypot }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (!result || result.success !== false)) {
        showToast(result?.message || contactData.messages.success, "success"); 
        setName('');
        setEmail('');
        setPhone('');
        setInquiryType('Initial Consultation');
        setMessage('');
        setHoneypot('');
      } else {
        showToast(result?.error || contactData.messages.error, "error");
      }
    } catch (error) {
      showToast(contactData.messages.networkError, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
      
      {/* Main Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-4">{contactData.title}</h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          {contactData.intro}
        </p>
      </div>

      {/* Organized Info Box */}
      <div className="bg-emerald-50/50 p-6 md:p-8 rounded-3xl border border-emerald-100 mb-10 text-stone-700 max-w-3xl mx-auto shadow-sm">
        <div className="space-y-4 text-base md:text-lg">
          {contactData.guidance.map((text, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-emerald-600 mr-3 mt-1 text-xl leading-none">•</span>
              <p>{renderFormattedText(text)}</p>
            </div>
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Full name <span className="text-emerald-600">*</span>
            </label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors bg-stone-50" 
              placeholder="Your name" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Email address <span className="text-emerald-600">*</span>
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors bg-stone-50" 
              placeholder="your@email.com" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Phone number <span className="text-stone-400 font-normal">(Optional)</span>
          </label>
          <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors bg-stone-50" 
          />
        </div>
        
        {/* Type of Enquiry Dropdown */}
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-semibold text-stone-700 mb-2">
            Type of Enquiry <span className="text-emerald-600">*</span>
          </label>
          <div className="relative">
            <select
              id="inquiryType"
              name="inquiryType"
              required
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-stone-50/50 text-stone-700 appearance-none cursor-pointer"
            >
              {contactData.enquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
            {/* Custom dropdown arrow to make it look modern */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Message / Reason for therapy <span className="text-emerald-600">*</span>
          </label>
          <textarea 
            rows="6" 
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-colors bg-stone-50 resize-y" 
            placeholder="Please share a brief overview of what brings you to therapy..."
          ></textarea>
        </div>

        {/* Anti-spam Honeypot field (hidden from real visitors) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Leave this field blank</label>
          <input 
            type="text" 
            id="website" 
            name="website" 
            tabIndex={-1} 
            autoComplete="off" 
            value={honeypot} 
            onChange={(e) => setHoneypot(e.target.value)} 
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting || !isFormValid}
          className="w-full font-medium py-4 px-6 rounded-full transition-colors mt-4 bg-emerald-700 text-white hover:bg-emerald-800 disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* The Toast UI */}
      <div 
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out transform ${
          toast.show ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className={`px-6 py-4 rounded-xl shadow-xl text-white font-medium ${
          toast.type === 'success' ? 'bg-[#242221] border-l-4 border-emerald-500' : 'bg-red-600'
        }`}>
          {toast.message}
        </div>
      </div>

    </div>
  );
}