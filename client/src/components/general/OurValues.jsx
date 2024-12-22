import React from "react";
import CircleArrow from "../custom/CircleArrow";

const OurValues = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#fff] p-[5rem] mt-[5rem] relative">
        <div>
          <div className="flex items-center justify-between ">
            <h1 className="text-[#111] font-semibold text-[100px] leading-[84px] mb-[2rem]">
              OUR VALUES
            </h1>
            <div className="absolute right-[3rem]">
              <CircleArrow clr="#D7102D" />
            </div>
          </div>

          <h2 className="w-[951px] font-normal text-[14px] leading-[33px] text-[#111]">
            We truly believe our mindset determines our level of success. We are
            dedicated to creating and maintaining a next-level mindset through
            which we will strive to be better tomorrow than we are today.
            Difficulties and failures will not discourage us- they will put us
            one step closer to success as we learn and evolve. We understand
            excellence is a habit, not a goal and we will welcome every
            challenge with enthusiasm, deliver on our commitments and be
            accountable for our actions.
          </h2>
        </div>
      </div>
    </>
  );
};

export default OurValues;
