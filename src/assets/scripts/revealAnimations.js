import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initRevealAnimations = () => {
  // Short-circuit: if this page has no animated elements, don't do any GSAP work
  const hasRevealElements =
    document.querySelector('.reveal-grid, .reveal-element, .reveal-heading') !==
    null;
  if (!hasRevealElements) return;

  // Clear existing ScrollTriggers to prevent duplicates on page transitions
  ScrollTrigger.getAll().forEach(t => t.kill());

  const viewportHeight = window.innerHeight;

  // 1. Staggered Grid Animations
  const revealGrids = document.querySelectorAll('.reveal-grid');

  // Batch layout reads
  const gridData = Array.from(revealGrids).map(grid => ({
    element: grid,
    top: grid.getBoundingClientRect().top,
    children: Array.from(grid.children),
  }));

  gridData.forEach(({ element, top, children }) => {
    if (children.length > 0) {
      const isHeroGrid = top < viewportHeight;

      gsap.to(children, {
        scrollTrigger: {
          trigger: element,
          start: 'top 95%', // Trigger when entering view
          toggleActions: 'play none none reverse', // Premium: play once, only reverse when fully scrolled back up
        },
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.0, // Balanced duration
        stagger: 0.15, // Balanced stagger
        ease: 'expo.out', // Premium easing
        delay: isHeroGrid ? 0.1 : 0,
      });
    }
  });

  // 2. Individual Element Animations (including Headings)
  const revealElements = document.querySelectorAll(
    '.reveal-element, .reveal-heading'
  );

  // Batch layout reads
  const elementData = Array.from(revealElements).map(el => ({
    element: el,

    top: el.getBoundingClientRect().top,
    tagName: el.tagName,
  }));

  elementData.forEach(({ element, top, tagName }) => {
    const isHeroElement = top < viewportHeight;

    const config = {
      scrollTrigger: {
        trigger: element,
        start: 'top 95%', // Trigger when entering view
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.0, // Balanced duration
      ease: 'expo.out', // Premium easing
      delay: isHeroElement ? 0.1 : 0,
    };

    gsap.to(element, config);
  });

  // Refresh ScrollTrigger to ensure positions are correct
  // Use requestAnimationFrame to avoid blocking the main thread during high-priority rendering
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
};
