import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-navy-0/95 backdrop-blur-sm border-b border-t-hair sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 bg-blue rounded-lg flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L3 5.5V10.5C3 14.5 6.1 18.2 10 19C13.9 18.2 17 14.5 17 10.5V5.5L10 2Z"
                fill="white" fillOpacity="0.92"/>
            </svg>
          </div>
          <span className="font-sora font-bold text-white text-[17px] tracking-tight">
            Caye Group
          </span>
        </Link>

        <ul className="flex items-center gap-7 list-none m-0 p-0">
          <li className="hidden sm:block">
            <Link href="/" className="text-t-med text-sm font-medium no-underline hover:text-white transition">
              Home
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link href="/assess" className="text-t-med text-sm font-medium no-underline hover:text-white transition">
              Free Assessment
            </Link>
          </li>
          <li className="hidden sm:block">
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
      </div>
    </nav>
  );
}