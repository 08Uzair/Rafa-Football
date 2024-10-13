import React, { useState } from "react";
import icon1 from "../../assets/instagram.png";
import icon2 from "../../assets/call.png";
import icon3 from "../../assets/twitter.png";
import logo from "../../assets/logo.png";
import icon4 from "../../assets/r-insta.png";
import icon5 from "../../assets/r-call.png";
import icon6 from "../../assets/r-twit.png";
const Navbar = () => {
  // State to toggle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="grid1 bg-[#2C2B2F] navGrid">
        <div></div>
        <div className="w-[100%] flex items-start justify-between pt-[1.5rem] pr-[3rem] pl-[3rem]">
          <div className="navIcons flex items-center justify-center">
            <img className="ml-[1rem]" src={icon1} alt="Instagram" />
            <img className="ml-[1rem]" src={icon2} alt="Call" />
            <img className="ml-[1rem]" src={icon3} alt="Twitter" />
          </div>
          <div className="flex items-center justify-center flex-col text-center">
            <div>
              <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="list-none flex items-center justify-between navBtn">
              <p className="m-[1.5rem] text-[#A1A1A1] font-medium hover:text-[#fff] cursor-pointer">
                HOME
              </p>
              <p className="m-[1.5rem] text-[#A1A1A1] font-medium hover:text-[#fff] cursor-pointer">
                ABOUT US
              </p>
              <p className="m-[1.5rem] text-[#A1A1A1] font-medium hover:text-[#fff] cursor-pointer">
                CONTACT US
              </p>
              <p className="m-[1.5rem] text-[#A1A1A1] font-medium hover:text-[#fff] cursor-pointer">
                GALLERY
              </p>
            </div>
          </div>
          <div>
            <div className="navBtn text-[16px] font-black inline-flex py-[12px] px-[24px] justify-center items-center gap-[10px] rounded-[30px] text-[#fff] bg-[#FC3E3E] cursor-pointer">
              JOIN NOW
            </div>
            <i
              className="navMenu !hidden text-[3rem] text-[#FC3E3E] bx bx-menu-alt-right cursor-pointer"
              onClick={toggleMenu}
            ></i>
          </div>
        </div>
        <div></div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute right-[0px] p-4 flex justify-between items-center bg-[#fff]">
          <i
            className="bx bx-x text-[2rem] text-[#FC3E3E] cursor-pointer"
            onClick={toggleMenu}
          ></i>
        </div>
        <div className="flex flex-col items-center justify-center p-6 space-y-4">
          <img src={logo} alt="Logo" className="w-[20%]" />

          <p className="text-[#2C2B2F] text-lg font-medium cursor-pointer !mt-[3rem] !mb-[2rem] border-[#000] border-b">
            HOME
          </p>
          <p className="text-[#2C2B2F] text-lg font-medium cursor-pointer !mb-[2rem] border-[#000] border-b">
            ABOUT US
          </p>
          <p className="text-[#2C2B2F] text-lg font-medium cursor-pointer !mb-[2rem] border-[#000] border-b">
            CONTACT US
          </p>
          <p className="text-[#2C2B2F] text-lg font-medium cursor-pointer border-[#000] border-b ">
            GALLERY
          </p>
          <div className="absolute bottom-[3rem] flex items-center justify-center ">
            <img className="ml-[1rem] !w-[15%]" src={icon4} />
            <img className="ml-[1rem] !w-[15%]" src={icon5} />
            <img className="ml-[1rem] !w-[15%]" src={icon6} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
