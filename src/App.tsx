import React, { useState, useEffect } from 'react';
import { Leaf, Send, Facebook, Twitter, Instagram } from 'lucide-react';

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
      className="min-h-screen bg-[#faf7f2] relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=3269&ixlib=rb-4.0.3")',
        backgroundBlend: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#faf7f2]/90" />
      
      <div className={`relative min-h-screen flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="animate-sway">
            <Leaf className="mx-auto text-emerald-600 w-16 h-16 mb-6 transform rotate-45" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-4">
            Little Branch
            <span className="block text-xl md:text-2xl mt-2 text-stone-600">A Theater Company</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 font-serif italic">
            Illuminating small, unheard voices and communities.
          </p>
          
          <div className="my-12">
            <p className="text-2xl md:text-3xl text-stone-700 font-serif">
              A new story is about to unfold...
              <span className="block mt-2 text-emerald-700">Coming Soon</span>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for updates"
                className="w-full px-6 py-3 border-2 border-stone-300 rounded-full bg-white/50 backdrop-blur-sm focus:outline-none focus:border-emerald-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
          
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