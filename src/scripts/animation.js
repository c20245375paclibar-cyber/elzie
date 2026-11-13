import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

gsap.from("#services", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.fromTo(
  "#progressBar",
  { scaleX: 0 },
  {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.documentElement,
      start: "top top",
      end: "max",
      scrub: true,
    },
  },
);

const intro = gsap.timeline({
  defaults: { duration: 0.3, ease: "power2.out" },
});

intro.from("nav .nav-link", { y: -20, stagger: 0.06 });
intro.from("main > section", { y: -60, ease: "bounce.out", stagger: 0.1 }, "-=0.2");
intro.from(
  "main section .accent-badge",
  { y: -25, opacity: 0, ease: "bounce.out", stagger: 0.06 },
  "<",
);
intro.from("#hero h1", { y: -40, duration: 0.45, ease: "elastic.out(2, 0.5)" }, "<");
intro.from("#hero p", { y: 30, opacity: 0, duration: 0.45, ease: "bounce.out" }, "<");
intro.from("#hero .pt-3", { y: 35, opacity: 0, ease: "bounce.out" }, "-=0.25");
intro.from(
  "#hero .pt-3 a",
  { scale: 0.85, opacity: 0, ease: "back.out(1.7)", stagger: 0.06 },
  "-=0.3",
);
intro.from(
  "#about h2, #about p",
  { y: 30, opacity: 0, ease: "bounce.out", stagger: 0.08 },
  "-=0.4",
);
intro.from(
  "#services h2, #services p, #contact h2, #contact p",
  { y: 30, opacity: 0, ease: "bounce.out", stagger: 0.06 },
  "-=0.4",
);

const timelineButton = document.querySelector("#timelineBtn");
timelineButton?.addEventListener("click", () => intro.restart());

const flipButton = document.querySelector("#flipBtn");
flipButton?.addEventListener("click", () => {
  Flip.fit("#services", "#contact", {
    duration: 1,
    ease: "power1.inOut",
  });
});

const toggleButton = document.querySelector("#toggleDark");
const root = document.documentElement;

toggleButton?.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  toggleButton.setAttribute("aria-pressed", String(isDark));
  toggleButton.setAttribute(
    "aria-label",
    `Switch to ${isDark ? "light" : "dark"} theme`,
  );
  toggleButton.textContent = `Switch to ${isDark ? "light" : "dark"}`;

  gsap.to(toggleButton, {
    rotation: "+=360",
    duration: 0.4,
    ease: "power2.out",
    overwrite: "auto",
  });
});
  