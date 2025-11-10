import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

interface SectionAnimation {
  section: Element;
  animation: gsap.core.Timeline;
}

function getSectionAnimations(isMobile: boolean): SectionAnimation[] {
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
      const titleSplit = SplitText.create(title, {
        type: 'chars',
        smartWrap: true,
      });
      animation.from(
        titleSplit.chars,
        {
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
        },
        '<'
      );

      // Then the main content body text

      const contentLines = SplitText.create(content, {
        type: 'lines',
      });
      animation.from(
        contentLines.lines,
        {
          delay: isMobile ? 0 : 1,
          y: 50,
          opacity: 0,
          duration: isMobile ? 0.3 : 1,
          stagger: isMobile ? 0.05 : 0.1,
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
