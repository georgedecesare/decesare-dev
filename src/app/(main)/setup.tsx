'use client';

import { useGSAP } from '@gsap/react';
import animateText from '@/app/(main)/_script/text_animations';
import smoothScroll from '@/app/(main)/_script/smooth_scroll';
import scrollTrigger from './_script/scroll_trigger';
import setup from './_script/setup';
import matterScript from './_script/matter';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Setup() {
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

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 200); // Allow time for marquee to stabilise

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });

  return <></>;
}
