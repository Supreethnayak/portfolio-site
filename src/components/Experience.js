export default function Experience() {
  const commonStyle = {
    color: "#0099fe",
  };
  return (
    <>
      {/* Experience */}
      <div id="experience" class="flex flex-col  items-center bg-gray-200 p-8">
        <div class="mb-10">
          <h2 class="text-3xl font-bold" style={commonStyle}>
            EXPERIENCE
          </h2>
        </div>

        <div class="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h3 class="text-3xl font-bold mb-2">
            Software Developer @Updapt CSR.
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
      </div>
    </>
  );
}
