import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';

export default function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    smooth: 1,
    effects: false,
    smoothTouch: 0.1,
    content: '.smooth-content',
  });
}
