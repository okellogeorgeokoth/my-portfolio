import React from 'react';
import Image from 'next/image';
import { getBlogBySlug } from '@/sanity/lib/blog/getBlogBySlug'; // Adjust the import path as needed

interface Blog {
  _id: string;
  title: string | null;
  slug: { current: string | null } | null;
  image: { asset: { url: string | null } | null } | null;
  excerpt: string | null;
  content: any; // Use a more specific type for rich text content if needed
  publishedAt: string | null;
  author: { name: string | null } | null;
  categories: { title: string | null }[] | null;
}

async function BlogPost({ params }: { params: { slug: string } }) {
  const blog: Blog | null = await getBlogBySlug(params.slug);

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          {blog.title || "Untitled Blog Post"}
        </h1>
        <div className="relative h-96 w-full mb-6">
          {blog.image?.asset?.url ? (
            <Image
              src={blog.image.asset.url}
              alt={blog.title || "Blog Image"}
              fill
              className="object-cover rounded-lg"
            />
          ) : (
            <p>Image not found</p>
          )}
        </div>
        <p className="text-gray-600 mb-4">
          <strong>Published:</strong>{" "}
          {blog.publishedAt
            ? new Date(blog.publishedAt).toLocaleDateString()
            : "TBD"}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Author:</strong> {blog.author?.name || "Unknown"}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Categories:</strong>{" "}
          {blog.categories
            ?.map((cat) => cat.title)
            .join(", ") || "Uncategorized"}
        </p>
        <div className="prose max-w-none">
          {/* Render rich text content here */}
          {blog.content}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;