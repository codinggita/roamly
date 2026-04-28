import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  BookOpen, 
  MapPin, 
  Search, 
  X, 
  Map as MapIcon 
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      setGreeting('Good Morning');
      setEmoji('🌅');
    } else if (hours >= 12 && hours < 17) {
      setGreeting('Good Afternoon');
      setEmoji('☀️');
    } else if (hours >= 17 && hours < 21) {
      setGreeting('Good Evening');
      setEmoji('🌆');
    } else {
      setGreeting('Good Night');
      setEmoji('🌙');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FC] font-['Plus_Jakarta_Sans',_sans-serif]">
      {/* 1. GREETING SECTION */}
      <header className="pt-24 pb-8 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {greeting}, User {emoji}
        </h1>
        <p className="text-gray-500 mt-2 text-lg">Where are you headed today?</p>
      </header>

      {/* 2. SEARCH BAR REMOVED AS REQUESTED */}

      {/* 3. FEATURE CARDS */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 — EXPLORE */}
        <div 
          onClick={() => navigate('/explore')}
          className="bg-white rounded-2xl p-8 shadow-md border border-gray-50 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 group"
        >
          <div className="bg-[#EFF6FF] w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <Globe className="text-[#1E6FF1]" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Explore the World</h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Discover trending destinations, interactive world map, and currency converter.
          </p>
          <span className="text-[#1E6FF1] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
            Start Exploring →
          </span>
        </div>

        {/* Card 2 — ROAMBOOK */}
        <div 
          onClick={() => navigate('/roambook')}
          className="bg-white rounded-2xl p-8 shadow-md border border-gray-50 cursor-pointer hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 group"
        >
          <div className="bg-[#F5F3FF] w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <BookOpen className="text-[#7C3AED]" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">My RoamBook</h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Your personal travel journal. Log memories, photos, and experiences from every trip.
          </p>
          <span className="text-[#7C3AED] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
            Open Journal →
          </span>
        </div>
      </section>

      {/* 4. TRENDING NEAR YOU SECTION */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-20">
        <div className="mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trending Places Near You</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-12 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <MapPin className="text-gray-400" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong.</h3>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2024 ROAMLY Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
