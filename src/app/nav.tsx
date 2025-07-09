import Link from 'next/link';
import Navlink from './navlink';

export default function Nav() {
  return (
    <header
      className="fixed top-0 left-0 z-40 flex flex-row w-full px-5 pt-5 mx-auto"
    >
      <div
        id="navbar"
        className="flex-1 flex flex-row gap-10 h-15 items-center font-terminal
          rounded-xs bg-nav shadow-lg border-1 border-stone-700 md:invisible"
      >
        <div id="logo" className="ml-10 text-xl"></div>
        <div id="navlinks" className="flex-row gap-10 hidden md:flex">
          <Navlink title="About">
            CV/Resumé
            <br />
            About this website
          </Navlink>
          <Navlink title="Projects"></Navlink>
          <Navlink title="Contact">
            <Link href="https://github.com/georgedecesare">GitHub</Link>
            <br />
            <Link href="https://www.linkedin.com/in/george-decesare-1968a629b/">
              LinkedIn
            </Link>
            <br />
            <Link href="mailto:george@decesare.dev">Email</Link>
          </Navlink>
        </div>
      </div>
    </header>
  );
}
