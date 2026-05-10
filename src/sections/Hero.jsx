import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Mail,
  User,
} from "lucide-react";

export default function Hero() {
  const words = ["pipeline", "revenue", "sales systems", "GTM workflows"];
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6f1e8] px-4 sm:px-5 
      pb-10 sm:pb-14 md:pb-14 lg:pb-14 
      pt-28 sm:pt-32 md:pt-28 lg:pt-32
       min-h-screen md:min-h-0 lg:min-h-screen"
    >
      <style>{`
        @keyframes floatSoft {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wordSlide {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes counterUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
          50% { box-shadow: 0 0 24px 6px rgba(59,130,246,0.18); }
        }
        @keyframes orb {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.05); }
          66% { transform: translate(-20px,15px) scale(0.95); }
          100% { transform: translate(0,0) scale(1); }
        }
        .float-soft { animation: floatSoft 5s ease-in-out infinite; }
        .float-soft-delay { animation: floatSoft 6s 1.5s ease-in-out infinite; }
        .float-soft-delay2 { animation: floatSoft 7s 3s ease-in-out infinite; }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.8s 0.1s ease forwards; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.8s 0.2s ease forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.8s 0.35s ease forwards; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.8s 0.5s ease forwards; opacity: 0; }
        .word-animate { animation: wordSlide 0.45s ease forwards; }
        .stat-up { animation: counterUp 0.6s ease forwards; }
        .pulse-glow { animation: pulseGlow 2.5s ease-in-out infinite; }
        .orb-anim { animation: orb 8s ease-in-out infinite; }
        .orb-anim-2 { animation: orb 10s 2s ease-in-out infinite reverse; }
      `}</style>

      {/* Gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59,130,246,0.07), transparent 60%)`,
        }}
      />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.45] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb-anim absolute -left-28 top-24 h-[580px] w-[580px] rounded-full bg-white/55 blur-2xl opacity-80" />
        <div className="orb-anim-2 absolute right-[-180px] top-32 h-[680px] w-[680px] rounded-full bg-white/60 blur-2xl opacity-80" />
        <div className="absolute left-1/2 top-40 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[110px]" />
      </div>

      {/* Floating chips → Desktop only */}
      <div className="float-soft absolute left-[4%] top-[26%] hidden lg:block rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm font-medium text-black/65 shadow-xl backdrop-blur chips">
        <div className="flex items-center gap-2">
          <Zap size={13} className="text-blue-500" />
          Signal-based outbound
        </div>
      </div>

      <div className="float-soft-delay absolute right-[2%] top-[32%] hidden lg:block rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm font-medium text-black/65 shadow-xl backdrop-blur chips">
        <div className="flex items-center gap-2">
          <TrendingUp size={13} className="text-blue-500" />
          AI RevOps automation
        </div>
      </div>

      <div className="float-soft-delay2 absolute bottom-[45%] left-[5%] hidden lg:block rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-sm font-medium text-black/65 shadow-xl backdrop-blur chips">
        <div className="flex items-center gap-2">
          <Users size={13} className="text-blue-500" />
          CRM-ready pipeline
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center top">
        <div className="fade-up mx-auto md:mb-2 mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-black/70 shadow-sm backdrop-blur ">
          <Sparkles size={14} className="text-blue-500" />
          For B2B technology companies
        </div>

        <h1 className="fade-up-1 mx-auto max-w-6xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-[-0.07em] text-black">
          Go-to-market systems for{" "}
          <span className="block font-serif italic font-normal tracking-[-0.05em] md:text-6xl lg:text-inherit ">
            predictable{" "}
            <span
              key={wordIndex}
              className="word-animate inline-block text-blue-600 whitespace-nowrap md:text-5xl "
            >
              {words[wordIndex]}
            </span>
          </span>
        </h1>

        <p className="fade-up-2 mx-auto mt-6 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 md:text-xl text-black/60">
          Combining AI workflows with human expertise to implement end-to-end
          outbound, RevOps and content systems that create qualified pipeline.
        </p>

        {/* FORM */}
        <div className="fade-up-3 mx-auto mt-10 flex w-full max-w-4xl flex-col gap-3 items-stretch md:flex-row md:items-center rounded-2xl border border-black/10 bg-white/80 p-3 shadow-2xl shadow-black/10 backdrop-blur">
          <div className="flex items-center w-full md:flex-1 bg-[#f1f2f6] rounded-full px-4 py-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e0e1ff] mr-2">
              <Mail className="text-purple-500" size={16} />
            </div>
            <input
              className="bg-transparent w-full text-sm focus:outline-none focus:ring-0 border-none placeholder:text-black/40"
              placeholder="Work email"
            />
          </div>

          <div className="hidden w-px h-8 bg-black/10 md:block" />

          <div className="flex items-center w-full md:flex-1 bg-[#f1f2f6] rounded-full px-4 py-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e0e1ff] mr-2">
              <User className="text-purple-500" size={16} />
            </div>
            <input
              className="bg-transparent w-full text-sm focus:outline-none focus:ring-0 border-none placeholder:text-black/40"
              placeholder="Full name"
            />
          </div>

          <button className="pulse-glow group min-h-14 w-full md:w-auto shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-5 text-sm font-semibold text-white transition hover:scale-105 whitespace-nowrap">
            <span className="inline-flex items-center gap-2">
              Request call
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </button>
        </div>

        {/* TAGS */}
        <div className="fade-up-4 mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {["Content", "Outbound", "AI RevOps", "ABM", "CRM Automation"].map(
            (item) => (
              <span
                key={item}
                className="rounded-lg border border-black/10 bg-white/60 px-4 py-2 text-sm text-black/65 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-blue-600"
              >
                {item}
              </span>
            ),
          )}
        </div>

        {/* STATS */}
        <div className="fade-up-4 mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {[
            { value: "1,240+", label: "Signals mapped" },
            { value: "312", label: "Prospects enriched" },
            { value: "47", label: "Warm replies" },
            { value: "18", label: "Calls booked" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/10 bg-white/55 p-5 backdrop-blur shadow-sm"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <p className="text-3xl font-bold tracking-tight text-blue-600">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-black/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
