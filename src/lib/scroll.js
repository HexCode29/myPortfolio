// Shared handle to the Lenis instance so overlays (menu, lightbox, preloader)
// can pause smooth scrolling while they are open.
let lenis = null;
let locked = false;

export const setLenis = (instance) => {
  lenis = instance;
  // Lenis may be created after something (the preloader) already locked scrolling.
  if (lenis && locked) lenis.stop();
};

export const lockScroll = (value) => {
  locked = value;
  document.body.style.overflow = value ? "hidden" : "";
  if (lenis) value ? lenis.stop() : lenis.start();
};

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
