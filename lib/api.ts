import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Project } from "./interfaces";

const projectsDirectory = join(process.cwd(), "_projects");

export function getProjectsSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string, fields: any = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Project = {
    title: "",
    coverImage: "",
    date: "",
    excerpt: "",
    githubRepo: "",
    content: "",
    slug: "",
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field: string) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      // @ts-ignore
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllProjects(fields: any = []) {
  const slugs = getProjectsSlugs();
  const projects: Project[] = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return projects;
}
