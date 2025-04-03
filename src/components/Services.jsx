import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  GiFlowerTwirl,
  GiLipstick,
  GiMirrorMirror,
  GiSpray,
} from "react-icons/gi";
import { FaSpa, FaSmile } from "react-icons/fa";
import { MdFace, MdOutlineSelfImprovement } from "react-icons/md";
import { Link } from "react-scroll";

// Import local images

const serviceList = [
  {
    id: 1,
    title: "Glow Basics",
    price: " 399",
    image: "./BSW.jpg",
    tags: [
      "Eyebrows",
      "Upperlips",
      "Bleach Face",
      "Fruit Cleanup",
      "Full Arms",
    ],
    description: "A simple yet effective package for essential grooming.",
    icon: <MdFace className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 2,
    title: "Radiant Touch",
    price: " 499",
    image: "./LFT.jpg",
    tags: [
      "Eyebrows",
      "Upperlips",
      "Bleach Face",
      "Fruit Cleanup",
      "Full Arms",
      "Half Legs",
    ],
    description: "Enhancing your glow with extra care.",
    icon: <GiMirrorMirror className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 3,
    title: "Shimmer Bliss",
    price: " 599",
    image: "./FBM.jpg",
    tags: [
      "Eyebrows",
      "Upperlips",
      "Bleach Face",
      "Fruit Cleanup",
      "Full Arms",
      "Half Legs",
      "Hair Trimming",
      "Head Massage",
    ],
    description: "A package designed for a refreshing and radiant look.",
    icon: <FaSpa className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 4,
    title: "Golden Glow-Up",
    price: "699",
    image: "./LHR.jpg",
    tags: [
      "Eyebrows",
      "Upperlips",
      "Bleach Face",
      "Facial OLX Life",
      "Full Arms",
      "Half Legs",
      "Hair Trimming",
      "Hand Bleach",
    ],
    description: "Perfect for an all-in-one glow and relaxation.",
    icon: <GiLipstick className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 5,
    title: "Luxe Refinement",
    price: " 999",
    image: "./HSC.jpg",
    tags: [
      "Threading",
      "Upperlips",
      "Bleach Face",
      "Facial Dimond",
      "Full Arms",
      "Full Legs",
      "Hair Trimming",
      "Back Waxing/ Bleaching",
    ],
    description: "Luxurious nail treatment with paraffin wax and massage",
    icon: <GiFlowerTwirl className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 6,
    title: "Glamorous Diva",
    price: " 1299",
    image: "./MP.jpg",
    tags: [
      "Threading",
      "Upperlips",
      "Bleach Face",
      "Facial Wine",
      "Full Arms",
      "Full Legs",
      "Hair Trimming",
      "Maincure",
      "Back Waxing/ Bleaching",
    ],
    description: "Advanced laser technology for smooth, hair-free skin",
    icon: <GiSpray className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 7,
    title: "Elite Elegance",
    price: " 1599",
    image: "./MB.jpg",
    tags: [
      "Threading",
      "Upperlips",
      "Bleach Face",
      "Facial Lotus",
      "Full Arms",
      "Full Legs",
      "Hair Trimming",
      "Pedicure",
      "Back Waxing/ Bleaching",
    ],
    description: "Natural-looking eyebrow enhancement with micro-pigmentation",
    icon: <MdOutlineSelfImprovement className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 8,
    title: "The ultimate Package",
    price: " 1999",
    image: "./MP.jpg",
    tags: [
      "Threading",
      "Upperlips",
      "Bleach Face",
      "Facial O3+",
      "Full Arms",
      "Full Legs",
      "Hair Trimming",
      "Head Massage",
      "Pedicure",
      "Back Waxing/ Bleaching",
    ],
    description: "Exfoliating treatment with herbal wraps for glowing skin",
    icon: <FaSmile className="w-8 h-8 text-amber-600" />,
  },
];
const Services = ({ setService }) => {
  return (
    <div id="services" className="py-20">
      <div className=" mx-auto px-4 ms:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-rose-800">
            Packages
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-[#fff9e6] rounded-2xl shadow-xl overflow-hidden border-2 border-amber-100 transition-all duration-300 hover:border-amber-200
              hover:shadow-2xl hover:-transition-y-2 `}
            >
              <div className={`relative h-72 overflow-hidden `}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute z-0 w-full h-full  object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                ></img>

                <div className=" absolute  bottom-4 left-4 z-10 p-4  ">
                  <span className="bg-amber-500/90 text-white px-5 py-2 rounded-full text-sm front-bold shadow-lg">
                    &#x20B9; {service.price}
                  </span>
                </div>
                <div className=" absolute  bottom-2 right-4 z-10 p-4  ">
                  <Link
                    className="cursor-pointer"
                    to="contact"
                    smooth={true}
                    offset={200}
                  >
                    <button
                      className="!p-0 !h-10 !w-25"
                      onClick={() => {
                        setService([service.title]);
                      }}
                    >
                      Book Now
                    </button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2 m-3">
                  {service.tags.map((tag) => (
                    <span className="bg-amber-50 z-10 text-amber-700 px-3 py-1 rounded-full text-sm font-medium border-amber-200 hover:bg-amber-100 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="lg:hidden flex absolute  bottom-18 w-full bg-opacity-0 right-45 flex justify-end items-end z-10 p-4 bg-rose-400 text-white ">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
