import { groq } from "next-sanity";
import { client } from "./client";
import { BlogType, ProjectType } from "@/app/(pages)/types";

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

// sanity/lib/blogs/getBlogs.ts

export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "coverImage": coverImage.asset->url,
      publishedAt
    }`
  );
}


export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  const query = groq`
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      coverImage {
        asset -> {
          url
        },
        alt
      },
      publishedAt,
      content[] {
        ...,
        markDefs[] {
          ...,
          _type == "link" => {
            "href": @.href
          }
        }
      }
    }
  `;

  const blog = await client.fetch<BlogType | null>(query, { slug });
  return blog;
}