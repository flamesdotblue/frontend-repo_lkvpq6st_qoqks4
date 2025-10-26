import React from 'react';
import { Smartphone, Shield, Zap, Settings, Globe } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="h-5 w-5" />, 
    title: 'Native shell',
    desc: 'Your site runs inside a performant native container with splash screen, app icon, and offline handling.'
  },
  {
    icon: <Shield className="h-5 w-5" />, 
    title: 'Permissions ready',
    desc: 'Request camera, location, storage and more via configuration rather than code changes.'
  },
  {
    icon: <Zap className="h-5 w-5" />, 
    title: 'Push notifications',
    desc: 'Hook up Firebase Cloud Messaging to engage users with timely updates.'
  },
  {
    icon: <Settings className="h-5 w-5" />, 
    title: 'Customizable',
    desc: 'Set theme color, status bar style, orientation, deep links and more.'
  },
  {
    icon: <Globe className="h-5 w-5" />, 
    title: 'Web-first',
    desc: 'Keep your existing website. Ship app updates without rebuilding native code.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">Everything you need to go from URL to app</h3>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">We handle the native bundling so you can focus on your product. No Android Studio required.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5 flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
