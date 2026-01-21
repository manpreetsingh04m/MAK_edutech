import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title:
    "Travel Packages | Holiday & Family Travel Packages in Jalandhar Cantt | MAK Edutech",
  description:
    "Customized holiday and family travel packages from MAK Edutech, Jalandhar Cantt. Hotels, sightseeing, local transfers and complete travel planning for domestic and international destinations.",
};

export default function TravelPackagesPage() {
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
            / <span className="text-slate-700">Travel Packages</span>
          </div>
        </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
          Jalandhar Cantt
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Travel Packages
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          MAK Edutech offers{" "}
          <span className="font-semibold">
            customized holiday and family travel packages from Jalandhar Cantt
          </span>
          . We design complete travel experiences with hotels, sightseeing,
          local transfers and all essential services included, so you can focus
          on enjoying your trip.
        </p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Complete Travel Planning
            </h2>
            <p className="mt-2">
              Planning a holiday involves coordinating flights, hotels,
              sightseeing, local transport and more. Our travel packages take
              care of all these details, giving you a hassle-free vacation
              experience. Whether you want a family holiday, a romantic getaway,
              or an adventure trip, we create packages tailored to your
              preferences and budget.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              What our travel packages include:
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Flight or train bookings (domestic and international) as per
                your package
              </li>
              <li>
                Hotel accommodations with options for budget, mid-range and
                luxury stays
              </li>
              <li>
                Sightseeing tours covering major attractions and landmarks
              </li>
              <li>
                Local transfers including airport pickups, hotel transfers and
                inter-city travel
              </li>
              <li>
                Meal plans (breakfast, half-board or full-board) based on your
                preference
              </li>
              <li>
                Travel insurance options for added security and peace of mind
              </li>
              <li>
                Visa assistance for international destinations when required
              </li>
              <li>
                24/7 support during your trip for any assistance or
                modifications needed
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Popular destinations
            </h3>
            <p className="mt-2">
              We offer packages for domestic destinations including Goa,
              Kerala, Himachal Pradesh, Rajasthan, Uttarakhand, Andaman &
              Nicobar, and international destinations like Dubai, Singapore,
              Thailand, Malaysia, Europe, Canada, USA, Australia and more.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Customization options
            </h3>
            <p className="mt-2">
              Every traveler has unique preferences. We work with you to
              customize your package—adjusting duration, adding or removing
              activities, choosing specific hotels, and including special
              requests like honeymoon arrangements, family-friendly activities,
              or adventure sports.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Why choose MAK Edutech for travel packages?
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Transparent pricing with no hidden costs—you know exactly what
                you are paying for
              </li>
              <li>
                Personalized service with attention to your specific needs and
                preferences
              </li>
              <li>
                End-to-end support from planning to post-trip assistance
              </li>
              <li>
                Competitive rates through our partnerships with hotels and
                service providers
              </li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-base font-semibold text-slate-900">
            Plan your perfect holiday
          </h2>
          <p className="text-sm text-slate-600">
            Share your destination, travel dates, group size and preferences,
            and we will create a customized travel package for you.
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
            <Link href="/travel-insurance" className="text-sky-700 hover:underline">
              Travel Insurance
            </Link>{" "}
            to protect your trip.
          </p>
        </aside>
      </section>
      </main>
    </PageLayout>
  );
}
