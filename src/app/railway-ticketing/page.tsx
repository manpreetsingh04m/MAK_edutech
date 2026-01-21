import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title:
    "Railway Ticketing & Reservations | Train Ticket Booking in Jalandhar Cantt | MAK Edutech",
  description:
    "Railway ticket booking and seat reservations from MAK Edutech, Jalandhar Cantt. PNR assistance, route selection and travel planning for students, families and professionals across India.",
};

export default function RailwayTicketingPage() {
  return (
    <PageLayout>
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
      <nav className="mb-4 text-xs text-slate-500 sm:text-sm">
        <Link href="/" className="hover:text-sky-700">
          Home
        </Link>{" "}
        / <span className="text-slate-700">Railway Ticketing & Reservations</span>
      </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
          Jalandhar Cantt
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Railway Ticketing & Reservations
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          MAK Edutech provides{" "}
          <span className="font-semibold">
            railway ticket booking and seat reservation services in Jalandhar Cantt
          </span>
          . Whether you are a student traveling to join your course, a family
          planning a holiday, or a working professional commuting for work, we
          assist with selecting convenient trains, classes and routes from
          Jalandhar Cantt and nearby stations.
        </p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Complete Railway Booking Support
            </h2>
            <p className="mt-2">
              Booking train tickets can be challenging with availability,
              timing and class selection. Our team helps you find the best train
              options, check seat availability, and complete your booking
              efficiently. We also provide guidance on PNR status, waitlist
              updates and alternative routes when needed.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Our railway ticketing services include:
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Railway ticket booking for all major routes across India
              </li>
              <li>
                Seat reservation assistance including AC, Sleeper and General
                class options
              </li>
              <li>
                Guidance on train options, timings and available classes based
                on your preferences
              </li>
              <li>
                PNR status checking and updates on waitlist confirmations
              </li>
              <li>
                Support with Tatkal and premium Tatkal bookings for urgent
                travel
              </li>
              <li>
                Route planning and alternative train suggestions when preferred
                trains are unavailable
              </li>
              <li>
                Coordination with your overall travel plan, including visas,
                flights and accommodation
              </li>
              <li>
                Assistance with ticket cancellation and refund processes
              </li>
              <li>
                Special support for students traveling to educational
                institutions
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Popular routes from Jalandhar
            </h3>
            <p className="mt-2">
              We regularly assist with bookings from Jalandhar Cantt and nearby
              stations to major cities including Delhi, Mumbai, Bangalore,
              Chennai, Kolkata, Hyderabad, Pune, Ahmedabad and other educational
              and commercial hubs across India.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Why choose MAK Edutech for railway bookings?
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Local expertise in routes and train schedules from Jalandhar
                Cantt
              </li>
              <li>
                Personalized assistance to find the best options for your
                travel dates and budget
              </li>
              <li>
                Transparent service with clear information on booking status
                and charges
              </li>
              <li>
                Integration with your visa and flight booking timeline for
                seamless travel planning
              </li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-base font-semibold text-slate-900">
            Book your train ticket
          </h2>
          <p className="text-sm text-slate-600">
            Share your travel dates, origin, destination and preferred class,
            and we will help you find and book the best train options.
          </p>
          <a
            href="tel:+919988266786"
            className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
          >
            Call MAK Edutech
          </a>
          <p className="text-xs text-slate-500">
            Location: Royal Enclave, 38 B, Deep Nagar Rd, Jalandhar Cantt, Jalandhar, Punjab 144005
          </p>
          <p className="text-xs text-slate-500">
            Also explore{" "}
            <Link href="/flight-ticketing" className="text-sky-700 hover:underline">
              Flight Ticketing
            </Link>{" "}
            for domestic and international air travel.
          </p>
        </aside>
      </section>
      </main>
    </PageLayout>
  );
}
