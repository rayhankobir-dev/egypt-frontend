/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "swiper/css";
import React from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { API_URL } from "@/api";

interface HeroSliderProps {
  className?: string;
  slides: any[];
}

export default function HeroSlider({ className, slides }: HeroSliderProps) {
  return (
    <section className={className}>
      <div className="w-full relative group rounded-xl overflow-hidden">
        <div className="w-full flex justify-between items-center absolute top-[45%] z-10 px-3 opacity-0 group-hover:opacity-100 duration-300">
          <button className="hero-navigation-prev w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-gray-100 hover:bg-gray-200 border duration-300">
            <ArrowLeft size={18} />
          </button>
          <button className="hero-navigation-next w-8 h-8 flex justify-center items-center rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 border duration-300">
            <ArrowRight size={18} />
          </button>
        </div>
        <Swiper
          navigation={{
            nextEl: ".hero-navigation-next",
            prevEl: ".hero-navigation-prev",
          }}
          loop={true}
          draggable={true}
          spaceBetween={10}
          pagination={true}
          modules={[EffectFade, Navigation, Pagination]}
          className="hero-swiper"
        >
          {slides.map(({ _id, imageUrl, title, description }) => (
            <SwiperSlide
              key={_id}
              className="relative aspect-[9/7] md:aspect-[16/9] lg:aspect-[16/7] object-center rounded-xl overflow-hidden"
            >
              <Image
                className="w-full min-h-96"
                src={API_URL + imageUrl}
                width={1000}
                height={600}
                alt={title}
              />
              <div className="py-5 px-5 w-full absolute bottom-0 space-y-2 bg-gradient-to-b from-transparent to-black text-white">
                <h1 className="text-4xl font-medium">{title}</h1>
                <p className="font-light text-sm">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
