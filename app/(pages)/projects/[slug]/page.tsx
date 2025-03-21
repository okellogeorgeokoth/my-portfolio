import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "../../types";
import { getProjectBySlug } from "@/sanity/lib/sanity.query";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  console.log("Params:", params); // Debugging: Log the entire params object
  console.log("Fetching project for slug:", params.slug); // Debugging: Log the slug

  if (!params.slug) {
    return <div>Slug is missing</div>;
  }

  const project: ProjectType | null = await getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/projects" className="text-blue-600 hover:text-blue-800">
              &larr; Back to Projects
            </Link>
          </div>
          <div className="text-center text-red-600">Project not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Back to Projects Link */}
        <div className="mb-8">
          <Link href="/projects" className="text-blue-600 hover:text-blue-800">
            &larr; Back to Projects
          </Link>
        </div>

        {/* Project Title and Description */}
        <section className="max-w-2xl mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight text-black">
            {project.name || "Unnamed Project"}
          </h1>
          <p className="text-base text-zinc-600 leading-relaxed">
            {project.description || "No description available"}
          </p>
        </section>

        {/* Project Details */}
        <section className="grid grid-cols-1 gap-8">
          {/* Project Logo */}
          <div className="flex items-center gap-x-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={project.name || "Project Logo"}
                  width={60}
                  height={60}
                  className="rounded-md p-2 object-contain"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-md p-2">
                  <p className="text-sm text-gray-500">No Logo</p>
                </div>
              )}
            </div>
            <div>
              <h2 className="font-semibold mb-1 text-black">
                {project.name || "Unnamed Project"}
              </h2>
              <div className="text-sm text-zinc-600">
                {project.tagline || "No tagline available"}
              </div>
            </div>
          </div>

          {/* Project Cover Image */}
          {project.coverImage?.image?.asset?.url && (
            <div className="relative w-full h-96">
              <Image
                src={project.coverImage.image.asset.url}
                alt={project.coverImage.alt || "Project Cover Image"}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}

          {/* Project URL */}
          {project.projectUrl && (
            <div className="mt-8">
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Visit Project &rarr;
              </a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}