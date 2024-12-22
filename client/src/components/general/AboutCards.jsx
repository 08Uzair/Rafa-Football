import React from "react";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/gal1.png";
import bg3 from "../../assets/gal2.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

const AboutCards = () => {
  const data = [
    {
      icon: icon1,
      bg: bg1,
      txt1: " RESPECT",
      txt2: "Whether your team wins or loses, it is important to show respect for the effort of the other team",
    },
    {
      icon: icon2,
      bg: bg2,
      txt1: " INTERGRITY",
      txt2: "Sport integrity concerns the moral or ethical aspect of sport.It refers to those involved in sport.",
    },
    {
      icon: icon3,
      bg: bg3,
      txt1: " EXCELLENCE",
      txt2: "Good sportsmen want to win because they followed the rules and played the best game they could.",
    },
  ];
  return (
    <>
      <div className="aboutCards relative flex items-center justify-center flex-wrap">
        {data.map((item, index) => {
          return (
            <>
              <div className=" w-[22rem] h-[30rem] m-[3rem]">
                <div
                  style={{
                    background: `url(${item.bg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="aboutBg1 rounded-[15px] "
                >
                  <div className="heroImg w-[22rem] h-[30rem] rounded-[15px] bg-[#6d0000] opacity-70 relative flex items-center justify-center">
                    <img
                      className="absolute top-0 right-0 m-[1.5rem] w-[15%]"
                      src={item.icon}
                    />
                    <div className="absolute bottom-0 text-[#fff] p-[1rem]">
                      <h1 className="text-[32px] font-black leading-[34px]">
                        {item.txt1}
                      </h1>
                      <h2 className="text-[16px] font-normal leading-[19px]">
                        {item.txt2}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AboutCards;
