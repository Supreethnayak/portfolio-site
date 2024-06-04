import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiMongoose, SiMui, SiTypescript } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

export default function Skills() {
  const commonStyle = {
    color: "#0099fe",
  };
  return (
    <>
      {/* Skills */}
      <div id="Skills" class="flex flex-col items-center p-8">
        <div class="mb-10">
          <h2 class="text-3xl font-bold" style={commonStyle}>
            SKILLS
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="w-full p-4 flex flex-col">
            <h3 class="text-3xl font-bold mb-2">Frontend Technologies</h3>
            <div class="grid" style={{ gridTemplateColumns: "20% 80%" }}>
              <div class="flex flex-col gap-2 p-2">
                <FaHtml5 className="text-orange-500 text-4xl" />
                <FaCss3Alt className="text-blue-500 text-4xl" />
                <IoLogoJavascript className="text-yellow-500 text-4xl" />
                <SiTypescript className="text-blue-500 text-4xl" />
                <RiReactjsFill className="text-blue-500 text-4xl" />
                <RiTailwindCssFill className="text-blue-500 text-4xl" />
                <SiMui className="text-blue-500 text-4xl" />
                <MdAttachEmail className="text-orange-500 text-4xl" />
              </div>
              <div class="flex flex-col gap-5 p-3">
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>TypeScript</div>
                <div>ReactJS</div>
                <div>Tailwind CSS</div>
                <div>Material UI</div>
                <div>EmailJS</div>
              </div>
            </div>
          </div>

          <div class="w-full p-4 flex flex-col">
            <h3 class="text-3xl font-bold mb-2">Backend and Database</h3>
            <div class="grid" style={{ gridTemplateColumns: "20% 80%" }}>
              <div class="flex flex-col gap-2 p-2">
                <IoLogoNodejs className="text-green-500 text-4xl" />
                <SiExpress className=" text-4xl" />
                <VscJson className="text-4xl" />
                <SiMongodb className="text-green-500 text-4xl" />
                <SiMongoose className="text-4xl" />
              </div>
              <div class="flex flex-col gap-5 p-3">
                <div>NodeJS</div>
                <div>ExpressJS</div>
                <div>tsoa</div>
                <div>MongoDB</div>
                <div>Mongoose</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
