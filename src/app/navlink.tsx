'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Navlink({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
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
        y: 0,
        ease: 'bounce.out',
      });
    } else {
      // Animate Out
      gsap.to(menuRef.current, {
        duration: 0.3,
        y: -20,
        clipPath: 'inset(0% 0% 100% 0%)',
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(menuRef.current, {
            display: 'none',
            clipPath: 'inset(0% 0% 0% 0%)',
          });
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
      className="text-2xl font-bold font-terminal whitespace-nowrap relative"
    >
      <div
        onClick={toggleVisibility}
        className="cursor-pointer p-3 pl-5 flex flex-row items-center relative
          z-50 rounded-xs"
      >
        {title}
        <span className="material-symbols-outlined text-3xl ml-2 select-none">
          arrow_drop_down
        </span>
      </div>
      <div
        ref={menuRef}
        className="absolute mt-[-3] top-full left-0 right-0 z-40 bg-nav px-5
          hidden rounded-xs border-l border-r border-b border-stone-700 text-xl
          pb-2 min-w-fit"
      >
        {children}
      </div>
    </div>
  );
}
