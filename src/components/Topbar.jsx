import React from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import SmallScreenMenu from "./SmallScreenMenu";
import { Link } from "react-scroll";

const Topbar = () => {
  const [icon, setIcon] = React.useState(false);
  return (
    <div className=" p-1 flex flex-row  items-center justify-between bg-gradient-to-b from-[#fdede9] to-[#Fcdbdc] shadow-xl">
      <div className="flex gap-2 sm:gap-5 items-center">
        <img
          src="./logo.png"
          height={100}
          width={100}
          className="rounded-full"
        />
        <h1 className="text-3xl sm:text-6xl font-black text-rose-900 ">
          Radiant Luxe by Savi
        </h1>
      </div>
      <div>
        <ul className="hidden lg:flex gap-7 font-semibold font-mono text-lg text-rose-900">
          <li>
            <Link
              className="cursor-pointer"
              to="home"
              smooth={true}
              offset={200}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer"
              to="about"
              smooth={true}
              offset={200}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer"
              to="services"
              smooth={true}
              offset={200}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer"
              to="contact"
              smooth={true}
              offset={200}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden flex gap-7 font-semibold font-mono text-lg text-rose-900">
        {!icon ? (
          <TiThMenuOutline size={48} onClick={() => setIcon(!icon)} />
        ) : (
          <>
            <ImCross
              size={48}
              onClick={() => setIcon(!icon)}
              className="relate"
            />
            <SmallScreenMenu name="Home" link="home" number={"top-22"} />
            <SmallScreenMenu name="About" link="about" number={"top-32"} />
            <SmallScreenMenu
              name="Services"
              link="services"
              number={"top-42"}
            />
            <SmallScreenMenu name="Contact" link="contact" number={"top-52"} />
          </>
        )}
      </div>
    </div>
  );
};

export default Topbar;
