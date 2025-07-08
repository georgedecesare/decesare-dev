import Link from 'next/link';
import Navlink from './navlink';

export default function Nav() {
  return (
    <header
      id="navbar"
      className="fixed top-0 z-40 flex flex-row gap-10 h-15
        w-[calc(100%-2.5rem)] pr-10 items-center mx-5 mt-5 invisible
        font-terminal rounded-xs bg-nav shadow-lg border-1 border-stone-700"
    >
      <div id="logo" className="ml-10 text-xl"></div>
      <div id="navlinks" className="flex flex-row gap-10">
        <Navlink title="Home"></Navlink>
        <Navlink title="About"></Navlink>
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
    </header>
  );
}
