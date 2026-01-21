import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title:
    "Study Visas | MAK Edutech Study Abroad Consultant in Jalandhar Cantt",
  description:
    "End-to-end Study Visa support from MAK Edutech, Jalandhar Cantt. We help with admissions, visa filing, SOPs, and pre-departure counseling for students planning to study abroad.",
};

export default function StudyVisasPage() {
  return (
    <PageLayout>
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
      <nav className="mb-4 text-xs text-slate-500 sm:text-sm">
        <Link href="/" className="hover:text-sky-700">
          Home
        </Link>{" "}
        / <span className="text-slate-700">Study Visas</span>
      </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
          Jalandhar Cantt
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Study Visas
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          MAK Edutech provides{" "}
          <span className="font-semibold">
            comprehensive Study Visa services in Jalandhar Cantt
          </span>{" "}
          for students planning to pursue higher education abroad. From course
          selection and university applications to visa filing and pre-departure
          guidance, we support you at every step.
        </p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Complete Study Abroad Support
            </h2>
            <p className="mt-2">
              Study visas require careful planning, strong documentation and
              clear communication of your academic goals. Our experienced
              counselors help you choose the right country, course and
              university, then guide you through the entire visa application
              process.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Our Study Visa services include:
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Profile assessment and country/university shortlisting based on
                your academic background and career goals
              </li>
              <li>
                Guidance on course selection, eligibility requirements and
                application deadlines
              </li>
              <li>
                Assistance with university applications, recommendation letters
                and academic transcripts
              </li>
              <li>
                Statement of Purpose (SOP) writing and review to highlight your
                strengths
              </li>
              <li>
                Financial documentation guidance including bank statements,
                education loans and sponsorship letters
              </li>
              <li>
                Visa application filing, appointment booking and biometrics
                support
              </li>
              <li>
                Interview preparation and mock sessions to build confidence
              </li>
              <li>
                Pre-departure counseling covering accommodation, health
                insurance, banking and cultural adaptation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Popular study destinations
            </h3>
            <p className="mt-2">
              We regularly assist students applying to universities in Canada,
              the United Kingdom, the United States, Australia, New Zealand,
              Germany, Ireland and other European countries known for quality
              education and post-study work opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Why choose MAK Edutech for Study Visas?
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Experienced counselors who understand the requirements of
                different countries and universities
              </li>
              <li>
                Transparent guidance with no hidden fees or false promises
              </li>
              <li>
                End-to-end support from course selection to post-arrival
                assistance
              </li>
              <li>
                Strong track record of successful visa approvals for students
                from Jalandhar and surrounding areas
              </li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-base font-semibold text-slate-900">
            Start your study abroad journey
          </h2>
          <p className="text-sm text-slate-600">
            Book a consultation to discuss your academic profile, explore study
            options and get a personalized roadmap for your Study Visa
            application.
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
            <Link href="/ielts-coaching" className="text-sky-700 hover:underline">
              IELTS Coaching
            </Link>{" "}
            to improve your English proficiency for study abroad.
          </p>
        </aside>
      </section>
      </main>
    </PageLayout>
  );
}
