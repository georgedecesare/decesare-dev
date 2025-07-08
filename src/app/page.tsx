'use client';

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

export default function Home() {
  const gradient = "bg-gradient-to-r bg-clip-text text-transparent from-blue-400 via-purple-400 to-pink-400";
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
    const nameWidth = nameElem.offsetWidth;

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

    const tl = gsap.timeline();
    tl.from(".animate-popup", {
      delay: 1,
      duration: 0.2,
      scale: 0,
      ease: "back.out",
    }
    );
    tl.from(split.chars, {
      delay: 0.5,
      stagger: {
        each: 0.05,
        from: "center"
      },
      duration: 1,
      opacity: 0,
      y: 0,
      scale: 0.5,
      x: (i) => (i < center ? -80 : i > center ? 80 : 0),
      ease: "power2.out",
    });

    tl.from(".animate-langle", {
      delay: 0,
      duration: 1.3,
      y: 0,
      x: centerOffset,
      ease: "back.out(3.5)",
    }, "<"
    );

    tl.from(".animate-rangle", {
      delay: 0,
      duration: 1.3,
      y: 0,
      x: -centerOffset,
      ease: "back.out(3.5)",
    }, "<"
    );
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="animate-popup">
        <h1 className="text-6xl font-bold font-mono flex flex-row items-center justify-center">
          <div
            className={`animate-langle ${gradient} pb-2`}
          >&lt;</div>
          <div className="animate-name">George Decesare</div>
          <div className={`animate-rangle ${gradient} pb-2`}>/&gt;</div>
        </h1>
      </div>
    </main>
  );
}