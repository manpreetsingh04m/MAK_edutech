import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title:
    "Travel Insurance | Comprehensive Travel Insurance Plans in Jalandhar Cantt | MAK Edutech",
  description:
    "Travel insurance plans from MAK Edutech, Jalandhar Cantt. Comprehensive coverage for medical emergencies, baggage loss, trip interruptions and more for domestic and international travel.",
};

export default function TravelInsurancePage() {
  return (
    <PageLayout>
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
      <nav className="mb-4 text-xs text-slate-500 sm:text-sm">
        <Link href="/" className="hover:text-sky-700">
          Home
        </Link>{" "}
        / <span className="text-slate-700">Travel Insurance</span>
      </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
          Jalandhar Cantt
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Travel Insurance
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          MAK Edutech offers{" "}
          <span className="font-semibold">
            comprehensive travel insurance plans in Jalandhar Cantt
          </span>
          . Protect your trip with coverage for medical emergencies, baggage
          loss, trip cancellations and other unexpected situations that can
          disrupt your travel plans.
        </p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Why travel insurance matters
            </h2>
            <p className="mt-2">
              Travel insurance provides financial protection and peace of mind
              when you are away from home. Whether you are traveling for
              leisure, education, or business, unexpected situations like
              medical emergencies, flight cancellations, lost baggage, or trip
              interruptions can cause significant stress and financial loss.
              Travel insurance helps you handle these situations smoothly.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              What our travel insurance plans cover:
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Medical emergencies including hospitalization, doctor visits and
                emergency medical evacuation
              </li>
              <li>
                Trip cancellation and interruption coverage for unexpected
                events that force you to cancel or cut short your trip
              </li>
              <li>
                Baggage loss, theft or damage including compensation for lost
                or delayed luggage
              </li>
              <li>
                Flight delays and missed connections with compensation for
                additional expenses
              </li>
              <li>
                Personal accident coverage for accidental death or disability
                during travel
              </li>
              <li>
                Emergency assistance services including 24/7 helpline for medical
                and travel support
              </li>
              <li>
                Coverage for pre-existing medical conditions (subject to policy
                terms)
              </li>
              <li>
                Adventure sports coverage for activities like trekking, skiing
                and water sports (depending on plan)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Types of travel insurance
            </h3>
            <p className="mt-2">
              We offer different plans based on your travel needs:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                <strong>Single trip insurance:</strong> Coverage for one specific
                trip with defined start and end dates
              </li>
              <li>
                <strong>Annual multi-trip insurance:</strong> Coverage for
                multiple trips throughout the year, ideal for frequent
                travelers
              </li>
              <li>
                <strong>Student travel insurance:</strong> Specialized plans for
                students studying abroad with extended coverage periods
              </li>
              <li>
                <strong>Family travel insurance:</strong> Plans covering all
                family members under a single policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Why choose MAK Edutech for travel insurance?
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Access to multiple insurance providers with competitive rates
              </li>
              <li>
                Clear explanation of coverage, exclusions and claim procedures
              </li>
              <li>
                Assistance with policy selection based on your destination,
                duration and activities
              </li>
              <li>
                Support with claims processing and documentation when needed
              </li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-base font-semibold text-slate-900">
            Get travel insurance
          </h2>
          <p className="text-sm text-slate-600">
            Discuss your travel plans and we will help you choose the right
            insurance plan with appropriate coverage for your trip.
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
            Also explore our{" "}
            <Link href="/travel-packages" className="text-sky-700 hover:underline">
              Travel Packages
            </Link>{" "}
            for complete holiday planning.
          </p>
        </aside>
      </section>
      </main>
    </PageLayout>
  );
}
