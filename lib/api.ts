import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Project } from "./interfaces";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = join(process.cwd(), "_projects");

export function getProjectsSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export async function getProjectBySlug(slug: string, fields: any = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const project: Project = {
    title: "",
    date: "",
    tags: [],
    coverImage: "",
    excerpt: "",
    githubRepo: "",
    content: "",
    slug: "",
  };

  const result = await remark().use(html).process(content);
  // Ensure only the minimal needed data is exposed

  fields.forEach((field: string) => {
    if (field === "slug") {
      project[field] = realSlug;
    }
    if (field === "content") {
      project[field] = result.toString();
    }

    if (typeof data[field] !== "undefined") {
      // @ts-ignore
      project[field] = data[field];
    }
  });

  return project;
}

export async function getAllProjects(fields: any = []) {
  const slugs = getProjectsSlugs();
  const projects: Project[] = await Promise.all(
    slugs.map(async (slug) => getProjectBySlug(slug, fields))
  );
  // sort posts by date in descending order
  projects.sort((project1, project2) =>
    project1.date > project2.date ? -1 : 1
  );
  return projects;
}
