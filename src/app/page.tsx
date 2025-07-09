'use client';

import { useGSAP } from '@gsap/react';
import 'material-symbols';
import animateText from '@/app/_script/text_animations';
import smoothScroll from '@/app/_script/smooth_scroll';
import scrollTrigger, {
  recomputeScrollAnimation,
} from './_script/scroll_trigger';
import setup from './_script/setup';
import Section from './section';
import { useEffect } from 'react';
import Link from 'next/link';
import Card from './card';
import matterScript from './_script/matter';
import { useIsMobile } from './_script/hooks';

export default function Home() {
  const gradient =
    'bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-purple-600 to-pink-600';

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
      <header className="hidden md:block">
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
      </header>
      <Section title="About Me">
        Hi &mdash; I&apos;m George. I study{' '}
        <Link
          href="https://www.imperial.ac.uk/computing/"
          className="font-bold"
        >
          Computing
        </Link>{' '}
        at Imperial College London. I&apos;m an aspiring software engineer with
        a love for beautiful code and unique solutions.
        <br />
        At the moment I&apos;m enjoying dabbling in full-stack web development
        &mdash; for example this website. You can read more about it below.
        <br />I also enjoy the intersection of mathematics with computing,
        particularly in the fields of machine learning and computer graphics.
        <br />I also play the violin and piano at grade 8 level, and I love to
        walk/hike. Also <code>vim &gt; emacs</code>.
        <br />
      </Section>
      <div className="relative mr-auto mt-10 md:mt-50 md:aspect-square">
        <div className="relative h-min max-w-full">
          <div className="matter absolute left-0 top-0 h-full hidden md:block"></div>
          <div
            className="md:inline-block md:w-20 md:absolute md:left-0 md:top-0
              h-full font-terminal text-5xl font-black text-white md:ml-[50vw]"
          >
            <h1
              className="text-center md:text-current projects-title capitalize
                md:[text-orientation:upright] md:[writing-mode:vertical-lr]"
            >
              Projects
            </h1>
          </div>
          <div
            className="flex flex-col mt-5 md:mt-0 md:flex-row gap-10 md:pl-30
              projects items-center md:items-start md:justify-start w-screen
              md:w-min"
          >
            <Card>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur, erat in efficitur facilisis, enim ligula facilisis
              enim, nec tincidunt enim erat in enim. Sed consectetur, erat in
              efficitur facilisis, enim ligula facilisis enim, nec tincidunt
              enim erat in enim.
            </Card>
            <Card>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur, erat in efficitur facilisis, enim ligula facilisis
              enim, nec tincidunt enim erat in enim. Sed consectetur, erat in
              efficitur facilisis, enim ligula facilisis enim, nec tincidunt
              enim erat in enim.
            </Card>
            <Card>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur, erat in efficitur facilisis, enim ligula facilisis
              enim, nec tincidunt enim erat in enim. Sed consectetur, erat in
              efficitur facilisis, enim ligula facilisis enim, nec tincidunt
              enim erat in enim.
            </Card>
            <Card>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur, erat in efficitur facilisis, enim ligula facilisis
              enim, nec tincidunt enim erat in enim. Sed consectetur, erat in
              efficitur facilisis, enim ligula facilisis enim, nec tincidunt
              enim erat in enim.
            </Card>
          </div>
        </div>
      </div>
      <div className="inline-block w-full min-h-[80vh]"></div>
    </main>
  );
}
