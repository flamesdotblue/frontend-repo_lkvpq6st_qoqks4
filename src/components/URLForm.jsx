import React, { useState } from 'react';
import { Link as LinkIcon, Rocket, FileDown } from 'lucide-react';

export default function URLForm({ onSubmit }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    try {
      const u = new URL(value);
      return u.protocol === 'http:' || u.protocol === 'https:';
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(url)) {
      setError('Enter a valid website URL starting with http or https.');
      return;
    }
    setError('');
    onSubmit(url);
  };

  return (
    <section id="build" className="w-full">
      <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
        <div className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Convert your website into a native Android app</h2>
            <p className="text-gray-600 mt-1">Enter your website and we’ll package it with native features. You’ll get .apk and .aab files ready for testing and Play Store upload.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-emerald-600 text-sm font-medium bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md">
            <FileDown size={16} /> APK & AAB output
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <LinkIcon size={18} className="text-gray-400" />
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-website.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Rocket size={18} /> Generate App
          </button>
        </form>

        {error && (
          <p className="mt-3 text-sm text-rose-600">{error}</p>
        )}
      </div>
    </section>
  );
}
