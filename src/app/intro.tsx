export default function Intro() {
  const gradient =
    'bg-gradient-to-r bg-clip-text text-transparent from-blue-600 via-purple-600 to-pink-600';
  return (
    <header className="hidden md:block">
      <div id="hero-logo" className="mt-[20vh] text-6xl">
        <div id="name-logo" className="text-inherit animate-popup opacity-0">
          <h1
            className="text-inherit font-bold font-mono flex flex-row
              items-center justify-center pt-2 visible! px-10"
          >
            <div className={`animate-langle ${gradient} pb-2`}>&lt;</div>
            <div className="animate-name">George Decesare</div>
            <div className={`animate-rangle ${gradient} pb-2`}>/&gt;</div>
          </h1>
        </div>
      </div>
      <div id="footer">
        <footer
          className="mt-4 text-center font-terminal text-3xl font-bold
            footer-typewriter opacity-0"
        >
          Computing student at Imperial College London
        </footer>
        <div className="mt-4 flex flex-col items-center justify-center">
          <span
            className="material-symbols-rounded select-none text-gray-700
              opacity-0 more-icon"
            style={{
              fontSize: '3rem',
              fontFamily: "'Material Symbols Rounded'",
              fontWeight: 400,
              fontVariationSettings:
                "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48",
            }}
          >
            expand_more
          </span>
        </div>
      </div>
      <div className="inline-block min-w-full min-h-[200px]"></div>
    </header>
  );
}
