import Link from 'next/link';
import Navlink from './navlink';
import { Menu } from 'lucide-react';

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 z-40 flex flex-row w-screen mx-auto">
      <div
        id="navbar"
        className="bg-background px-4 py-6 flex-1 flex flex-row h-15
          items-center font-terminal rounded-xs md:invisible"
      >
        <div id="navlinks" className="flex-row gap-10 hidden md:flex">
          <Navlink title="George Decesare" href="/" />
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
        <Menu className="absolute md:hidden right-10" />
      </div>
    </header>
  );
}
