import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

interface SectionAnimation {
  section: Element;
  animation: gsap.core.Timeline;
}

function getSectionAnimations() {
  gsap.registerPlugin(DrawSVGPlugin, SplitText);
  // Get all sections
  const sections = document.querySelectorAll('section');
  return Array.from(sections)
    .map((section) => {
      const braces = section.querySelectorAll('svg path')!;
      const title = section.querySelector('h1');
      const content = section.querySelector('p');

      if (braces.length <= 0) return [];

      const animation = gsap.timeline();

      // First animate in the braces
      braces.forEach((brace) => {
        // Create a GSAP animation for the path
        animation.fromTo(
          brace,
          { drawSVG: '0%' },
          { drawSVG: '100%', duration: 2.5, ease: 'power1.inOut' },
          '<'
        );
      });

      // Then animate the title text
      animation.from(
        SplitText.create(title, { type: 'chars, words' }).chars,
        {
          delay: 0.2,
          y: 15,
          x: -10,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: 'power1.out',
        },
        '<'
      );

      const contentLines = SplitText.create(content, {
        type: 'lines',
      });
      animation.from(
        contentLines.lines,
        {
          delay: 0.2,
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power1.out',
          onComplete: () => {
            contentLines.revert();
          },
        },
        '<'
      );

      return [{ section: section, animation: animation }] as SectionAnimation[];
    })
    .flat();
}

export { getSectionAnimations };
