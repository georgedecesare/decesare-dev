import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';

export default function scrollTrigger() {
  gsap.registerPlugin(ScrollTrigger, Flip);

  gsap.to('.box', {
    scrollTrigger: {
      trigger: '.box',
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
    },
    rotate: 360,
    scale: 2,
    borderRadius: '50%',
  });
  moveName();
}

function moveName() {
  const nameLogo = document.getElementById('name-logo')!;
  const newParent = document.getElementById('logo')!;
  const navlinks = document.querySelectorAll('#navlink')!;
  const footer = document.getElementById('footer')!;
  const flipElements = [nameLogo, ...navlinks, footer];

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

  const flipAnimation = Flip.from(startState, {
    duration: 1,
    ease: 'power1.inOut',
    absolute: true,
    absoluteOnLeave: true,
  });

  tl.add(flipAnimation, '<');

  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: '+=400',
    scrub: true,
    animation: tl, // Tell ScrollTrigger to control our paused animation
  });
}
