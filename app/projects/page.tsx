"use client";



import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

type Project = {
  _id: string;
  title: string;
  thumbnail?: string;
  slug?: {
    current: string;
  };
  shortDescription: string;
  category: string;
  technologies?: string[];
  year?: number;
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await client.fetch<Project[]>(projectsQuery);
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const categories = [
    "All",
    ...Array.from(
      new Set(projects.map((project) => project.category).filter(Boolean))
    ),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-neutral-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-50 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
              Projects
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
              My Projects
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-500 md:text-lg">
              A collection of systems, automation solutions, and digital
              projects I have designed and developed to improve business
              processes.
            </p>

          </div>

          {/* Decorative Circle */}
          <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-black/[0.03] blur-3xl" />

        </div>
      </section>


      {/* ================= PROJECT SECTION ================= */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          {/* ================= FILTER ================= */}
          <div className="mb-12 flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm transition ${
                  activeCategory === category
                    ? "border-black bg-black text-white"
                    : "border-black/10 bg-white text-neutral-500 hover:border-black/30 hover:text-black"
                }`}
              >
                {category}
              </button>

            ))}

          </div>


          {/* ================= LOADING ================= */}
          {loading && (
            <div className="py-20 text-center">

              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                Loading Projects...
              </p>

            </div>
          )}


          {/* ================= EMPTY ================= */}
          {!loading && filteredProjects.length === 0 && (
            <div className="rounded-3xl border border-black/[0.08] bg-white px-6 py-20 text-center">

              <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
                No Projects Found
              </p>

            </div>
          )}


          {/* ================= PROJECT GRID ================= */}
          {!loading && filteredProjects.length > 0 && (

            <div className="grid gap-8 md:grid-cols-2">

              {filteredProjects.map((project) => (

                <article
                  key={project._id}
                  className="group overflow-hidden rounded-3xl border border-black/[0.08] bg-white transition duration-500 hover:-translate-y-1 hover:border-black/[0.15]"
                >

                  {/* ================= PROJECT IMAGE ================= */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">

                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-sm uppercase tracking-[0.25em] text-neutral-600">
                          Project Preview
                        </span>
                      </div>
                    )}

                  </div>


                  {/* ================= CONTENT ================= */}
                  <div className="p-7 md:p-8">

                    <div className="mb-4 flex items-center justify-between">

                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-black">
                        {project.category}
                      </span>

                      <span className="text-neutral-500 transition duration-300 group-hover:translate-x-1 group-hover:text-black">
                        ↗
                      </span>

                    </div>


                    {/* TITLE */}
                    <h2 className="text-2xl font-medium tracking-tight text-neutral-900">
                      {project.title}
                    </h2>


                    {/* DESCRIPTION */}
                    <p className="mt-4 text-sm leading-6 text-neutral-500">
                      {project.shortDescription}
                    </p>


                    {/* TECHNOLOGIES */}
                    {project.technologies &&
                      project.technologies.length > 0 && (

                        <div className="mt-6 flex flex-wrap gap-2">

                          {project.technologies.map((technology) => (

                            <span
                              key={technology}
                              className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-neutral-500"
                            >
                              {technology}
                            </span>

                          ))}

                        </div>

                      )}


                    {/* ================= BUTTON ================= */}
                    <div className="mt-7 border-t border-black/10 pt-5">

                      {project.slug?.current ? (

                        <Link
                          href={`/projects/${project.slug.current}`}
                          className="inline-flex items-center text-sm font-medium text-black transition hover:text-neutral-600"
                        >
                          View Project
                          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>

                      ) : (

                        <span className="text-sm font-medium text-neutral-400">
                          View Project →
                        </span>

                      )}

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-[#1a1a1a] text-white"
      >

        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

          <div className="grid gap-14 lg:grid-cols-3 lg:gap-10">

            {/* ================= LEFT ================= */}
            <div className="max-w-md">

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
                Contact Me
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Get in Touch
              </h2>

              <p className="mt-6 text-base leading-7 text-gray-400">
                Have a project, idea, or opportunity in mind? Feel free to
                reach out and let's discuss how technology can help solve your
                needs.
              </p>

            </div>


            {/* ================= MIDDLE ================= */}
            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-start gap-5">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.918l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
                    />
                  </svg>

                </div>

                <div>

                  <p className="text-sm font-medium text-gray-400">
                    Mail
                  </p>

                  <p className="mt-1 text-base font-medium">
                    hafizdmuhammad1996@gmail.com
                  </p>

                </div>

              </div>


              {/* PHONE */}
              <div className="flex items-start gap-5">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.55c.965 0 1.805.615 2.108 1.531l1.113 3.34a2.25 2.25 0 0 1-.514 2.28l-1.24 1.24a16.5 16.5 0 0 0 6.842 6.842l1.24-1.24a2.25 2.25 0 0 1 2.28-.514l3.34 1.113a2.25 2.25 0 0 1 1.531 2.108V21.75a2.25 2.25 0 0 1-2.25 2.25C10.39 24 0 13.61 0 1.5"
                    />
                  </svg>

                </div>

                <div>

                  <p className="text-sm font-medium text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 text-base font-medium">
                    +62 823 8845 5627
                  </p>

                </div>

              </div>


              {/* LOCATION */}
              <div className="flex items-start gap-5">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                </div>

                <div>

                  <p className="text-sm font-medium text-gray-400">
                    Location
                  </p>

                  <p className="mt-1 text-base font-medium">
                    Jakarta, Indonesia
                  </p>

                </div>

              </div>

            </div>


            {/* ================= RIGHT ================= */}
            <div className="max-w-md lg:ml-auto">

              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Work Together
              </h3>

              <p className="mt-5 text-base leading-7 text-gray-400">
                I'm open to new opportunities, collaborations, and interesting
                projects where technology can create real value for the
                business.
              </p>

              <a
                href="mailto:hafizdmuhammad1996@gmail.com"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-lg"
              >

                <span>
                  Send Message
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>

              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}