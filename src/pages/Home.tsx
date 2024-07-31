import React from "react";
import Image from "../assets/Bannerimage.png";
import Input from "../components/Input.tsx";
import cardsData from "./data/data.json";
import Card from "./Card";
import Shieldcheck from "../assets/Shieldcheck.png";
import iconBox from "../assets/iconBox.png";
import Logistics from "../assets/Logistics.png";
import { FaArrowRight } from "react-icons/fa";
import CategoryImg from "../assets/Categoryimage.png";
import HomeButton from "./HomeButton";
import { ButtonCommon } from "../components/ButtonCommon";
import ProductGrid from "../components/ProductGrid";
const Home: React.FC = () => {
  const cardsData: CardData[] = [
    {
      icon: Logistics,
      title: "Free Shipping",
      description:
        "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    },
    {
      icon: iconBox,
      title: "Satisfaction Guarantee",
      description:
        "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
    },
    {
      icon: Shieldcheck,
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
                <HomeButton color={`bg-black`}>
                  {" "}
                  View Collection <FaArrowRight className="ml-2" />
                </HomeButton>
              </div>
              <div className="absolute right-0 bottom-0">
                <img src={Image} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card place */}
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-between flex-wrap py-20">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      {/* card and api call  */}
      <div className="mx-auto max-w-screen-xl">
        <ProductGrid />
      </div>
      {/* Browse  our Fasion Paradise */}
      <div className=" bg-zinc-50">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex justify-between">
            <div className="p-8">
              <h1 className="font-Inter font-semibold text-2xl">
                {" "}
                Browse Our Fashion Paradise!
              </h1>
              <p className="font-Inter font-normal text-sm text-gray-500 md:w-96">
                {" "}
                Step into a world of style and explore our diverse collection of
                clothing categories.
              </p>
              <HomeButton color={`bg-black`}>
                {" "}
                StartBrowsing <FaArrowRight className="ml-2" />
              </HomeButton>
            </div>
            <div className="w-1/5">
              <img src={CategoryImg} className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Browse fassion paradise  */}
      <div className="mx-auto max-w-screen-xl">
        <ProductGrid />
      </div>
      {/* Join Our Newsletter */}
      <div className="bg-white-400">
        <div className="mx-auto max-w-screen-xl  flex justify-between ">
          <div className="p-8">
            <h1 className="font-Inter font-bold text-2xl">
              {" "}
              Join Our Newsletter
            </h1>
            <p className="mt-3 font-Inter font-normal text-gray-400  text-sm">
              {" "}
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>
          <div className="p-8">
            <Input
              placeholder="Your email address"
              className="placeholder-black-100 placeholder-font-Inter  w-full sm:w-80 mr-1"
            />
            <ButtonCommon className="w-[120px] ml-[15px] p-[7px] font-Inter font-medium">
              {" "}
              Subscribe
            </ButtonCommon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
