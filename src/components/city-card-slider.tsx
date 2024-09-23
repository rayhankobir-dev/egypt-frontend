"use client";
import "swiper/css";
import "swiper/css/navigation";
import { City } from "@/types";
import { Navigation } from "swiper/modules";
import CityCard from "@/components/city-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CityCardSliderProps {
  className?: string;
  title: string;
  subTitle?: string;
  cities: City[];
}

function CityCardSlider({
  className,
  title,
  subTitle,
  cities,
}: CityCardSliderProps) {
  return (
    <section className={cn("", className)}>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl translate-y-5">{title}</h1>
        <p className="font-light translate-y-5">{subTitle}</p>
      </div>

      <div className="max-w-7xl mx-auto mb-10">
        <div className="w-full flex justify-end items-center gap-2 -translate-y-6 duration-300">
          <button className="city-navigation-prev w-8 h-8 rounded-full flex justify-center items-center cursor-pointer bg-gray-100 border">
            <ArrowLeft size={18} />
          </button>
          <button className="city-navigation-next w-8 h-8 flex justify-center items-center rounded-full cursor-pointer bg-gray-100 border">
            <ArrowRight size={18} />
          </button>
        </div>
        <Swiper
          className="city-slider w-full overflow-hidden"
          slidesPerView={4}
          spaceBetween={10}
          draggable={true}
          navigation={{
            nextEl: ".city-navigation-next",
            prevEl: ".city-navigation-prev",
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index} className="max-w-full overflow-hidden">
              <CityCard city={city} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CityCardSlider;
