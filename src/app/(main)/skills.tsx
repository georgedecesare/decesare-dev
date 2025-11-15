import prisma from '@/lib/prisma';
import Section from './section';
import SkillsMarquee from './marquee';

export default async function Skills() {
  const skills = await prisma.skill.findMany();

  return (
    <Section title="My Skills">
      <p className="font-mono text-md md:text-lg xl:text-xl w-[70%] font-light">
        I&apos;ve worked with, and am proficient in, all the below technologies.
        Click on one to see which projects I used it in!
      </p>
      <SkillsMarquee skills={skills} />
    </Section>
  );
}
