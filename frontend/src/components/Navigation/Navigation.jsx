import { signout } from "../../utils/Icons";
import user from "../../img/user.png";
import { menuItems } from "../../utils/menuItem";
import "./Navigation.css";
import { useState } from "react";

const Navigation = () => {
  return (
    <div
      className="navigation  w-93.5
  bg-[#fcf6f9c7] 
  border-[3px] border-solid border-white 
  backdrop-blur-[4.5px] 
  rounded-4xl 
  flex flex-col justify-between 
  gap-8"
    >
      <div className="user-container h-28 flex items-center gap-4">
        <img
          src={user}
          alt=""
          className="w-20 h-20 rounded-[50%] object-cover"
        />
        <div className="user-details">
          <h2 className="font-semibold text-[24px]">Mike</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items flex flex-col flex-1 gap-3.5">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              className="flex items-center gap-3 cursor-pointer text-[18px]"
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>{signout} Sign Out</li>
      </div>
    </div>
  );
};

export default Navigation;
