import ShinyText from "../Components/ShinyText/ShinyText";
export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-700 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <ShinyText
          text={`© ${new Date().getFullYear()} Ezar Hardin. All rights reserved.`}
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>
    </footer>
  );
}
