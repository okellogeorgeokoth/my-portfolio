"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { getProjects } from "@/sanity/lib/sanity.query";

// Define the type for a project
interface Project {
  _id: string;
  logo: string;
  name: string;
  tagline: string;
  slug: string; // Add slug to the Project interface
}

export default function ProjectsPage() {
  // Explicitly type the `projects` state
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl text-black font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug}`} // Use the slug for dynamic routing
              passHref
            >
              <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={project.logo}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  width={300}
                  height={160}
                />
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-600">{project.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}