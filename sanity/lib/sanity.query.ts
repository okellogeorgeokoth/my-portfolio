import { groq } from "next-sanity";
import { client } from "./client";
import { ProjectType } from "@/app/(pages)/types";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`
  );
}
// sanity/lib/projects/getProjectBySlug.ts

export async function getProjectBySlug(slug: string): Promise<ProjectType | null> {
  const query = groq`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      name,
      tagline,
      description,
      logo {
        asset -> {
          url
        }
      },
      projectUrl,
      slug,
      coverImage {
        asset -> {
          url
        },
        alt
      }
    }
  `;

  const project = await client.fetch<ProjectType | null>(query, { slug });
  return project;
}