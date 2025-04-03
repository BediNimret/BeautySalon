import React from "react";
import { Link } from "react-scroll";

const SmallScreenMenu = ({ name, link, number, smallScreen }) => {
  return (
    <div
      className={`bg-slate-600 w-[70%] border-l-12   border-slate-700 absolute ${number} ${smallScreen} right-1`}
    >
      <div className=" p-2 bg-[#fdede9] ">
        <Link to={link} smooth={true} offset={200} className="cursor-pointer">
          {name}
        </Link>
      </div>
    </div>
  );
};

export default SmallScreenMenu;
