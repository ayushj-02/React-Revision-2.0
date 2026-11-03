import React from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const options = ["Home", "About Us", "Contact Us", "Cart"];
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          {options.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Header;
