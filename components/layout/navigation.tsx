import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="container flex justify-end px-4 py-8 mx-auto">
      <div className="hidden space-x-8 lg:flex">
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
      <div className="flex lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
