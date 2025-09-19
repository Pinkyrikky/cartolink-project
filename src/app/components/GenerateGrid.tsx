"use client";
import { BsImage, BsPersonArmsUp } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { RiEditFill } from "react-icons/ri";
import { TbPencilCog } from "react-icons/tb";

interface Feature {
  icon: string |  React.ReactNode;
  name: string;
  tag: string;
  desc: string;
  action: string;
  colour: string; 
}

const features: Feature[] = [
  {
    icon: <BsImage />,
    name: "Image",
    tag: "New",
    desc: "Generate images with custom styles in flux and ideogram.",
    action: "Open",
    colour: "bg-gradient-to-t from-gray-300 to-gray-500",
  },
  {
    icon: <FaVideo /> ,
    name: "Video",
    tag: "",
    desc: "Generate videos with halium, pica, Runway, Luma and More.",
    action: "Open",
    colour: "bg-gradient-to-t from-yellow-300 to-yellow-500",
  },
  {
    icon: <RiEditFill />,
    name: "Realtime",
    tag: "",
    desc: "Realtime AI rendering on a canvas. Instant Feedback loops.",
    action: "Open",
    colour: "bg-gradient-to-t from-blue-300 to-blue-500",
  },
  {
    icon: <TbPencilCog />,
    name: "Enhancer",
    tag: "New",
    desc: "Upscale and enhance images and videos up to 22k.",
    action: "Open",
    colour: "bg-gradient-to-t from-gray-500 to-black",
  },
  {
    icon: <GrAppleAppStore />,
    name: "Edit",
    tag: "New",
    desc: "Add objects, change styles, or expand photos and generations.",
    action: "Open",
    colour: "bg-gradient-to-t from-purple-300 to-purple-500",
  },
   {
    icon: <PiMicrophoneStageFill />,
    name: "Video Lipsync",
    tag: "New",
    desc: "Lip sync any video to any audio.",
    action: "Open",
    colour: "bg-gradient-to-t from-green-300 to-green-500",
  },
   {
    icon: <BsPersonArmsUp />,
    name: "Motion Transfer",
    tag: "New",
    desc: "Transfer motion to images and animate characters",
    action: "Open",
    colour: "bg-black",
  },
  {
    icon: "",
    name: "Train",
    tag: "",
    desc: "Teach model to replicate style, product or characters",
    action: "Open",
    colour: "bg-gradient-to-t from-teal-400 to-emerald-500",
  },
];

export default function GenerateGrid() {
  return (
    <section className="mt-10 py-16">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-6">Generate</h2>
        <p className="cursor-pointer text-blue-600 dark:text-blue-400 flex gap-2 items-center">
          <IoIosArrowDown />
          <span>See all</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="rounded-xl flex gap-2 items-center justify-between"
          >
            <div className="flex gap-2 items-center">
                <div
              className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${f.colour}`}
            >              
                <span className="text-white font-bold">
                  {f.icon}
                </span>
            </div>

            <div className="">
              <div className="flex items-center gap-2">
                <span className="font-medium">{f.name}</span>
                {f.tag && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                    {f.tag}
                  </span>
                )}
              </div>
              <p className="text-xs mt-1 text-gray-600 dark:text-gray-400 text-wrap">
                {f.desc}
              </p>
            </div>
            </div>

            <button className="mt-3 text-sm transition-all duration-900 bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-xs">
              {f.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
