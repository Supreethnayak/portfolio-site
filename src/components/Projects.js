export default function Projects() {
  const commonStyle = {
    color: "#0099fe",
  };
  return (
    <>
      <div
        id="projects"
        class="flex justify-center md:p-8 mb-4 container m-auto items-center"
      >
        <div class="flex flex-col items-center">
          <div class="flex flex-col items-center mb-10">
            <h2 class="text-3xl font-bold" style={commonStyle}>
              PROJECTS
            </h2>
          </div>
          <div class="flex flex-wrap">
            {/* Project 1 */}
            <div class="flex flex-col items-center w-full md:w-1/2 p-4">
              <img
                src="assets\images\project1.jpg"
                alt="Project Image 1"
                class="w-4/5 h-auto hover:drop-shadow-lg transition-all rounded-md"
              />
            </div>
            <div class="w-full md:w-1/2 p-4">
              <h3 class="text-xl font-semibold mb-2">Full Stack Project.</h3>
              <p class="w-[90%]">
                • Developed a Giphy clone using React, creating dynamic and
                responsive UI components.
                <br />
                • Integrated Giphy API to fetch trending GIFs and search for
                specific and related GIFs.
                <br />
                • Implemented features such as category-wise GIFs and sharing
                option.
                <br />• Technologies : React, Tailwind CSS, React icons package.
              </p>
            </div>

            {/* Project 2 */}
            <div class="flex flex-col items-center w-full md:w-1/2 p-4">
              <h3 class="text-xl font-semibold mb-2">
                Crypto Currency Tracker.
              </h3>
              <p class="w-[90%]">
                • Developed a Giphy clone using React, creating dynamic and
                responsive UI components.
                <br />
                • Integrated Giphy API to fetch trending GIFs and search for
                specific and related GIFs.
                <br />
                • Implemented features such as category-wise GIFs and sharing
                option.
                <br />• Technologies : React, Tailwind CSS, React icons package.
              </p>
            </div>
            <div class="w-full md:w-1/2 p-4">
              <img
                src="assets\images\project1.jpg"
                alt="Project Image 2"
                class="w-4/5 h-auto hover:drop-shadow-lg transition-all rounded-md"
              />
            </div>

            {/* Project 3 */}
            <div class="flex flex-col items-center w-full md:w-1/2 p-4">
              <img
                src="assets\images\project3.jpg"
                alt="Project Image 3"
                class="w-4/5 h-auto hover:drop-shadow-lg transition-all rounded-md"
              />
            </div>
            <div class="w-full md:w-1/2 p-4">
              <h3 class="text-xl font-semibold mb-2">Giphy Clone.</h3>
              <p class="w-[90%]">
                • Developed a Giphy clone using React, creating dynamic and
                responsive UI components.
                <br />
                • Integrated Giphy API to fetch trending GIFs and search for
                specific and related GIFs.
                <br />
                • Implemented features such as category-wise GIFs and sharing
                option.
                <br />• Technologies : React, Tailwind CSS, React icons package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
