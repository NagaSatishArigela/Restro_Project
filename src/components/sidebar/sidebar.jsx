import React, { useState } from "react";
import "./index.css";
import reactLogo from "../../assets/imgs/react.svg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={reactLogo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <NavLink
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
                to={item.path}
              >
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
            <span>Sign Out</span>
          </div>
        </div>
      </motion.div>
      {children}
    </>
  );
};

export default Sidebar;
