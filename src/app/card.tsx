export default function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-75 max-w-3xl p-6
        bg-gray-container rounded-lg shadow-md border-stone-700 border-[1px]"
    >
      <div className="text-4xl font-bold mb-4 font-terminal">Card Title</div>
      <div className="text-stone-300 py-10 px-5 font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
