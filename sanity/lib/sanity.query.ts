import { groq } from "next-sanity";
import { client } from "./client";

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


import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live"; // Adjust the import path as needed

export const getProjectBySlug = async (slug: string) => {
  const PROJECT_BY_SLUG_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      name,
      tagline,
      description,
      logo,
      projectUrl,
      slug {
        current
      },
      coverImage {
        alt,
        image {
          asset -> {
            url
          }
        }
      }
    }
  `);

  try {
    const project = await sanityFetch({ query: PROJECT_BY_SLUG_QUERY, params: { slug } });
    console.log("Fetched Project:", project); // Debugging: Log fetched data
    return project.data || null;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};