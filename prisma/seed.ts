import { PrismaClient } from '@/generated/prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.project.deleteMany();
  await prisma.skill.deleteMany();

  const projects = [
    {
      title: 'decesare.dev',
      description: `A full-stack web application built with Next.js, TypeScript and
            Tailwind CSS. You are currently viewing it.
            <br />I also played around with some animations using GSAP and its
            various plugins (though these can only be seen on desktop).`,
      url: 'https://decesare.dev',
      started: new Date('2022-01-01'),
      finished: new Date('2022-06-01'),
      skills: ['TypeScript', 'React', 'Prisma', 'Node.js', 'Next.js'],
    },
    {
      title: 'Scouts Finance Platform',
      description: `A mobile application written in flutter with a serverpod/postgresql
            backend.
            <br />
            Built to help scout leaders manage their finances by tracking
            incoming payments and matching them to parents, children and the
            events they are attending.`,
      url: 'v',
      started: new Date('2021-05-01'),
      finished: null,
      skills: [
        'Flutter',
        'Dart',
        'Serverpod',
        'PostgreSQL',
        'GitHub Actions',
        'Docker',
      ],
    },
    {
      title: 'WACC',
      description: `A compiler for the WACC programming language, written in Scala. The
            frontend uses the Parsley parser combinator library for
            comprehensive error messages and the backend has a full typechecker
            for semantic analysis and various optimisations within the code
            generation.`,
      url: 'v',
      started: new Date('2021-05-01'),
      finished: null,
      skills: ['Scala', 'Parsley', 'x86', 'git', 'GitLab CI'],
    },
    {
      title: 'ICHack',
      description: `A full-stack web application for ICHack, Europe&apos;s largest
            student-run hackathon.
            <br />
            It is built with Nuxt with a vue frontend and a server with custom
            routes for managing hackers, submissions, sponsors and judges.
            <br />
            It also has a custom-built admin panel for volunteers to manage the
            event.`,
      url: 'v',
      started: new Date('2021-05-01'),
      finished: null,
      skills: ['Nuxt', 'Vue', 'Hono', 'Drizzle', 'Zod', 'Docker', 'TypeScript'],
    },
    {
      title: 'PintOS',
      description: `An Operating System written in C for the x86 architecture.
            <br />
            It implements user programs, system calls, process scheduling and
            virtual memory management.`,
      url: 'v',
      started: new Date('2021-05-01'),
      finished: null,
      skills: ['C', 'gdb', 'git', 'NeoVim'],
    },
  ];

  const skills_ = projects.flatMap((project) => project.skills);
  const skills = new Set(skills_);
  const skillIdMap: Record<string, number> = {};
  for (const skill of skills) {
    const created = await prisma.skill.create({
      data: { name: skill },
    });
    skillIdMap[skill] = created.id;
  }

  for (const project of projects) {
    await prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        url: project.url,
        started: project.started,
        finished: project.finished,
        skills: {
          connect: project.skills.map((name) => ({ id: skillIdMap[name] })),
        },
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
