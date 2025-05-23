import React, { useEffect } from "react";
import Topbar from "./Topbar";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import Lowerpannel from "./Lowerpannel";

const Layout = () => {
  const [service, setService] = React.useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className=" bg-gradient-to-b from-[#Fcdbdc] to-[#eed6c2]">
      <Topbar />
      <Home />
      <About />
      <Services setService={setService} />
      <Contact service={service} />
      <Lowerpannel />
    </div>
  );
};

export default Layout;
