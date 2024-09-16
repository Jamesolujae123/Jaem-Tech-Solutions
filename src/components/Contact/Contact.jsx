import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-14 flex flex-col gap-11 justify-center items-center">
      <span className="text-2xl font-bold ">Let's Get to Work Today</span>
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <form action="" className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                className="bg-white border-[1px] w-[260px] pt-1 h-[47px] border-black outline-none pl-2"
                placeholder="Name..."
                name=""
                id=""
              />
              <input
                type="email"
                className="bg-white border-[1px] h-[47px] pt-1 border-black outline-none pl-2"
                placeholder="Email..."
                name=""
                id=""
              />
            </div>
            <div>
              <textarea
                name=""
                className="bg-white border-[1px] pt-1 border-black outline-none pl-2"
                cols="32"
                rows="5"
                placeholder="Your Question"
                id=""
              ></textarea>
            </div>
            <div className="flex flex-col gap-3 self-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-blue-500 duration-500 text-white px-2 py-3"
              >
                SEND
              </button>
              <div className="flex flex-row gap-7 text-2xl self-center">
                <IoIosMail className="text-gray-500 hover:text-green-500 duration-500" />
                <FaXTwitter className="text-gray-500 hover:text-green-500 duration-500" />
                <FaFacebook className="text-gray-500 hover:text-green-500 duration-500" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
