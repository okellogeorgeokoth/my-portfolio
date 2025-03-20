// Define the Blog type
// types/blogTypes.ts
export interface Blog {
  _id: string;
  slug: { current: string | null } | null; // Allow slug to be null or have current as string | null
  title: string | null;
  image: { asset: { url: string | null } | null } | null;
  excerpt: string | null;
  publishedAt: string | null;
  author: { name: string | null } | null;
  categories: { title: string | null }[] | null;
  content: any; // Use a more specific type for rich text content if needed
}

// Define the BlogPageProps interface
export interface BlogPageProps {
  params: { slug: string };
}