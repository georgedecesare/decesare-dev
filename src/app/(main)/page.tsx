'use client';

import { useGSAP } from '@gsap/react';
import animateText from '@/app/(main)/_script/text_animations';
import smoothScroll from '@/app/(main)/_script/smooth_scroll';
import scrollTrigger, {
  recomputeScrollAnimation,
} from './_script/scroll_trigger';
import setup from './_script/setup';
import { useEffect } from 'react';
import matterScript from './_script/matter';
import { useIsMobile } from './_script/hooks';
import Intro from './intro';
import About from './about';
import Projects from './projects';

export default function Home() {
  const isMobile = useIsMobile();

  useGSAP(() => {
    const animations = () => {
      if (!isMobile) {
        setup();
        smoothScroll();
        scrollTrigger();
        animateText();
        matterScript();
      }
    };
    document.fonts.ready.then(animations);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('resize', recomputeScrollAnimation);
      return () => {
        window.removeEventListener('resize', recomputeScrollAnimation);
      };
    }
  }, [isMobile]);

  return (
    <main
      className="flex min-h-full flex-col items-center justify-center py-24
        relative main"
    >
      <Intro />

      <About />

      <Projects />

      <div className="hidden md:inline-block w-full min-h-[80vh]"></div>
    </main>
  );
}
