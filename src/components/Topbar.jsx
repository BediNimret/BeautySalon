import React from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import SmallScreenMenu from "./SmallScreenMenu";
import { Link } from "react-scroll";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const Topbar = () => {
  const [icon, setIcon] = React.useState(false);
  const FirstThreeIconClass =
    "flex  justify-around items-center space-x-1 hover:text-rose-800 font-mono";
  const style = "flex  justify-between items-center";
  return (
    <>
      <div
        className="flex flex-row px-4 items-center justify-around sm:justify-center sm:space-x-4   md:space-x-14 lg:space-x-32 "
        id="top"
      >
        <div className="flex flex-col sm:flex-row  items-center justify-start w-fit sm:space-x-4 md:space-x-14 lg:space-x-32">
          <div className={FirstThreeIconClass}>
            <a href="mailto:Radiantluxebysavi@gmail.com" className={style}>
              <AiTwotoneMail className="mr-2" /> Radiant luxe
            </a>
          </div>

          <div className={FirstThreeIconClass}>
            <a href="tel:+919205909858" className={style}>
              <AiFillPhone
                style={{ transform: "rotate(100deg)" }}
                className="mr-2"
              />
              +919205909858
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  items-center justify-end w-fit  sm:space-x-4 md:space-x-14 lg:space-x-32">
          <div className={FirstThreeIconClass}>
            <a
              href="https://www.google.com/maps/place/28%C2%B041'58.0%22N+77%C2%B025'32.7%22E/@28.6994385,77.4231737,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.6994385!4d77.4257486?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              id="smallLinkButton"
              className={style}
            >
              <BiMap className="mr-2" />
              Raj nagar
            </a>
          </div>
          <div className={FirstThreeIconClass}>
            <a
              href="https://www.google.com/maps/place/28%C2%B039'45.0%22N+77%C2%B023'04.8%22E/@28.6624991,77.3820936,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.6624991!4d77.3846685?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              id="smallLinkButton"
              className={style}
            >
              <BiMap className="mr-2" />
              Vasundhara Branch
            </a>
          </div>
        </div>
      </div>

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
                to="top"
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
              <SmallScreenMenu
                name="Contact"
                link="contact"
                number={"top-52"}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Topbar;
