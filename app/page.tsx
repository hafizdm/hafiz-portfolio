"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#111111]">

            {/* ================= HERO ================= */}
        <section
          id="home"
          className="relative overflow-hidden bg-[#f5f5f3] text-[#111111]"
        >
          <div className="relative min-h-screen">

            {/* ================= LEFT CONTENT ================= */}
            <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">

              <div className="flex items-center px-6 pt-32 pb-16 md:px-10 lg:pt-36 lg:pb-20">

                <div className="w-full max-w-2xl">

                  {/* HELLO */}
                  <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                    Hello, I'm
                  </p>

                  {/* NAME */}
                  <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl">
                    Hafiz
                    <br />
                    Muhammad
                  </h1>

                  {/* ROLE */}
                  <div className="mt-8">
                    <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                      IT Specialist
                      <br />
                      <span className="text-gray-400">
                        &amp; System Analyst
                      </span>
                    </h2>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
                    I build systems, automate business processes, and solve
                    technical problems through technology.
                  </p>

                  {/* BUTTONS */}
                  <div className="mt-8 flex flex-wrap gap-4">

                    {/* VIEW PROJECTS */}
                    <a
                      href="/projects"
                      className="group inline-flex items-center gap-4 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg"
                    >
                      <span>View My Projects</span>

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

                    {/* CONTACT */}
                    <a
                      href="#contact"
                      className="inline-flex items-center rounded-full border border-black px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-lg"
                    >
                      Contact Me
                    </a>

                  </div>

                  {/* SOCIAL ICONS */}
                  <div className="mt-8 flex items-center gap-5">

                    {/* LINKEDIN */}
                      <a
                        href="https://www.linkedin.com/in/hafizd-muhammad-66343b175/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </a>

                    {/* GITHUB */}
                    <a
                      href="https://github.com/hafizdm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-.432-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176.105 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.215 0 1.6-.015 2.89-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>

                    {/* EMAIL */}
                    <a
                      href="mailto:hafizdmuhammad1996@gmail.com"
                      aria-label="Email"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
                    >
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
                    </a>

                  </div>

                </div>
              </div>
            </div>

            {/* ================= RIGHT PHOTO ================= */}
            <div className="absolute right-0 top-24 hidden h-[calc(100%-6rem)] w-[45%] lg:block">

              <div className="relative h-full w-full overflow-hidden bg-[#101923]">

                <Image
                  src="/hafiz-profile.png"
                  alt="Hafizd Muhammad - IT Support Specialist and System Analyst"
                  fill
                  priority
                  className="object-cover object-[70%_center]"
                />

              </div>

            </div>

          </div>
        </section>

        {/* ================= ABOUT ME ================= */}
        <section
          id="about"
          className="bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

            <div className="grid gap-14 md:grid-cols-2 md:items-center">

              {/* LEFT - PHOTO */}
              <div className="flex justify-center md:justify-start">

                <div className="relative h-[460px] w-full max-w-[420px] overflow-hidden rounded-[0.5rem] bg-gray-200 sm:h-[540px]">

                  <Image
                    src="/hafiz-photo.png"
                    alt="Hafiz - IT Support Specialist and System Analyst"
                    fill
                    className="object-cover"
                  />

                </div>

              </div>


              {/* RIGHT - CONTENT */}
              <div className="max-w-2xl">

                <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                  About Me
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Turning technology into practical solutions.
                </h2>

                <div className="mt-8 space-y-5 text-base leading-8 text-gray-600 md:text-lg">

                  <p>
                    I'm Hafiz, an IT professional with several years of
                    experience supporting business operations through
                    technology. My background started in IT Support, where
                    I work with hardware, software, users, networks, and
                    day-to-day technical issues.
                  </p>

                  <p>
                    Over time, my role has expanded beyond technical support.
                    I have been involved in system analysis, business process
                    improvement, application development, and automation.
                    I enjoy understanding how a business process works,
                    identifying what can be improved, and turning those
                    requirements into practical digital solutions.
                  </p>

                  <p>
                    I have worked with technologies such as Microsoft 365,
                    SharePoint, Power Apps, Power Automate, PHP, Laravel,
                    databases, AWS, and network infrastructure. My goal is
                    to combine technical knowledge with business understanding
                    to create systems that are useful, reliable, and easier
                    for people to work with.
                  </p>

                </div>


                {/* CV BUTTON */}
                <div className="mt-10">

                  <a
                    href="/Hafiz-Muhammad-Alison-CV.pdf"
                    download
                    className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg"
                  >

                    <span>
                      Download My CV
                    </span>

                    {/* DOWNLOAD ICON */}
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
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12l4.5 4.5m0 0 4.5-4.5M12 16.5V3"
                      />
                    </svg>

                  </a>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="bg-[#f5f5f3]"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

            {/* SECTION HEADER */}
            <div className="max-w-3xl">

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                What I Do
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Services
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
                I provide practical technology solutions to support business operations, improve internal processes, and solve day-to-day technical challenges. From IT support and system analysis to process automation and application development, I focus on creating reliable solutions that make work simpler and more efficient.
              </p>

            </div>


            {/* SERVICES GRID */}
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


              {/* SERVICE 01 */}
              <div className="group min-h-[300px] rounded-3xl bg-[#1a1a1a] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">

                  {/* IT SUPPORT ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.5a2.25 2.25 0 0 0 2.25 2.25h1.5A2.25 2.25 0 0 0 15 18.75v-1.5M6.75 15h10.5A2.25 2.25 0 0 0 19.5 12.75v-6A2.25 2.25 0 0 0 17.25 4.5H6.75A2.25 2.25 0 0 0 4.5 6.75v6A2.25 2.25 0 0 0 6.75 15Z"
                    />
                  </svg>

                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  IT Support
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Hardware and software troubleshooting, user support,
                  system maintenance, and technical issue resolution
                  to keep daily business operations running smoothly.
                </p>

              </div>


              {/* SERVICE 02 */}
              <div className="group min-h-[300px] rounded-3xl bg-[#1a1a1a] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">

                  {/* SYSTEM ANALYSIS ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75h16.5v16.5H3.75V3.75ZM7.5 15l3-3 2.25 2.25L16.5 10.5"
                    />
                  </svg>

                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  System Analysis
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Analyze existing business processes, identify operational
                  problems, and translate business requirements into practical
                  and effective system solutions.
                </p>

              </div>


              {/* SERVICE 03 */}
              <div className="group min-h-[300px] rounded-3xl bg-[#1a1a1a] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">

                  {/* AUTOMATION ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 3H12a9 9 0 1 0 9 9h-1.5M13.5 3 16 5.5M13.5 3 11 5.5"
                    />
                  </svg>

                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  Process Automation
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Design and automate repetitive business processes using
                  Power Apps, Power Automate, SharePoint, and digital
                  workflows to reduce manual work and improve efficiency.
                </p>

              </div>


              {/* SERVICE 04 */}
              <div className="group min-h-[300px] rounded-3xl bg-[#1a1a1a] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">

                  {/* MICROSOFT 365 ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15M4.5 12h15"
                    />
                  </svg>

                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  Microsoft 365
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Support Microsoft 365 environments, SharePoint solutions,
                  document management, and collaboration workflows for
                  more organized and productive teams.
                </p>

              </div>


              {/* SERVICE 05 */}
              <div className="group min-h-[300px] rounded-3xl bg-[#1a1a1a] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">

                  {/* NETWORK ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9.75 12 6l3.75 3.75M12 6v8.25M5.25 18.75h13.5M7.5 15.75h9"
                    />
                  </svg>

                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  Network & Infrastructure
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Provide basic network troubleshooting, LAN and internet
                  connectivity support, server maintenance, and infrastructure
                  assistance for business environments.
                </p>

              </div>


              {/* SERVICE 06 */}
              <div className="group min-h-[300px] rounded-3xl bg-[#1a1a1a] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">

                  {/* DEVELOPMENT ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 8.25-3.75 3.75 3.75 3.75M15.75 8.25l3.75 3.75-3.75 3.75M13.5 5.25l-3 13.5"
                    />
                  </svg>

                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                  Application Development
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Develop internal business applications and tools using
                  PHP, Laravel, databases, and web technologies to support
                  specific operational and business requirements.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">

            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.8fr] lg:items-center">

              {/* ================= LEFT CONTENT ================= */}
              <div className="max-w-md">

                <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                  Featured Project
                </p>

                <h2 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                  My Projects
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
                  A selection of systems, applications, and automation solutions
                  I have developed to solve real business problems and improve
                  operational processes.
                </p>

                {/* VIEW ALL PROJECT BUTTON */}
                  <a
                    href="/projects"
                    className="group mt-8 inline-flex items-center gap-4 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg"
                  >
                    <span>
                      View All Projects
                    </span>

                    {/* ARROW */}
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


              {/* ================= PROJECT CARDS ================= */}
              <div className="relative min-w-0">

                {/* HORIZONTAL SCROLL */}
                <div className="flex gap-5 overflow-x-auto pb-6 pr-6 scrollbar-hide">

                  {/* PROJECT 01 */}
                  <div className="group min-w-[280px] max-w-[280px] overflow-hidden rounded-3xl bg-[#1a1a1a] text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:min-w-[310px] sm:max-w-[310px]">

                    {/* PROJECT IMAGE */}
                    <div className="relative h-[220px] overflow-hidden bg-gray-800">

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="text-center">
                          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                            Project 01
                          </p>

                          <p className="mt-3 text-3xl font-bold">
                            RIISA
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* PROJECT CONTENT */}
                    <div className="p-6">

                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Web Application
                      </p>

                      <h3 className="mt-3 text-xl font-semibold">
                        RIISA
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        Internal business application developed to support
                        operational processes and company requirements.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          PHP
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          Laravel
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          MySQL
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* PROJECT 02 */}
                  <div className="group min-w-[280px] max-w-[280px] overflow-hidden rounded-3xl bg-[#1a1a1a] text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:min-w-[310px] sm:max-w-[310px]">

                    <div className="relative h-[220px] overflow-hidden bg-gray-800">

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="text-center">
                          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                            Project 02
                          </p>

                          <p className="mt-3 text-3xl font-bold">
                            TRAVEL
                          </p>
                        </div>

                      </div>

                    </div>

                    <div className="p-6">

                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Process Automation
                      </p>

                      <h3 className="mt-3 text-xl font-semibold">
                        Travel Automation
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        Automated travel request, approval, vendor communication,
                        and passenger document workflows.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          Power Apps
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          Power Automate
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          SharePoint
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* PROJECT 03 */}
                  <div className="group min-w-[280px] max-w-[280px] overflow-hidden rounded-3xl bg-[#1a1a1a] text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:min-w-[310px] sm:max-w-[310px]">

                    <div className="relative h-[220px] overflow-hidden bg-gray-800">

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="text-center">
                          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                            Project 03
                          </p>

                          <p className="mt-3 text-3xl font-bold">
                            SPD
                          </p>
                        </div>

                      </div>

                    </div>

                    <div className="p-6">

                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Business Application
                      </p>

                      <h3 className="mt-3 text-xl font-semibold">
                        SPD & Timesheet
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        Digital workflow for SPD and timesheet processes,
                        including approval, finance, and payment stages.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          Power Apps
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          SharePoint
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          Workflow
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* PROJECT 04 */}
                  <div className="group min-w-[280px] max-w-[280px] overflow-hidden rounded-3xl bg-[#1a1a1a] text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:min-w-[310px] sm:max-w-[310px]">

                    <div className="relative h-[220px] overflow-hidden bg-gray-800">

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="text-center">
                          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                            Project 04
                          </p>

                          <p className="mt-3 text-3xl font-bold">
                            ROTATION
                          </p>
                        </div>

                      </div>

                    </div>

                    <div className="p-6">

                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Workforce System
                      </p>

                      <h3 className="mt-3 text-xl font-semibold">
                        Rotation System
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        System for managing employee site mobilization,
                        project assignments, and rotation schedules.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          Power Apps
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          SharePoint
                        </span>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                          Automation
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

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