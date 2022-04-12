import Image from "next/image";
import DateFormatter from "../components/date-formatter";
import markdownStyles from "./markdown-styles.module.css";

export default function ProjectItem({ project }: any) {
  return (
    <section className="border-b last:border-b-0 border-zinc-200">
      <div className="container py-6">
        <h3 className="text-2xl font-serif mb-2">
          <a href={"https://github.com/" + project.githubRepo}>
            {project.title}
          </a>
          <small className="whitespace-nowrap text-zinc-500 text-lg">
            {" "}
            <DateFormatter dateString={project.date} />
          </small>
        </h3>
        <div className="flex flex-wrap mb-2">
          {project.tags.map((tag: any, i: number) => {
            return (
              <div
                key={i}
                className="flex bg-gray-500 rounded px-1.5 font-bold text-white mr-1.5 mb-1.5 items-center"
              >
                {tag}
              </div>
            );
          })}
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="col-span-3 md:col-span-2">
              <p className="text-xl font-light mb-2">{project.excerpt}</p>
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{
                  __html: project.content,
                }}
              />
              {""}
            </div>
            <div className="col-span-3 md:col-span-1">
              <a rel="external" href={project.coverImage}>
                <Image
                  src={project.coverImage}
                  alt={project.title + " preview image"}
                  width={355}
                  height={246}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
