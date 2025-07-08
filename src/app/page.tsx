'use client';

import { useGSAP } from '@gsap/react';
import 'material-symbols';
import animateText from '@/app/_script/text_animations';
import smoothScroll from '@/app/_script/smooth_scroll';
import scrollTrigger, {
  recomputeScrollAnimation,
} from './_script/scroll_trigger';
import setup from './_script/setup';
import Navlink from './navlink';
import Section from './section';
import { useEffect } from 'react';

export default function Home() {
  const gradient =
    'bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-purple-600 to-pink-600';

  useGSAP(() => {
    setup();
    smoothScroll();
    scrollTrigger();
    animateText();
  });
  useEffect(() => {
    window.addEventListener('resize', recomputeScrollAnimation);
    return () => {
      window.removeEventListener('resize', recomputeScrollAnimation);
    };
  });

  return (
    <>
      <main
        className="flex min-h-full flex-col items-center justify-center py-24
          smooth-content"
      >
        <div id="hero-logo" className="mt-[20vh] text-6xl">
          <div id="name-logo" className="text-inherit animate-popup opacity-0">
            <h1
              className="text-inherit font-bold font-mono flex flex-row
                items-center justify-center pt-2 visible!"
            >
              <div className={`animate-langle ${gradient} pb-2`}>&lt;</div>
              <div className="animate-name">George Decesare</div>
              <div className={`animate-rangle ${gradient} pb-2`}>/&gt;</div>
            </h1>
          </div>
        </div>
        <div id="footer">
          <footer
            className="mt-4 text-center font-terminal text-3xl font-bold
              footer-typewriter opacity-0"
          >
            Computing student at Imperial College London
          </footer>
          <div className="mt-4 flex flex-col items-center justify-center">
            <span
              className="material-symbols-rounded select-none text-gray-700
                opacity-0 more-icon"
              style={{
                fontSize: '3rem',
                fontFamily: "'Material Symbols Rounded'",
                fontWeight: 400,
                fontVariationSettings:
                  "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48",
              }}
            >
              expand_more
            </span>
          </div>
        </div>
        <div className="inline-block min-w-full min-h-[200px]"></div>
        <Section title="About Me">
          I&apos;m George, a third year computing student at Imperial College
          London. Welcome to my personal website! This is a lot of text
          describing the sort of person I am. I like programming, I like
          computers, and I like to learn new things. I&apos;m currently learning
          about web development, and this website is a project I&apos;m working
          on to practice my skills. I&apos;m also interested in machine
          learning, and I&apos;m currently learning about it in my spare time.
          I&apos;m always looking for new challenges and opportunities to learn,
          so if you have any interesting projects or ideas, feel free to reach
          out to me!
        </Section>
        <div className="inline-block w-full min-h-[80vh]"></div>
      </main>
    </>
  );
}
