import cn from "classnames";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="container flex justify-end px-4 py-8 mx-auto">
      <div
        className={cn(
          "text-xl space-x-6 flex absolute right-16 md:bg-transparent md:space-x-8 md:static md:visible ",
          {
            invisible: !open,
          }
        )}
      >
        <Link href="/">
          <a className="hover:text-primary">Hello</a>
        </Link>
        <Link href="/projects">
          <a className="hover:text-primary">Projects</a>
        </Link>
        <Link href="/about">
          <a className="hover:text-primary">About</a>
        </Link>
      </div>
      <div onClick={() => setOpen(!open)} className="flex md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navigation;
