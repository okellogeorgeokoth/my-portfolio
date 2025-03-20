import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogBySlug } from '@/sanity/lib/blog/getBlogBySlug'; // Adjust the import path as needed
import { Blog, BlogPageProps } from '../../types/BlogTypes';
export default async function BlogPage({ params }: BlogPageProps) {
  try {
    const { slug } = params;

    if (!slug) return notFound();

    console.log("Slug:", slug);

    // Fetch the blog post
    const blog: Blog | null = await getBlogBySlug(slug);

    if (!blog) return notFound();

    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
          {/* Blog Title */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            {blog.title || "Untitled Blog Post"}
          </h1>

          {/* Blog Image */}
          <div className="relative h-96 w-full mb-6">
            {blog.image?.asset?.url ? (
              <Image
                src={blog.image.asset.url}
                alt={blog.title || "Blog Image"}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <div className="bg-gray-200 flex items-center justify-center h-full rounded-lg">
                <p className="text-gray-500">Image not available</p>
              </div>
            )}
          </div>

          {/* Blog Details */}
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Published:</strong>{" "}
              {blog.publishedAt
                ? new Date(blog.publishedAt).toLocaleDateString()
                : "TBD"}
            </p>
            <p className="text-gray-600">
              <strong>Author:</strong> {blog.author?.name || "Unknown"}
            </p>
            <p className="text-gray-600">
              <strong>Categories:</strong>{" "}
              {blog.categories
                ?.map((cat) => cat.title)
                .join(", ") || "Uncategorized"}
            </p>
            {blog.excerpt && (
              <div className="text-gray-600">
                <strong>Excerpt:</strong>
                <p className="mt-2">{blog.excerpt}</p>
              </div>
            )}
            {blog.content && (
              <div className="prose max-w-none mt-6">
                {/* Render rich text content here */}
                {blog.content}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return notFound();
  }
}