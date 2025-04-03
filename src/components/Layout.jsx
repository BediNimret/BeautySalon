import React from "react";
import Topbar from "./Topbar";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";

const Layout = () => {
  const [service, setService] = React.useState([]);
  return (
    <div className=" bg-gradient-to-b from-[#Fcdbdc] to-[#eed6c2]">
      <Topbar />
      <Home />
      <About />
      <Services setService={setService} />
      <Contact service={service} />
    </div>
  );
};

export default Layout;
