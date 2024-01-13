import React from "react";
import { Button } from "../components/Button";
import { arrowRight } from "../assets/icons";
import {shoe8} from '../assets/images';

const superquality = () => {
  return (
    <div>
      <section
        id="about us"
        className="flex justify-between  items-center max-lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2>
          <h1 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
              We Provide You   
              <span className="text-red-500">
                Super
              </span>
              <br/>
              <span className="text-red-500">
                Quality
              </span> shoes
            <br />
          </h1>
          <p className="mt-4 lg:max-w-lg text-lg leading-7 text-slate-gray font-montserrat">
            Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <div className="mt-11">
          <Button label="view Detalis" iconUrl={arrowRight}/>
          </div>
          
          
          

          </h2>
        </div>
        <div className="flex-1 justify-center items-center">
          <img src={shoe8} alt="Shoe8"/>
        </div>
      </section>
    </div>
  );
};

export default superquality;
