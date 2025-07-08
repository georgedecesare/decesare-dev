import { LeftBraceIcon, RightBraceIcon } from './braces';

type SectionProps = {
  title: string;
};

export default function Section({
  children,
  title,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <section className="px-10 flex flex-row w-full xl:w-[70%] invisible">
      <div className="h-full py-1 pb-20">
        <LeftBraceIcon />
      </div>
      <div className="flex flex-col font-terminal text-8xl justify-center">
        <h1 className="text-end pb-20 whitespace-normal">{title}</h1>
      </div>
      <div className="flex items-center flex-2/3">
        <p className="pl-10 font-mono text-lg w-full pt-20">{children}</p>
      </div>
      <div className="h-full py-1 pt-20">
        <RightBraceIcon />
      </div>
    </section>
  );
}
