import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
const Navigation = () => {
  return (
    <nav className="bg-white shadow-medium sticky top-0 py-8">
      <div className="container mx-auto">
        <div className={"text-xl space-x-6 space-x-8 flex justify-end px-5"}>
          <Link href="/">
            <a className="hover:text-primary">Hello</a>
          </Link>
          <Link href="/projects">
            <a className="hover:text-primary">Projects</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-primary">About</a>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
