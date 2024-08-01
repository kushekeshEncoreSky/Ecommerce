import React from "react";
import PageTitle from "../components/PageTitle";
import CheckboxWithLabel from "../components/CheckboxWithLabel";
import ProductOptions from "../components/ProductOptions";
import ProductGrid from "../components/ProductGrid";
import Input from "../components/Input.tsx";
import { ButtonCommon } from "../components/ButtonCommon";
const Listing: React.FC = () => {
  return (
    <>
      <PageTitle subtitle="Ecommerce &gt; Search" />
      <div className="container">
        <div className="mx-auto max-w-screen-xl">
          <div className="whole-div flex flex-wrap  w-full">
            {/* categories */}
            <div className="w-1/4 flex flex-col  h-1/2 p-4 mt-10  max-md:hidden rounded border-2 border-gray-300 border-solid">
              <div className="p-2 flex flex-col m-5">
                <p className="font-Inter font-medium text-sm mb-4">
                  Categories
                </p>
                <CheckboxWithLabel id="perfume" label="Perfume" />
                <div className="border-b border-gray-300 mb-2"></div>
                <CheckboxWithLabel id="shoes" label="Shoes" />
                <div className="border-b border-gray-300 mb-2"></div>

                <CheckboxWithLabel id="bags" label="Bags" />
                <div className="border-b border-gray-300 mb-2"></div>

                <CheckboxWithLabel id="watches" label="Watches" />
                <div className="border-b border-gray-300 mb-2"></div>
                <CheckboxWithLabel id="watches" label="Watches" />
                <div className="border-b border-gray-300 mb-2"></div>
                <CheckboxWithLabel id="watches" label="Watches" />
                <div className="border-b border-gray-300 mb-2"></div>
              </div>
              {/* other categories */}
              <div>
                <ProductOptions />
              </div>
            </div>
            {/* Applied  filter and card area*/}
            <div className="applied filter  and area w-3/4 mt-10 px-6">
              <div className="Applied filter ">
                <p className="font-Inter text-sm "> Applied Filters:</p>
              </div>
              <div className="flex justify-between mt-8">
                <p> Showing 1-9 of 36 results.</p>
                <p> Sort by</p>
              </div>
              {/* card area and css */}
              <div>
                <ProductGrid startIndex={0} endIndex={12} />
              </div>
            </div>
          </div>
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
              <div className="p-8 flex mb-12">
                <Input
                  placeholder="Your email address"
                  className="placeholder-black-100 placeholder-font-Inter  w-full sm:w-80 mr-1"
                />
                <ButtonCommon className="w-[120px] ml-[15px] p-[5px] font-Inter font-medium">
                  {" "}
                  Subscribe
                </ButtonCommon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Listing;
