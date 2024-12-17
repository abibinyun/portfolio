import React from "react";
import Image from "next/image";
import Link from "next/link";

import GithubIcon from "@/app/assets/icons/github.svg";
import LinkedIcon from "@/app/assets/icons/linked.svg";
import LinkedWhiteIcon from "@/app/assets/icons/linkedin-white.svg";
import EducationIcon from "@/app/assets/icons/education.svg";
import ExperienceIcon from "@/app/assets/icons/experience.svg";
import MailIcon from "@/app/assets/icons/mail.svg";
import Arrow from "@/app/assets/icons/arrow.png";

import ProfileImg from "@/app/assets/img/profile.png";
import ProfileImg2 from "@/app/assets/img/profile2.jpg";

import ProjectSlide from "./components/swiper/ProjectSlide";
import ListComponent from "./components/templates/ListComponent";
import CardAbout from "./components/templates/CardAbout";
import FormContact from "./components/templates/FormContact";

interface ClickArrowProps {
  target: string;
}

const ClickArrow = ({ target }: ClickArrowProps) => {
  return (
    <Link href={`/#${target}`} className="absolute -bottom-3 right-8 w-8 h-8 flex items-center justify-center">
      <Image src={Arrow} alt="Arrow navigation button" className="w-8 h-8 object-contain" priority />
    </Link>
  );
};

const Home = () => {
  const LINKS = {
    github: "https://github.com/abibinyun",
    linkedin: "https://www.linkedin.com/in/muhammad-bilal-ismail",
  };
  return (
    <div className="w-full flex flex-col gap-y-[7rem]">
      {/* Hero */}
      <section id="home" className="w-full flex flex-col md:flex md:flex-row  items-center justify-center gap-x-10 gap-y-5 md:gap-y-0  pt-10">
        <div className="bg-slate-400 w-[300px] h-[300px] rounded-full">
          <Image src={ProfileImg} width={500} height={500} alt="photo-profile" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="text-center">
          <p>Hello, I&apos;m</p>
          <h1 className="font-bold text-4xl">Muhammad Bilal Ismail</h1>
          <p>Software Engineer</p>
          <div className="flex flex-col gap-y-2 mt-3">
            <div className="flex items-center justify-center gap-x-2">
              <button className="w-[120px] bg-white border-2 border-black rounded-3xl p-2 text-black">Download CV</button>
              <a href={"/#contact"} className="w-[120px] bg-black rounded-3xl p-2 text-white">
                Contact me
              </a>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <Link href={LINKS.github} target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center ">
                <Image src={GithubIcon} alt="github" />
              </Link>
              <Link href={LINKS.linkedin} target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center ">
                <Image src={LinkedIcon} alt="linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative w-full flex flex-col gap-y-5 items-center justify-center px-0 min-[640px]:px-10 pt-10">
        <header className="text-center">
          <p>Get To Know More</p>
          <h2 className="font-bold text-3xl">About Me</h2>
        </header>
        <div className="w-full h-fit md:h-[400px] flex flex-col md:flex md:flex-row gap-y-5 md:gap-y-0 justify-center items-center">
          <div className="w-[80%] md:w-[35%] h-full flex items-center justify-center md:justify-start">
            <div className="bg-slate-200 w-[80%] h-[90%] rounded-3xl">
              <Image src={ProfileImg2} width={1000} height={1000} alt="photo-profile" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>
          <div className="w-[75%] flex flex-col gap-y-5">
            <div className="flex flex-col min-[640px]:flex min-[640px]:flex-row justify-center items-center gap-x-3 gap-y-5 min-[640px]:gap-y-0">
              <CardAbout logo={ExperienceIcon} title="Experience" content={["2+ years", "Web Development"]} />
              <CardAbout logo={EducationIcon} title="Education" content={["SMK Trikarya"]} />
            </div>
            <p className="text-justify text-lg">
              With over 2 years of experience in the technology industry, I am a software engineer passionate about building responsive, dynamic, and user-friendly web applications. Continuously working on enhancing my technical skills, I
              keep myself updated with the latest trends and advancements in various technologies, not just limited to web development.
              <br />I have experience in both frontend and backend development, utilizing technologies like React, Node.js, and others. I am committed to creating applications that are both functional and intuitive, which drives my passion
              for learning and innovating in every project I take on.
            </p>
          </div>
        </div>
        <ClickArrow target="experience" />
      </section>

      {/* Experience */}
      <section id="experience" className="relative w-full flex flex-col gap-y-5 items-center justify-center px-0 min-[640px]:px-10  pt-10">
        <header className="text-center">
          <p>Explore My</p>
          <h2 className="font-bold text-3xl">Experience</h2>
        </header>
        <div className="w-full h-fit min-[870px]:h-[300px] flex flex-col min-[870px]:flex min-[870px]:flex-row justify-center items-center gap-x-5 gap-y-5 min-[870px]:gap-y-0">
          {/* Left */}
          <article className="w-[80%] min-[870px]:w-[50%] h-full border-[1px] border-slate-400 rounded-3xl flex flex-col justify-start items-center gap-y-5 py-5">
            <div className="font-bold text-xl text-center px-3">
              <h3>Frontend Development</h3>
            </div>
            <ul className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-5 w-fit min-[640px]:w-full px-5 font-semibold">
              <ListComponent type="item" text="HTML" />
              <ListComponent type="item" text="CSS" />
              <ListComponent type="item" text="SASS" />
              <ListComponent type="item" text="Javascript" />
              <ListComponent type="item" text="Typescript" />
              <ListComponent type="item" text="Material UI" />
              <ListComponent type="item" text="React JS" />
              <ListComponent type="item" text="Next JS" />
            </ul>
          </article>
          {/* Right */}
          <article className="w-[80%] min-[870px]:w-[50%] h-full border-[1px] border-slate-400 rounded-3xl flex flex-col justify-start items-center gap-y-5 py-5">
            <div className="font-bold text-xl text-center px-3">
              <h3>Backend Development</h3>
            </div>
            <ul className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-5 w-fit min-[640px]:w-full px-5 font-semibold">
              <ListComponent type="item" text="Node JS" />
              <ListComponent type="item" text="Express JS" />
              <ListComponent type="item" text="Laravel" />
              <ListComponent type="item" text="MySQL" />
              <ListComponent type="item" text="PostgreSQL" />
              <ListComponent type="item" text="Git" />
            </ul>
          </article>
        </div>
        <ClickArrow target="projects" />
      </section>

      {/* Projects */}
      <section id="projects" className="relative w-full h-fit flex flex-col gap-y-5 items-center justify-center px-10  pt-10">
        <header className="text-center">
          <p>Browse My Recent</p>
          <h2 className="font-bold text-3xl">Projects</h2>
        </header>

        <ProjectSlide />
        <ClickArrow target="contact" />
      </section>

      {/* Contact Me */}
      <section id="contact" className="w-full flex flex-col gap-y-5 items-center justify-center px-0 min-[640px]:px-10  pt-10">
        <header className="text-center">
          <p>Get In Touch</p>
          <h2 className="font-bold text-3xl">Contact Me</h2>
        </header>
        <div className="w-[80%] min-[870px]:w-fit h-fit p-3 rounded-3xl flex flex-col min-[870px]:flex min-[870px]:flex-row  justify-center items-center min-[870px]:items-start mt-5 gap-x-5 border-2 border-slate-400">
          <ListComponent type="contact" logo={MailIcon} text={"Jobs.muhammadbilal@gmail.com"} />
          <ListComponent type="contact" logo={LinkedWhiteIcon} text={"LinkedIn"} />
        </div>

        <FormContact />
      </section>
    </div>
  );
};

export default Home;
