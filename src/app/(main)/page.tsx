import Intro from './intro';
import About from './about';
import Projects from './projects';
import Setup from './setup';
import Skills from './skills';

export default function Home() {
  return (
    <main
      className="flex min-h-full flex-col items-center justify-center py-30
        relative main px-1 max-w-[1100px] mx-auto box-border"
    >
      <Setup />

      <Intro />

      <About />

      <Skills />

      <Projects />

      <div className="hidden md:inline-block w-full min-h-[80vh]"></div>
    </main>
  );
}
