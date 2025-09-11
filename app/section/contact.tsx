import ScrollFloat from "../Components/ScrollFloat/ScrollFloat";
import ShinyText from "../Components/ShinyText/ShinyText";
import ChatRoom from "../Components/ChatRoom/ChatRoom";

export default function ContactSection() {
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
          Contact & Chat
        </ScrollFloat>
        <p className="mx-auto max-w-2xl text-base leading-relaxed opacity-50 text-center">
          Get in touch with me or chat in real-time
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-30">
        {/* Chat Room di kiri */}
        <div
          className="flex-1 bg-zinc-800 p-6 rounded-md"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <ChatRoom />
        </div>
        <div className="flex-1">
          <form
            action="https://formsubmit.co/ezar.hardin10@gmail.com"
            method="POST"
            className="bg-zinc-800 p-10 w-full rounded-md"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Full Name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="Input Name..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="Input Email..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={45}
                  rows={7}
                  placeholder="Message..."
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                >
                  <ShinyText
                    text="Send"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
