import Card from './card';

export default function Projects() {
  return (
    <div className="relative mr-auto mt-10 md:mt-50 md:aspect-square">
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
          <Card title="decesare.dev">
            A full-stack web application built with Next.js, TypeScript and
            Tailwind CSS. You are currently viewing it.
            <br />I also played around with some animations using GSAP and its
            various plugins (though these can only be seen on desktop).
          </Card>
          <Card title="Scouts Finance Platform">
            A mobile application written in flutter with a serverpod/postgresql
            backend.
            <br />
            Built to help scout leaders manage their finances by tracking
            incoming payments and matching them to parents, children and the
            events they are attending.
          </Card>
          <Card title="WACC">
            A compiler for the WACC programming language, written in Scala. The
            frontend uses the Parsley parser combinator library for
            comprehensive error messages and the backend has a full typechecker
            for semantic analysis and various optimisations within the code
            generation.
          </Card>
          <Card title="ICHack">
            A full-stack web application for ICHack, Europe&apos;s largest
            student-run hackathon.
            <br />
            It is built with Nuxt with a vue frontend and a server with custom
            routes for managing hackers, submissions, sponsors and judges.
            <br />
            It also has a custom-built admin panel for volunteers to manage the
            event.
          </Card>
          <Card title="PintOS">
            An Operating System written in C for the x86 architecture.
            <br />
            It implements user programs, system calls, process scheduling and
            virtual memory management.
          </Card>
        </div>
      </div>
    </div>
  );
}
