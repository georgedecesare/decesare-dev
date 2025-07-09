import Link from 'next/link';
import Section from './section';

export default function About() {
  return (
    <Section title="About Me">
      Hi &mdash; I&apos;m George. I study{' '}
      <Link href="https://www.imperial.ac.uk/computing/" className="font-bold">
        Computing
      </Link>{' '}
      at Imperial College London. I&apos;m an aspiring software engineer with a
      love for beautiful code and unique solutions.
      <br />
      At the moment I&apos;m enjoying dabbling in full-stack web development
      &mdash; for example this website. You can read more about it below.
      <br />I also enjoy the intersection of mathematics with computing,
      particularly in the fields of machine learning and computer graphics.
      <br />I also play the violin and piano at grade 8 level, and I love to
      walk/hike. Also <code>vim &gt; emacs</code>.
      <br />
    </Section>
  );
}
