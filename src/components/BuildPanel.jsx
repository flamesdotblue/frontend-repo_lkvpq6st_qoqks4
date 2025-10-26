import React, { useEffect, useMemo } from 'react';
import { FileDown, Loader2 } from 'lucide-react';

export default function BuildPanel({ siteUrl, status, progress, onCancel }) {
  const message = useMemo(() => {
    if (!status) return '';
    switch (status) {
      case 'queued':
        return 'Queued – preparing your build environment...';
      case 'building':
        return 'Building – packaging your website into a native Android app...';
      case 'signing':
        return 'Signing – generating release keys and aligning files...';
      case 'complete':
        return 'Complete – your files are ready to download.';
      case 'failed':
        return 'Something went wrong. Please try again.';
      default:
        return '';
    }
  }, [status]);

  useEffect(() => {
    // Scroll into view when a build begins
    if (status) {
      const el = document.getElementById('build-output');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [status]);

  if (!status) return null;

  const disabled = status !== 'complete';

  return (
    <div id="build-output" className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">Target website</p>
          <p className="text-gray-900 font-medium break-all">{siteUrl}</p>
        </div>
        <button onClick={onCancel} className="text-sm text-gray-600 hover:text-gray-900 underline">Cancel</button>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2 text-gray-700">
          {status !== 'complete' && status !== 'failed' ? (
            <Loader2 className="animate-spin" size={18} />
          ) : null}
          <span>{message}</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
          <div
            className={`h-full ${status === 'failed' ? 'bg-rose-500' : 'bg-indigo-600'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-xs text-gray-500">{progress}%</div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          disabled={disabled}
          className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border font-medium ${
            disabled
              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
              : 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
          }`}
        >
          <FileDown size={18} /> Download APK
        </button>
        <button
          disabled={disabled}
          className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border font-medium ${
            disabled
              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
              : 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800'
          }`}
        >
          <FileDown size={18} /> Download AAB
        </button>
      </div>

      {disabled && (
        <p className="mt-4 text-sm text-gray-600">
          When connected to the builder service, these buttons will download your generated files. This demo shows the end-to-end flow and validation.
        </p>
      )}
    </div>
  );
}
