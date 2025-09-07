import ScrollFloat from "@/app/Components/ScrollFloat/ScrollFloat";
import AnimatedContent from "@/app/Components/AnimatedContent/AnimatedContent";
import BlurText from "@/app/Components/BlurText/BlurText";
import Lanyard from "@/app/Components/Lanyard/Lanyard";
import ShinyText from "../Components/ShinyText/ShinyText";
import SocialLinks from "../Components/SocialLinks/SocialLinks";

export default function AboutSection() {
  return (
    <>
      <div>
        <div className="text-center text-4xl font-bold mb-10 mt-20">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            About Me
          </ScrollFloat>
        </div>
        <div className="mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] pl-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <BlurText
                  text="I'm Ezar Hardin Wiratama"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="leading-relaxed text-3xl font-bold text-violet-400 mt-10 mb-5"
                />

                <BlurText
                  text="I am a Computer Engineering student at Diponegoro University 2023, and a passionate Fullstack Developer with around three years of programming experience. I have gained valuable professional exposure through one year of work experience and three internships. I am adaptable, capable of working well under pressure, and thrive both independently and as part of a team."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-5 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 w-full">
                <SocialLinks/>                 
                </div>

              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
