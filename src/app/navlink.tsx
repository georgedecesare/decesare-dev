'use client';

import { useEffect, useId, useState } from 'react';
import gsap from 'gsap';

export default function Navlink({ children }: { children?: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const button = useId();
  const menu = useId();

  useEffect(() => {
    const buttonEl = document.getElementById(button)!;
    const menuEl = document.getElementById(menu)!;
    function handleClickOutside(e: MouseEvent) {
      if (buttonEl.contains(e.target as Node)) {
        setVisible((prev) => !prev);
        animate();
        return;
      }
      if (menuEl.contains(e.target as Node)) {
        return;
      }
      if (visible) {
        setVisible(false);
        animate();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  function animate() {
    if (visible) {
      gsap.to(`#${menu}`, {
        duration: 0.3,
        autoAlpha: 0,
        y: -20,
        ease: 'power2.inOut',
      });
    } else {
      gsap.set(`#${menu}`, { autoAlpha: 1 });
      gsap.fromTo(
        `#${menu}`,
        {
          duration: 0.3,
          y: -20,
        },
        {
          y: 0,
          ease: 'bounce.out',
          autoAlpha: 1,
        }
      );
    }
  }

  return (
    <a
      className="cursor-pointer text-2xl font-bold font-terminal
        whitespace-nowrap"
    >
      <div
        className="border-3 border-stone-500 p-3 pl-5 flex flex-row
          items-center"
        id={button}
      >
        {children}
        <span className="material-symbols-outlined text-3xl ml-2">
          arrow_drop_down
        </span>
      </div>
      <div
        id={menu}
        className="absolute border-3 mt-[-3] border-stone-500 z-50.
          bg-background/70 backdrop-blur-sm px-5 invisible"
      >
        Menu item
        <br />
        Another
        <br />
      </div>
    </a>
  );
}
