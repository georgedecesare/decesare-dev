'use client';

import { Skill } from '@/generated/prisma';
import Marquee from 'react-fast-marquee';
import getIcon from './_script/icon_map';

export default function SkillsMarquee({ skills }: { skills: Skill[] }) {
  const numMarquees = Math.ceil(skills.length / 10);
  const skillSets: Skill[][] = [];

  for (let i = 0; i < numMarquees; i++) {
    skillSets.push(skills.slice(i * 10, (i + 1) * 10));
  }
  if (skillSets[skillSets.length - 1].length < 10 && skillSets.length > 1) {
    const lastSet = skillSets.pop()!;
    const secondLastSet = skillSets.pop()!;
    const combinedSet = secondLastSet.concat(lastSet);
    skillSets.push(combinedSet);
  }
  return (
    <>
      {skillSets.map((ss, i) => (
        <Marquee key={i} pauseOnHover className="mt-50">
          {ss.map((skill, index) => (
            <div
              className="flex flex-col items-center cursor-pointer px-5"
              key={index} // Key for the skill item within the Marquee
            >
              <div className="skill-icon-container">{getIcon(skill.name)}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      ))}
    </>
  );
}
