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
      className="left-0 right-0 w-screen md:px-10 max-w-full flex flex-col
        invisible items-center mt-50"
    >
      <div className="flex flex-col md:flex-row w-full custom-section mb-20">
        <div className="h-full pb-20 hidden md:block">
          <LeftBraceIcon />
        </div>
        <div
          className="flex flex-col font-terminal font-black justify-center
            text-5xl sm:text-8xl w-full pb-5"
        >
          <h1 className="text-center">{title}</h1>
        </div>
        <div className="h-full pt-20 hidden md:block">
          <RightBraceIcon />
        </div>
      </div>
      {children}
    </section>
  );
}
