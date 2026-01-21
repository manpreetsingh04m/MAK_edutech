import Link from "next/link";
import Header from "./components/Header";

const services = [
  {
    title: "Tourist & Visitor Visas",
    description:
      "Guidance for applications, documentation, and interviews for popular destinations like Canada, UK, USA, Australia, and Europe.",
    href: "/visas",
  },
  {
    title: "Study Visas",
    description:
      "End‑to‑end support for admissions, visa filing, SOPs, and pre‑departure counseling for students.",
    href: "/study-visas",
  },
  {
    title: "Flight Ticketing",
    description:
      "Domestic and international flight ticket booking with transparent pricing, flexible options, and itinerary support.",
    href: "/flight-ticketing",
  },
  {
    title: "Railway Ticketing & Reservations",
    description:
      "Railway ticket booking and seat reservations for major routes across India, including PNR assistance and travel planning from Jalandhar Cantt.",
    href: "/railway-ticketing",
  },
  {
    title: "Travel Packages",
    description:
      "Customised holiday and family packages with hotels, sightseeing, and local transfers included.",
    href: "/travel-packages",
  },
  {
    title: "Travel Insurance",
    description:
      "Comprehensive insurance plans that cover medical emergencies, baggage loss, and trip interruptions.",
    href: "/travel-insurance",
  },
  {
    title: "IELTS & Coaching Support",
    description:
      "Focused coaching, mock tests, and doubt sessions to help you secure your desired band score.",
    href: "/ielts-coaching",
  },
];

const faqs = [
  {
    question: "Is the IELTS test difficult?",
    answer:
      "IELTS is a very widely used exam of English language proficiency. With the right guidance and consistent practice, most students are able to achieve their target scores.",
  },
  {
    question: "Can I get a job after passing the IELTS test?",
    answer:
      "IELTS itself is not a job guarantee, but a good score opens pathways to study and work opportunities in English‑speaking countries.",
  },
  {
    question: "How does MAK Edutech help in clearing IELTS?",
    answer:
      "We focus on all four modules—Listening, Reading, Writing, and Speaking—with regular mock tests, doubt‑clearing sessions, and personalised feedback.",
  },
  {
    question: "What is the minimum age to appear in the IELTS exam?",
    answer: "Generally, candidates should be at least 16 years of age to appear for IELTS.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-sky-600 via-sky-700 to-blue-800 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-16 md:px-12 md:py-20">
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200 sm:text-sm">
              Jalandhar Cantt • Punjab
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Trusted Partner for{" "}
              <span className="text-sky-200">Visas & Overseas Travel</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-sky-100 sm:text-lg">
              MAK Edutech in Jalandhar Cantt offers expert guidance for Tourist
              and Study Visas, International Travel Packages, Flight and Railway
              Ticketing & Reservations, and Travel Insurance—along with IELTS
              coaching and career counseling so you can plan your journey with
              confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="tel:+919988266786"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-sky-700 shadow-lg transition hover:bg-sky-50 hover:shadow-xl sm:px-10 sm:py-4 sm:text-base"
              >
                📞 Call Now: +91 99882 66786
              </a>
              <a
                href="#services"
                className="rounded-full border-2 border-white/90 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-10 sm:py-4 sm:text-base"
              >
                Explore Services ↓
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">7+</p>
                <p className="mt-1 text-xs text-sky-200 sm:text-sm">
                  Services
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold">100%</p>
                <p className="mt-1 text-xs text-sky-200 sm:text-sm">
                  Transparent
                </p>
              </div>
              <div className="col-span-2 rounded-xl bg-white/10 p-4 backdrop-blur sm:col-span-1">
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-1 text-xs text-sky-200 sm:text-sm">
                  Support
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-linear-to-l from-transparent to-sky-900/20 opacity-50"></div>
        </section>

        {/* Detailed services */}
        <section id="services" className="mt-16 md:mt-24">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Services at MAK Edutech
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                A complete range of visa, travel and coaching solutions under
                one roof—designed to support students, families, and working
                professionals.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link href={service.href} className="group block">
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {service.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-sky-700 sm:text-sm group-hover:underline">
                    Learn more →
                  </p>
                </Link>
              </article>
            ))}
          </div>
          <section
            id="railway-ticketing"
            className="mt-10 rounded-2xl bg-slate-50 p-5 text-sm text-slate-700 sm:text-base"
          >
            <h3 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              Railway Ticketing & Reservations from Jalandhar Cantt
            </h3>
            <p className="mt-2 leading-relaxed">
              Along with visa and flight ticketing services, MAK Edutech also
              helps you with{" "}
              <span className="font-semibold">
                railway ticket booking and seat reservations
              </span>{" "}
              across major routes in India. Whether you are a student travelling
              to join your course, a family planning a holiday, or a working
              professional commuting for work, we assist with selecting
              convenient trains, classes and routes from Jalandhar Cantt and
              nearby stations.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-700 sm:text-sm">
              <li>Guidance for train options, timings and available classes</li>
              <li>Support with PNR status, seat preferences and basic queries</li>
              <li>
                Coordination with your overall travel plan, including visas,
                flights and accommodation
              </li>
            </ul>
          </section>
        </section>

        {/* About & Coaching */}
        <section
          id="about"
          className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[1.2fr,1fr]"
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              About MAK Edutech, Jalandhar Cantt
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              MAK Edutech is a dedicated institution focused on academic growth
              and overseas opportunities. With modern classrooms, a well‑stocked
              library and a supportive learning environment, the institute helps
              students prepare for competitive exams and plan their study
              abroad journey with clarity.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Our faculty and counselors bring years of experience in guiding
              students through IELTS, course selection, visa processes and
              settlement planning. We believe in transparent guidance, ethical
              counseling and continuous support before and after you travel.
            </p>
          </div>

          <div className="space-y-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                IELTS & English Coaching
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Structured batches for IELTS with module‑wise practice, regular
                mock tests and personalised evaluation so you can steadily
                improve your band score.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 sm:text-sm">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">Flexible Timings</p>
                <p className="mt-1">
                  Weekday and weekend batches suitable for students and working
                  professionals.
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="font-semibold text-slate-900">
                  Mock Tests & Feedback
                </p>
                <p className="mt-1">
                  Regular tests with detailed feedback to track your progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support services & policies */}
        <section
          id="support"
          className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2"
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Support Services
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">
                  Library & Online Resources:
                </span>{" "}
                Access to books, practice material and e‑learning platforms for
                additional practice.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Doubt‑Clearing Sessions:
                </span>{" "}
                Regular sessions with faculty to resolve questions and clarify
                concepts.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Counseling & Career Planning:
                </span>{" "}
                One‑to‑one guidance to help you choose the right country, course
                and pathway.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Mock Tests & Assessments:
                </span>{" "}
                Exam‑style practice tests for IELTS and other competitive exams.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              Coaching Policies
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">
                  Attendance:
                </span>{" "}
                Regular attendance is expected to ensure consistent progress.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Code of Conduct:
                </span>{" "}
                Mutual respect between students, faculty and staff with a focus
                on serious learning.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Parental Engagement:
                </span>{" "}
                Periodic updates and meetings to keep parents informed of
                progress.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Health & Safety:
                </span>{" "}
                Safe and secure environment for all students and staff.
              </li>
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="mt-14 md:mt-20">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-5 divide-y divide-slate-200 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group px-4 py-3 sm:px-6 sm:py-4"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 sm:text-base">
                  <span>{faq.question}</span>
                  <span className="text-xs text-slate-400 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-400 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact & location */}
        <section
          id="contact"
          className="mt-14 grid gap-10 md:mt-20"
        >
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Visit MAK Edutech, Jalandhar Cantt
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Drop by the institute during working hours to discuss your
              profile, understand the process and get a personalised roadmap for
              your overseas plans.
            </p>
            <dl className="mt-5 space-y-3 text-sm text-slate-700">
              <div>
                <dt className="font-semibold text-slate-900">Address</dt>
                <dd className="mt-1">
                  Royal Enclave, 38 B, Deep Nagar Rd, Jalandhar Cantt, Jalandhar, Punjab 144005
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Phone</dt>
                <dd className="mt-1">
                  <a href="tel:+919988266786" className="hover:text-sky-700">
                    +91‑99882‑66786
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Working Hours</dt>
                <dd className="mt-1 text-sm text-slate-600">
                  Monday to Saturday: 10:00 am – 5:30 pm
                  <br />
                  Sunday: Counselling and course overview (by discussion).
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-500 sm:flex-row md:px-6">
          <p>© {new Date().getFullYear()} MAK Edutech. All rights reserved.</p>
          <p>
            Visas • Packages • Ticketing (Flights & Railways) • Insurance •
            IELTS Coaching
          </p>
        </div>
      </footer>
    </div>
  );
}


