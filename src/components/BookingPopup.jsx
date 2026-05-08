import { useEffect, useState } from "react";

export default function BookingPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000); // 5 sec delay

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[999] w-[340px] max-w-[90%] animate-[fadeIn_0.5s_ease]">
      <div className="rounded-3xl border border-white/10 bg-black p-6 text-white shadow-2xl shadow-black/40">
        {/* close button */}
        <button
          onClick={() => setShow(false)}
          // className="absolute right-4 top-4 text-white/50 hover:text-white "
          className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-4xl leading-none text-white/50 transition hover:bg-white/10 hover:text-white"
        >
          ×
        </button>

        {/* header */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-400">
            <span className="absolute -right-1 top-0 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-black" />
          </div>

          <div>
            <p className="text-sm font-semibold">Velcor.ai Team</p>
            <p className="text-xs text-white/60">Revenue Engineering</p>
          </div>
        </div>

        {/* content */}
        <h3 className="mt-5 text-lg font-semibold">
          Book your 1-1 Strategy Call
        </h3>

        <p className="mt-2 text-sm text-white/70">
          See how we build pipeline systems for your business.
        </p>

        {/* progress */}
        <div className="mt-4 rounded-xl border border-white/10 bg-white/10 p-3">
          <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[75%] rounded-full bg-blue-400" />
          </div>

          <div className="flex justify-between text-xs">
            <span>Few slots left</span>
            <span>32:30</span>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-4 w-full rounded-xl bg-white py-3 text-sm font-semibold text-black hover:bg-blue-400 transition">
          Schedule Call
        </button>
      </div>

      {/* animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
