import { sanityFetch } from "@/sanity/lib/live";
// sanity.query.ts
import { Any, defineQuery } from "next-sanity";

// types.ts
export interface ProjectType {
  _id: string;
  name: string | null;
  tagline: string | null;
  description: Any | null;
  logo: string | null; 
  projectUrl: string | null;
  slug: {
    current: string;
  } | null;
  coverImage: {
    alt: string | null;
    image: {
      asset: {
        url: string;
      };
    };
  } | null;
}
export const getProjectBySlug = async (slug: string) => {
  const PROJECT_BY_SLUG_QUERY = defineQuery(`
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

    if (!project?.data) {
      console.warn("No project found for slug:", slug);
      return null;
    }

    // Transform the `logo` field to a string (URL)
    const transformedProject = {
      ...project.data,
      logo: project.data.logo?.asset?.url || null, // Ensure `logo` is a string or null
    };

    return transformedProject;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};