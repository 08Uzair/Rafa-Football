import React, { useEffect, useState, useRef } from "react";

const CircleArrow = ({ clr }) => {
  const [scrollDirection, setScrollDirection] = useState("right");
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

      const elements = text.querySelectorAll("span");
      elements.forEach((element, index) => {
        element.style.transform = `rotate(${index * 16.8}deg)`;
      });
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "right" : "left");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center h-full cursor-pointer">
      <h2
        ref={textRef}
        className={`text text-[${clr}] text-2xl uppercase select-none pointer-events-none`}
      >
        JOIN-NOW * REGISTER-NOW *
      </h2>
      <i
        className={`!text-[${clr}] relative right-[3rem] text-[7rem] bx ${
          scrollDirection === "right" ? "bx-right-arrow-alt" : "bx-left-arrow-alt"
        }`}
      ></i>
    </section>
  );
};

export default CircleArrow;
