import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title:
    "Flight Ticketing | Domestic & International Flight Booking in Jalandhar Cantt | MAK Edutech",
  description:
    "Book domestic and international flight tickets with MAK Edutech in Jalandhar Cantt. Transparent pricing, flexible options, and itinerary support for students, families and professionals.",
};

export default function FlightTicketingPage() {
  return (
    <PageLayout>
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <nav className="mb-4 flex items-center justify-between text-xs text-slate-500 sm:text-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 font-medium text-slate-700 hover:border-sky-600 hover:text-sky-700"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          <div className="hidden sm:block">
            <Link href="/" className="hover:text-sky-700">
              Home
            </Link>{" "}
            / <span className="text-slate-700">Flight Ticketing</span>
          </div>
        </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
          Jalandhar Cantt
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Flight Ticketing
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          MAK Edutech offers{" "}
          <span className="font-semibold">
            domestic and international flight ticket booking services in Jalandhar Cantt
          </span>
          . Whether you are a student traveling to join your course, a family
          planning a vacation, or a professional on a business trip, we help you
          find the best flights at competitive prices.
        </p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Why book flights with MAK Edutech?
            </h2>
            <p className="mt-2">
              We understand that flight booking can be overwhelming with
              multiple airlines, routes and pricing options. Our team helps you
              compare options, choose the best flights for your schedule and
              budget, and handles the booking process smoothly.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Our flight ticketing services include:
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Domestic flight bookings across all major airlines in India
              </li>
              <li>
                International flight bookings to popular destinations including
                Canada, UK, USA, Australia, Europe, Middle East and Southeast
                Asia
              </li>
              <li>
                Transparent pricing with no hidden charges—you see the total
                cost upfront
              </li>
              <li>
                Flexible booking options including refundable and
                non-refundable tickets based on your needs
              </li>
              <li>
                Multi-city and round-trip flight arrangements for complex
                itineraries
              </li>
              <li>
                Student discounts and special fares for educational travel
              </li>
              <li>
                Itinerary support including layover guidance and connection
                assistance
              </li>
              <li>
                Coordination with your visa timeline and travel dates
              </li>
              <li>
                Post-booking support for changes, cancellations and
                rebooking when needed
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Popular routes we handle
            </h3>
            <p className="mt-2">
              We regularly book flights from major Indian airports (Delhi,
              Mumbai, Bangalore, Chennai, Hyderabad) to destinations in North
              America, Europe, Australia, the Middle East and Southeast Asia.
              We also assist with domestic connections and regional flights.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Special services for students
            </h3>
            <p className="mt-2">
              Students traveling for study abroad often need flexible dates,
              extra baggage allowance and budget-friendly options. We help you
              find student fares, coordinate flight dates with your visa
              approval timeline, and ensure you have all necessary travel
              documents.
            </p>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-base font-semibold text-slate-900">
            Book your flight today
          </h2>
          <p className="text-sm text-slate-600">
            Call us with your travel dates and destination, and we will find
            the best flight options for you with transparent pricing.
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
            Also check out{" "}
            <Link href="/railway-ticketing" className="text-sky-700 hover:underline">
              Railway Ticketing
            </Link>{" "}
            for train bookings within India.
          </p>
        </aside>
      </section>
      </main>
    </PageLayout>
  );
}
