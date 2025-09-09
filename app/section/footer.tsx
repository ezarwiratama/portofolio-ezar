export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-700 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Ezar Hardin. All rights reserved.
      </div>
    </footer>
  );
}
