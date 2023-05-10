import React from "react";

import { Link } from "react-router-dom";

import Model from "../images/model.jpg";

function Hero() {
  return (
    <section className="bg-rose-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">
              WOMENS
              <br />
            </span>
            <span className="font-semibold">
              MENS
              <br />
            </span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-black"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img className="max-w-[400px]" src={Model} alt="Male Fashion Model" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
