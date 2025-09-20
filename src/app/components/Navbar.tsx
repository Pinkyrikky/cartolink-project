"use client";
import { FaBell, FaFolder, FaHome, FaVideo } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { GrAppleAppStore } from "react-icons/gr";
import { IoIosArrowDown, IoIosHammer } from "react-icons/io";
import { IoImage, IoPencilOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close
import Image from "next/image";

type NavIconProps = {
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="transition-colors duration-900 flex justify-between items-center py-4 px-6 sticky top-0 bg-white/90 dark:bg-gray-900/70 backdrop-blur-md z-50">
       
      {/* Left Section */}
      <div className="flex flex-shrink-0 gap-5 items-center">
        <Image
          src="/krea.png"
          alt="logo"
          width={20}
          height={20}
          className="object-cover"
        />
        <div className="hidden sm:flex items-center gap-2">
          <p className="bg-gradient-to-t from-purple-300 to-purple-500 w-5 h-5 rounded-full" />
          <p className="text-xs font-bold flex items-center gap-2">
            benevolentintimblebat <IoIosArrowDown />
          </p>
        </div>
      </div>

      {/* Hamburger Button (Mobile only) */}
      <button
        className="sm:hidden p-2 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

       {/* <div
          className={isOpen ? "fixed inset-0 z-50 flex items-center justify-center bg-black/50" : "hidden"}
        ></div> */}
      <nav
        className={`${
          isOpen
            ? "flex flex-col absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-2 shadow-md sm:static sm:flex-row sm:bg-transparent sm:shadow-none transition-all duration-900 sm:p-0"
            : "hidden sm:flex bg-gray-100 dark:bg-gray-800 shadow-md py-2 px-4 "
        } lg:justify-center items-center gap- rounded-lg transition-all  duration-900`}
      >

        {navItems.map((item, i) => (
          <NavIcon
            key={item.id}
            icon={item.icon}
            active={activeIndex === i}
            onClick={() => {
              setActiveIndex(i);
              setIsOpen(false); // close menu after selecting
            }}
          />
        ))}

         <nav className=" flex items-center gap-2">
        <button className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <IoImage />
          Gallery
        </button>
        <button className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <BiSupport />
          Support
        </button>
        <button className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <FaBell />
        </button>
        <DarkModeToggle />
      </nav>
      </nav>

      {/* Right Section */}
      <nav className="hidden sm:flex items-center gap-2">
        <button className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <IoImage />
          Gallery
        </button>
        <button className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <BiSupport />
          Support
        </button>
        <button className="text-sm flex items-center gap-1 p-2 rounded-lg text-xs transition-all duration-900 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          <FaBell />
        </button>
        <DarkModeToggle />
        <p className="bg-gradient-to-t from-purple-300 to-purple-500 w-5 h-5 rounded-full" />
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
