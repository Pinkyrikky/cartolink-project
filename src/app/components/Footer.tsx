"use client";
import Image from "next/image";
import { IoIosPaper } from "react-icons/io";
import { IoCard } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <section className="flex justify-between pl-4 pr-2">
        <p>Gallery</p>
        <div className="flex gap-2 ">
          <button
            className="text-sm flex items-center gap-1 p-2 rounded-full text-xs transition-all duration-900
        bg-gray-100 dark:bg-gray-800 text-black dark:text-white "
          >
            <IoIosPaper />
            Legal
          </button>
          <button
            className="text-sm flex items-center gap-1 p-2 rounded-full text-xs transition-all duration-900
        bg-gray-100 dark:bg-gray-800 text-black dark:text-white "
          >
            <IoCard />
            Pricing
          </button>
        </div>
      </section>
      <section className="p-4 bg-gray-800 mt-2 text-3xl text-white flex justify-between items-center">
       <div className="flex gap-3 items-center ">
         <div className="bg-black w-14 h-14 flex items-center justify-center rounded-lg">
            <Image
                           src="/krea.png"
                           alt='logo'
                           width={30}
                           height={30}
                           className="object-cover w-fu"
                         />
        </div>
                         <p>Krea AI</p>
       </div>
       <div className="flex gap-3 items-end items-center">
        <p>Curated by</p>
        <Image
                           src="/krea.png"
                           alt='logo'
                           width={30}
                           height={30}
                           className="object-cover w-fu"
                         />
                         <p className="text-5xl">Mobbin</p>
       </div>
      </section>
    </div>
  );
}

export default Footer;
