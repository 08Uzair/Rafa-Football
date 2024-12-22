import React from "react";
import bg1 from "../../assets/gal1.png";
import bg2 from "../../assets/gal2.png";
const AboutGallery = () => {
  return (
    <>
      <div className="aboutBg relative bg-[#2C2B2F] flex items-center justify-center ">
        <div className="w-[703px] h-[527.25px]">
          <div
            style={{
              background: `url(${bg1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              zIndex: "111",
            }}
            className="aboutBg1 rounded-[25px] absolute left-[10%] top-[3rem]  "
          >
            <div className="heroImg w-[703px] h-[527.25px] rounded-[20px] bg-[#6d0000] opacity-70 relative flex items-center justify-center"></div>
          </div>
        </div>

        <div className="w-[703px] h-[527.25px] ">
          <div
            style={{
              background: `url(${bg2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="aboutBg1 rounded-[25px] absolute right-[10%] bottom-[3rem]"
          >
            <div className="heroImg w-[703px] h-[527.25px] rounded-[20px] bg-[#6d0000] opacity-70 relative flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGallery;
