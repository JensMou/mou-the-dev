import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Container";
import ProjectBody from "../../components/project/ProjectBody";
import ProjectHeader from "../../components/project/ProjectHeader";
import Layout from "../../components/layout/Layout";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import ProjectTitle from "../../components/project/ProjectTitle";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import ProjectType from "../../types/project";

type Props = {
  project: ProjectType;
  preview?: boolean;
};

const Project = ({ project, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <div
          className="text-l cursor-pointer py-5"
          onClick={() => router.back()}
        >
          {"<-"} Go Back
        </div>
        {router.isFallback ? (
          <ProjectTitle>Loading…</ProjectTitle>
        ) : (
          <>
            <article className="p-8 md:p-32 bg-glass dark:bg-glassDark rounded-2xl	">
              <Head>
                <title>Mou Dev - {project.title}</title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <ProjectHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
              />
              <ProjectBody content={project.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Project;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
