"use Client"
import Image from "next/image";


interface features {
  icon: string;
  name: string;
  tag: string;
  desc: string;
  action: string;
}
const features:features[] = [
  { icon:"/frame.png", name: "Image", tag: "New", desc: "Generate images with custom styles", action: "Open" },
  { icon:"", name: "Video", tag: "", desc: "Generate videos with AI", action: "Open" },
  { icon:"", name: "Edit", tag: "New", desc: "Add objects, change style, expand", action: "Open" },
  { icon:"", name: "Realtime", tag: "", desc: "Realtime AI rendering", action: "Open" },
  { icon:"", name: "Enhancer", tag: "New", desc: "Upscale images up to 2K", action: "Open" },
  { icon:"", name: "Train", tag: "", desc: "Teach model to replicate style", action: "Open" },
];

export default function GenerateGrid() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-6">Generate</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl flex flex-col justify-between"
          >
             <Image
                            src={f.icon}
                            alt={f.tag || `Slide ${i + 1}`}
                            width={30}
                            height={20}
                            className="object-cover rounded-sm"
                          />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{f.name}</span>
                {f.tag && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                    {f.tag}
                  </span>
                )}
              </div>
              <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">{f.desc}</p>
            </div>
            <button className="mt-3 text-sm text-blue-600 dark:text-blue-400">{f.action}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
