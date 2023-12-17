import React from "react";
import mainPhoto from "/src/assets/mainphoto.jpg";
import { BsArrow90DegDown } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="mt-16">
      <div>
        <p></p>
        <BsArrow90DegDown />
      </div>
      <img src={mainPhoto} alt="" />
    </div>
  );
};

export default Profile;
