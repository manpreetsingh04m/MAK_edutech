import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-32 sm:w-40">
            <Image
              src="/Mak Edutech Logo.jpg"
              alt="MAK Edutech logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="hidden text-xs font-medium tracking-wide text-slate-500 sm:block">
            Visas • Packages • Flight & Railway Ticketing • Insurance
          </p>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/visas" className="hover:text-sky-700 transition-colors">
            Visas
          </Link>
          <Link href="/flight-ticketing" className="hover:text-sky-700 transition-colors">
            Flights
          </Link>
          <Link href="/railway-ticketing" className="hover:text-sky-700 transition-colors">
            Railways
          </Link>
          <Link href="/ielts-coaching" className="hover:text-sky-700 transition-colors">
            IELTS
          </Link>
          <Link href="/#about" className="hover:text-sky-700 transition-colors">
            About
          </Link>
          <Link href="/#contact" className="rounded-full bg-sky-700 px-4 py-2 text-white shadow-sm hover:bg-sky-800 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
