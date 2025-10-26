import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import URLForm from './components/URLForm';
import Features from './components/Features';
import BuildPanel from './components/BuildPanel';

function App() {
  const [siteUrl, setSiteUrl] = useState('');
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);

  const startBuild = (url) => {
    setSiteUrl(url);
    setStatus('queued');
    setProgress(5);
  };

  useEffect(() => {
    if (!status) return;
    if (status === 'queued') {
      const t = setTimeout(() => {
        setStatus('building');
        setProgress(35);
      }, 900);
      return () => clearTimeout(t);
    }
    if (status === 'building') {
      const stages = [55, 70, 82];
      let i = 0;
      const interval = setInterval(() => {
        setProgress((p) => Math.min(stages[i] || p + 3, 88));
        i += 1;
        if (i > stages.length) {
          clearInterval(interval);
          setStatus('signing');
          setProgress(92);
        }
      }, 600);
      return () => clearInterval(interval);
    }
    if (status === 'signing') {
      const t = setTimeout(() => {
        setProgress(100);
        setStatus('complete');
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [status]);

  const cancelBuild = () => {
    setStatus('');
    setProgress(0);
    setSiteUrl('');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_45%),_radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.12),transparent_40%)]">
      <Header />

      <main className="max-w-6xl mx-auto px-4">
        <section className="py-14 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">Android builder</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Turn your website into a production‑ready Android app
            </h1>
            <p className="mt-3 text-gray-600 md:text-lg">
              Paste a link, configure a few options, and download signed APK & AAB files. No native code required.
            </p>
          </div>

          <div className="mt-10">
            <URLForm onSubmit={startBuild} />
            <BuildPanel siteUrl={siteUrl} status={status} progress={progress} onCancel={cancelBuild} />
          </div>
        </section>

        <Features />
      </main>

      <footer className="py-10 border-t border-gray-200 bg-white/70 backdrop-blur mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Web2App Studio. Convert websites into Android apps.
        </div>
      </footer>
    </div>
  );
}

export default App;
