import React from 'react';
import { Rocket, Smartphone } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 flex items-center justify-center text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Web2App Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#build" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800">
            <Smartphone size={16} />
            Build app
          </a>
        </nav>
      </div>
    </header>
  );
}
