import ScrollFloat from "../Components/ScrollFloat/ScrollFloat";

export default function ExperienceSection() {
  return (
    <div>
      {/* Title */}
      <div className="text-center text-4xl mb-10 mt-20">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="font-bold"
        >
         Experience
        </ScrollFloat>
        <p className="mx-auto max-w-2xl text-base leading-relaxed opacity-50 text-center">
         List of my experiences and the story I grew with them.
        </p>
      </div>
    </div>
  );
}
