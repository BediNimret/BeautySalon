import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-col-reverse sm:flex sm:flex-row justify-around items-center  ">
        <div className="flex flex-col jistify-center items-center">
          <div className="text-4xl sm:text-5xl">
            <h2 className="text-rose-700 pb-6 ">
              Experience <span className="text-black">the best</span>
            </h2>
            <div className="flex iteams-center justify-start gap-3">
              <img src="./asterisk.png" className="w-10 h-10"></img>
              <h2>Beauty Services</h2>
            </div>
          </div>
          <h1 className="text-4xl font-black text-rose-900 w-fit px-2 sm:w-120 pt-10">
            Enhance your natural beauty with our expert beauty services, from
            skincare to styling. Pamper yourself with personalized treatments
            for a radiant glow
          </h1>
          <div className="pt-10 ">
            <button>
              <Link
                className="cursor-pointer"
                to="contact"
                smooth={true}
                offset={200}
              >
                Contact Us
              </Link>
              <div class="star star-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 784.11 815.53"
                >
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,
                       378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,
                       407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,
                       -29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </svg>
              </div>
              <div class="star star-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 784.11 815.53"
                >
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,
                       407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,
                       -210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,
                       -197.69 -392.06,-407.78z"
                  />
                </svg>
              </div>
              <div class="star star-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 784.11 815.53"
                >
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,
                       378.41 -392.05,407.78 207.96,29.37 371.12,197.68 
                       392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,
                       -407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </svg>
              </div>
              <div class="star star-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 784.11 815.53"
                >
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,
                       29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 
                       392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </svg>
              </div>
              <div class="star star-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 784.11 815.53"
                >
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,
                       29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37
                       392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  />
                </svg>
              </div>
              <div class="star star-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 784.11 815.53"
                >
                  <path
                    class="fil0"
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,
                       29.37 371.12,197.68 392.05,407.74 20.93,
                       -210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,
                       -197.69 -392.06,-407.78z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex  justify-between items-end xl:gap-40  pt-4">
          <img src="./hero-images.png" className="w-[380px] " />
          <Link
            to="about"
            smooth={true}
            offset={200}
            className="hidden sm:flex pb-4"
          >
            <FaAngleDoubleDown
              size={50}
              className="hidden xl:flex text-rose-900"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
