'use client';

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import "material-symbols"

gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

export default function Home() {
  const initialDelay = 0.2;

  const gradient = "bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-purple-600 to-pink-600";
  useGSAP(() => {
    let split = SplitText.create(".animate-name", {
      type: "chars",
    });
    const center = Math.floor(split.chars.length / 2);
    const nameElem = document.querySelector(".animate-name") as HTMLElement;
    const centerOffset = nameElem ? nameElem.offsetWidth / 2 : 0;

    const bgSize = nameElem.parentElement!.offsetWidth;
    const langle = document.querySelector(".animate-langle") as HTMLElement;
    const rangle = document.querySelector(".animate-rangle") as HTMLElement;

    let offset = 0;

    langle.style.backgroundSize = bgSize + 'px 100%';
    langle.style.backgroundPosition = offset + 'px 0%';
    offset += langle.offsetWidth;

    split.chars.forEach((char, i) => {
      const elem = char as HTMLElement;
      elem.className = `${gradient} pb-2`;
      elem.style.backgroundSize = bgSize + 'px 100%'
      elem.style.backgroundPosition = -offset + 'px 0%'
      offset += elem.offsetWidth;
    });
    rangle.style.backgroundSize = bgSize + 'px 100%';
    rangle.style.backgroundPosition = -offset + 'px 0%';

    gsap.set(".animate-popup", {
      autoAlpha: 1,
    });

    const tl = gsap.timeline();
    tl.from(".animate-popup", {
      delay: initialDelay,
      duration: 0.2,
      scale: 0,
      ease: "back.out",
    }
    );
    tl.from(split.chars, {
      delay: 0.1,
      stagger: {
        each: 0.03,
        from: "center"
      },
      duration: 0.3,
      opacity: 0,
      y: 0,
      scale: 0.5,
      x: (i) => (i < center ? -80 : i > center ? 80 : 0),
      ease: "power2.out",
    });

    tl.from(".animate-langle", {
      delay: 0,
      duration: 0.8,
      y: 0,
      x: centerOffset,
      ease: "back.out(3.5)",
    }, "<"
    );

    tl.from(".animate-rangle", {
      delay: 0,
      duration: 0.8,
      y: 0,
      x: -centerOffset,
      ease: "back.out(3.5)",
    }, "<"
    );

    const footer = document.querySelector(".footer-typewriter") as HTMLElement;

    const typewriter = SplitText.create(footer, {
      type: "chars"
    });
    gsap.set(typewriter.chars, {
      autoAlpha: 0,
    });
    gsap.set(footer, {
      autoAlpha: 1,
    });

    typewriter.chars.forEach((char) => {
      tl.to(char, {
        delay: Math.random() / 20 + 0.02,
        autoAlpha: 1,
        animation: "text",
        duration: 0,
      });
    });

    const moreIcon = document.querySelector(".more-icon") as HTMLElement;
    tl.to(moreIcon, {
      delay: 0.2,
      duration: 1,
      autoAlpha: 1,
      ease: "power1.out",
    }
    );
    tl.from(moreIcon, {
      delay: 0,
      duration: 1,
      y: -10,
      ease: "bounce.out",
    }, "<");
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="animate-popup opacity-0">
        <h1 className="text-6xl font-bold font-mono flex flex-row items-center justify-center">
          <div
            className={`animate-langle ${gradient} pb-2`}
          >&lt;</div>
          <div className="animate-name">George Decesare</div>
          <div className={`animate-rangle ${gradient} pb-2`}>/&gt;</div>
        </h1>
      </div>
      <footer className="mt-4 text-center font-terminal text-3xl font-bold footer-typewriter opacity-0">
        Computing student at Imperial College London.
      </footer>
      <div className="mt-4 flex flex-col items-center justify-center">
        <span
          className="material-symbols-rounded select-none text-gray-700 opacity-0 more-icon"
          style={{
            fontSize: "3rem",
            fontFamily: "'Material Symbols Rounded'",
            fontWeight: 400,
            fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48"
          }}
        >
          expand_more
        </span>
      </div>
    </main>
  );
}