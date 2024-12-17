"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import ListComponent from "../templates/ListComponent";

import Alto from "@/app/assets/projects/alto.png";
import Eramedix from "@/app/assets/projects/eramedix.png";
import Genero from "@/app/assets/projects/genero.png";
import Ims from "@/app/assets/projects/ims.png";
import Yathim from "@/app/assets/projects/yathim.png";
import Eduwork from "@/app/assets/projects/eduwork.png";

import "swiper/css";
import "swiper/css/navigation";

const ProjectSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="w-[300px] sm:w-[540px] md:w-[668px] lg:w-[924px]"
    >
      <SwiperSlide className="py-2">
        <ListComponent type="project" image={Alto} title={"PT. Alto Network"} desc={"Web Application"} />
      </SwiperSlide>
      <SwiperSlide className="py-2">
        <ListComponent type="project" image={Genero} title={"Genero"} desc={"Web Application"} />
      </SwiperSlide>
      <SwiperSlide className="py-2">
        <ListComponent type="project" image={Eramedix} title={"Eramedix"} desc={"Web Application"} />
      </SwiperSlide>
      <SwiperSlide className="py-2">
        <ListComponent type="project" image={Yathim} title={"Yathim"} desc={"Web Application"} />
      </SwiperSlide>
      <SwiperSlide className="py-2">
        <ListComponent type="project" image={Ims} title={"Ims"} desc={"Web Application"} />
      </SwiperSlide>
      <SwiperSlide className="py-2">
        <ListComponent type="project" image={Eduwork} title={"Eduwork"} desc={"Web Application"} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectSlide;
