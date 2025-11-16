import Card from './card';
import prisma from '@/lib/prisma';

export default async function Projects() {
  const projects = await prisma.project.findMany();

  return (
    <div
      className="relative mr-auto mt-20 md:mt-50 md:aspect-square opacity-0
        project-wrapper"
    >
      <div className="relative h-min max-w-full">
        <div className="matter absolute left-0 top-0 h-full hidden md:block"></div>
        <div
          className="md:inline-block md:w-20 md:absolute md:left-0 md:top-0
            h-full font-terminal text-5xl font-black text-white md:ml-[30vw]"
        >
          <h1
            className="text-center md:text-current projects-title capitalize
              md:[text-orientation:upright] md:[writing-mode:vertical-lr]"
          >
            Projects
          </h1>
        </div>
        <div
          className="flex flex-col mt-5 md:mt-0 md:flex-row gap-10 md:pl-30
            projects items-center md:items-stretch w-screen md:w-min"
        >
          {projects.map((p) => {
            return (
              <Card key={p.id} title={p.title}>
                <div
                  dangerouslySetInnerHTML={{ __html: p.description ?? '' }}
                ></div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
