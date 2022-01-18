import cn from "classnames";

type IntroProps = { title: string; centered?: boolean; colorfull?: boolean };
const Intro = ({ title, centered, colorfull }: IntroProps) => {
  return (
    <section
      className={cn("flex-col md:flex-row flex mt-16 mb-16 md:mb-12", {
        "justify-center": centered,
        "justify-space": !centered,
        "colorfull-text": colorfull,
      })}
    >
      <h1 className="font-serif whitespace-nowrap text-center md:text-left text-8xl md:text-9xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
    </section>
  );
};

export default Intro;
