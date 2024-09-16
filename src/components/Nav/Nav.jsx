import React from "react";
import littlePic from "../../assets/little_Je-logo.jpg";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [mobilenav, setMobileNav] = useState(false);
  const [opennav, setOpenNav] = useState(false);

  const openNav = () => {
    setMobileNav(true);
    setOpenNav(true);
  };

  const closeNav = () => {
    setMobileNav(false);
    setOpenNav(false);
  };

  return (
    <div className="flex py-3 md:ml-[109px] px-2 md:px-0 items-start md:items-center justify-between md:justify-normal md:flex-row md:gap-20">
      <div className="flex flex-row items-center gap-2">
        <img src={littlePic} alt="" />
        <span className="text-gray-500 text-xl font-NanumGothic ">
          EmmyJ Tech Solutions
        </span>
      </div>
      <div className="hidden md:flex flex-row gap-2 text-gray-500 md:gap-11 text-xl font-semibold">
        <Link
          onClick={closeNav}
          to={"/"}
          className="hover:text-green-500 duration-500"
        >
          Home
        </Link>
        <Link
          onClick={closeNav}
          to={"/Services"}
          className="hover:text-green-500 duration-500"
        >
          Services
        </Link>
        <Link
          onClick={closeNav}
          to={"/Testimonials"}
          className="hover:text-green-500 duration-500"
        >
          Testimonials
        </Link>
        <Link
          onClick={closeNav}
          to={"/Experience"}
          className="hover:text-green-500 duration-500"
        >
          Experience
        </Link>
        <Link
          onClick={closeNav}
          to={"/Contact"}
          className="hover:text-green-500 duration-500"
        >
          Contact
        </Link>
      </div>
      <div className="hidden md:flex flex-row gap-7 text-2xl">
        <IoIosMail className="text-gray-500 hover:text-green-500 duration-500" />
        <FaXTwitter className="text-gray-500 hover:text-green-500 duration-500" />
        <FaFacebook className="text-gray-500 hover:text-green-500 duration-500" />
      </div>
      <div className="flex flex-col gap-4 md:hidden">
        <div className="text-5xl">
          {opennav ? (
            <MdClose className="ml-14" onClick={closeNav} />
          ) : (
            <GiHamburgerMenu onClick={openNav} />
          )}
        </div>
        {mobilenav ? (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 text-gray-500 md:gap-11 text-xl font-semibold">
              <Link
                onClick={closeNav}
                to={"/"}
                className="hover:text-green-500 duration-500"
              >
                Home
              </Link>
              <Link
                onClick={closeNav}
                to={"/Services"}
                className="hover:text-green-500 duration-500"
              >
                Services
              </Link>
              <Link
                onClick={closeNav}
                to={"/Testimonials"}
                className="hover:text-green-500 duration-500"
              >
                Testimonials
              </Link>
              <Link
                onClick={closeNav}
                to={"/Experience"}
                className="hover:text-green-500 duration-500"
              >
                Experience
              </Link>
              <Link
                onClick={closeNav}
                to={"/Contact"}
                className="hover:text-green-500 duration-500"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-row gap-7 text-2xl">
              <IoIosMail className="text-gray-500 hover:text-green-500 duration-500" />
              <FaXTwitter className="text-gray-500 hover:text-green-500 duration-500" />
              <FaFacebook className="text-gray-500 hover:text-green-500 duration-500" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Nav;
