import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white flex justify-center shadow-medium sticky top-0 py-8 px-14">
      <div className={"text-xl space-x-6 space-x-8 "}>
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
    </nav>
  );
};

export default Navigation;
