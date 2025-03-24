// app/blogs/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogBySlug } from '@/sanity/lib/sanity.query';
import { PortableText } from '@portabletext/react';
import { BlogType } from '../../types';


export default async function BlogPage({ params }: { params: { slug: string } }) {
  try {
    const { slug } = params;

    if (!slug) return notFound();

    console.log("Slug:", slug);

    // Fetch the blog post
    const blog: BlogType | null = await getBlogBySlug(slug);

    console.log("Blog Data:", JSON.stringify(blog, null, 2)); // Debug log

    if (!blog) return notFound();

    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
          {/* Blog Title */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            {blog.title || "Untitled Blog Post"}
          </h1>

          {/* Blog Cover Image */}
          {blog.coverImage?.asset?.url ? (
            <div className="relative h-96 w-full mb-6">
              <Image
                src={blog.coverImage.asset.url}
                alt={blog.coverImage.alt || "Blog Cover Image"}
                fill
                className="object-cover rounded-lg"
                priority // Optional: Prioritize loading this image
              />
            </div>
          ) : (
            <div className="bg-gray-200 flex items-center justify-center h-96 w-full mb-6 rounded-lg">
              <p className="text-gray-500">Cover image not available</p>
            </div>
          )}

          {/* Blog Details */}
          <div className="space-y-4">
            {/* Blog Description */}
            {blog.description && (
              <p className="text-gray-600">
                <strong>Description:</strong> {blog.description}
              </p>
            )}

            {/* Blog Content (Portable Text) */}
            {blog.content && (
              <div className="text-gray-600">
                <strong>Content:</strong>
                <div className="mt-2 prose">
                  <PortableText value={blog.content} />
                </div>
              </div>
            )}

            {/* Published Date */}
            <p className="text-sm text-gray-500">
              <strong>Published on:</strong>{" "}
              {new Date(blog.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return notFound();
  }
}