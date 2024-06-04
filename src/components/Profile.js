export default function Profile() {
  const commonStyle = {
    color: "#0099fe",
  };
  return (
    <>
      <div
        id="profile"
        class="flex justify-center md:p-10 mb-4 container m-auto items-center"
      >
        <div class="flex flex-col items-center">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 p-4">
              <img
                src="assets\images\profile.png"
                alt="Profile Image"
                class="w-[400px] h-auto hover:drop-shadow-lg transition-all rounded-md"
              />
            </div>
            <div class="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 class="font-bold mb-2 text-[40px]" style={commonStyle}>
                SUPREETH NAYAK
              </h3>
              <p>
                2+ years of professional experience as a Frontend developer.
              </p>
              <a
                class="flex justify-center gap-2 w-1/2 p-3 mt-3 text-white text-center bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none cursor-pointer hover:drop-shadow-lg transition-all"
                href="myResume.pdf"
                target={`_blank`}
                download="Supreeth Nayak's Resume.pdf"
              >
                Download Resume
                <img
                  src="assets\images\downloadIcon.png"
                  alt="download icon"
                  class="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
