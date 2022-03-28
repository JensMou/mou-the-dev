import cn from "classnames";
import { ReactNode } from "react";

type IntroProps = { title: ReactNode; centered?: boolean; colorfull?: boolean };
const Intro = ({ title, centered, colorfull }: IntroProps) => {
    return (
        <section
            className={cn("flex-col md:flex-row flex mt-16 mb-8 md:mb-12", {
                "justify-center": centered,
                "justify-space": !centered,
                "colorfull-text": colorfull,
            })}
        >
            <h1 className="font-serif whitespace-nowrap text-center text-7xl sm:text-9xl font-bold tracking-tighter leading-tight">
                {title}
            </h1>
        </section>
    );
};

export default Intro;
