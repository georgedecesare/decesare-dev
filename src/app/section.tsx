import { LeftBraceIcon, RightBraceIcon } from './braces';

type SectionProps = {
  title: string;
};

export default function Section({
  children,
  title,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <section
      className="px-15 md:px-10 flex flex-col md:flex-row max-w-full
        xl:max-w-[90%] 2xl:max-w-[70%] md:invisible"
    >
      <div className="h-full py-1 pb-20 hidden md:block">
        <LeftBraceIcon />
      </div>
      <div
        className="flex flex-col font-terminal text-6xl justify-center
          md:ml-[-20] lg:text-8xl flex-1/3"
      >
        <h1 className="text-center md:text-end md:pb-20">{title}</h1>
      </div>
      <div className="flex items-center flex-2/3 3xl:flex-1/3">
        <p
          className="mt-5 md:pl-10 font-mono text-sm xl:text-md w-full md:pt-20
            font-light leading-relaxed"
        >
          {children}
        </p>
      </div>
      <div className="h-full py-1 pt-20 hidden md:block">
        <RightBraceIcon />
      </div>
    </section>
  );
}
