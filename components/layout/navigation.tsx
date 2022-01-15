import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { useRouter } from "next/router";
import cn from "classnames";
import useScroll from "../../hooks/useScroll";

type NavItemProp = {
  title: string;
  href: string;
};
const navItems: NavItemProp[] = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/work" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

const Navigation = () => {
  const router = useRouter();
  const activePage = router.pathname;
  const { scrollY } = useScroll();
  return (
    <nav
      className={cn("uppercase font-mono sticky top-0 py-5", {
        "bg-foreground dark:bg-foregroundDark shadow-xl": scrollY > 0,
      })}
    >
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
