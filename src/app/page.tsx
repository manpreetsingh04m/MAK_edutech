"use client";

import Image from "next/image";
import type { FormEvent } from "react";

const services = [
  {
    title: "Tourist & Visitor Visas",
    description:
      "Guidance for applications, documentation, and interviews for popular destinations like Canada, UK, USA, Australia, and Europe.",
  },
  {
    title: "Study Visas",
    description:
      "End‑to‑end support for admissions, visa filing, SOPs, and pre‑departure counseling for students.",
  },
  {
    title: "Ticketing",
    description:
      "Domestic and international flight ticket booking with transparent pricing and flexible options.",
  },
  {
    title: "Travel Packages",
    description:
      "Customised holiday and family packages with hotels, sightseeing, and local transfers included.",
  },
  {
    title: "Travel Insurance",
    description:
      "Comprehensive insurance plans that cover medical emergencies, baggage loss, and trip interruptions.",
  },
  {
    title: "IELTS & Coaching Support",
    description:
      "Focused coaching, mock tests, and doubt sessions to help you secure your desired band score.",
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
  const handleEnquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string | null) ?? "";
    const phone = (formData.get("phone") as string | null) ?? "";
    const interest = (formData.get("interest") as string | null) ?? "";
    const message = (formData.get("message") as string | null) ?? "";

    const composedMessage = [
      "New enquiry from MAK Edutech website:",
      name && `Name: ${name}`,
      phone && `Mobile / WhatsApp: ${phone}`,
      interest && `Interested In: ${interest}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(composedMessage);

    // Send to WhatsApp on the institute number
    const whatsappUrl = `https://wa.me/919988266786?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
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
              Visas • Packages • Ticketing • Insurance
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#services" className="hover:text-sky-700">
              Services
            </a>
            <a href="#about" className="hover:text-sky-700">
              About
            </a>
            <a href="#support" className="hover:text-sky-700">
              Support
            </a>
            <a href="#faqs" className="hover:text-sky-700">
              FAQs
            </a>
            <a href="#contact" className="rounded-full bg-sky-700 px-4 py-2 text-white shadow-sm hover:bg-sky-800">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
        {/* Hero + primary services */}
        <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
              Jalandhar Cantt
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Your trusted partner for{" "}
              <span className="text-sky-700">Visas & Overseas Travel</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              MAK Edutech in Jalandhar Cantt offers expert guidance for Tourist
              and Study Visas, International Travel Packages, Ticketing and
              Insurance—along with IELTS coaching and career counseling so you
              can plan your journey with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919988266786"
                className="rounded-full bg-sky-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-600 hover:text-sky-700"
              >
                Visit Institute Details
              </a>
            </div>
            <dl className="mt-6 grid max-w-xl grid-cols-2 gap-4 text-xs text-slate-600 sm:text-sm">
              <div>
                <dt className="font-semibold text-slate-800">
                  Location & Infrastructure
                </dt>
                <dd className="mt-1">
                  Conveniently located in Jalandhar Cantt with modern classrooms
                  and a student‑friendly environment.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-800">
                  Trusted Guidance
                </dt>
                <dd className="mt-1">
                  Experienced team offering transparent advice at every step of
                  your journey.
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
            <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:h-64">
              <Image
                src="/makEdutech.png"
                alt="MAK Edutech office placeholder"
                fill
                className="object-contain opacity-90"
                priority
              />
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Our Services
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-700 sm:text-sm">
                <li>Tourist & Visitor Visas</li>
                <li>Study Visas</li>
                <li>Ticketing</li>
                <li>Travel Packages</li>
                <li>Travel Insurance</li>
                <li>IELTS & Coaching</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed services */}
        <section id="services" className="mt-14 md:mt-20">
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
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
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
                  MAK Edutech, Jalandhar Cantt, Jalandhar, Punjab, India.
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
          <p>Visas • Packages • Ticketing • Insurance • IELTS Coaching</p>
        </div>
      </footer>
    </div>
  );
}


