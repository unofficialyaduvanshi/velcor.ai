import { ArrowRight, Check } from "lucide-react";

export default function PilotCTA() {
  const benefits = [
    "Signal-based lead list built for your ICP",
    "AI-personalized outbound sequence",
    "CRM workflow and pipeline tracking",
    "Weekly optimization and reporting",
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f6f1e8] py-12 md:py-2 md:mb-16"
    >
      <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

      <div className="relative z-10 w-full md:px-14 px-8 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Pilot Campaign
          </p>

          <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
            Apply for a pilot campaign
            <span className="block font-serif italic font-normal">
              built around your offer
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
            We’ll map your ICP, find buying signals, build outbound workflows,
            connect CRM automations and launch a revenue-engineered pilot.
          </p>

          <div className="mt-8 grid gap-3">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3 text-black/75">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-400 text-black">
                  <Check size={15} />
                </span>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.03]"
          >
            Apply For Pilot Campaign
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-black p-6 text-white shadow-2xl shadow-black/25">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-400">
              <span className="absolute -right-1 top-0 h-3 w-3 rounded-full bg-blue-500 ring-2 ring-black" />
            </div>

            <div>
              <p className="text-lg font-semibold">Velcor.ai Team</p>
              <p className="text-sm text-white/60">Revenue Engineering</p>
            </div>

            <span className="ml-auto text-xl text-white/40">×</span>
          </div>

          <h3 className="mt-8 text-3xl font-semibold tracking-tight">
            Book your 1-1 Strategy Call
          </h3>

          <p className="mt-4 text-lg leading-7 text-white/75">
            Book a 30 min session to see how we would engineer an unstoppable
            pipeline for you — without changing your workflow.
          </p>

          <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-4">
            <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-[78%] rounded-full bg-blue-400" />
            </div>

            <div className="flex items-center justify-between">
              <p className="font-semibold">Only few slots are left.</p>
              <p className="font-bold">32:30</p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-5 gap-3">
            {[
              ["Fri", "17"],
              ["Sat", "18"],
              ["Sun", "19"],
              ["Mon", "20"],
              ["Tue", "21"],
            ].map(([day, date]) => (
              <div
                key={day}
                className="rounded-xl border border-white/30 px-2 py-3 text-center"
              >
                <p className="font-semibold">{day}</p>
                <p className="text-xl font-bold">{date}</p>
              </div>
            ))}
          </div>

          <button className="mt-7 w-full rounded-2xl bg-white py-4 text-center font-semibold text-black transition hover:bg-blue-400">
            Schedule A Strategy Session
          </button>

          <p className="mt-6 border-t border-white/10 pt-5 text-center text-xs font-semibold text-white/40">
            Powered by Velcor.ai
          </p>
        </div>
      </div>
    </section>
  );
}
