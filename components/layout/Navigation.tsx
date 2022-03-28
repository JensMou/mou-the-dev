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
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
];

const Navigation = () => {
    const router = useRouter();
    const activePage = router.pathname;

    const { scrollY } = useScroll();
    return (
        <nav
            className={cn(
                "bg-transparent uppercase font-mono sticky top-0 py-5 z-10",
                {
                    "bg-semiGlass dark:bg-semiGlassDark shadow-xl": scrollY > 1,
                }
            )}
        >
            <div className="container mx-auto">
                <div
                    className={
                        "text-xl font-bold space-x-8 flex justify-center sm:justify-end px-5"
                    }
                >
                    {navItems.map((item, index) => {
                        return (
                            <Link key={item.title + index} href={item.href}>
                                <a
                                    className={cn("hover:underline", {
                                        "text-primary":
                                            activePage === item.href,
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
