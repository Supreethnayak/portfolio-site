import { Link } from "preact-router";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer class="border-t border-gray-900/10 bg-white dark:bg-gray-900 mt-20">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-2">
            <div class="flex flex-col items-center">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Navigation
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <Link href="/" className=" hover:underline">
                    Home
                  </Link>
                </li>
                <li class="mb-4">
                  <Link href="/skills" className="hover:underline">
                    Skills
                  </Link>
                </li>
                <li class="mb-4">
                  <Link href="/experience" className="hover:underline">
                    Experience
                  </Link>
                </li>
                <li class="mb-4">
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li class="mb-4">
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div class="flex flex-col items-center">
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Social Media
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://www.linkedin.com/in/supreeth-nayak/"
                    target={`_blank`}
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://github.com/Supreethnayak"
                    target={`_blank`}
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://www.instagram.com/"
                    target={`_blank`}
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="https://x.com/"
                    target={`_blank`}
                    className="hover:underline"
                  >
                    X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
