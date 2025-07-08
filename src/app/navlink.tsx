'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Navlink({ children }: { children?: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Effect to handle clicks outside the component to close the menu
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Effect to handle the GSAP animations when visibility changes
  useEffect(() => {
    if (visible) {
      // Animate In
      gsap.set(menuRef.current, { display: 'block' });
      gsap.to(menuRef.current, {
        duration: 0.3,
        autoAlpha: 1, // Fades in and sets visibility to visible
        y: 0,
        ease: 'bounce.out',
      });
    } else {
      // Animate Out
      gsap.to(menuRef.current, {
        duration: 0.3,
        autoAlpha: 0, // Fades out and sets visibility to hidden
        y: -20,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(menuRef.current, { display: 'none' });
        },
      });
    }
  }, [visible]);

  const toggleVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      className="cursor-pointer text-2xl font-bold font-terminal
        whitespace-nowrap relative"
    >
      <div
        onClick={toggleVisibility}
        className="border-3 border-stone-500 p-3 pl-5 flex flex-row items-center
          relative z-50 bg-background"
      >
        {children}
        <span className="material-symbols-outlined text-3xl ml-2 select-none">
          arrow_drop_down
        </span>
      </div>
      <div
        ref={menuRef}
        className="absolute border-3 mt-[-3] top-full left-0 right-0
          border-stone-500 z-40 bg-background px-5 invisible"
      >
        Menu item
        <br />
        Another
        <br />
      </div>
    </div>
  );
}
