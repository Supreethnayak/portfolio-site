import { Link } from "preact-router";
import { useState } from "preact/hooks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // hamburger in header for mobile sceen
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header className="w-full z-10 flex items-center justify-between px-4 md:p-4 shadow-md">
        <div className="flex items-center">
          {/* logo */}
          <div className="w-40">
            <Link href="/">
              <img src="assets\images\logo.png" alt="logo" />
            </Link>
          </div>
        </div>

        {/* Show the menu options on non-mobile view */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-400">
              HOME
            </Link>
            <Link href="/skills" className="hover:text-blue-400">
              SKILLS
            </Link>
            <Link href="/experience" className="hover:text-blue-400">
              EXPERIENCE
            </Link>
            <Link href="/projects" className="hover:text-blue-400">
              PROJECTS
            </Link>
            <Link href="/contact" className="hover:text-blue-400">
              CONTACT
            </Link>
          </nav>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center ml-4">
          <button
            id="toggleMenu"
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <nav
          className={`md:hidden space-y-4 absolute top-16 left-0 w-full bg-white shadow-md z-50 ${
            isMenuOpen ? "" : "hidden"
          } mt-4 pl-4`}
          id="mainMenu"
        >
          <Link
            href="/"
            className="block p-4 hover:text-blue-400"
            onClick={closeMenu}
          >
            HOME
          </Link>
          <Link
            href="/skills"
            className="block p-4 hover:text-blue-400"
            onClick={closeMenu}
          >
            SKILLS
          </Link>
          <Link
            href="/experience"
            className="block p-4 hover:text-blue-400"
            onClick={closeMenu}
          >
            EXPERIENCE
          </Link>
          <Link
            href="/projects"
            className="block p-4 hover:text-blue-400"
            onClick={closeMenu}
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className="block p-4 hover:text-blue-400"
            onClick={closeMenu}
          >
            CONTACT
          </Link>
        </nav>
      </header>
    </>
  );
}
