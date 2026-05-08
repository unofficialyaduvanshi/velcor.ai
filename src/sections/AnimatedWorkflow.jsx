import {
  Mail,
  Target,
  Database,
  Brain,
  Users,
  PenLine,
  Share2,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AnimatedWorkflow() {
  return (
    <section
      id="workflows"
      className="relative overflow-hidden bg-[#f6f1e8] px-4 py-16 sm:px-5 sm:py-20 md:py-32"
    >
      <div className="absolute inset-0 opacity-[0.3] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] bg-[size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-16">
          <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
            Workflow Architecture
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-black sm:text-5xl md:text-7xl">
            Built like a system,
            <span className="block font-serif italic font-normal">
              not a task list
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/60 sm:mt-6 sm:text-lg sm:leading-8">
            Clean GTM diagrams showing how data, strategy, automation and sales
            handoff connect into one revenue system.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <DiagramBoard
            title="Outbound Revenue System"
            subtitle="From data sourcing to qualified meetings"
            accent="bg-blue-400"
            type="outbound"
          />

          <DiagramBoard
            title="Content Growth System"
            subtitle="From positioning to inbound pipeline"
            accent="bg-[#e8b98c]"
            type="content"
          />
        </div>
      </div>
    </section>
  );
}

function DiagramBoard({ title, subtitle, accent, type }) {
  return (
    <div className="rounded-[2rem] border border-black/10 bg-white/65 p-4 shadow-2xl shadow-black/5 backdrop-blur sm:p-5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-black/50">{subtitle}</p>
        </div>

        <span className={`h-3 w-3 shrink-0 rounded-full ${accent}`} />
      </div>

      <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#fbf8f1] p-4 sm:p-5 md:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_6px_6px,rgba(0,0,0,0.10)_2px,transparent_0)] bg-[size:22px_22px] opacity-35" />

        <div className="relative z-10">
          {type === "outbound" ? <OutboundDiagram /> : <ContentDiagram />}
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${accent}`} />
      </div>
    </div>
  );
}

function Box({ icon: Icon, title, small = false }) {
  return (
    <div
      className={`group flex min-w-0 items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-3 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-xl sm:px-4 ${
        small ? "min-h-[56px] sm:min-h-[58px]" : "min-h-[64px] sm:min-h-[66px]"
      }`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-400 group-hover:text-black">
        <Icon size={17} />
      </span>

      <p className="text-xs font-semibold leading-tight text-black transition-colors duration-300 group-hover:text-black sm:text-sm">
        {title}
      </p>
    </div>
  );
}

function Connector() {
  return <div className="mx-auto h-8 w-px bg-black/20" />;
}

function SplitConnector() {
  return (
    <div className="relative mx-auto h-10 w-[72%]">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/20" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />
      <div className="absolute left-0 top-1/2 h-1/2 w-px bg-black/20" />
      <div className="absolute right-0 top-1/2 h-1/2 w-px bg-black/20" />
    </div>
  );
}

function ThreeSplitConnector() {
  return (
    <div className="relative mx-auto h-10 w-[78%]">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/20" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />
      <div className="absolute left-0 top-1/2 h-1/2 w-px bg-black/20" />
      <div className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-black/20" />
      <div className="absolute right-0 top-1/2 h-1/2 w-px bg-black/20" />
    </div>
  );
}

function TopThreeConnector() {
  return (
    <div className="relative mx-auto hidden h-10 w-[70%] sm:block">
      <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />
      <div className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-black/20" />
      <div className="absolute left-[16.5%] top-0 h-1/2 w-px bg-black/20" />
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-black/20" />
      <div className="absolute right-[16.5%] top-0 h-1/2 w-px bg-black/20" />
    </div>
  );
}

function BottomTwoConnector() {
  return (
    <div className="relative mx-auto hidden h-10 w-[72%] sm:block">
      <div className="absolute left-0 top-0 h-1/2 w-px bg-black/20" />
      <div className="absolute right-0 top-0 h-1/2 w-px bg-black/20" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />
      <div className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-black/20" />
    </div>
  );
}

function BottomThreeConnector() {
  return (
    <div className="relative mx-auto hidden h-10 w-[78%] sm:block">
      <div className="absolute left-0 top-0 h-1/2 w-px bg-black/20" />
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-black/20" />
      <div className="absolute right-0 top-0 h-1/2 w-px bg-black/20" />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />
      <div className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-black/20" />
    </div>
  );
}

function OutboundDiagram() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Box icon={Mail} title="Email Infra" small />
        <Box icon={Target} title="ICP Development" small />
        <Box icon={Database} title="TAM Scraping" small />
      </div>

      <TopThreeConnector />

      <div className="mx-auto max-w-xs pt-3 sm:pt-0">
        <Box icon={Brain} title="Campaign Strategy" />
        <Connector />
        <Box icon={Users} title="Company & Contact Sourcing" />
        <Connector />
        <Box icon={TrendingUp} title="Lead Scoring & Tiering" />
        <Connector />
        <Box icon={PenLine} title="AI Personalized Copywriting" />
      </div>

      <div className="hidden sm:block">
        <SplitConnector />
      </div>

      <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2 sm:pt-0">
        <Box icon={Sparkles} title="High-intent Signal Campaigns" />
        <Box icon={Share2} title="Persona-based Outreach" />
      </div>

      <BottomTwoConnector />

      <div className="mx-auto max-w-xs pt-3 sm:pt-0">
        <Box icon={ArrowRight} title="CRM Sync + Sales Handoff" />
      </div>
    </div>
  );
}

function ContentDiagram() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Box icon={Target} title="ICP" small />
        <Box icon={Brain} title="Content Strategy" small />
        <Box icon={Sparkles} title="Tone of Voice" small />
      </div>

      <TopThreeConnector />

      <div className="mx-auto max-w-xs pt-3 sm:pt-0">
        <Box icon={Users} title="Profile Optimization" />
        <Connector />
        <Box icon={PenLine} title="Content Ideation" />
        <Connector />
        <Box icon={Mail} title="Content Creation" />
      </div>

      <div className="hidden sm:block">
        <ThreeSplitConnector />
      </div>

      <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-3 sm:pt-0">
        <Box icon={Sparkles} title="TOFU" small />
        <Box icon={Brain} title="MOFU" small />
        <Box icon={TrendingUp} title="BOFU" small />
      </div>

      <BottomThreeConnector />

      <div className="mx-auto max-w-xs pt-3 sm:pt-0">
        <Box icon={Share2} title="Consistent Distribution" />
        <Connector />
        <Box icon={ArrowRight} title="Qualified Pipeline" />
      </div>
    </div>
  );
}