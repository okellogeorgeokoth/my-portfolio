import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "../types";
import { getProjects } from "@/sanity/lib/sanity.query";

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
      {/* Page Title and Description */}
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight text-black">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
          href={`/projects/${project.slug?.current}`} // Ensure this matches the dynamic route
          key={project._id}
          className="flex items-center gap-x-4 border border-zinc-200 hover:border-zinc-400 p-4 rounded-lg ease-in-out transition-all duration-300 bg-white shadow-sm hover:shadow-md"
        >
            {/* Project Logo */}
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

            {/* Project Details */}
            <div>
              <h2 className="font-semibold mb-1 text-black">
                {project.name || "Unnamed Project"}
              </h2>
              <div className="text-sm text-zinc-600">
                {project.tagline || "No tagline available"}
              </div>
            </div>
          </Link>
        ))}
      </section>
      </div>
      </div>
  );
}