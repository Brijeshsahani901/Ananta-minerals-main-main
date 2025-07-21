// // components/SmoothScroll.js
// "use client";

// import { useEffect, useRef } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function ScrollContainer({ children }) {
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//   const lenis = new Lenis({
//   smooth: true,
//   duration: 1.2,
//   smoothTouch: false,
//   wrapper: document.documentElement,
//   content: document.body,
// });

//     const raf = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     };

//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);

//   return (
//     <div ref={scrollContainerRef} className="lenis-wrapper">
//       {children}
//     </div>
//   );
// }
