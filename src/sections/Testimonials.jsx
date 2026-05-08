// export default function Testimonials() {
//   const items = [
//     {
//       name: "Aarav Mehta",
//       role: "Founder, SaaS",
//       img: "https://randomuser.me/api/portraits/men/32.jpg",
//       text: "Velcor didn’t just run campaigns — they built a full pipeline system. We finally have consistency.",
//     },
//     {
//       name: "Riya Kapoor",
//       role: "Head of Growth",
//       img: "https://randomuser.me/api/portraits/women/44.jpg",
//       text: "CRM automation alone saved our team hours every week. Follow-ups are no longer broken.",
//     },
//     {
//       name: "Daniel Shah",
//       role: "Revenue Lead",
//       img: "https://randomuser.me/api/portraits/men/52.jpg",
//       text: "We went from random outreach to a structured GTM engine. Results feel predictable now.",
//     },
//   ];

//   return (
//     <section className="bg-[#f6f1e8] px-5 py-24 md:py-32">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-14 max-w-3xl">
//           <p className="mb-4 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
//             Testimonials
//           </p>
//           <h2 className="text-5xl font-semibold tracking-[-0.06em] text-black md:text-7xl">
//             What clients say
//           </h2>
//         </div>

//         <div className="grid gap-6 md:grid-cols-3">
//           {items.map((t) => (
//             <div
//               key={t.name}
//               className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur"
//             >
//               <p className="text-lg leading-7 text-black/75">“{t.text}”</p>

//               <div className="mt-6 flex items-center gap-3">
//                 <img
//                   src={t.img}
//                   alt={t.name}
//                   className="h-10 w-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-sm font-semibold text-black">{t.name}</p>
//                   <p className="text-xs text-black/55">{t.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Testimonials() {
  const items = [
    {
      name: "Aarav Mehta",
      role: "Founder, SaaS",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Velcor didn’t just run campaigns — they built a full pipeline system. We finally have consistency.",
    },
    {
      name: "Riya Kapoor",
      role: "Head of Growth",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "CRM automation alone saved our team hours every week. Follow-ups are no longer broken.",
    },
    {
      name: "Daniel Shah",
      role: "Revenue Lead",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      text: "We went from random outreach to a structured GTM engine. Results feel predictable now.",
    },
  ];

  return (
    <section className="bg-[#f6f1e8]">
      <div className="w-full md:px-8 px-2">
        <div className="mx-auto max-w-4xl text-center py-5 md:py-10 px-4">
          <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55 backdrop-blur">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.06em] text-black">
            What clients say
          </h2>
        </div>

        <div className="grid gap-6 px-4 pb-12 md:pb-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-[2rem] border border-black/10 bg-white/70 p-5 sm:p-6 shadow-xl shadow-black/5 backdrop-blur"
            >
              <p className="text-base sm:text-lg leading-7 text-black/75">
                “{t.text}”
              </p>

              <div className="mt-5 sm:mt-6 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-black/55">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
