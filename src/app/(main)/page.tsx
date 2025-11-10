'use client';

import { useGSAP } from '@gsap/react';
import animateText from '@/app/(main)/_script/text_animations';
import smoothScroll from '@/app/(main)/_script/smooth_scroll';
import scrollTrigger from './_script/scroll_trigger';
import setup from './_script/setup';
import matterScript from './_script/matter';
import Intro from './intro';
import About from './about';
import Projects from './projects';

export default function Home() {
  useGSAP(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const animations = () => {
      setup();
      animateText();
      scrollTrigger(isMobile);
      if (!isMobile) {
        smoothScroll();
        matterScript();
      }
    };
    document.fonts.ready.then(animations);
  });

  return (
    <main
      className="flex min-h-full flex-col items-center justify-center py-30
        relative main px-1 max-w-[1100px] mx-auto box-border"
    >
      <Intro />

      <About />

      <Projects />

      <div className="hidden md:inline-block w-full min-h-[80vh]"></div>
    </main>
  );
}
