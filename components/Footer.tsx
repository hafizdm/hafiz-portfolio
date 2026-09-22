function Footer() {
  return (
    
    <footer className="bg-[#1a1a1a] text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">

            {/* TOP FOOTER */}
            <div className="flex flex-col gap-8 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">

              {/* COPYRIGHT */}
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Hafizd Muhammad. All Rights Reserved.
              </p>

              {/* FOOTER NAVIGATION */}
              <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
                <a
                  href="#home"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="transition-colors duration-300 hover:text-white"
                >
                  AboutMe
                </a>

                <a
                  href="#services"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Services
                </a>

                <a
                  href="#projects"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Contact
                </a>
              </nav>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-3">

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.215 0 1.6-.015 2.89-.015 3.285 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:hafizdmuhammad1996@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
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
    </footer>
  );
}

export default Footer;