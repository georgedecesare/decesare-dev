import { MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Card({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-between w-75 max-w-3xl p-10
        bg-gray-container rounded-lg shadow-md border-stone-700 border-[1px]
        card gap-5"
    >
      <div className="text-4xl font-bold font-terminal">{title}</div>
      <div className="text-stone-300 font-mono text-sm">{children}</div>
      <div className="flex flex-row w-full justify-end">
        <Link
          href="#"
          className="text-footnote flex flex-row items-center gap-2 text-xs
            font-bold"
        >
          See more <MoveRight className="w-4 h-4 font-bold" />
        </Link>
      </div>
    </div>
  );
}
