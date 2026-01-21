import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title:
    "Tourist & Visitor Visas | MAK Edutech Visa Consultant in Jalandhar Cantt",
  description:
    "Get guidance for Tourist & Visitor Visas from MAK Edutech, Jalandhar Cantt. We help with documentation, applications and interview preparation for Canada, UK, USA, Australia and Europe.",
};

export default function VisasPage() {
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
            / <span className="text-slate-700">Tourist & Visitor Visas</span>
          </div>
        </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
          Jalandhar Cantt
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Tourist & Visitor Visas
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          MAK Edutech offers{" "}
          <span className="font-semibold">
            Tourist and Visitor Visa consultation in Jalandhar Cantt
          </span>{" "}
          for popular destinations including Canada, the UK, USA, Australia and
          Europe. We guide you step by step so that your application is complete
          and well-presented.
        </p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              How we help with Tourist & Visitor Visas
            </h2>
            <p className="mt-2">
              Every country has different documentation and eligibility
              requirements. Our team reviews your profile, explains the visa
              process clearly and helps you choose the right category for your
              travel purpose—tourism, visiting family, or short business trips.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              End-to-end support includes:
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Profile assessment and country/course shortlisting</li>
              <li>Guidance on financials and supporting documents</li>
              <li>Form filling and visa application submission</li>
              <li>Appointment booking and biometrics guidance</li>
              <li>Interview preparation and travel checklist</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Focus countries
            </h3>
            <p className="mt-2">
              We regularly work with applications for Canada, the United
              Kingdom, the United States, Australia, New Zealand and Schengen
              countries in Europe.
            </p>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-base font-semibold text-slate-900">
            Talk to a visa counselor
          </h2>
          <p className="text-sm text-slate-600">
            Discuss your travel plans and get a clear list of documents needed
            for your Tourist or Visitor Visa.
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
            <Link href="/study-visas" className="text-sky-700 hover:underline">
              Study Visas
            </Link>{" "}
            if you are planning for long-term education abroad.
          </p>
        </aside>
      </section>
      </main>
    </PageLayout>
  );
}

