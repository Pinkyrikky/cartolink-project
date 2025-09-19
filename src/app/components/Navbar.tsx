"use client";
import { FaBell, FaFolder, FaHome, FaVideo } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { GrAppleAppStore } from "react-icons/gr";
import { IoIosArrowDown, IoIosHammer } from "react-icons/io";
import { IoImage, IoPencilOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";

type NavIconProps = {
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const navItems = [
    { id: "home", icon: <FaHome /> },
    { id: "image", icon: <BsCardImage /> },
    { id: "video", icon: <FaVideo /> },
    { id: "pen", icon: <IoPencilOutline /> },
    { id: "hammer", icon: <IoIosHammer /> },
    { id: "applestore", icon: <GrAppleAppStore /> },
    { id: "folder", icon: <FaFolder /> },
  ];

  return (
    <header className="lg:flex transition-colors duration-900 justify-between items-center py-4 px-6 sticky top-0 bg-white/90 dark:bg-gray-900/70 backdrop-blur-md z-50">
      <div className="flex flex-shrink-0 gap-5 ">
        <Image
        src="/krea.png"
        alt="logo"
        width={20}
        height={20}
        className="object-cover w-fu"
      />
    <div className="flex items-center gap-2">
        <p className="bg-gradient-to-t from-purple-300 to-purple-500 w-5 h-5 rounded-full"/>
          <p className="text-xs font-bold flex items-center gap-2">
        benevolentintimblebat <IoIosArrowDown />
      </p>
    </div>
      </div>

      <nav className="flex justify-center items-center gap-2 bg-gray-100 dark:bg-gray-800 shadow-md py-2 px-4 rounded-lg w-fit mx-auto transition-all duration-900">
        {navItems.map((item, i) => (
          <NavIcon
            key={item.id}
            icon={item.icon}
            active={activeIndex === i}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </nav>

      <nav className="flex items-center gap-2">
        <button
          className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900
bg-gray-100 dark:bg-gray-800 text-black dark:text-white outline-none "
        >
          <IoImage />
          Gallery
        </button>
        <button
          className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900
bg-gray-100 dark:bg-gray-800 text-black dark:text-white outline-none"
        >
          <BiSupport />
          Support
        </button>
        <button
          className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900
bg-gray-100 dark:bg-gray-800 text-black dark:text-white outline-none"
        >
          <FaBell />
        </button>
        <DarkModeToggle />
        <p className="bg-gradient-to-t from-purple-300 to-purple-500 w-5 h-5 rounded-full"/>
      </nav>

    </header>
  );
}

function NavIcon({ icon, active, onClick }: NavIconProps) {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-lg text-sm transition-all duration-900 ${
        active
          ? "bg-white dark:bg-gray-900 text-black dark:text-white"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
    </button>
  );
}
