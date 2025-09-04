"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return <>{children}</>;
}