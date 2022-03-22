import Avatar from "../Avatar2";
import DateFormatter from "../DateFormatter";
import Link from "next/link";
import Author from "../../types/author";
import Emoji from "../Emoji";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  numberOfWords: string;
};

const HeroProject = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  numberOfWords,
}: Props) => {
  const parsedNumberOfWords = parseInt(numberOfWords);
  const readingTime = Math.round((parsedNumberOfWords / 200) * 0.6);
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="bg-glass dark:bg-glassDark hover:underline rounded-md p-8 my-5">
        <section className="flex overflow-hidden w-full items-center">
          <div className="grow">
            <h3 className="text-4xl lg:text-6xl font-bold leading-tight">
              {title}
            </h3>
            <p className="text-lg leading-relaxed max-h-40 overflow-ellipsis">
              {excerpt}
            </p>
          </div>
          <div className="flex flex-col items-end justify-center text-center">
            <Avatar name={author.name} picture={author.picture} />
            <p className="text-xs mr-1 italic">
              <DateFormatter dateString={date} />
            </p>
            <p>
              <Emoji symbol={"📖"} label={"Reading time"} />{" "}
              {`~${readingTime} min`}
            </p>
          </div>
        </section>
      </a>
    </Link>
  );
};

export default HeroProject;
