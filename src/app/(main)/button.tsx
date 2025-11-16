import Link from 'next/link';

export default function HeroButton() {
  return (
    <button
      className="py-1 px-3 md:px-6 md:py-3 text-white rounded-lg
        transition-colors duration-300 text-xl md:text-3xl font-black
        cursor-pointer font-terminal hero-button border-white border-[0.5]
        opacity-0"
    >
      <Link href="/files/cv.pdf" download>
        Download CV
      </Link>
    </button>
  );
}
