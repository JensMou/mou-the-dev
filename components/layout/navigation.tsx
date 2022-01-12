import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { useRouter } from "next/router";
import cn from "classnames";

type NavItemProp = {
  title: string;
  href: string;
};
const navItems: NavItemProp[] = [
  { title: "Hello", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
];

const Navigation = () => {
  const router = useRouter();
  const activePage = router.pathname;
  return (
    <nav className="uppercase bg-foreground font-mono dark:bg-foregroundDark shadow-xl sticky top-0 py-5">
      <div className="container mx-auto">
        <div
          className={
            "text-xl space-x-6 space-x-8 flex justify-center sm:justify-end px-5"
          }
        >
          {navItems.map((item, index) => {
            return (
              <Link key={item.title + index} href={item.href}>
                <a
                  className={cn("hover:underline", {
                    "text-primary": activePage === item.href,
                  })}
                >
                  {item.title}
                </a>
              </Link>
            );
          })}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
