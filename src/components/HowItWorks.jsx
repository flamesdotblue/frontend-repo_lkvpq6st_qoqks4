import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Enter your website URL',
    desc: 'We validate the URL and prepare a secure WebView configuration.'
  },
  {
    title: 'Configure options',
    desc: 'Choose app name, icon, theme color, splash screen, and permissions.'
  },
  {
    title: 'We build it for you',
    desc: 'A cloud builder packages your site into a native app with best practices.'
  },
  {
    title: 'Download APK & AAB',
    desc: 'Get files for testing and for Play Store submission.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 bg-gradient-to-b from-transparent to-white/60">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">How it works</h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2 text-indigo-600">
                <CheckCircle2 size={18} />
                <span className="text-sm font-medium">Step {i + 1}</span>
              </div>
              <h4 className="mt-3 font-semibold text-gray-900">{s.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
