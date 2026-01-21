import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title:
    "IELTS Coaching | IELTS & English Coaching in Jalandhar Cantt | MAK Edutech",
  description:
    "IELTS coaching and English language training at MAK Edutech, Jalandhar Cantt. Structured batches, mock tests, personalized feedback and doubt-clearing sessions to help you achieve your target band score.",
};

export default function IELTSCoachingPage() {
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
            / <span className="text-slate-700">IELTS & Coaching</span>
          </div>
        </nav>

      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
          Jalandhar Cantt
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          IELTS & English Coaching
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          MAK Edutech offers{" "}
          <span className="font-semibold">
            comprehensive IELTS coaching and English language training in Jalandhar Cantt
          </span>
          . With structured batches, regular mock tests, personalized feedback
          and doubt-clearing sessions, we help you improve your English
          proficiency and achieve your target IELTS band score.
        </p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-5 text-sm leading-relaxed text-slate-700 sm:text-base">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Comprehensive IELTS Preparation
            </h2>
            <p className="mt-2">
              The International English Language Testing System (IELTS) is a
              widely recognized test for English proficiency, required for
              study, work and migration to English-speaking countries. Our
              coaching program covers all four modules—Listening, Reading,
              Writing and Speaking—with focused practice and expert guidance to
              help you succeed.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Our IELTS coaching program includes:
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Structured batches with module-wise practice for Listening,
                Reading, Writing and Speaking
              </li>
              <li>
                Regular mock tests simulating the actual IELTS exam format and
                timing
              </li>
              <li>
                Personalized evaluation and feedback to identify strengths and
                areas for improvement
              </li>
              <li>
                Doubt-clearing sessions with experienced faculty to resolve
                questions and clarify concepts
              </li>
              <li>
                Strategies and tips for each module to maximize your score
              </li>
              <li>
                Vocabulary building and grammar enhancement exercises
              </li>
              <li>
                Speaking practice sessions with one-on-one feedback on
                pronunciation, fluency and coherence
              </li>
              <li>
                Writing practice with detailed feedback on task achievement,
                coherence, vocabulary and grammar
              </li>
              <li>
                Flexible timings with weekday and weekend batches suitable for
                students and working professionals
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              IELTS test formats
            </h3>
            <p className="mt-2">
              We provide coaching for both IELTS Academic (for students planning
              to study abroad) and IELTS General Training (for work and
              migration purposes). Our faculty helps you understand the
              differences and prepare accordingly.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Additional support services
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Library and online resources including practice books, sample
                papers and e-learning platforms
              </li>
              <li>
                Exam registration assistance and guidance on test dates and
                centers
              </li>
              <li>
                Pre-exam counseling to build confidence and reduce test anxiety
              </li>
              <li>
                Post-exam support and guidance on score interpretation and
                retest planning if needed
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Why choose MAK Edutech for IELTS coaching?
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>
                Experienced faculty with a strong track record of helping
                students achieve their target scores
              </li>
              <li>
                Modern classrooms and a supportive learning environment in
                Jalandhar Cantt
              </li>
              <li>
                Small batch sizes ensuring personalized attention and
                interaction
              </li>
              <li>
                Regular progress tracking with mock tests and detailed
                performance analysis
              </li>
              <li>
                Integration with our study visa services for complete study
                abroad support
              </li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-base font-semibold text-slate-900">
            Start your IELTS preparation
          </h2>
          <p className="text-sm text-slate-600">
            Visit our institute to discuss your target band score, take a
            diagnostic test, and enroll in a batch that fits your schedule.
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
            Working Hours: Monday to Saturday, 10:00 am – 5:30 pm
          </p>
          <p className="text-xs text-slate-500">
            Also explore{" "}
            <Link href="/study-visas" className="text-sky-700 hover:underline">
              Study Visas
            </Link>{" "}
            for complete study abroad support.
          </p>
        </aside>
      </section>
      </main>
    </PageLayout>
  );
}
