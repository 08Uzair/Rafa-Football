import React from "react";
import icon1 from "../../assets/instagram.png";
import icon2 from "../../assets/call.png";
import icon3 from "../../assets/twitter.png";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <>
      <div className="grid1 bg-[#2C2B2F] ">
        <div></div>
        <div className="w-[100%]  flex items-start justify-between pt-[1.5rem] pr-[3rem] pl-[3rem]">
          <div className="flex items-center justify-center ">
            <img className="ml-[1rem]" src={icon1} />
            <img className="ml-[1rem]" src={icon2} />
            <img className="ml-[1rem]" src={icon3} />
          </div>
          <div className="flex items-center justify-center flex-col text-center">
            <div>
              <img src={logo} />
            </div>
            <div className="list-none flex items-center justify-between  ">
              <span className="m-[1.5rem] text-[#A1A1A1] font-medium hover:text-[#fff]  cursor-pointer">
                HOME
              </span>
              <span className="m-[1.5rem] text-[#A1A1A1] font-medium hover:text-[#fff]  cursor-pointer">
                ABOUT US
              </span>
              <span className="m-[1.5rem] text-[#A1A1A1] font-medium hover:text-[#fff]  cursor-pointer">
                CONTACT US
              </span>
              <span className="m-[1.5rem] text-[#A1A1A1] font-medium hover:text-[#fff]  cursor-pointer">
                GALLERY
              </span>
            </div>
          </div>
          <div>
            <div className=" text-[16px] font-black inline-flex py-[12px] px-[24px] justify-center items-center gap-[10px] rounded-[30px] text-[#fff] bg-[#FC3E3E]">
              JOIN NOW
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
