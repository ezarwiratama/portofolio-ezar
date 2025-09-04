import ProfileCard from "@/app/Components/ProfileCard/ProfileCard";
import ShinyText from "@/app/Components/ShinyText/ShinyText";
import TextType from "@/app/Components/TextType/TextType";
import BlurText from "@/app/Components/BlurText/BlurText";

export default function HeroSection() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 mb-12">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          {/* quote section */}
          <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit py-3 px-4 rounded-2xl">
            <img
              src="/assets/ezar-2.png"
              className="w-12 h-12 rounded-full border border-white/10 object-cover"
            />
            <q>Move forward or be left behind</q>
          </div>
          {/* typograph */}
          <h1 className="text-5xl font-bold mb-6">
            <ShinyText
              text="Hi, I'm Ezar Hardin Wiratama"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h1>
          {/* role */}
          <h1 className="text-3xl font-semibold mb-6">
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
          </h1>

          <BlurText
            text="A skilled and adaptable Full Stack Developer with expertise in building and maintaining web applications from front to back. I am passionate about creating efficient and user-friendly digital solutions."
            delay={150}
            animateBy="words"
            direction="top"
            className=" mb-6"
          />

          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="./assets/CV.pdf"
              download="Faris_Edrik_Prayoga_CV.pdf"
              className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
            >
              <ShinyText
                text="Download CV"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </a>

            <a
              href="#project"
              className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
            >
              <ShinyText
                text="Explore My Projects"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </a>
          </div>
        </div>
        <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
          <ProfileCard
            name="Ezar Hardin W"
            title="Fullstack Developer"
            handle="ezarwiratama"
            status="Online"
            contactText="Contact Me"
            avatarUrl="./assets/ezar-2.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </>
  );
}
