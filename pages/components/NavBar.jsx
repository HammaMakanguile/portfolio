import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const NavBar = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
  };

  return (
    <div className="fixed w-full h-20 shadow-2xl z-[100] md:flex md:items-center md:justify-center">
      <div className="flex justify-between items-center px-4 xl:px-6 md:w-2/3">
        <div className="text-3xl italic mt-4 text-purple-600">HM</div>
        <ul className="hidden md:flex ">
          <Link href="/">
            <li className="ml-4 text-xl uppercase hover:shadow-xl mt-4">
              Home
            </li>
          </Link>

          <Link href="/">
            <li className="ml-4 text-xl uppercase hover:shadow-xl mt-4">
              About
            </li>
          </Link>

          <Link href="/">
            <li className="ml-4 text-xl uppercase hover:shadow-xl mt-4">
              Skills
            </li>
          </Link>

          <Link href="/">
            <li className="ml-4 text-xl uppercase hover:shadow-xl mt-4">
              Products
            </li>
          </Link>
        </ul>

        <div className="mt-4 md:hidden">
          <AiOutlineMenu size={25} onClick={handleClose} />
        </div>

        <div
          className={
            close
              ? "fixed left-0 top-0 w-full h-screen bg-black/70 duration-500 ease-in-out xl:hidden "
              : "fixed left-[-100%] top-0 w-full h-screen bg-black/70 duration-500 ease-in-out"
          }
        >
          <div className={close ?  "fixed top-0 left-0 w-[55%] h-screen bg-white duration-500 ease-in-out":"fixed top-0 left-[-120%] w-[-100%] h-screen bg-white duration-500 ease-in-out"}>
            <div className="flex justify-between w-full pt-4 ">
              <div className="text-4xl pl-3 mb-3 italic text-purple-600">
                HM
              </div>
              <div className="rounded-full mr-4 mb-6 shadow-lg shadow-gray-500 p-3 cursor-pointer">
                <AiOutlineClose size={20} onClick={handleClose} />
              </div>
            </div>

            <div className="m-4  text-2xl border-b-2 ">
              Let's Build Something legendary together !
            </div>

            <ul className="flex flex-col ml-4 tracking-wider uppercase mt-[50px]">
              <Link href="/">
                <li className="my-4 text-xl uppercase hover:shadow-xl mt-4">
                  Home
                </li>
              </Link>

              <Link href="/">
                <li className="my-4 text-xl uppercase hover:shadow-xl mt-4">
                  About
                </li>
              </Link>

              <Link href="/">
                <li className="my-4 text-xl uppercase hover:shadow-xl mt-4">
                  Projects
                </li>
              </Link>

              <Link href="/">
                <li className="my-4 text-xl  hover:shadow-xl mt-4">Skills</li>
              </Link>

              <Link href="/">
                <li className="my-4 text-xl uppercase hover:shadow-xl mt-4">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="text-2xl border-t-2 ml-4 mt-[220px]">
              <div> Let's Connect</div>

              <div className="flex items-center justify-between w-full mt-4 ">
                <div className="rounded-full p-4 shadow-lg shadow-gray-400 ">
                  <FaLinkedinIn color="blue" />
                </div>

                <div className="rounded-full p-4 shadow-lg shadow-gray-400 ">
                  <FaLinkedinIn color="blue" />
                </div>

                <div className="rounded-full p-4 shadow-lg shadow-gray-400 ">
                  <FaLinkedinIn color="blue" />
                </div>

                <div className="rounded-full p-4 mr-4 shadow-lg shadow-gray-400 ">
                  <FaLinkedinIn color="blue" />
                </div>
              </div>
            </div>

            <div className="mt-[30px] flex align-center justify-center">@copywrite Hamma Mahamadou Makanguile
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
