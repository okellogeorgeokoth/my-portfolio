// app/projects/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/sanity/lib/sanity.query';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

// Create image URL builder
const builder = imageUrlBuilder(client);

// Helper function to get image URL
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getImageUrl(source: any) {
  if (source?.url) {
    return source.url; // If URL is directly available
  }
  return builder.image(source).url(); // If it's a reference that needs building
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug}`}>
              <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  {project.logo && (
                    <div className="flex-shrink-0 w-16 h-16 relative rounded-md overflow-hidden bg-gray-100">
                      <Image
                        src={getImageUrl(project.logo)}
                        alt={project.logo.alt || project.name}
                        fill
                        className="object-contain p-1"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-black">{project.name}</h2>
                    <p className="text-gray-600">{project.tagline || 'No tagline available'}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-200 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project._createdAt && (
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(project._createdAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}