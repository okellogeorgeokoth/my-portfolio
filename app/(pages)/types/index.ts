import { PortableTextBlock } from "@portabletext/types";

// Project Type - matches getProjects() and getProjectBySlug() queries
export interface ProjectType {
  _id: string;
  name: string;
  slug?: {
    current: string;
  };
  tagline?: string;
  projectUrl?: string;
  description?: PortableTextBlock[];
  coverImage?: {
    asset: {
      _ref?: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    alt?: string;
    caption?: string;
  };
  logo?: {
    asset: {
      _ref?: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    alt?: string;
  };
  technologies?: string[];
  startDate?: string;
  endDate?: string;
  isFeatured?: boolean;
  githubUrl?: string;
  caseStudy?: PortableTextBlock[];
  _createdAt?: string;
  _updatedAt?: string;
}

// Blog Type - matches getBlogs() and getBlogBySlug() queries
export interface BlogType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  coverImage?: {
    asset: {
      _ref?: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    alt?: string;
    caption?: string;
  };
  publishedAt: string;
  content?: Array<
    PortableTextBlock | {
      _type: 'image';
      asset: {
        url: string;
        metadata?: {
          dimensions?: {
            width: number;
            height: number;
            aspectRatio: number;
          };
        };
      };
    }
  >;
  readingTime?: number;
  tags?: string[];
  author?: {
    name: string;
    avatar?: {
      asset: {
        url: string;
      };
      alt?: string;
    };
  };
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  _createdAt?: string;
  _updatedAt?: string;
}

// Review Type - matches getReviews(), getReviewBySlug(), and getFeaturedReviews() queries
export interface ReviewType {
  _id: string;
  slug?: {
    current: string;
  };
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: {
    asset: {
      _ref?: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    alt?: string;
  };
  screenshot?: {
    asset: {
      _ref?: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    alt?: string;
    caption?: string;
  };
  isFeatured?: boolean;
  product?: {
    _ref: string;
    _type: string;
    name?: string;
    slug?: {
      current: string;
    };
  };
  company?: string;
  jobTitle?: string;
  tags?: string[];
  verification?: {
    verified: boolean;
    method?: 'email' | 'social' | 'video';
    date?: string;
  };
  _createdAt?: string;
  _updatedAt?: string;
}

// Page Props Types
export interface BlogPageProps {
  params: { slug: string };
  blog: BlogType;
  relatedPosts?: BlogType[];
}

export interface ProjectPageProps {
  params: { slug: string };
  project: ProjectType;
  relatedProjects?: ProjectType[];
}

export interface ReviewPageProps {
  params: { slug: string };
  review: ReviewType;
  relatedReviews?: ReviewType[];
}

// Generic Types
export interface SanityAsset {
  _ref?: string;
  _type?: string;
  asset: {
    url: string;
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
  alt?: string;
  caption?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
  canonicalUrl?: string;
}