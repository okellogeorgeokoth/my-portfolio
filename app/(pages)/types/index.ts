import { Any } from "next-sanity";

// types.ts (or wherever your ProjectType is defined)
export interface ProjectType {
  name: string;
  tagline?: string;
  projectUrl?: string;
  description?: Any; // PortableText or other rich text format
  coverImage?: {
    asset: {
      url: string | null;
    } | null;
    alt?: string; // Add the `alt` property here
  } | null;
  logo?: {
    asset: {
      url: string | null;
    } | null;
    alt?: string; // Optional: Add `alt` for the logo as well
  } | null;
}
// types/blog.ts
export interface BlogType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  coverImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  publishedAt: string;
  content?: Any; // Portable Text content (array of blocks)
}
export interface BlogPageProps {
  params: { slug: string }; // Slug for dynamic routing
  blog: BlogType; // The blog post data
}
export interface ProjectPageProps {
  params: { slug: string }; // Slug for dynamic routing
  project: ProjectType; // The project data
}