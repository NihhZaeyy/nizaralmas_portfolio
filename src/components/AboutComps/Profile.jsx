import React from "react";

import mainPhoto from "/src/assets/mainphoto.jpg";
import hobby from "/src/assets/hobby.jpg";

import { HiArrowDownRight, HiArrowDownLeft } from "react-icons/hi2";

const Profile = () => {
  return (
    <div className="mt-16 flex flex-col px-6 gap-6 md:px-16 lg:px-[150px] h-fit">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="sm:mt-16">
          <p className="text-justify leading-relaxed">
            Yeah it's me Muchammad Nizar Almas Sukirno. I'm passionate about
            programming and began my coding journey back in October 2022. Now,
            as a Full Stack Web Developer, I've crafted robust, compatible, and
            lightning-fast projects that I'm proud of.
          </p>
          <div className="mt-2">
            <HiArrowDownRight size={45} />
          </div>
        </div>
        <img className="w-full sm:w-1/2 h-auto" src={mainPhoto} alt="" />
      </div>
      <div className="flex flex-col sm:flex-row-reverse gap-6">
        <div className="sm:mt-16">
          <p className="text-justify leading-relaxed">
            Finding serenity in places like villas where I can unwind with a cup
            of hot chocolate truly rejuvenates my mind. Breathing in fresh air
            and having a relaxed mindset significantly boosts my productivity
            and sharpens my focus when I work.
          </p>
          <div className="mt-2 flex justify-end">
            <HiArrowDownLeft size={45} />
          </div>
        </div>
        <img className="sm:w-1/2 mt-2" src={hobby} alt="" />
      </div>
    </div>
  );
};

export default Profile;
