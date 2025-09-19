"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules"; // ✅ Import Navigation
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface slide {
  img: string;
  title: string;
  subtitle: string;
  description: string;
  button: string;
  topleft: string;
}

const slides: slide[] = [
  {
    img: "/frame.png",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the new brand model and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures",
    button: "Try WAN 2.2",
    topleft: "NEW IMAGE MODEL",
  },
  {
    img: "/frame.png",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description: "We're making weights to our FLUX.1 Krea open-source. Download and run our model weights, read the technical report or generate with it in Krea Image",
    button: "Learn More",
    topleft: "OPEN SOURCE MODEL",
  },
  {
    img: "/frame.jpg",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description: "We’re making weights open-source. Download and run...",
    button: "Learn More",
    topleft: "NEW IMAGE MODEL",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full relative">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]} // ✅ Add navigation module
        slidesPerView={1.5}
        spaceBetween={20}
        onSlideChange={(s) => setActive(s.activeIndex)}
        onSwiper={setSwiper}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="mySwiper mt-8"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-2xl overflow-hidden relative">
              <Image
                src={s.img}
                alt={s.title || `Slide ${i + 1}`}
                width={800}
                height={400}
                className="object-cover w-full h-64 md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col text-white">
                <p className="text-xs">{s.topleft}</p>
                <h2 className="text-2xl md:text-8xl font-bold text-center my-16">
                  {s.title}
                </h2>
                <p className="text-3xl font-bold tracking-wide">{s.subtitle}</p>
                <div className="grid grid-cols-2 items-end">
                  <p className="text-sm mt-2">{s.description}</p>
                  <button className="mt-3 px-4 justify-self-end py-2 text-sm bg-white text-black rounded-full w-fit">
                    {s.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     <div className="grid grid-cols-3 justify-center  mt-4 items-center">
        <p></p>
         <div className="flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiper?.slideTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-900 ${
              i === active ? "bg-black dark:bg-blue-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

     <div className="justify-self-end gap-2 flex">
         <button className="custom-prev bg-gray-100 text-black p-1 rounded-full ">
        <IoIosArrowBack />
      </button>
      <button className="custom-next bg-gray-100 text-black p-1 rounded-full">
        <IoIosArrowForward />
      </button>
     </div>
     </div>
    </div>
  );
}
