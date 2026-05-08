import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useState } from "react";
import {
  Target, Database, Brain, Users, PenLine, Share2, TrendingUp,
  Sparkles, ArrowRight, Mail, Workflow, BarChart3, CheckCircle,
  Zap, AlertCircle, RefreshCw, Filter, Search, MessageSquare,
  Bell, Settings, GitBranch
} from "lucide-react";

const flows = [
  {
    id: "outbound",
    label: "Outbound System",
    color: "bg-blue-500",
    accent: "text-blue-500",
    border: "border-blue-400",
    desc: "End-to-end outbound revenue system from market signals to CRM handoff",
  },
  {
    id: "crm",
    label: "CRM Automation",
    color: "bg-blue-700",
    accent: "text-blue-700",
    border: "border-blue-600",
    desc: "CRM data flow, lead scoring, routing logic and pipeline management",
  },
  {
    id: "content",
    label: "Content Pipeline",
    color: "bg-blue-400",
    accent: "text-blue-400",
    border: "border-blue-300",
    desc: "LinkedIn content workflow from ideation to inbound lead generation",
  },
  {
    id: "inbound",
    label: "Inbound Conversion",
    color: "bg-blue-600",
    accent: "text-blue-600",
    border: "border-blue-500",
    desc: "Website visitor capture, enrichment, scoring and sales handoff",
  },
];

function FlowNode({ icon: Icon, title, subtitle, type = "default", pulse = false }) {
  const styles = {
    default: "border-black/10 bg-white text-black",
    blue: "border-blue-400/40 bg-blue-500 text-white",
    dark: "border-white/10 bg-black text-white",
    light: "border-black/10 bg-[#f6f1e8] text-black",
    decision: "border-blue-400/50 bg-blue-50 text-blue-900 rotate-0",
  };
  return (
    <div
      className={`relative rounded-2xl border px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${styles[type]} ${
        pulse ? "ring-2 ring-blue-400 ring-offset-2" : ""
      }`}
    >
      {pulse && (
        <span className="absolute -right-1 -top-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
        </span>
      )}
      <div className="flex items-center gap-3">
        {Icon && (
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
              type === "blue" ? "bg-white/20" : "bg-blue-500 text-white"
            }`}
          >
            <Icon size={15} />
          </span>
        )}
        <div>
          <p className="text-xs font-bold leading-tight">{title}</p>
          {subtitle && (
            <p className={`text-[10px] leading-tight mt-0.5 ${type === "blue" || type === "dark" ? "opacity-60" : "text-black/50"}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Arrow({ label, direction = "down" }) {
  return (
    <div className={`flex ${direction === "right" ? "flex-row items-center" : "flex-col items-center"} gap-1`}>
      <div className={`${direction === "right" ? "h-px w-8 bg-black/25" : "h-8 w-px bg-black/25"}`} />
      {label && (
        <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-blue-700">
          {label}
        </span>
      )}
      <div className={`${direction === "right" ? "h-px w-8 bg-black/25" : "h-8 w-px bg-black/25"}`} />
    </div>
  );
}

function DecisionNode({ question }) {
  return (
    <div className="mx-auto flex h-16 w-40 rotate-0 items-center justify-center rounded-xl border-2 border-dashed border-blue-400 bg-blue-50 px-3 text-center">
      <p className="text-[10px] font-bold text-blue-800">{question}</p>
    </div>
  );
}

function SplitLine({ branches = 2 }) {
  return (
    <div className="relative mx-auto h-10" style={{ width: branches === 3 ? "80%" : "60%" }}>
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-black/20" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />
      {branches === 2 && (
        <>
          <div className="absolute left-0 top-1/2 h-1/2 w-px bg-black/20" />
          <div className="absolute right-0 top-1/2 h-1/2 w-px bg-black/20" />
        </>
      )}
      {branches === 3 && (
        <>
          <div className="absolute left-0 top-1/2 h-1/2 w-px bg-black/20" />
          <div className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-black/20" />
          <div className="absolute right-0 top-1/2 h-1/2 w-px bg-black/20" />
        </>
      )}
    </div>
  );
}

function JoinLine({ branches = 2 }) {
  return (
    <div className="relative mx-auto h-10" style={{ width: branches === 3 ? "80%" : "60%" }}>
      <div className="absolute left-0 top-0 h-1/2 w-px bg-black/20" />
      <div className="absolute right-0 top-0 h-1/2 w-px bg-black/20" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />
      <div className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-black/20" />
    </div>
  );
}

function OutboundFlow() {
  return (
    <div className="space-y-0">
      {/* Top sources */}
      <div className="grid grid-cols-3 gap-3">
        <FlowNode icon={Bell} title="Buying Signals" subtitle="Job changes, funding, tech installs" />
        <FlowNode icon={Target} title="ICP Filters" subtitle="Industry, size, title" />
        <FlowNode icon={Database} title="TAM Scraping" subtitle="Apollo, LinkedIn, Clay" />
      </div>
      <SplitLine branches={3} />
      <Arrow />

      {/* Strategy */}
      <div className="mx-auto max-w-xs">
        <FlowNode icon={Brain} title="Campaign Strategy" subtitle="Offer, angle, hook" type="dark" />
        <Arrow />
        <FlowNode icon={Users} title="Contact Sourcing + Enrichment" subtitle="Name, email, LinkedIn, intent" />
        <Arrow />
        <FlowNode icon={Filter} title="Lead Scoring & Tiering" subtitle="A/B/C tier prioritization" />
        <Arrow />
        <FlowNode icon={PenLine} title="AI Personalized Copywriting" subtitle="Per-account messaging" type="blue" pulse />
      </div>

      <SplitLine branches={2} />

      <div className="grid grid-cols-2 gap-3">
        <FlowNode icon={Mail} title="Email Sequences" subtitle="3–5 touch cadence" />
        <FlowNode icon={MessageSquare} title="LinkedIn Outreach" subtitle="Connection + DM" />
      </div>

      <JoinLine branches={2} />
      <Arrow label="reply" />

      <div className="mx-auto max-w-xs">
        <DecisionNode question="Interested?" />
      </div>

      <SplitLine branches={2} />

      <div className="grid grid-cols-2 gap-3">
        <FlowNode icon={CheckCircle} title="Book Meeting" subtitle="Calendly auto-route" type="blue" />
        <FlowNode icon={RefreshCw} title="Re-engage Later" subtitle="30-day nurture seq." />
      </div>

      <JoinLine branches={2} />
      <Arrow />

      <div className="mx-auto max-w-xs">
        <FlowNode icon={TrendingUp} title="CRM Sync + Sales Handoff" subtitle="Salesforce / HubSpot" type="dark" />
      </div>
    </div>
  );
}

function CRMFlow() {
  return (
    <div className="space-y-0">
      <div className="grid grid-cols-3 gap-3">
        <FlowNode icon={Mail} title="Email Capture" subtitle="Form / booking" />
        <FlowNode icon={Search} title="Website Visitor" subtitle="IP enrichment" />
        <FlowNode icon={Share2} title="Outbound Reply" subtitle="Warm lead" />
      </div>
      <SplitLine branches={3} />
      <Arrow />

      <div className="mx-auto max-w-xs">
        <FlowNode icon={Database} title="CRM Record Created" subtitle="HubSpot / Salesforce" />
        <Arrow />
        <FlowNode icon={Zap} title="Data Enrichment" subtitle="Clearbit, Clay, Apollo" type="blue" />
        <Arrow />
        <FlowNode icon={BarChart3} title="Lead Scoring Engine" subtitle="Firmographic + behavioral" />
        <Arrow />
        <DecisionNode question="Score ≥ 70?" />
      </div>

      <SplitLine branches={2} />

      <div className="grid grid-cols-2 gap-3">
        <FlowNode icon={Zap} title="Auto-Route to AE" subtitle="High-fit account" type="blue" pulse />
        <FlowNode icon={RefreshCw} title="Nurture Sequence" subtitle="Education content" />
      </div>

      <JoinLine branches={2} />
      <Arrow />

      <div className="mx-auto max-w-xs">
        <FlowNode icon={Settings} title="Pipeline Stage Automation" subtitle="Task + reminder triggers" />
        <Arrow />
        <FlowNode icon={BarChart3} title="Revenue Dashboard" subtitle="Real-time KPIs" type="dark" />
      </div>
    </div>
  );
}

function ContentFlow() {
  return (
    <div className="space-y-0">
      <div className="grid grid-cols-3 gap-3">
        <FlowNode icon={Target} title="ICP Research" subtitle="Pain points, language" />
        <FlowNode icon={Brain} title="Content Strategy" subtitle="Themes & pillars" />
        <FlowNode icon={Sparkles} title="Tone of Voice" subtitle="Brand positioning" />
      </div>
      <SplitLine branches={3} />
      <Arrow />

      <div className="mx-auto max-w-xs">
        <FlowNode icon={Users} title="Profile Optimization" subtitle="Headline, about, banner" />
        <Arrow />
        <FlowNode icon={PenLine} title="Topic Mining" subtitle="Trending + evergreen ideas" />
        <Arrow />
        <FlowNode icon={Brain} title="AI Content Drafts" subtitle="GPT-4 + brand voice" type="blue" pulse />
        <Arrow label="review" />
        <FlowNode icon={CheckCircle} title="Human Approval" subtitle="Founder / editor review" />
      </div>

      <SplitLine branches={3} />

      <div className="grid grid-cols-3 gap-3">
        <FlowNode icon={TrendingUp} title="TOFU Posts" subtitle="Awareness & reach" />
        <FlowNode icon={Users} title="MOFU Content" subtitle="Trust & credibility" />
        <FlowNode icon={ArrowRight} title="BOFU CTAs" subtitle="Offers & demos" />
      </div>

      <JoinLine branches={2} />
      <Arrow />

      <div className="mx-auto max-w-xs">
        <FlowNode icon={Share2} title="Consistent Distribution" subtitle="LinkedIn + Newsletter" />
        <Arrow />
        <FlowNode icon={MessageSquare} title="Warm Lead Monitoring" subtitle="Likers, commenters, DMs" type="dark" />
        <Arrow />
        <FlowNode icon={Mail} title="Outbound Follow-up Trigger" subtitle="Auto-add to sequence" type="blue" />
      </div>
    </div>
  );
}

function InboundFlow() {
  return (
    <div className="space-y-0">
      <div className="grid grid-cols-3 gap-3">
        <FlowNode icon={Search} title="Website Visit" subtitle="Intent detected" />
        <FlowNode icon={Mail} title="Form Submission" subtitle="Demo / contact request" />
        <FlowNode icon={Share2} title="Referral Lead" subtitle="Partner / intro" />
      </div>
      <SplitLine branches={3} />
      <Arrow />

      <div className="mx-auto max-w-xs">
        <FlowNode icon={Zap} title="Instant Enrichment" subtitle="Company, title, LinkedIn" type="blue" />
        <Arrow />
        <FlowNode icon={BarChart3} title="Fit Scoring" subtitle="ICP match percentage" />
        <Arrow />
        <DecisionNode question="High Fit?" />
      </div>

      <SplitLine branches={2} />

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-3">
          <FlowNode icon={Bell} title="AE Alert" subtitle="Slack + CRM task" type="blue" pulse />
          <FlowNode icon={CheckCircle} title="Priority Follow-up" subtitle="Within 5 minutes" type="blue" />
        </div>
        <div className="space-y-3">
          <FlowNode icon={Mail} title="Auto Nurture" subtitle="Personalized email seq." />
          <FlowNode icon={RefreshCw} title="Retargeting Tags" subtitle="LinkedIn + Google ads" />
        </div>
      </div>

      <JoinLine branches={2} />
      <Arrow label="qualified" />

      <div className="mx-auto max-w-xs">
        <FlowNode icon={GitBranch} title="Meeting Routing" subtitle="Round-robin or territory" />
        <Arrow />
        <FlowNode icon={TrendingUp} title="Pipeline Entry" subtitle="Opportunity created in CRM" type="dark" />
      </div>
    </div>
  );
}

const flowComponents = {
  outbound: OutboundFlow,
  crm: CRMFlow,
  content: ContentFlow,
  inbound: InboundFlow,
};

export default function Flowcharts() {
  const [active, setActive] = useState("outbound");
  const ActiveFlow = flowComponents[active];
  const activeFlow = flows.find((f) => f.id === active);

  return (
    <main className="min-h-screen bg-[#f6f1e8] text-black">
      <Navbar />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
      `}</style>

      {/* Header */}
      <section className="relative overflow-hidden px-5 pt-44 pb-20 text-center">
        <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />
        <div className="absolute left-1/2 top-32 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-blue-200/25 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="fade-up mx-auto mb-6 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            GTM System Flowcharts
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            See every system
            <span className="block font-serif italic font-normal">mapped end-to-end</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Interactive workflow diagrams showing exactly how Velcor.ai connects your
            outbound, CRM, content, and inbound systems into one revenue engine.
          </p>
        </div>
      </section>

      {/* Tab selector */}
      <section className="px-5 pb-6">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
          {flows.map((flow) => (
            <button
              key={flow.id}
              onClick={() => setActive(flow.id)}
              className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                active === flow.id
                  ? `${flow.color} border-transparent text-white shadow-lg`
                  : "border-black/10 bg-white/60 text-black/65 hover:bg-white hover:text-black"
              }`}
            >
              {flow.label}
            </button>
          ))}
        </div>
      </section>

      {/* Flow description */}
      {activeFlow && (
        <div className="px-5 pb-8">
          <p className="text-center text-sm text-black/50">{activeFlow.desc}</p>
        </div>
      )}

      {/* Flow diagram */}
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-black/10 bg-white/65 p-6 shadow-2xl shadow-black/5 backdrop-blur md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{activeFlow?.label} Workflow</h2>
                <p className="text-xs text-black/45 mt-0.5">Built & managed by Velcor.ai</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${activeFlow?.color} animate-pulse`} />
                <span className="text-xs text-black/40">Live system</span>
              </div>
            </div>

            <div
              key={active}
              className="fade-up"
            >
              <ActiveFlow />
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="border-t border-black/10 bg-white/40 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-lg font-semibold">Diagram legend</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { type: "default", label: "Process step", desc: "Standard workflow action" },
              { type: "blue", label: "AI-powered step", desc: "Automated or AI-assisted" },
              { type: "dark", label: "System output", desc: "Final deliverable or CRM sync" },
              { type: "decision", label: "Decision gate", desc: "Conditional routing logic" },
            ].map(({ type, label, desc }) => (
              <div key={type} className="flex flex-col items-center gap-3 text-center">
                <FlowNode icon={Sparkles} title={label} type={type} />
                <p className="text-xs text-black/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
