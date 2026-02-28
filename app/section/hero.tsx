import ProfileCard from "@/app/Components/ProfileCard/ProfileCard";
import ShinyText from "@/app/Components/ShinyText/ShinyText";
import TextType from "@/app/Components/TextType/TextType";
import BlurText from "@/app/Components/BlurText/BlurText";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiCode } from "react-icons/fi";

export default function HeroSection() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-6 md:pt-10 xl:gap-0 gap-8 grid-cols-1 mb-12 md:mb-24 px-4 md:px-0 relative overflow-visible">
        {/* Kolom Kiri: Text Content */}
        <div className="animate__animated animate__fadeInUp animate__delay-3s z-10 order-1 md:order-1">
          {/* Quote Section */}
          <div className="flex items-center gap-3 mb-6 bg-zinc-800/50 backdrop-blur-sm w-fit py-2 px-4 rounded-2xl border border-white/5 mx-auto md:mx-0">
            <img
              src="/assets/ezar.png"
              className="w-10 h-10 rounded-full border border-white/10 object-cover"
              alt="Profile"
            />
            <q className="text-sm md:text-base text-gray-300">
              Move forward or be left behind
            </q>
          </div>

          {/* Typograph Name */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center md:text-left">
            <ShinyText
              text="Hi, I'm Ezar Hardin Wiratama"
              disabled={false}
              speed={3}
              className="leading-tight"
            />
          </h1>

          {/* Role Typing Effect */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left h-[40px] md:h-auto">
            <TextType
              text={[
                "Fullstack Developer",
                "Software Engineer",
                "UI/UX Designer",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h2>

          {/* Description */}
          <BlurText
            text="A skilled and adaptable Full Stack Developer with expertise in building and maintaining web applications from front to back. I am passionate about creating efficient and user-friendly digital solutions."
            delay={150}
            animateBy="words"
            direction="top"
            className="mb-8 text-center md:text-left text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            {/* Download CV */}
            <a
              href="/assets/CV-Kreatif_Ezar Hardin Wiratama.pdf"
              className="group flex items-center justify-center gap-3 font-semibold bg-[#1a1a1a] p-3 px-6 rounded-full border border-gray-700 hover:bg-[#222] hover:border-gray-500 transition-all active:scale-95 w-full sm:w-auto"
            >
              <HiOutlineDocumentText className="text-xl text-white group-hover:text-gray-300 transition-colors" />
              <div className="relative top-[1px]">
                 <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="whitespace-nowrap"
                />
              </div>
            </a>

            {/* Explore Projects */}
            <a
              href="#project"
              className="group flex items-center justify-center gap-3 font-semibold bg-[#1a1a1a] p-3 px-6 rounded-full border border-gray-700 hover:bg-[#222] hover:border-gray-500 transition-all active:scale-95 w-full sm:w-auto"
            >
              <FiCode className="text-xl text-white group-hover:text-gray-300 transition-colors" />
              <div className="relative top-[1px]">
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="whitespace-nowrap"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Profile Card */}
        {/* Tambahkan py-10 di mobile agar glow tidak terpotong atau menabrak teks */}
        <div className="relative w-full flex justify-center md:justify-end md:ml-auto animate__animated animate__fadeInUp animate__delay-4s py-10 md:py-0 order-2 md:order-2 z-0">
            {/* Wrapper ini memastikan card tetap ditengah di mobile */}
            <div className="relative scale-90 md:scale-100"> 
              <ProfileCard
                name="Ezar Hardin W"
                title="Fullstack Developer"
                handle="ezarwiratama"
                status="Online"
                contactText="Contact Me"
                avatarUrl="./assets/ezar.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false} // Pastikan tilt mati di mobile biar ga aneh
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
        </div>
      </div>
    </>
  );
}