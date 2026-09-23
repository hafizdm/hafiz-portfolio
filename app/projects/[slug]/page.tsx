import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { client } from "@/sanity/lib/client";

const projectQuery = `
  *[
    _type == "project" &&
    slug.current == $slug &&
    published == true
  ][0] {
    _id,
    title,
    slug,
    shortDescription,
    description,
    challenge,
    solution,
    "category": category->title,
    technologies,
    features,
    role,
    "thumbnail": thumbnail.asset->url,
    gallery,
    year,
    projectUrl,
    githubUrl,
    featured
  }
`;

type Project = {
  _id: string;

  title: string;

  thumbnail?: string;

  slug?: {
    current: string;
  };

  shortDescription: string;

  description?: any[];

  challenge?: any[];

  solution?: any[];

  category?: string;

  technologies?: string[];

  features?: string[];

  role?: string[];

  year?: number;

  projectUrl?: string;

  githubUrl?: string;

  featured?: boolean;
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = await client.fetch<Project | null>(
    projectQuery,
    { slug }
  );

  console.log("PROJECT DETAIL:", project);
  console.log("PROJECT THUMBNAIL:", project?.thumbnail);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-neutral-900">

    {/* =========================================================
        HERO
    ========================================================= */}

    <section className="px-6 pb-20 pt-40 md:px-12 lg:px-20">
    <div className="mx-auto max-w-7xl">

        {/* Back Button */}

        <Link
            href="/projects"
            className="group mb-12 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg"
            >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
            </span>

            <span>
                Back to Projects
            </span>
        </Link>

        {/* Hero Content */}

        <div className="mx-auto max-w-4xl text-center">

        {/* Category */}

        {project.category && (
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
            {project.category}
            </p>
        )}

        {/* Title */}

        <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {project.title.includes("(") ? (
            <>
                <span className="block">
                {project.title.split("(")[0].trim()}
                </span>

                <span className="mt-2 block text-3xl font-normal text-neutral-500 md:text-4xl lg:text-5xl">
                ({project.title.split("(")[1]}
                </span>
            </>
            ) : (
            project.title
            )}
        </h1>

        {/* Short Description */}

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-500 md:text-xl">
            {project.shortDescription}
        </p>

        {/* Technologies */}

        {project.technologies &&
            project.technologies.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-2">

                {project.technologies.map((technology) => (
                <span
                    key={technology}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-neutral-600"
                >
                    {technology}
                </span>
                ))}

            </div>
            )}

        </div>
    </div>
    </section>


    {/* =========================================================
        PROJECT PREVIEW
    ========================================================= */}

    <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-neutral-900">

            {project.thumbnail ? (
                <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                priority
                className="object-cover"
                />
            ) : (
                <div className="flex h-full items-center justify-center">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-600">
                    Project Preview
                </span>
                </div>
            )}

            </div>

        </div>
    </section>


    {/* =========================================================
        PROJECT CONTENT
    ========================================================= */}

    <section className="px-6 pb-24 md:px-12 lg:px-20">
    <div className="mx-auto max-w-5xl">


        {/* =====================================================
            PROJECT OVERVIEW
        ===================================================== */}

        {project.description &&
        project.description.length > 0 && (
            <div className="border-t border-black/10 py-16">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                01
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                Project Overview
            </h2>

            <div className="prose prose-neutral mt-6 max-w-3xl text-base leading-8">
                <PortableText value={project.description} />
            </div>

            </div>
        )}


        {/* =====================================================
            THE CHALLENGE
        ===================================================== */}

        {project.challenge &&
        project.challenge.length > 0 && (
            <div className="border-t border-black/10 py-16">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                02
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                The Challenge
            </h2>

            <div className="prose prose-neutral mt-6 max-w-3xl text-base leading-8">
                <PortableText value={project.challenge} />
            </div>

            </div>
        )}


        {/* =====================================================
            THE SOLUTION
        ===================================================== */}

        {project.solution &&
        project.solution.length > 0 && (
            <div className="border-t border-black/10 py-16">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                03
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                The Solution
            </h2>

            <div className="prose prose-neutral mt-6 max-w-3xl text-base leading-8">
                <PortableText value={project.solution} />
            </div>

            </div>
        )}


        {/* =====================================================
            KEY FEATURES
        ===================================================== */}

        {project.features &&
        project.features.length > 0 && (
            <div className="border-t border-black/10 py-16">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                04
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                Key Features
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

                {project.features.map((feature, index) => (
                <div
                    key={`${feature}-${index}`}
                    className="rounded-2xl border border-black/10 bg-white p-6"
                >

                    <div className="flex items-start gap-4">

                    <span className="text-sm font-medium text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-base text-neutral-700">
                        {feature}
                    </p>

                    </div>

                </div>
                ))}

            </div>

            </div>
        )}


        {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}

        {project.technologies &&
        project.technologies.length > 0 && (
            <div className="border-t border-black/10 py-16">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                05
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                Technologies
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">

                {project.technologies.map((technology) => (
                <span
                    key={technology}
                    className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-neutral-600"
                >
                    {technology}
                </span>
                ))}

            </div>

            </div>
        )}


        {/* =====================================================
            MY ROLE
        ===================================================== */}

        {project.role &&
        project.role.length > 0 && (
            <div className="border-t border-black/10 py-16">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                06
            </p>

            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                My Role
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

                {project.role.map((item, index) => (
                <div
                    key={`${item}-${index}`}
                    className="flex items-center gap-4 border-b border-black/10 py-4"
                >

                    <span className="text-sm text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base text-neutral-700">
                    {item}
                    </span>

                </div>
                ))}

            </div>

            </div>
        )}


        {/* =====================================================
            PROJECT INFORMATION
        ===================================================== */}

        <div className="border-t border-black/10 py-16">

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            07
        </p>

        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Project Information
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

            {/* Year */}

            {project.year && (
            <div className="rounded-2xl border border-black/10 bg-white p-6">

                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Year
                </p>

                <p className="mt-3 text-lg font-medium">
                {project.year}
                </p>

            </div>
            )}

            {/* Category */}

            {project.category && (
            <div className="rounded-2xl border border-black/10 bg-white p-6">

                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Category
                </p>

                <p className="mt-3 text-lg font-medium">
                {project.category}
                </p>

            </div>
            )}

        </div>


        {/* Project Links */}

        {(project.projectUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-4">

            {project.projectUrl && (
                <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                Live Project ↗
                </a>
            )}

            {project.githubUrl && (
                <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:border-black/30"
                >
                GitHub ↗
                </a>
            )}

            </div>
        )}

        </div>

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
                Have a project, idea, or opportunity in mind? Feel free to reach
                out and let's discuss how technology can help solve your needs.
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
                projects where technology can create real value for the business.
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