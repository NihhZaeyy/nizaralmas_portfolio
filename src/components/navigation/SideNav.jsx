import React from "react";

const SideNav = () => {
  return (
    <div className="fixed z-20 right-0 h-screen w-[400px] hidden ">
      <ul>
        <li>Home</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default SideNav;
