import React from "react";
import bg from "../../assets/bg1.png";
import CircleArrow from "../custom/CircleArrow";
import icon1 from "../../assets/r-insta.png";
import icon2 from "../../assets/r-call.png";
import icon3 from "../../assets/r-twit.png";
const Hero = () => {
  return (
    <>
      <div className="heroBg bg-[#2C2B2F] flex items-center justify-center text-center flex-col relative">
        <div className="heroIcons flex items-center justify-center hidden">
          <img className="ml-[1rem] !w-[15%]" src={icon1} />
          <img className="ml-[1rem] !w-[15%]" src={icon2} />
          <img className="ml-[1rem] !w-[15%]" src={icon3} />
        </div>
        <h1 className="txt1 text-[#fff] text-[100px]">
          WELCOME TO <span className="text-[#D7102D]">RAFA ACADEMY</span>
        </h1>
        <h3 className="txt2 text-[#fff] text-[18px]">
          From beginner to pro, we help you reach new heights in your football
          career.
        </h3>

        <div
          style={{
            background: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" rounded-[20px] mt-[3rem] relative "
        >
          <div
            style={{ mixBlendMmode: "multiply" }}
            className="heroImg w-[1080px] h-[577px] rounded-[20px] bg-[#6d0000] opacity-70 relative flex items-center justify-center"
          >
            <div className="relative left-[2.5rem]">
              <CircleArrow clr="#fff" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
