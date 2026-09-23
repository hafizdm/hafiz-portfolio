"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black text-white shadow-lg"
          : "bg-transparent text-[#111111]"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 md:px-10">

        {/* Logo */}
        <a
          href="/#home"
          className="relative flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={scrolled ? "/logo-white.png" : "/logo-black.png"}
            alt="Hafizd Muhammad"
            width={120}
            height={40}
            className="h-auto w-[150px]"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div
            className={`hidden items-center gap-8 text-base font-medium md:flex ${
              scrolled ? "text-white" : "text-black"
            }`}
          >

          <a
            href="/#home"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            Home
          </a>

          <a
            href="/#about"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            AboutMe
          </a>

          <a
            href="/#services"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            Services
          </a>

          <a
            href="/projects"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            Projects
          </a>

          <a
            href="/#contact"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >

          <span
            className={`h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-black"
            } ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-black"
            } ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 transition-all duration-300 ${
              scrolled ? "bg-white" : "bg-black"
            } ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />

        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            className={`absolute left-0 right-0 top-full z-50 border-t px-6 py-8 shadow-xl md:hidden ${
              scrolled
                ? "border-gray-800 bg-black text-white"
                : "border-gray-200 bg-white text-black"
            }`}
          >

            <div className="flex flex-col gap-6 text-sm font-medium">

              <a
                href="/#home"
                onClick={() => setMenuOpen(false)}
                className="transition-opacity hover:opacity-60"
              >
                Home
              </a>

              <a
                href="/#about"
                onClick={() => setMenuOpen(false)}
                className="transition-opacity hover:opacity-60"
              >
                AboutMe
              </a>

              <a
                href="/#services"
                onClick={() => setMenuOpen(false)}
                className="transition-opacity hover:opacity-60"
              >
                Services
              </a>

              <a
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className="transition-opacity hover:opacity-60"
              >
                Projects
              </a>

              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="transition-opacity hover:opacity-60"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}