/**
 * Handles the mouse tracking for the premium card spotlight effect.
 * Updates CSS variables --mouse-x and --mouse-y on hovered card elements.
 */

/**
 * Initializes the premium card spotlight effect.
 * Attaches mouse listeners to individual cards to prevent layout thrashing.
 */
export const initPremiumCards = () => {
  const setupCard = (card) => {
    if (card.dataset.spotlightInitialized === 'true') return;
    card.dataset.spotlightInitialized = 'true';

    let rect = card.getBoundingClientRect();

    // Recalculate rect on mouseenter so it's fresh and accurate
    card.addEventListener('mouseenter', () => {
      rect = card.getBoundingClientRect();
    });

    card.addEventListener('mousemove', (e) => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  const cards = document.querySelectorAll('.premium-card, .premium-spotlight');
  cards.forEach(setupCard);
};
