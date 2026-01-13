
import React from 'react';
import { RESTAURANT_DATA } from './constants';
import ActionCard from './components/ActionCard';
import ChatBot from './components/ChatBot';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-12 flex flex-col bg-[#FAF9F6]">
      {/* Hero Header */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=1200" 
          alt="Authentic Indian Spread" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-6 float-anim">
             <div className="rounded-full overflow-hidden w-36 h-36 md:w-48 md:h-48 flex items-center justify-center bg-white shadow-2xl p-1 border-4 border-white/20">
                <Logo className="w-full h-full" />
             </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-1 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] tracking-tight">
            {RESTAURANT_DATA.name}
          </h1>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <span className="h-[1px] w-6 bg-white/40"></span>
            <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-md">
              Taste of Tradition
            </p>
            <span className="h-[1px] w-6 bg-white/40"></span>
          </div>
        </div>
      </div>

      {/* Quick Actions Content */}
      <div className="px-5 -mt-16 relative z-10 space-y-4 max-w-2xl mx-auto w-full">
        <div className="grid grid-cols-1 gap-3">
          <ActionCard 
            href={RESTAURANT_DATA.menu}
            title="Digital Menu"
            description="Explore our authentic recipes"
            colorClass="text-sai-green"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
          />
          <ActionCard 
            href={RESTAURANT_DATA.orderOnline}
            title="Order Online"
            description="Delicious food at your doorstep"
            colorClass="text-sai-red"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            }
          />
          <ActionCard 
            href={RESTAURANT_DATA.googleReview}
            title="Leave a Review"
            description="Help us grow by sharing your experience"
            colorClass="text-yellow-600"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
          />
        </div>

        <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 mt-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sai-green/5 rounded-full -mr-12 -mt-12"></div>
          <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800">
            <span className="w-1.5 h-6 bg-sai-green rounded-full mr-3"></span>
            Our Story
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Welcome to <span className="font-bold text-sai-red italic">{RESTAURANT_DATA.name}</span>. We are dedicated to serving authentic Indian cuisine prepared with fresh ingredients and traditional spices. Our mission is to provide an unforgettable dining experience that celebrates the vibrant flavors of India.
          </p>
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-50">
            <a 
              href={RESTAURANT_DATA.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-sai-green uppercase tracking-[0.2em] hover:text-sai-red transition-all flex items-center"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-8 pt-8 pb-4">
          <a href={RESTAURANT_DATA.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-all transform hover:scale-125">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z"/></svg>
          </a>
          <a href={RESTAURANT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-all transform hover:scale-125">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
        </div>
      </div>

      <ChatBot />

      <footer className="mt-auto pt-16 pb-8 text-center bg-gray-50/50">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
            <Logo className="w-full h-full" />
          </div>
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] mb-2 font-bold">Sai Indian Cuisine</p>
        <p className="text-[9px] text-gray-400 px-6 max-w-xs mx-auto">© {new Date().getFullYear()} Sai Indian Cuisine. All rights reserved. Designed for NFC digital access.</p>
      </footer>
    </div>
  );
};

export default App;