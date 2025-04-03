import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { GiLipstick } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TiScissors } from "react-icons/ti";

const About = () => {
  const services = [
    {
      id: 1,
      title: "Expert Stylists",

      description: "Certified professionals with artistic vision",
      icon: <TiScissors className="w-8 h-8 text-amber-600" />,
    },
    {
      id: 2,
      title: "Premium Products",

      description: "Luxury brands for ultimate beauty experience",
      icon: <GiLipstick className="w-8 h-8 text-amber-600" />,
    },
    {
      id: 3,
      title: "Custom Care",
      description: "Personalized beauty solutions for you",
      icon: <RiCustomerService2Fill className="w-8 h-8 text-amber-600" />,
    },
    {
      id: 4,
      title: "Passionate Team",
      description: "Dedicated to enhancing your natural beauty",
      icon: <AiFillHeart className="w-8 h-8 text-amber-600" />,
    },
  ];
  return (
    <div id="about" className=" w-[100%] px-2 md:px-4 lg:px-8 mt-8">
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="flex items-center justify-center flex-col relative group w-full sm:w-[40%] mx-12">
          <div className="flex items-center space-x-3 bg-rose-100 px-4 py-2 rounded-full w-fit mb-3">
            <FiAward className="text-rose-400" />
            <span className="text-sm font-semibold text-rose-800">
              World Class Services
            </span>
          </div>
          <div className="absolute insert-0 rounded-3xl bg-gradient-to-r from-rose-200 to-rose-400 transform  group-hover:rotate-3 transition-all duration-300"></div>

          <div className="relative bg-rose-100 rounded-3xl p-2 md:p-4 ">
            <div className="aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img
                src={"./about.jpg"}
                alt="About img"
                className="w-full h-full object-cover object-center "
              />
            </div>
          </div>
        </div>
        <div className="space-y-8 mt-4 w-full sm:w-[60%]">
          <h2 class="h-15 text-2xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-orange-500">
            Redefining Beauty Standards
          </h2>
          <p className="text-lg font-semibold font-mono text-slate-700 leading-relaxed ">
            At Radiant Luxe by Savi, we craft experiences that celebrate
            individually. Our master stylist combine technical expertise with
            artistic vision to reveal your most radient self.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg trainsition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-rose-50 rounded-xl group-hover:bg-rose-100 transitions-colors">
                    <span className="text-rose-800">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-md text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
