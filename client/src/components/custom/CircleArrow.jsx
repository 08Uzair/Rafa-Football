import React, { useEffect, useState } from "react";

const CircleArrow = ({ clr }) => {
  const [scrollDirection, setScrollDirection] = useState("right");

  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    const elements = document.querySelectorAll("span");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transform = `rotate(${i * 16.8}deg)`;
    }
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollDirection("right");
      } else {
        // Scrolling up
        setScrollDirection("left");
      }
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
        className={`text text-[${clr}] text-2xl uppercase select-none pointer-events-none`}
      >
        JOIN-NOW * REGISTER-NOW *
      </h2>
      <i
        className={` !text-[${clr}] relative right-[3rem] text-[7rem] bx ${
          scrollDirection === "right"
            ? "bx-right-arrow-alt"
            : "bx-left-arrow-alt"
        }`}
      ></i>
    </section>
  );
};

export default CircleArrow;
