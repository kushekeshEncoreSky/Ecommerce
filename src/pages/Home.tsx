import React from "react";
import Image from "../assets/Bannerimage.png";
import Homebutton from "./Homebutton";
import cardsData from "./data/data.json";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa";
const Home: React.FC = () => {
  const cardsData: CardData[] = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description:
        "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    },
    {
      icon: "🎯",
      title: "Satisfaction Guarantee",
      description:
        "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
    },
    {
      icon: "🛡️",
      title: "Secure Payment",
      description:
        "Your security is our priority. Your payments are secure with us.",
    },
  ];
  return (
    <div>
      <div className="hero- banner  bg-gray-300 ">
        <div className="container">
          <div className="mx-auto max-w-screen-xl  align-middle w-full relative ">
            <div className="flex justify-between ">
              <div className="banner-details pt-[140px] pb-[136px]">
                <h1 className="font-Inter font-semibold text-3xl">
                  Fresh Arrivals Online
                </h1>
                <p className="font-Inter font-normal">
                  {" "}
                  Discover Our Newest Collection Today.
                </p>
                <Homebutton color={`bg-black`}>
                  {" "}
                  View Collection <FaArrowRight className="ml-2" />
                </Homebutton>
              </div>
              <div className="absolute right-0 bottom-0">
                <img src={Image} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card place */}
      {cardsData.map((card, index) => {
        return (
          <Card
            key={index}
            description={card.description}
            icon={card.icon}
            title={card.title}
          />
        );
      })}
    </div>
  );
};

export default Home;
