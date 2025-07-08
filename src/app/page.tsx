'use client';

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

export default function Home() {
  useGSAP(() => {
    let split = SplitText.create(".animate-name", {
      type: "chars"
    });
    const center = Math.floor(split.chars.length / 2);
    const nameElem = document.querySelector(".animate-name") as HTMLElement;
    const centerOffset = nameElem ? nameElem.offsetWidth / 2 : 0;

    const tl = gsap.timeline();

    tl.from(split.chars, {
      delay: 2,
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
      <h1 className="text-6xl font-bold font-mono flex flex-row items-center justify-center">
        <span
          className="animate-langle"
        >&lt;</span>
        <span className="animate-name">George Decesare</span>
        <span className="animate-rangle">/&gt;</span>
      </h1>
    </main>
  );
}
