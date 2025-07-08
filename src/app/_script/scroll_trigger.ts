import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';
import { getSectionAnimations } from './draw_svg';

let trigger: ScrollTrigger | undefined;
let navbarIn = false;

export default function scrollTrigger() {
  gsap.registerPlugin(ScrollTrigger, Flip);

  getSectionAnimations().forEach((cf) => {
    ScrollTrigger.create({
      trigger: cf.section,
      start: 'top 40%',
      scrub: false,
      markers: true,
      animation: cf.animation,
    });
  });

  trigger = nameNavbar(); // initialise
}

const recomputeScrollAnimation = () => {
  // Gets called on window resize
  console.log('Recomputing scroll animations');
  if (trigger) {
    trigger.animation?.kill();
    trigger.kill();
  }
  // Reset inline styles
  const nameLogo = document.getElementById('name-logo')!;
  const navlinks = document.getElementById('navlinks')!;
  const footer = document.getElementById('footer')!;
  const navbar = document.getElementById('navbar')!;
  const flipElements = [navbar, navlinks, nameLogo, footer];
  flipElements.forEach((el) => {
    gsap.set(el, {
      clearProps: 'all',
    });
  });
  gsap.set(navbar, {
    autoAlpha: navbarIn ? 1 : 0,
  });
  gsap.set(nameLogo, {
    autoAlpha: 1,
  });
  // Reset the DOM
  const logo = document.getElementById('name-logo')!;
  document.getElementById('hero-logo')!.appendChild(logo);
  trigger = nameNavbar();
};

export { recomputeScrollAnimation };

function nameNavbar() {
  const nameLogo = document.getElementById('name-logo')!;
  const newParent = document.getElementById('logo')!;
  const navlinks = document.getElementById('navlinks')!;
  const footer = document.getElementById('footer')!;
  const navbar = document.getElementById('navbar')!;
  const flipElements = [navbar, navlinks, nameLogo, footer];

  const tl = gsap.timeline();

  const startState = Flip.getState(flipElements, {
    props: 'fontSize, lineHeight',
  });
  gsap.set([nameLogo, footer], { whiteSpace: 'nowrap' });

  newParent.appendChild(nameLogo);

  const nameAnimation = Flip.from(startState, {
    duration: 0.5,
    ease: 'power1.out',
    nested: true,
    absolute: true,
    absoluteOnLeave: true,
  });

  tl.add(nameAnimation);
  tl.to(
    footer,
    {
      delay: 0.1,
      duration: 0.3,
      autoAlpha: 0,
      y: 50,
      ease: 'power1.inOut',
    },
    '<'
  );

  return ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: `+=${nameLogo.offsetHeight + footer.offsetHeight}`,
    markers: true,
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
