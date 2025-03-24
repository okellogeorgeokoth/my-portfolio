import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/sanity/lib/sanity.query';
import { PortableText } from '@portabletext/react';
import { ProjectType } from '../../types';

export default async function ProjectPage({ params }: { params:Promise<{ slug: string }>}) {
  try {
    const { slug } = await params;

    if (!slug) return notFound();

    console.log("Slug:", slug);

    // Fetch the project
    const project: ProjectType | null = await getProjectBySlug(slug);
    
    if (!project) return notFound();

    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl">
          {/* Project Title */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            {project.name || "Untitled Project"}
          </h1>

          {/* Project Cover Image */}
          {project.coverImage?.asset?.url ? (
          <div className="relative h-96 w-full mb-6">
            <Image
              src={project.coverImage.asset.url}
              alt={project.coverImage.alt || "Project Cover Image"}
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

          {/* Project Logo */}
          {project.logo?.asset?.url ? (
            <div className="relative h-32 w-32 mb-6 mx-auto">
              <Image
                src={project.logo.asset.url}
                alt={project.name || "Project Logo"}
                fill
                className="object-contain rounded-lg"
                priority // Optional: Prioritize loading this image
              />
            </div>
          ) : (
            <div className="bg-gray-200 flex items-center justify-center h-32 w-32 mb-6 mx-auto rounded-lg">
              <p className="text-gray-500">Logo not available</p>
            </div>
          )}

          {/* Project Details */}
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Tagline:</strong> {project.tagline || "Tagline not specified"}
            </p>

            {/* Project URL */}
            {project.projectUrl && (
              <p className="text-gray-600">
                <strong>Project URL:</strong>{" "}
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {project.projectUrl}
                </a>
              </p>
            )}

            {/* Project Description */}
            {project.description && (
              <div className="text-gray-600">
                <strong>Description:</strong>
                <div className="mt-2 prose">
                  <PortableText value={project.description} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching project data:", error);
    return notFound();
  }
}