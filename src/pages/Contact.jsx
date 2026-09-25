import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 1. New state to control the toast notification
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

  // 2. Helper function to show the toast and automatically hide it after 4 seconds
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
      const response = await fetch("https://formspree.io/f/mwlpnqwp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        // 3. Replaced alert() with showToast()
        showToast("Message sent successfully. I will be in touch soon!", "success"); 
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        showToast("Oops! There was a problem sending your message.", "error");
      }
    } catch (error) {
      showToast("Something went wrong. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-serif text-[#242221] mb-4">Get in Touch</h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          If you have any questions or would like to book an initial consultation, please send a message below.
        </p>
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
        
        <button 
          type="submit" 
          disabled={isSubmitting || !isFormValid}
          className="w-full font-medium py-4 px-6 rounded-full transition-colors mt-4 bg-emerald-700 text-white hover:bg-emerald-800 disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* 4. The Toast UI */}
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