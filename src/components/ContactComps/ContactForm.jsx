import React from "react";
import MagneticHover from "../../utils/MagneticHover";

const ContactForm = () => {
  return (
    <div className="mt-10 px-6 flex flex-col gap-4 md:px-20 lg:px-[150px] font-[Poppins]">
      <div className="flex items-center gap-2">
        <div className="w-[6px] h-[6px] rounded-full bg-[#a6a6a6]"></div>
        <p className="font-medium">CONTACT ME</p>
      </div>
      <form>
        <div className="border-t-[#a6a6a6] border-t-2">
          <div className="flex gap-8 mt-6 items-center">
            <span className="text-sm text-[#222222]">01</span>
            <label className="text-xl font-medium">What is your name?</label>
          </div>
          <div className="mt-1 pl-10  mb-6">
            <input
              className="px-2 py-3 text-xl focus:outline-none focus:border-white w-full h-fit text-[#444444]"
              type="text"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div className="border-t-[#a6a6a6] border-t-2">
          <div className="flex gap-8 mt-6 items-center">
            <span className="text-sm text-[#222222]">02</span>
            <label className="text-xl font-medium">What's your email?</label>
          </div>
          <div className="mt-1 pl-10  mb-6">
            <input
              className="px-2 py-3 text-xl focus:outline-none focus:border-white w-full h-fit text-[#444444]"
              type="email"
              placeholder="your_address@email.com"
            />
          </div>
        </div>
        <div className="border-t-[#a6a6a6] border-t-2">
          <div className="flex gap-8 mt-6 items-center">
            <span className="text-sm text-[#222222]">03</span>
            <label className="text-xl font-medium">
              What specific service do you need?
            </label>
          </div>
          <div className="mt-1 pl-10  mb-6">
            <input
              className="px-2 py-3 text-xl focus:outline-none focus:border-white w-full h-fit text-[#444444]"
              type="text"
              placeholder="Web Development"
            />
          </div>
        </div>
        <div className="border-y-[#a6a6a6] border-y-2">
          <div className="flex gap-8 mt-6 items-center">
            <span className="text-sm text-[#222222]">04</span>
            <label className="text-xl font-medium">Your message</label>
          </div>
          <div className="mt-1 pl-10  mb-6">
            <input
              className="px-2 py-3 text-xl focus:outline-none focus:border-white w-full h-fit text-[#444444]"
              type="text"
              placeholder="Hi Nizar, can you help me to create..."
            />
          </div>
        </div>
        <div className="mt-16 flex justify-center items-center">
          <MagneticHover>
            <button
              type="submit"
              className="border-[#a6a6a6] px-10 py-4 rounded-[40px] border font-medium hover:text-white hover:bg-[#222222] duration-300 text-xl"
            >
              Sent
            </button>
          </MagneticHover>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;