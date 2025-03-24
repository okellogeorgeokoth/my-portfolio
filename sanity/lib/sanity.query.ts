import { groq } from "next-sanity";
import { client } from "./client";
import { BlogType, ProjectType, ReviewType } from "@/app/(pages)/types";

// Fetch all projects
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

// Fetch a project by its slug
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

// Fetch all blogs
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

// Fetch a blog by its slug
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

// Fetch all reviews
export async function getReviews(): Promise<ReviewType[]> {
  const query = groq`
    *[_type == "review"] | order(date desc) {
      _id,
      name,
      rating,
      comment,
      date,
      avatar {
        asset -> {
          url
        },
        alt
      },
      isFeatured,
      product-> {
        _id,
        name
      },
      tags
    }
  `;

  const reviews = await client.fetch<ReviewType[]>(query);
  return reviews;
}

// Fetch a review by its slug (if applicable)
export async function getReviewBySlug(slug: string): Promise<ReviewType | null> {
  const query = groq`
    *[_type == "review" && slug.current == $slug][0] {
      _id,
      name,
      rating,
      comment,
      date,
      avatar {
        asset -> {
          url
        },
        alt
      },
      isFeatured,
      product-> {
        _id,
        name
      },
      tags
    }
  `;

  const review = await client.fetch<ReviewType | null>(query, { slug });
  return review;
}