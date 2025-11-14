import Link from 'next/link';
import Section from './section';

export default function About() {
  return (
    <Section title="About Me">
      Hey, &mdash; I&apos;m George.
      <br />
      I&apos;m an aspiring software engineer and a third-year{' '}
      <Link href="https://www.imperial.ac.uk/computing/" className="font-bold">
        Computing
      </Link>{' '}
      undergraduate at Imperial, where I&apos;m on track for a first-class
      honours.
      <br />
      I&apos;m particularly drawn to the intersection of practical computing and
      mathematical rigour, especially in areas like compiler design, language
      theory, formal semantics, and most recently machine learning.
      <br />I also enjoy some full-stack web development &mdash; for example
      this website, which you can read more about below.
    </Section>
  );
}
