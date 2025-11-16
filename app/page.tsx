"use client";

import Aurora from "@/app/Components/Aurora/Aurora";

import HeroSection from "./section/hero";
import AboutSection from "./section/about";
import ProjectSection from "./section/project";
import ContactSection from "./section/contact";
import ExperienceSection from "./section/experience";

export default function Home() {
  return (
    <>
      {/* background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#7F7FD5", "#1F97A6", "#91EAE4"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home">
        <div>
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        {/* <div id="experience"><ExperienceSection /></div> */}
        <div id="project">
          <ProjectSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
