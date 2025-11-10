import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';
import { getSectionAnimations } from './draw_svg';
import { startPhysics } from './matter';

let navbarIn = false;

export default function scrollTrigger() {
  gsap.registerPlugin(ScrollTrigger, Flip);

  // Section animations
  getSectionAnimations().forEach((cf) => {
    ScrollTrigger.create({
      trigger: cf.section,
      start: 'top 40%',
      scrub: false,
      animation: cf.animation,
    });
  });

  // Project cards
  gsap.set('.projects', {
    x: document.body.clientWidth,
    autoAlpha: 1,
  });
  gsap.to('.projects', {
    x: -document.querySelector('.projects')!.clientWidth,
    ease: 'none', // <-- IMPORTANT!
    scrollTrigger: {
      trigger: '.projects div',
      start: 'bottom 90%',
      pin: '.main',
      scrub: 1.5,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: `+=${document.querySelector('.projects')!.clientWidth * 2}`,
    },
    onStart: startPhysics,
  });

  nameNavbar();
}

function nameNavbar() {
  const footer = document.getElementById('footer')!;
  const navbar = document.getElementById('navbar')!;

  const tl = gsap.timeline();

  gsap.set(footer, { whiteSpace: 'nowrap' });

  return ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: '+=100',
    scrub: true,
    animation: tl,
    onLeave: () => {
      // Animate navbar in
      if (navbarIn) return;
      navbarIn = true;
      gsap.set(navbar, {
        autoAlpha: 1,
      });
      gsap.fromTo(
        navbar,
        {
          y: -200,
        },
        {
          duration: 0.3,
          autoAlpha: 1,
          y: 0,
          ease: 'back.out(1.4)',
        }
      );
    },
  });
}
