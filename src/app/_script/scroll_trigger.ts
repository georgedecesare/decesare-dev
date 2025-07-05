import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';
import { getSectionAnimations } from './text_animations';

export default function scrollTrigger() {
  gsap.registerPlugin(ScrollTrigger, Flip);

  getSectionAnimations().forEach((cf) => {
    ScrollTrigger.create({
      trigger: cf.section,
      start: 'top 40%',
      scrub: false,
      animation: cf.animation,
    });
  });

  nameNavbar();
}

function nameNavbar() {
  const nameLogo = document.getElementById('name-logo')!;
  const newParent = document.getElementById('logo')!;
  const navlinks = document.getElementById('navlinks')!;
  const footer = document.getElementById('footer')!;
  const navbar = document.getElementById('navbar')!;
  const flipElements = [navbar, navlinks, nameLogo, footer];
  let navbarIn = false;

  const tl = gsap.timeline();
  tl.to(footer, {
    duration: 0.1,
    autoAlpha: 0,
    y: 50,
    ease: 'power1.inOut',
  });

  const startState = Flip.getState(flipElements, {
    props: 'fontSize, lineHeight',
  });
  gsap.set([nameLogo, footer], { whiteSpace: 'nowrap' });

  newParent.appendChild(nameLogo);

  const nameAnimation = Flip.from(startState, {
    duration: 2,
    ease: 'power1.inOut',
    nested: true,
    absolute: true,
    absoluteOnLeave: true,
  });

  tl.add(nameAnimation, '<');

  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: '+=150',
    scrub: true,
    animation: tl, // Tell ScrollTrigger to control our paused animation
    onLeave: () => {
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
          onUpdate: () => {
            gsap.set(nameLogo, {
              y: -gsap.getProperty(navbar, 'y'),
            });
          },
        }
      );
    },
  });
}
