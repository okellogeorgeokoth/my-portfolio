// app/blogs/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogs } from '@/sanity/lib/sanity.query';

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link key={blog._id} href={`/blogs/${blog.slug}`}>
              <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
                {blog.coverImage?.asset?.url && (
                  <Image
                    src={blog.coverImage.asset.url}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold text-black">{blog.title}</h2>
                <p className="text-gray-600">{blog.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Published on: {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}