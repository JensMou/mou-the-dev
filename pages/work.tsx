import Container from "../components/Container";
import ProjectPreview from "../components/project/ProjectPreview";
import Intro from "../components/Intro";
import Layout from "../components/layout/Layout";
import { getAllProjects } from "../lib/api";
import Head from "next/head";
import Project from "../types/project";

type Props = {
  allProjects: Project[];
};

const Work = ({ allProjects }: Props) => {
  return (
    <>
      <Head>
        <title>Mou Dev - Projects</title>
      </Head>
      <Container>
        <Intro title="Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {allProjects.map((p, i) => (
            <ProjectPreview
              key={p.slug + i}
              title={p.title}
              coverImage={p.coverImage}
              date={p.date}
              author={p.author}
              slug={p.slug}
              excerpt={p.excerpt}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Work;

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allProjects },
  };
};
