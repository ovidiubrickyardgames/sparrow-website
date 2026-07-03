import '@styles/lenis.css';

import Lenis from 'lenis';

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.12, // Slightly faster response (default is 0.1)
  wheelMultiplier: 1.1, // More punchy scroll
  touchMultiplier: 1.5,
});
