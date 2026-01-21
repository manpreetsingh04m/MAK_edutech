import Header from "./Header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      {children}
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
