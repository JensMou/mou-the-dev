import Avatar from "../Avatar2";
import DateFormatter from "../DateFormatter";
import CoverImage from "./CoverImage";
import ProjectTitle from "./ProjectTitle";
import Author from "../../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const ProjectHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
    </>
  );
};

export default ProjectHeader;
