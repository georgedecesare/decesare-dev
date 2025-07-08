'use client';

import { useGSAP } from '@gsap/react';
import 'material-symbols';
import animateText from '@/app/_script/text_animations';
import smoothScroll from '@/app/_script/smooth_scroll';
import scrollTrigger from './_script/scroll_trigger';

export default function Home() {
  const gradient =
    'bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-purple-600 to-pink-600';
  useGSAP(() => {
    smoothScroll();
    scrollTrigger();
    animateText();
  });
  return (
    <>
      <header
        className="fixed top-0 z-50 flex flex-row gap-10 h-20 w-full px-10
          items-center [&_a]:cursor-pointer"
      >
        <div id="logo" className="text-xl"></div>
        <a id="navlink">Link 1</a>
        <a id="navlink">Link 2</a>
        <a id="navlink">Link 3</a>
      </header>
      <main
        className="flex min-h-screen flex-col items-center justify-center p-24
          smooth-content"
      >
        <div
          id="hero-logo"
          className="animate-popup opacity-0 mt-[20vh] text-6xl"
        >
          <h1
            id="name-logo"
            className="text-inherit font-bold font-mono flex flex-row
              items-center justify-center whitespace-nowrap pt-2"
          >
            <div className={`animate-langle ${gradient} pb-2`}>&lt;</div>
            <div className="animate-name">George Decesare</div>
            <div className={`animate-rangle ${gradient} pb-2`}>/&gt;</div>
          </h1>
        </div>
        <div id="footer">
          <footer
            className="mt-4 text-center font-terminal text-3xl font-bold
              footer-typewriter opacity-0"
          >
            Computing student at Imperial College London.
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
        <div className="inline-block mt-4 min-w-screen h-[150vh]"></div>
        <div className="box aspect-square size-20 rounded-2xl bg-amber-500"></div>
        <div className="inline-block mt-4 min-w-screen h-[150vh]"></div>
      </main>
    </>
  );
}
