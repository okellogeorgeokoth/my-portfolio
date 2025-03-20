import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live"; // Adjust the import path as needed

export const getAllBlogs = async () => {
  const ALL_BLOGS_QUERY = defineQuery(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug {
        current
      },
      author -> {
        name
      },
      image {
        asset -> {
          url
        }
      },
      excerpt,
      publishedAt,
      categories[] -> {
        title
      }
    }
  `);

  try {
    const blogs = await sanityFetch({ query: ALL_BLOGS_QUERY });
    console.log("Fetched Blogs:", blogs); // Debugging: Log fetched data
    return blogs.data || [];
  } catch (error) {
    console.log("Error fetching blogs:", error);
    return [];
  }
};

export const getBlogBySlug = async (slug: string) => {
  const BLOG_BY_SLUG_QUERY = defineQuery(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug {
        current
      },
      author -> {
        name
      },
      image {
        asset -> {
          url
        }
      },
      excerpt,
      content,
      publishedAt,
      categories[] -> {
        title
      }
    }
  `);

  try {
    const blog = await sanityFetch({ query: BLOG_BY_SLUG_QUERY, params: { slug } });
    console.log("Fetched Blog:", blog); // Debugging: Log fetched data
    return blog.data || null;
  } catch (error) {
    console.log("Error fetching blog:", error);
    return null;
  }
};