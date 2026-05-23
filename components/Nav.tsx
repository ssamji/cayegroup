'use client';

import { useState } from 'react';
import Link from 'next/link';

function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="9" fill="#162248"/>
      <circle cx="20" cy="20" r="11" stroke="#2563eb" stroke-width="1.5" fill="none" opacity="0.5"/>
      <circle cx="20" cy="20" r="7" stroke="#2563eb" stroke-width="1.5" fill="#162248"/>
      <circle cx="20" cy="20" r="4.5" fill="#2563eb"/>
      <circle cx="20" cy="20" r="2" fill="#f59e0b"/>
      <circle cx="18.8" cy="18.8" r="0.7" fill="white" opacity="0.9"/>
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy-0/95 backdrop-blur-sm border-b border-t-hair sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2.5 no-underline" onClick={() => setOpen(false)}>
          <LogoMark size={36} />
          <span className="font-sora font-bold text-white text-[17px] tracking-tight">
            Caye Group
          </span>
        </Link>

        <ul className="hidden sm:flex items-center gap-7 list-none m-0 p-0">
          <li>
            <Link href="/" className="text-t-med text-sm font-medium no-underline hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/assess" className="text-t-med text-sm font-medium no-underline hover:text-white transition">
              Free Assessment
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-t-med text-sm font-medium no-underline hover:text-white transition">
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="bg-amber text-[#3b1500] font-sora font-bold text-sm
                         px-5 py-2.5 rounded-lg no-underline hover:bg-amber-lt transition"
            >
              Book a Call
            </Link>
          </li>
        </ul>

        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-navy-1 border-t border-t-hair px-6 py-4 flex flex-col gap-1">
          <Link href="/" onClick={() => setOpen(false)}
            className="text-t-med text-[15px] font-medium no-underline hover:text-white py-3 border-b border-t-hair transition">
            Home
          </Link>
          <Link href="/assess" onClick={() => setOpen(false)}
            className="text-t-med text-[15px] font-medium no-underline hover:text-white py-3 border-b border-t-hair transition">
            Free Assessment
          </Link>
          <Link href="/services" onClick={() => setOpen(false)}
            className="text-t-med text-[15px] font-medium no-underline hover:text-white py-3 border-b border-t-hair transition">
            Services
          </Link>
          <Link href="#about" onClick={() => setOpen(false)}
            className="mt-3 bg-amber text-[#3b1500] font-sora font-bold text-[15px]
                       px-5 py-3 rounded-lg no-underline text-center hover:bg-amber-lt transition">
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}