import React from "react";
import { SidebarData } from "../../Data/data";
import "./index.css";

const SideBarModel = () => {
  return (
    <>
      <div className="side">
        <ul className="sideList">
          {SidebarData.map((c, i) => {
            return (
              <div key={i} className="menuList">
                <span className="iconView">
                  <c.icon />
                </span>
                <li className="listView">
                  {c.heading}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBarModel;
