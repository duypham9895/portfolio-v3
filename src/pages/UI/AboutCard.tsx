import React, { useContext } from "react";
import PortfolioContext from "../../hooks/portfolio-context";

type Props = {
  item: {
    icon: string;
    title: string;
    des: string;
    bg: string;
  };
};

const AboutCard = ({ item: { icon, title, des, bg } }: Props) => {
  const { defaultTheme } = useContext(PortfolioContext);
  return (
    <div
      style={{
        background: `${defaultTheme === "dark" ? "transparent" : bg}`,
      }}
      className="about-box dark:bg-transparent"
    >
      <img className="w-10 h-10 object-contain  block" src={icon} alt="" />

      <div className="space-y-2">
        <h3 className="dark:text-white text-2xl font-semibold">{title}</h3>
        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">{des}</p>
      </div>
    </div>
  );
};

export default AboutCard;
