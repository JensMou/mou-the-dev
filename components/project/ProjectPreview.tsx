import Avatar from "../Avatar";
import DateFormatter from "../DateFormatter";
import CoverImage from "./CoverImage";
import Link from "next/link";
import Author from "../../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroProject = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]">
      <a className="hover:underline border-2 rounded-md p-8">
        <section className="flex flex-col overflow-hidden">
          <CoverImage title={title} src={coverImage} slug={slug} />
          <h3 className="my-4 text-4xl lg:text-6xl leading-tight">{title}</h3>
          <Avatar name={author.name} picture={author.picture} />
          <DateFormatter dateString={date} />
          <p className="text-lg mt-4 leading-relaxed max-h-40 overflow-ellipsis">
            {excerpt}
          </p>
        </section>
      </a>
    </Link>
  );
};

export default HeroProject;
