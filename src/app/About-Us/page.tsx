'use client';

import { useEffect } from 'react';

export default function AboutUsRedirect() {
  useEffect(() => {
    // Use window.location for static export compatibility
    if (typeof window !== 'undefined') {
      window.location.replace('/companyprofile/');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3E4C52]">
      <p className="text-lg text-white">Redirecting...</p>
    </div>
  );
}
