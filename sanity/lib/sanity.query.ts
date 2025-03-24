import { groq } from "next-sanity";
import { client } from "./client";
import { BlogType, ProjectType, ReviewType } from "@/app/(pages)/types";

// Fetch all projects with essential fields
export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(
    groq`*[_type == "project"] | order(_createdAt desc) {
      _id, 
      name,
      "slug": slug.current,
      tagline,
      projectUrl,
      description,
      "logo": logo.asset->{
        url,
        "metadata": metadata.dimensions
      },
      "coverImage": coverImage.asset->{
        url,
        "metadata": metadata.dimensions,
        "alt": coverImage.alt,
        "caption": coverImage.caption
      },
      technologies,
      isFeatured,
      startDate,
      endDate,
      githubUrl
    }`
  );
}

// Fetch a project by its slug with all fields
export async function getProjectBySlug(slug: string): Promise<ProjectType | null> {
  const query = groq`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      name,
      tagline,
      projectUrl,
      description,
      caseStudy,
      logo {
        asset -> {
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      "slug": slug.current,
      coverImage {
        asset -> {
          url,
          metadata {
            dimensions
          }
        },
        alt,
        caption
      },
      technologies,
      isFeatured,
      startDate,
      endDate,
      githubUrl,
      _createdAt,
      _updatedAt
    }
  `;

  const project = await client.fetch<ProjectType | null>(query, { slug });
  return project;
}

// Fetch all blogs with essential fields
export async function getBlogs(): Promise<BlogType[]> {
  return client.fetch(
    groq`*[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "readingTime": round(length(pt::text(content)) / 5 / 180 ),
      coverImage {
        asset -> {
          url,
          metadata {
            dimensions
          }
        },
        alt,
        caption
      },
      publishedAt,
      tags,
      author-> {
        name,
        avatar {
          asset -> {
            url
          },
          alt
        }
      }
    }`
  );
}

// Fetch a blog by its slug with all content
export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  const query = groq`
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      coverImage {
        asset -> {
          url,
          metadata {
            dimensions
          }
        },
        alt,
        caption
      },
      publishedAt,
      content[] {
        ...,
        markDefs[] {
          ...,
          _type == "link" => {
            "href": @.href,
            "blank": !(_key in ["internal", "email"])
          }
        },
        _type == "image" => {
          ...,
          asset -> {
            url,
            metadata {
              dimensions
            }
          }
        }
      },
      readingTime,
      tags,
      author-> {
        name,
        avatar {
          asset -> {
            url
          },
          alt
        }
      },
      seo {
        title,
        description,
        keywords
      },
      _createdAt,
      _updatedAt
    }
  `;

  const blog = await client.fetch<BlogType | null>(query, { slug });
  return blog;
}

// Fetch all reviews with essential fields
export async function getReviews(): Promise<ReviewType[]> {
  const reviewsQuery = groq`
    *[_type == "review"] | order(date desc) {
      _id,
      name,
      "slug": slug.current,
      rating,
      comment,
      date,
      avatar {
        asset -> {
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      screenshot {
        asset -> {
          url,
          metadata {
            dimensions
          }
        },
        alt,
        caption
      },
      isFeatured,
      product-> {
        _id,
        name
      },
      company,
      jobTitle,
      tags,
      verification {
        verified,
        method,
        date
      }
    }
  `;

  const reviews = await client.fetch<ReviewType[]>(reviewsQuery);
  return reviews;
}

// Fetch a review by its slug with all fields
export async function getReviewBySlug(slug: string): Promise<ReviewType | null> {
  const query = groq`
    *[_type == "review" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      rating,
      comment,
      date,
      avatar {
        asset -> {
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      screenshot {
        asset -> {
          url,
          metadata {
            dimensions
          }
        },
        alt,
        caption
      },
      isFeatured,
      product-> {
        _id,
        name,
        "slug": slug.current
      },
      company,
      jobTitle,
      tags,
      verification {
        verified,
        method,
        date
      },
      _createdAt,
      _updatedAt
    }
  `;

  const review = await client.fetch<ReviewType | null>(query, { slug });
  return review;
}

// Fetch featured reviews
export async function getFeaturedReviews(limit: number = 3): Promise<ReviewType[]> {
  const query = groq`
    *[_type == "review" && isFeatured == true] | order(date desc) [0...$limit] {
      _id,
      name,
      "slug": slug.current,
      rating,
      comment,
      date,
      avatar {
        asset -> {
          url
        },
        alt
      },
      isFeatured
    }
  `;

  return client.fetch<ReviewType[]>(query, { limit });
}