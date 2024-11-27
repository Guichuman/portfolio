import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = () => {
  useEffect(() => {
    // This code only runs on the client
    ScrollReveal().reveal(".animate-section", {
      distance: "50px",
      duration: 1000,
      origin: "bottom",
      opacity: 0,
      reset: false, // Animates only once
    });
  }, []);
};
