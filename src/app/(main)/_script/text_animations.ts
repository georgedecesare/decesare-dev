import { SplitText } from 'gsap/SplitText';
import { TextPlugin } from 'gsap/TextPlugin';
import { gsap } from 'gsap';

export default function animateText() {
  // ============================================================
  // ANIMATION SETUP & CONFIGURATION
  // ============================================================
  const initialDelay = 0.2;
  const gradient =
    'bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-purple-600 to-pink-600';
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(TextPlugin);

  // ============================================================
  // TEXT SPLITTING & ELEMENT REFERENCES
  // ============================================================
  const split = SplitText.create('.animate-name', {
    type: 'chars',
  });
  const center = Math.floor(split.chars.length / 2);
  const nameElem = document.querySelector('.animate-name') as HTMLElement;
  const centerOffset = nameElem ? nameElem.offsetWidth / 2 : 0;

  const bgSize = nameElem.parentElement!.offsetWidth;
  const langle = document.querySelector('.animate-langle') as HTMLElement;
  const rangle = document.querySelector('.animate-rangle') as HTMLElement;

  // ============================================================
  // GRADIENT BACKGROUND POSITIONING
  // ============================================================
  let offset = 0;

  // Position left angle bracket gradient
  langle.style.backgroundSize = bgSize + 'px 100%';
  langle.style.backgroundPosition = offset + 'px 0%';
  offset += langle.offsetWidth;

  // Position gradient for each character
  split.chars.forEach((char) => {
    const elem = char as HTMLElement;
    elem.className = `${gradient} pb-2`;
    elem.style.backgroundSize = bgSize + 'px 100%';
    elem.style.backgroundPosition = -offset + 'px 0%';
    offset += elem.offsetWidth;
  });

  // Position right angle bracket gradient
  rangle.style.backgroundSize = bgSize + 'px 100%';
  rangle.style.backgroundPosition = -offset + 'px 0%';

  // ============================================================
  // ANIMATION TIMELINE SETUP
  // ============================================================

  const tl = gsap.timeline();

  // ============================================================
  // POPUP CONTAINER ANIMATION
  // ============================================================
  tl.from('.animate-popup', {
    delay: initialDelay,
    duration: 0.2,
    scale: 0,
    ease: 'back.out',
  });

  // ============================================================
  // CHARACTER STAGGER ANIMATION
  // ============================================================
  tl.from(split.chars, {
    delay: 0.1,
    stagger: {
      each: 0.03,
      from: 'center',
    },
    duration: 0.3,
    opacity: 0,
    y: 0,
    scale: 0.5,
    x: (i) => (i < center ? -80 : i > center ? 80 : 0),
    ease: 'power2.out',
  });

  // ============================================================
  // ANGLE BRACKET ANIMATIONS
  // ============================================================
  // Left angle bracket animation
  tl.from(
    '.animate-langle',
    {
      delay: 0,
      duration: 0.8,
      y: 0,
      x: centerOffset,
      ease: 'back.out(3.5)',
    },
    '<'
  );

  // Right angle bracket animation
  tl.from(
    '.animate-rangle',
    {
      delay: 0,
      duration: 0.8,
      y: 0,
      x: -centerOffset,
      ease: 'back.out(3.5)',
    },
    '<'
  );

  // ============================================================
  // TYPEWRITER EFFECT ANIMATION
  // ============================================================
  const footer = document.querySelector('.footer-typewriter') as HTMLElement;

  const typewriter = SplitText.create(footer, {
    type: 'chars',
  });
  gsap.set(typewriter.chars, {
    autoAlpha: 0,
  });
  gsap.set(footer, {
    autoAlpha: 1,
  });

  // Animate each character with random delay for typewriter effect
  typewriter.chars.forEach((char) => {
    tl.to(char, {
      delay: Math.random() / 20 + 0.01,
      autoAlpha: 1,
      duration: 0,
    });
  });

  tl.set(document.body, {
    overflowY: 'auto',
  });

  // ============================================================
  // MORE ICON ANIMATION
  // ============================================================
  const moreIcon = document.querySelector('.more-icon') as HTMLElement;

  // Fade in the more icon
  tl.to(moreIcon, {
    delay: 0.2,
    duration: 1,
    autoAlpha: 1,
    ease: 'power1.out',
  });
}
