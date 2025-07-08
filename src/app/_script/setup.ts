import gsap from 'gsap';

export default function setup() {
  window.scrollTo(0, 0);
  gsap.set('.animate-popup', {
    autoAlpha: 1,
  });
}
