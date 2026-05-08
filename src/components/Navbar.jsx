// import { Menu, X, ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const links = [
//     { name: "Services", path: "/services" },
//     { name: "Case Studies", path: "/case-studies" },
//     { name: "Flowcharts", path: "/flowcharts" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "Blog", path: "/blog" },
//     { name: "About", path: "/about" },
//   ];

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* top urgency bar */}
//       <div className="fixed left-0 top-0 z-[70] w-full bg-black px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300 sm:text-xs">
//         ⚡ Only 5 pilot campaign slots available this month
//       </div>

//       {/* navbar */}
//       <header
//         className={`fixed left-0 top-8 z-[60] w-full border-b border-black/10 transition-all duration-300 ${
//           scrolled
//             ? "bg-[#f6f1e8]/90 shadow-lg shadow-black/5 backdrop-blur-xl"
//             : "bg-[#f6f1e8]/75 backdrop-blur-md"
//         }`}
//       >
//         <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-8">
//           {/* logo */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             className="relative z-[80] flex items-center gap-2 text-xl font-bold tracking-tight text-black"
//           >
//             Velcor.ai
//           </Link>

//           {/* desktop links */}
//           <div className="hidden items-center gap-1 rounded-full border border-black/10 bg-white/45 p-1 md:flex">
//             {links.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="rounded-full px-4 py-2 text-sm font-medium text-black/65 transition hover:bg-white hover:text-black"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* desktop CTA */}
//           <div className="hidden items-center gap-3 md:flex">
//             <Link
//               to="/contact"
//               className="text-sm font-semibold text-black/70 transition hover:text-black"
//             >
//               Book Demo
//             </Link>

//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:scale-[1.03] hover:bg-blue-500 hover:text-white"
//             >
//               Apply For Pilot
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           {/* mobile right buttons */}
//           <div className="relative z-[80] flex items-center gap-2 md:hidden">
//             {/* Apply button outside hamburger */}
//             <Link
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="inline-flex items-center gap-1.5 rounded-xl bg-black px-3.5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-black/15 transition active:scale-95"
//             >
//               Apply
//               <ArrowRight size={14} />
//             </Link>

//             <button
//               onClick={() => setOpen(!open)}
//               aria-label="Toggle menu"
//               className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-black shadow-sm backdrop-blur transition active:scale-95"
//             >
//               {open ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* mobile menu overlay */}
//       <div
//         className={`fixed inset-0 z-[55] bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
//           open
//             ? "pointer-events-auto opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//         onClick={() => setOpen(false)}
//       />

//       {/* mobile menu panel */}
//       <div
//         className={`fixed left-0 right-0 top-[72px] z-[65] mx-3 overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f6f1e8]/95 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 md:hidden ${
//           open
//             ? "translate-y-0 opacity-100"
//             : "pointer-events-none -translate-y-6 opacity-0"
//         }`}
//       >
//         <div className="p-4">
//           <div className="mb-4 rounded-2xl border border-black/10 bg-white/55 p-4">
//             <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
//               Navigation
//             </p>
//             <h3 className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-black">
//               Explore Velcor.ai
//             </h3>
//           </div>

//           <div className="flex flex-col gap-2">
//             {links.map((item, index) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setOpen(false)}
//                 className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-4 py-4 text-sm font-semibold text-black transition hover:bg-white"
//                 style={{ transitionDelay: open ? `${index * 45}ms` : "0ms" }}
//               >
//                 {item.name}
//                 <ArrowRight
//                   size={16}
//                   className="text-black/35 transition group-hover:translate-x-1 group-hover:text-black"
//                 />
//               </Link>
//             ))}
//           </div>

//           <div className="mt-4 grid grid-cols-2 gap-3">
//             <Link
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="flex items-center justify-center rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm font-semibold text-black"
//             >
//               Book Demo
//             </Link>

//             <Link
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15"
//             >
//               Apply Pilot
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import { Menu, X, ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const links = [
//     { name: "Services", path: "/services" },
//     { name: "Case Studies", path: "/case-studies" },
//     { name: "Flowcharts", path: "/flowcharts" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "Blog", path: "/blog" },
//     { name: "About", path: "/about" },
//   ];

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* top bar */}
//       <div className="fixed left-0 top-0 z-[70] w-full bg-black px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-300 sm:text-xs">
//         ⚡ Only 5 pilot campaign slots available this month
//       </div>

//       {/* navbar */}
//       <header
//         className={`fixed left-0 top-8 z-[60] w-full border-b border-black/10 transition-all duration-300 ${
//           scrolled
//             ? "bg-[#f6f1e8]/90 shadow-lg shadow-black/5 backdrop-blur-xl"
//             : "bg-[#f6f1e8]/75 backdrop-blur-md"
//         }`}
//       >
//         {/* ✅ FULL WIDTH */}
//         <nav className="flex w-full items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:px-6">
//           {/* logo */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             className="relative z-[80] text-xl font-bold text-black"
//           >
//             Velcor.ai
//           </Link>

//           {/* desktop links */}
//           <div className="hidden md:flex items-center gap-1 rounded-full border border-black/10 bg-white/45 p-1">
//             {links.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="rounded-full px-4 py-2 text-sm font-medium text-black/65 hover:bg-white hover:text-black"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* desktop CTA */}
//           <div className="hidden md:flex items-center gap-3">
//             <Link
//               to="/contact"
//               className="text-sm font-semibold text-black/70 hover:text-black"
//             >
//               Book Demo
//             </Link>

//             <Link
//               to="/contact"
//               className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg"
//             >
//               Apply For Pilot
//               <ArrowRight size={15} />
//             </Link>
//           </div>

//           {/* mobile buttons */}
//           <div className="relative z-[80] flex items-center gap-2 md:hidden">
//             <Link
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="flex items-center gap-1 rounded-xl bg-black px-3 py-2 text-xs font-semibold text-white"
//             >
//               Apply <ArrowRight size={14} />
//             </Link>

//             <button
//               onClick={() => setOpen(!open)}
//               className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white"
//             >
//               {open ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* overlay */}
//       <div
//         className={`fixed inset-0 z-[55] bg-black/30 transition ${
//           open ? "opacity-100" : "opacity-0 pointer-events-none"
//         } md:hidden`}
//         onClick={() => setOpen(false)}
//       />

//       {/* ✅ ATTACHED MOBILE MENU */}
//       <div
//         className={`fixed left-0 right-0 z-[65] bg-[#f6f1e8] border-t border-black/10 transition-all duration-300 md:hidden ${
//           open
//             ? "top-[94px] opacity-100"
//             : "top-[60px] opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="p-4 space-y-3">
//           {links.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={() => setOpen(false)}
//               className="flex justify-between items-center px-4 py-4 rounded-xl bg-white border border-black/10"
//             >
//               {item.name}
//               <ArrowRight size={16} />
//             </Link>
//           ))}

//           <div className="grid grid-cols-2 gap-3 pt-2">
//             <Link
//               to="/contact"
//               className="flex justify-center items-center py-3 border rounded-xl"
//             >
//               Book Demo
//             </Link>

//             <Link
//               to="/contact"
//               className="flex justify-center items-center py-3 bg-black text-white rounded-xl"
//             >
//               Apply
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import { Menu, X, ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const links = [
//     { name: "Services", path: "/services" },
//     { name: "Case Studies", path: "/case-studies" },
//     { name: "Flowcharts", path: "/flowcharts" },
//     { name: "Pricing", path: "/pricing" },
//     { name: "Blog", path: "/blog" },
//     { name: "About", path: "/about" },
//   ];

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);

//   return (
//     <>
//       {/* top bar */}
//       <div className="fixed left-0 top-0 z-[70] w-full bg-black px-3 sm:px-4 py-2 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
//         ⚡ Only 5 pilot campaign slots available this month
//       </div>

//       {/* navbar */}
//       <header
//         className={`fixed left-0 top-8 z-[60] w-full border-b border-black/10 transition-all duration-300 ${
//           scrolled
//             ? "bg-[#f6f1e8]/90 shadow-lg shadow-black/5 backdrop-blur-xl"
//             : "bg-[#f6f1e8]/75 backdrop-blur-md"
//         }`}
//       >
//         <nav className="flex w-full items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-6 py-3">
//           {/* logo */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             className="relative z-[80] text-lg sm:text-xl font-bold text-black"
//           >
//             Velcor.ai
//           </Link>

//           {/* desktop + tablet links */}
//           {/* <div className="hidden md:flex items-center gap-1 rounded-full border border-black/10 bg-white/45 p-[3px] lg:p-1">
//             {links.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="rounded-full px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-black/65 hover:bg-white hover:text-black"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div> */}

//           <div className="hidden md:flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white/45 px-3 py-1.5 ml-28">
//             {links.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className="rounded-full px-5 lg:px-6 py-2 text-sm font-medium text-black/65 hover:bg-white hover:text-black"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* desktop + tablet CTA */}
//           <div className="hidden md:flex items-center gap-2 lg:gap-3">
//             <Link
//               to="/contact"
//               className="text-xs lg:text-sm font-semibold text-black/70 hover:text-black"
//             >
//               Book Demo
//             </Link>

//             <Link
//               to="/contact"
//               className="flex items-center gap-1.5 lg:gap-2 rounded-xl bg-black px-3 lg:px-5 py-2.5 lg:py-3 text-xs lg:text-sm font-semibold text-white shadow-lg"
//             >
//               Apply For Pilot
//               <ArrowRight size={14} className="lg:w-[15px] lg:h-[15px]" />
//             </Link>
//           </div>

//           {/* mobile buttons */}
//           <div className="relative z-[80] flex items-center gap-2 md:hidden">
//             <Link
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className="flex items-center gap-1 rounded-xl bg-black px-3 py-2 text-xs font-semibold text-white"
//             >
//               Apply <ArrowRight size={14} />
//             </Link>

//             <button
//               onClick={() => setOpen(!open)}
//               className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white"
//             >
//               {open ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* overlay */}
//       <div
//         className={`fixed inset-0 z-[55] bg-black/30 transition ${
//           open ? "opacity-100" : "opacity-0 pointer-events-none"
//         } md:hidden`}
//         onClick={() => setOpen(false)}
//       />

//       {/* mobile menu */}
//       <div
//         className={`fixed left-0 right-0 z-[65] bg-[#f6f1e8] border-t border-black/10 transition-all duration-300 md:hidden ${
//           open
//             ? "top-[94px] opacity-100"
//             : "top-[60px] opacity-0 pointer-events-none"
//         }`}
//       >
//         {/* ✅ scroll fix for small + tablet */}
//         <div className="p-4 space-y-3 max-h-[calc(100vh-100px)] overflow-y-auto">
//           {links.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={() => setOpen(false)}
//               className="flex justify-between items-center px-4 py-4 rounded-xl bg-white border border-black/10"
//             >
//               {item.name}
//               <ArrowRight size={16} />
//             </Link>
//           ))}

//           <div className="grid grid-cols-2 gap-3 pt-2">
//             <Link
//               to="/contact"
//               className="flex justify-center items-center py-3 border rounded-xl"
//             >
//               Book Demo
//             </Link>

//             <Link
//               to="/contact"
//               className="flex justify-center items-center py-3 bg-black text-white rounded-xl"
//             >
//               Apply
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Flowcharts", path: "/flowcharts" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* top bar */}
      {/* <div className="fixed left-0 top-0 z-[70] w-full bg-black px-3 sm:px-4 py-2 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
        ⚡ Only 5 pilot campaign slots available this month
      </div> */}
      {/* <div className="fixed left-0 top-0 z-[70] w-full bg-black px-2 sm:px-4 py-2 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-300 whitespace-nowrap">
  <span className="sm:hidden">
    ⚡ 5 slots left this month
  </span>
  <span className="hidden sm:inline">
    ⚡ Only 5 pilot campaign slots available this month
  </span>
</div> */}

      <div className="fixed left-0 top-0 z-[70] w-full bg-black px-2 sm:px-4 py-2 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-blue-300 whitespace-nowrap overflow-hidden text-ellipsis">
        
        ⚡ Only 5 pilot campaign slots available this month
      </div>

      {/* navbar */}
      <header
        className={`fixed left-0 top-8 z-[60] w-full border-b border-black/10 transition-all duration-300 ${
          scrolled
            ? "bg-[#f6f1e8]/90 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "bg-[#f6f1e8]/75 backdrop-blur-md"
        }`}
      >
        <nav className="flex w-full items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-6 py-3">
          {/* logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="relative z-[80] text-lg sm:text-xl font-bold text-black"
          >
            Velcor.ai
          </Link>

          {/* desktop + tablet links */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 rounded-full border border-black/10 bg-white/45 px-2 md:px-3 py-1 ">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="rounded-full px-3 md:px-3 lg:px-6 py-1.5 md:py-1.5 lg:py-2 text-xs md:text-xs lg:text-sm font-medium text-black/65 hover:bg-white hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* desktop + tablet CTA */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-3">
            <Link
              to="/contact"
              className="text-xs lg:text-sm font-semibold text-black/70 hover:text-black"
            >
              Book Demo
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-1 lg:gap-2 rounded-xl bg-black px-2.5 md:px-3 lg:px-5 py-2 md:py-2 lg:py-3 text-xs md:text-xs lg:text-sm font-semibold text-white shadow-lg"
            >
              Apply For Pilot
              <ArrowRight size={14} className="lg:w-[15px] lg:h-[15px]" />
            </Link>
          </div>

          {/* mobile buttons */}
          <div className="relative z-[80] flex items-center gap-2 md:hidden">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 rounded-xl bg-black px-3 py-2 text-xs font-semibold text-white"
            >
              Apply <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/30 transition ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setOpen(false)}
      />

      {/* mobile menu */}
      <div
        className={`fixed left-0 right-0 z-[65] bg-[#f6f1e8] border-t border-black/10 transition-all duration-300 md:hidden ${
          open
            ? "top-[94px] opacity-100"
            : "top-[60px] opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 space-y-3 max-h-[calc(100vh-100px)] overflow-y-auto">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex justify-between items-center px-4 py-4 rounded-xl bg-white border border-black/10"
            >
              {item.name}
              <ArrowRight size={16} />
            </Link>
          ))}

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link
              to="/contact"
              className="flex justify-center items-center py-3 border rounded-xl"
            >
              Book Demo
            </Link>

            <Link
              to="/contact"
              className="flex justify-center items-center py-3 bg-black text-white rounded-xl"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
