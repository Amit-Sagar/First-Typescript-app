import React from "react";
import { CgMail } from "react-icons/cg";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto flex gap-20 ">
        <img
          src="https://shopkaro.today/wp-content/uploads/2022/08/shopkaro-logo.png"
          className="h-40"
        />
        <div className="text-white text-xl font-bold ">
          <p className="hover:text-green-400 cursor-pointer">Home</p>
          <p className="hover:text-green-400 cursor-pointer">Store</p>
          <p className="hover:text-green-400 cursor-pointer">About</p>
          <p className="hover:text-green-400 cursor-pointer">Contact Us</p>
        </div>
        <div className="text-white text-xl font-bold ">
          <p className="hover:text-green-400 cursor-pointer flex gap-1 items-center">
            <CgMail className="text-2xl" /> Gmail
          </p>
          <p className="hover:text-green-400 cursor-pointer flex gap-1 items-center">
            <AiFillFacebook />
            Facebook
          </p>
          <p className="hover:text-green-400 cursor-pointer flex gap-1 items-center">
            <AiFillLinkedin />
            LinkedIn
          </p>
        </div>
        <div className="text-white text-xl font-bold ">
          <p className="hover:text-green-400 cursor-pointer">Careers</p>
          <p className="hover:text-green-400 cursor-pointer">
            Terms & Condition
          </p>
        </div>
      </div>
      <p className="text-white text-center my-3">Copyright@2023</p>
    </div>
  );
};

export default Footer;
