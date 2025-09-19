"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const slides = [
  {
    img: "/wan.jpg",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description: "Generate complex images with the new WAN 2.2 model...",
    button: "Try WAN 2.2",
  },
  {
    img: "/open.jpg",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description: "We’re making weights open-source. Download and run...",
    button: "Learn More",
  },
];

export default function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Track scroll position → set active index
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, offsetWidth } = el;
      const index = Math.round(scrollLeft / offsetWidth);
      setActive(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to slide when dot clicked
  const scrollToSlide = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.offsetWidth, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Slides */}
    


   
 
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === active ? "bg-blue-500 w-6" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
       <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div
        ref={containerRef}
        className="relative overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scroll-smooth"
        >
        {slides.map((s, i) => (
            <div
            key={i}
            className="snap-center shrink-0 w-full md:w-1/2 rounded-2xl overflow-hidden relative"
            >
              <SwiperSlide>  
            <Image
              src={s.img}
              alt={s.title}
              width={800}
              height={400}
              className="object-cover w-full h-64 md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
              <p className="text-sm uppercase tracking-wide">{s.subtitle}</p>
              <h2 className="text-2xl md:text-4xl font-bold">{s.title}</h2>
              <p className="text-sm mt-2">{s.description}</p>
              <button className="mt-3 px-4 py-2 text-sm bg-white text-black rounded-full w-fit">
                {s.button}
              </button>
            </div>
            </SwiperSlide>
          </div>
        ))}
      </div>
      
    </Swiper>
    </div>
  );
}
