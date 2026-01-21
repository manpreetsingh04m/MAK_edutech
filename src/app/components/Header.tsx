"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
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

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="/visas" className="hover:text-sky-700 transition-colors">
              Visas
            </Link>
            <Link
              href="/flight-ticketing"
              className="hover:text-sky-700 transition-colors"
            >
              Flights
            </Link>
            <Link
              href="/railway-ticketing"
              className="hover:text-sky-700 transition-colors"
            >
              Railways
            </Link>
            <Link
              href="/ielts-coaching"
              className="hover:text-sky-700 transition-colors"
            >
              IELTS
            </Link>
            <Link
              href="/#about"
              className="hover:text-sky-700 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-sky-700 px-4 py-2 text-white shadow-sm transition-colors hover:bg-sky-800"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm transition hover:border-sky-600 hover:text-sky-700 md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="flex flex-col gap-0.5">
              <span className="block h-0.5 w-4 rounded bg-slate-800" />
              <span className="block h-0.5 w-4 rounded bg-slate-800" />
              <span className="block h-0.5 w-4 rounded bg-slate-800" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile sidebar / drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          {/* Sidebar panel */}
          <div className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="relative h-9 w-28">
                  <Image
                    src="/Mak Edutech Logo.jpg"
                    alt="MAK Edutech logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-800"
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-2 px-4 py-4 text-sm font-medium text-slate-800">
              <Link
                href="/visas"
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={closeMenu}
              >
                Visas
              </Link>
              <Link
                href="/study-visas"
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={closeMenu}
              >
                Study Visas
              </Link>
              <Link
                href="/flight-ticketing"
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={closeMenu}
              >
                Flight Ticketing
              </Link>
              <Link
                href="/railway-ticketing"
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={closeMenu}
              >
                Railway Ticketing & Reservations
              </Link>
              <Link
                href="/travel-packages"
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={closeMenu}
              >
                Travel Packages
              </Link>
              <Link
                href="/travel-insurance"
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={closeMenu}
              >
                Travel Insurance
              </Link>
              <Link
                href="/ielts-coaching"
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={closeMenu}
              >
                IELTS & Coaching
              </Link>
              <Link
                href="/#about"
                className="rounded-lg px-3 py-2 hover:bg-slate-50"
                onClick={closeMenu}
              >
                About Institute
              </Link>
              <Link
                href="/#contact"
                className="mt-2 rounded-full bg-sky-700 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
                onClick={closeMenu}
              >
                Contact & Visit
              </Link>
              <a
                href="tel:+919988266786"
                className="mt-1 rounded-full border border-sky-600 px-4 py-2 text-center text-sm font-semibold text-sky-700 hover:bg-sky-50"
                onClick={closeMenu}
              >
                Call: +91 99882 66786
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
