import { Any } from "next-sanity";

// Project Type
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

// Blog Type
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

// Review Type
export interface ReviewType {
  slug: Any;
  _id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  isFeatured?: boolean;
  product?: {
    _ref: string;
    _type: string;
  };
  tags?: string[];
}

// Blog Page Props
export interface BlogPageProps {
  params: { slug: string }; // Slug for dynamic routing
  blog: BlogType; // The blog post data
}

// Project Page Props
export interface ProjectPageProps {
  params: { slug: string }; // Slug for dynamic routing
  project: ProjectType; // The project data
}

// Review Page Props
export interface ReviewPageProps {
  params: { slug: string }; // Slug for dynamic routing (if needed)
  review: ReviewType; // The review data
}