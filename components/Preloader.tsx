"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 1;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setTimeout(() => {
          setFinished(true);

          setTimeout(() => {
            setHidden(true);
          }, 700);
        }, 300);
      }

      setProgress(current);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5f5f3] transition-opacity duration-700 ${
        finished ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex w-[220px] flex-col items-center">
        
        {/* Logo */}
        <img
          src="/icon.png"
          alt="Hafizd Muhammad"
          className="h-20 w-20 object-contain"
        />

        {/* Percentage */}
        <div className="mt-8 text-sm font-medium tracking-wide text-black">
          {progress}%
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-[2px] w-full overflow-hidden bg-black/10">
          <div
            className="h-full bg-black transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status */}
        <p className="mt-4 text-[11px] tracking-[0.2em] text-black/50">
          {progress >= 100 ? "PORTFOLIO READY" : "INITIALIZING..."}
        </p>

      </div>
    </div>
  );
}