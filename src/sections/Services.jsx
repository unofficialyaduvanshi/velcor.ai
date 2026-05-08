// import { ArrowRight } from "lucide-react";

// export default function Services() {
//   const services = [
//     {
//       title: "Outbound Lead Generation",
//       desc: "We build signal-based outbound systems that identify high-fit accounts, enrich decision makers, personalize messaging and create qualified sales conversations.",
//       label: "Signal-Based Outbound",
//       color: "from-blue-200 to-blue-50",
//       tags: ["Cold Email", "LinkedIn Messages", "Cold Calling", "Direct Mail"],
//     },
//     {
//       title: "Inbound Lead Conversion",
//       desc: "We help you convert website visitors, form fills and warm leads with enrichment, scoring, automated nurturing and personalized follow-up workflows.",
//       label: "High-Converting Salesflows",
//       color: "from-blue-400 to-blue-50",
//       tags: [
//         "Lead Enrichment",
//         "Scoring",
//         "Personalized Engagement",
//         "AI Research",
//       ],
//     },
//     {
//       title: "RevOps & Sales Enablement",
//       desc: "We keep your CRM clean, update contact records, automate notes, validate data and give reps context before every meeting and follow-up.",
//       label: "AI-Powered RevOps",
//       color: "from-violet-300 to-violet-50",
//       tags: ["CRM Notes", "Re-engagement", "Meeting Prep", "Data Hygiene"],
//     },
//   ];

//   return (
//     <section id="services" className="bg-[#f6f1e8] px-5 py-24 md:py-32">
//       <div className="mx-auto max-w-7xl">
//         <div className="mx-auto max-w-5xl text-center">
//           <h2 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
//             Revenue engineering delivers
//             <span className="block font-serif italic font-normal">
//               more than just quality meetings
//             </span>
//           </h2>
//         </div>

//         <div className="mt-20 grid gap-6 lg:grid-cols-3">
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="group rounded-[2rem] border border-black/10 bg-white/60 p-5 shadow-xl shadow-black/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="p-2">
//                 <h3 className="text-2xl font-semibold tracking-tight text-black">
//                   {service.title}
//                 </h3>

//                 <p className="mt-5 text-base leading-7 text-black/65">
//                   {service.desc}
//                 </p>
//               </div>

//               <div
//                 className={`mt-8 rounded-3xl bg-gradient-to-br ${service.color} p-6 transition duration-300 group-hover:scale-[1.02]`}
//               >
//                 <div className="relative min-h-[250px] overflow-hidden rounded-2xl border border-black/10 bg-white/40 p-6 transition duration-300 group-hover:bg-white/60">
//                   <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

//                   <div className="relative z-10 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg transition duration-300 group-hover:scale-[1.05]">
//                     <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
//                       V
//                     </span>
//                     <span className="font-semibold text-black">
//                       {service.label}
//                     </span>
//                   </div>

//                   <div className="relative z-10 mt-8 flex flex-col gap-3">
//                     {service.tags.map((tag, index) => (
//                       <div
//                         key={tag}
//                         className="w-fit rounded-lg border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-black/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
//                         style={{ marginLeft: `${index * 34}px` }}
//                       >
//                         {tag}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-14 flex justify-center">
//           <a
//             href="#contact"
//             className="inline-flex items-center gap-3 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.05] hover:bg-blue-500 hover:text-black"
//           >
//             View Services And Pricing
//             <ArrowRight
//               size={16}
//               className="transition group-hover:translate-x-1"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Outbound Lead Generation",
      desc: "We build signal-based outbound systems that identify high-fit accounts, enrich decision makers, personalize messaging and create qualified sales conversations.",
      label: "Signal-Based Outbound",
      color: "from-blue-200 to-blue-50",
      tags: ["Cold Email", "LinkedIn Messages", "Cold Calling", "Direct Mail"],
    },
    {
      title: "Inbound Lead Conversion",
      desc: "We help you convert website visitors, form fills and warm leads with enrichment, scoring, automated nurturing and personalized follow-up workflows.",
      label: "High-Converting Salesflows",
      color: "from-blue-400 to-blue-50",
      tags: [
        "Lead Enrichment",
        "Scoring",
        "Personalized Engagement",
        "AI Research",
      ],
    },
    {
      title: "RevOps & Sales Enablement",
      desc: "We keep your CRM clean, update contact records, automate notes, validate data and give reps context before every meeting and follow-up.",
      label: "AI-Powered RevOps",
      color: "from-violet-300 to-violet-50",
      tags: ["CRM Notes", "Re-engagement", "Meeting Prep", "Data Hygiene"],
    },
  ];

  return (
    <section id="services" className="bg-[#f6f1e8] px-0  py-8 md:py-10">
      <div className="w-full md:px-2 px-4">
        <div className="mx-auto max-w-5xl text-center px-2">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.06em] text-black">
            Revenue engineering delivers
            <span className="block font-serif italic font-normal">
              more than just quality meetings
            </span>
          </h2>
        </div>

        <div
          className="mt-12 md:mt-16 grid gap-4 md:gap-6 lg:grid-cols-3 px-2
         md:px-8"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[2rem] border border-black/10 bg-white/60 p-4 md:p-5 shadow-xl shadow-black/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-2">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-black">
                  {service.title}
                </h3>

                <p className="mt-4 md:mt-5 text-sm md:text-base leading-6 md:leading-7 text-black/65">
                  {service.desc}
                </p>
              </div>

              <div
                className={`mt-6 md:mt-8 rounded-3xl bg-gradient-to-br ${service.color} p-4 md:p-6 transition duration-300 group-hover:scale-[1.02]`}
              >
                <div className="relative min-h-[220px] md:min-h-[250px] overflow-hidden rounded-2xl border border-black/10 bg-white/40 p-4 md:p-6 transition duration-300 group-hover:bg-white/60">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

                  <div className="relative z-10 inline-flex items-center gap-3 rounded-2xl bg-white px-4 md:px-5 py-3 md:py-4 shadow-lg transition duration-300 group-hover:scale-[1.05]">
                    <span className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-lg bg-black text-xs md:text-sm font-bold text-white">
                      V
                    </span>
                    <span className="font-semibold text-black text-sm md:text-base">
                      {service.label}
                    </span>
                  </div>

                  <div className="relative z-10 mt-6 md:mt-8 flex flex-col gap-2 md:gap-3">
                    {service.tags.map((tag, index) => (
                      <div
                        key={tag}
                        className="w-fit rounded-lg border border-black/10 bg-white/80 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-black/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                        style={{ marginLeft: `${index * 24}px` }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-xl bg-black px-6 md:px-7 py-3 md:py-4 text-xs md:text-sm font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.05] hover:bg-blue-500 hover:text-black"
          >
            View Services And Pricing
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
