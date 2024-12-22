import React from "react";
import CircleArrow from "../custom/CircleArrow";

const WhoWeAre = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#2C2B2F] p-[5rem] relative">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-[#fff] font-semibold text-[100px] leading-[84px] mb-[2rem]">
              WHO WE ARE?
            </h1>
            <div className="absolute right-[3rem]">
              <CircleArrow clr="#fff" />
            </div>
          </div>
          <h2 className="w-[951px] font-normal text-[14px] leading-[33px] text-[#fff]">
            Founded in 2012, RAFA is a fun-driven football club based in MIRA
            BHAYANDAR which aims to provide all its members with the opportunity
            to develop not only as footballers but also as individuals. We
            believe that using age appropriate and engaging weekly training
            sessions, enables all players to enjoy playing football whilst being
            able to socialise, grow in confidence and broaden their technical
            and tactical understanding of the "beautiful game." At RAFA , we
            like to think we are more than just another club, but rather a club
            where you can make new friends, learn and have fun.
          </h2>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
