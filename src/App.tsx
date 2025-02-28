import React, { useState, useEffect } from 'react';
import { Leaf, Sparkles, Send, Facebook, Twitter, Instagram } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setEmail('');
    alert('Thank you for subscribing! We\'ll keep you updated.');
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#e8f4ea] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern opacity-5" />
      
      <div className={`relative min-h-screen flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="animate-sway">
            <Leaf className="mx-auto text-emerald-600 w-16 h-16 mb-6 transform rotate-45" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-4">
            Little Branch
            <span className="block text-xl md:text-2xl mt-2 text-stone-600">A Theater Company</span>
          </h1>
          
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-emerald-100">
            <p className="text-md md:text-lg text-stone-700 font-serif leading-relaxed">
              Little Branch Theater connects communities through bold storytelling and the celebration of diverse voices. We are dedicated to providing opportunities for local artists, engaging with underrepresented communities, and creating work that inspires meaningful conversation. We aim to build a new audience filled with curiosity and the courage to challenge their perspectives.
            </p>
          </div>
          
          <div className="my-12 flex justify-center">
            <div className="bg-emerald-50/70 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-emerald-200 max-w-xl animate-float">
              <Sparkles className="text-amber-500 w-6 h-6 mb-2 inline-block mr-2" />
              <p className="text-2xl md:text-3xl text-stone-700 font-serif inline-block">
                A new story is about to unfold...
              </p>
              <span className="block mt-4 text-emerald-700 text-xl md:text-2xl font-serif">Coming Soon</span>
            </div>
          </div>
          
          <div className="max-w-md mx-auto p-5 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-stone-200">
            <h3 className="text-xl font-serif text-stone-700 mb-3">Stay Connected</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates"
                  className="w-full px-6 py-3 border-2 border-stone-300 rounded-full bg-white/70 backdrop-blur-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-stone-500 italic">Join our community to receive updates about performances, events, and opportunities.</p>
            </form>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6">
            <a href="#" className="text-stone-600 hover:text-emerald-600 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-stone-600 hover:text-emerald-600 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-stone-600 hover:text-emerald-600 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;