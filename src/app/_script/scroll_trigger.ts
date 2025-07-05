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
  const originalParent = nameLogo.parentNode!;
  const newParent = document.getElementById('logo')!;
  const navlinks = document.querySelectorAll('#navlink');
  const footer = document.getElementById('footer');

  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: '+=300',
    onEnter: () => {
      // Only move the name when scrolling actually starts
      const state = Flip.getState([nameLogo, ...navlinks, footer], {
        props: 'fontSize, lineHeight',
      });

      newParent.appendChild(nameLogo);

      Flip.from(state, {
        duration: 0.5,
        ease: 'power1.inOut',
        absolute: true,
      });
    },
    onLeaveBack: () => {
      // Move the name back to its original position when scrolling back to top
      const state = Flip.getState([nameLogo, ...navlinks, footer], {
        props: 'fontSize, lineHeight',
      });

      originalParent.appendChild(nameLogo);

      Flip.from(state, {
        duration: 0.5,
        ease: 'power1.inOut',
        absolute: true,
      });
    },
  });
}
