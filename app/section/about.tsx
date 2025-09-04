import ScrollFloat from "@/app/Components/ScrollFloat/ScrollFloat";
import AnimatedContent from "@/app/Components/AnimatedContent/AnimatedContent";
import BlurText from "@/app/Components/BlurText/BlurText";

export default function AboutSection() {
  return (
    <>
        <div className="mt-20 mx-auto w-full max-w-[1600px] rounded-3xl" id="about">
          <div className="text-center text-4xl font-bold mb-20">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >About Me
          </ScrollFloat>
        </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <BlurText
                  text="I'm Ezar Hardin Wiratama"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="leading-relaxed text-3xl font-bold text-violet-400 mb-5"
                />
                <BlurText
                  text="I am a Computer Engineering student at Diponegoro University 2023, and a passionate Fullstack Developer with around three years of programming experience. I have gained valuable professional exposure through one year of work experience and three internships. I am adaptable, capable of working well under pressure, and thrive both independently and as part of a team."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      4<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.67<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              {/* <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} /> */}
            </div>
          </div>

        </div>
    </>
  );
}
