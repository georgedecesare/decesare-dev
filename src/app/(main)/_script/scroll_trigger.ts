import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';
import { getSectionAnimations } from './draw_svg';
import { startPhysics } from './matter';
import { SplitText } from 'gsap/SplitText';

let navbarIn = false;

export default function scrollTrigger(isMobile: boolean) {
  gsap.registerPlugin(ScrollTrigger, Flip);

  // Section animations
  getSectionAnimations(isMobile).forEach((cf) => {
    ScrollTrigger.create({
      trigger: cf.section,
      start: isMobile ? 'top 40%' : 'top 40%',
      scrub: false,
      animation: cf.animation,
    });
  });

  // Project card
  if (isMobile) {
    // Do something else
    const title = document.querySelector('.projects-title');
    // Animate in title
    const titleSplit = SplitText.create(title, {
      type: 'chars',
      smartWrap: true,
    });
    gsap.from(titleSplit.chars, {
      delay: isMobile ? 0 : 0.2,
      y: 15,
      x: -10,
      autoAlpha: 0,
      duration: isMobile ? 0.1 : 0.5,
      stagger: isMobile ? 0.1 : 0.2,
      ease: 'power1.out',
      onComplete: () => {
        titleSplit.revert();
      },
      scrollTrigger: {
        trigger: '.projects-title',
        start: 'top 80%',
      },
    });

    // Animate each project card when scrolled into view
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
      });
    });
  } else {
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
    navbar();
  }
}

function navbar() {
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
