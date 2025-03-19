import React from 'react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">First Blog Post</h2>
            <p className="text-gray-700">
              This is the content of the first blog post. It can include various details about the topic, insights, and more.
            </p>
            <a href="/blog/first-post" className="text-blue-500 hover:underline mt-4 inline-block">
              Read more...
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Second Blog Post</h2>
            <p className="text-gray-700">
              This is the content of the second blog post. It can include various details about the topic, insights, and more.
            </p>
            <a href="/blog/second-post" className="text-blue-500 hover:underline mt-4 inline-block">
              Read more...
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Third Blog Post</h2>
            <p className="text-gray-700">
              This is the content of the third blog post. It can include various details about the topic, insights, and more.
            </p>
            <a href="/blog/third-post" className="text-blue-500 hover:underline mt-4 inline-block">
              Read more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}