import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import {
  ArrowRight,
  Check,
  Mail,
  Database,
  Workflow,
  Bot,
  BarChart3,
  SearchCheck,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Mail,
      title: "Outbound Lead Generation",
      desc: "We build signal-based outbound systems to identify high-fit prospects, enrich decision makers, personalize messaging, and create qualified conversations.",
      points: [
        "Buying signal tracking",
        "Lead enrichment",
        "AI personalization",
        "Email + LinkedIn outreach",
      ],
    },
    {
      icon: SearchCheck,
      title: "Inbound Conversion Systems",
      desc: "We convert warm leads, website visitors, and form submissions into sales-ready opportunities using automation, scoring, and nurture flows.",
      points: [
        "Lead scoring",
        "Visitor enrichment",
        "Routing logic",
        "Automated follow-ups",
      ],
    },
    {
      icon: Database,
      title: "RevOps & CRM Automation",
      desc: "We clean, automate, and optimize your CRM so your sales process becomes faster, clearer, and easier to manage.",
      points: [
        "CRM cleanup",
        "Data validation",
        "Pipeline automation",
        "Reporting dashboards",
      ],
    },
    {
      icon: Bot,
      title: "AI Sales Assistants",
      desc: "We create AI agents that research prospects, summarize accounts, draft follow-ups, and support sales teams with context.",
      points: [
        "Prospect research",
        "Follow-up drafts",
        "Meeting prep",
        "CRM note automation",
      ],
    },
    {
      icon: Workflow,
      title: "GTM Workflow Design",
      desc: "We connect your tools, data, forms, automations, outreach, and reporting into one complete growth operating system.",
      points: [
        "Tool mapping",
        "Automation architecture",
        "Workflow buildout",
        "System documentation",
      ],
    },
    {
      icon: BarChart3,
      title: "Pipeline Reporting",
      desc: "We help you track replies, meetings, conversion rates, revenue movement, and campaign performance from one place.",
      points: [
        "KPI dashboards",
        "Campaign reports",
        "Reply tracking",
        "Revenue visibility",
      ],
    },
  ];

  const packages = [
    {
      name: "Pilot Campaign",
      price: "Starter",
      desc: "Best for testing one focused outbound or automation system.",
      features: [
        "ICP + offer review",
        "1 workflow build",
        "Lead list setup",
        "Basic reporting",
      ],
    },
    {
      name: "Growth System",
      price: "Popular",
      desc: "Best for teams that want outbound + CRM automation together.",
      features: [
        "Signal-based prospecting",
        "CRM workflow setup",
        "AI personalization",
        "Weekly optimization",
      ],
    },
    {
      name: "Revenue Engine",
      price: "Advanced",
      desc: "Best for full GTM infrastructure across acquisition and RevOps.",
      features: [
        "Multiple GTM workflows",
        "AI agents",
        "Advanced dashboards",
        "Monthly growth roadmap",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <section className="relative overflow-hidden px-5 md:pt-32 pt-28 pb-10 text-center">
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

        <div className="relative z-10 mx-auto max-w-6xl ">
          <p className="mx-auto mb-1 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Velcor.ai Services
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Services built for
            <span className="block font-serif italic font-normal">
              revenue growth
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-black/60">
            We design and implement complete GTM systems — from outbound lead
            generation to CRM automation, AI agents, and reporting dashboards.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500 hover:text-white"
          >
            Apply for pilot campaign <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <section className="pb-10">
        <div className="w-full md:px-12 px-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-xl shadow-black/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/75 hover:shadow-2xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-blue-400">
                <service.icon size={23} />
              </div>

              <h3 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/65">
                {service.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {service.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-3 text-sm font-medium text-black/70"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400 text-black">
                      <Check size={13} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/45 py-4 md:py-6 ">
        <div className="w-full md:px-12 px-5">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              How we turn systems
              <span className="block font-serif italic font-normal">
                into pipeline
              </span>
            </h2>
          </div>

          <div className="mt-10 mb-6 grid gap-4 md:grid-cols-4">
            {[
              [
                "01",
                "Diagnose",
                "We review your offer, ICP, CRM, tools, and current sales workflow.",
              ],
              [
                "02",
                "Design",
                "We map the exact outbound, RevOps, AI, and reporting system your team needs.",
              ],
              [
                "03",
                "Build",
                "We implement workflows, automations, lead systems, and GTM infrastructure.",
              ],
              [
                "04",
                "Optimize",
                "We improve messaging, targeting, conversion, and reporting every cycle.",
              ],
            ].map(([num, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-black/10 bg-[#f6f1e8] p-6"
              >
                <p className="text-sm font-semibold text-black/40">{num}</p>
                <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="w-full md:px-14 px-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
              Packages
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              Choose the level of
              <span className="block font-serif italic font-normal">
                GTM support
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Start with a focused pilot or build the full revenue operating
              system for your team.
            </p>
          </div>

          <div className="grid gap-4">
            {packages.map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-black/10 bg-white/65 p-6 shadow-xl shadow-black/5 transition hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/60">
                      {item.desc}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-400">
                    {item.price}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-lg border border-black/10 bg-[#f6f1e8] px-3 py-2 text-xs font-medium text-black/65"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" md:px-10 px-5 pb-10 text-center">
        <div className="w-full md:px-14 px-8 rounded-[2rem] border border-black/10 bg-black p-10 text-white shadow-2xl shadow-black/20 md:p-14">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Ready to build your
            <span className="block font-serif italic font-normal text-blue-400">
              GTM system?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Apply for a pilot campaign and get a custom growth system mapped
            around your offer, market, and current tools.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-blue-400"
          >
            Apply Now <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
