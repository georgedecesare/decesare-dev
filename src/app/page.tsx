'use client';

import { useGSAP } from '@gsap/react';
import 'material-symbols';
import animateText from '@/app/_script/text_animations';
import smoothScroll from '@/app/_script/smooth_scroll';
import scrollTrigger from './_script/scroll_trigger';
import setup from './_script/setup';
import Navlink from './navlink';
import { LeftBraceIcon, RightBraceIcon } from './braces';

export default function Home() {
  const gradient =
    'bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-purple-600 to-pink-600';
  useGSAP(() => {
    setup();
    smoothScroll();
    scrollTrigger();
    animateText();
  });
  return (
    <>
      <header
        id="navbar"
        className="fixed top-0 z-40 flex flex-row gap-10 h-20
          w-[calc(100%-2.5rem)] pr-10 items-center mx-5 mt-5 invisible
          font-terminal rounded-xs bg-nav shadow-lg border-1 border-stone-700"
      >
        <div id="logo" className="ml-10 text-xl"></div>
        <div id="navlinks" className="flex flex-row gap-10">
          <Navlink>Home</Navlink>
          <Navlink>About Me</Navlink>
          <Navlink>Projects</Navlink>
          <Navlink>Contact</Navlink>
        </div>
      </header>
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
        <section className="flex flex-row w-full px-10 invisible">
          <div className="h-full py-1 pb-20">
            <LeftBraceIcon />
          </div>
          <div className="flex flex-col font-terminal text-8xl justify-center">
            <h1 className="text-end">
              About <br /> Me
            </h1>
          </div>
          <div className="flex items-center flex-1/3">
            <p className="pl-10 font-mono text-lg w-full">
              I&apos;m George, a third year computing student at Imperial
              College London. Welcome to my personal website!
            </p>
          </div>
          <div className="h-full py-1 pt-20">
            <RightBraceIcon />
          </div>
        </section>
        <div className="inline-block w-full min-h-[80vh]"></div>
      </main>
    </>
  );
}
