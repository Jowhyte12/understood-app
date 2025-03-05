"use client";
import Link from "next/link";
import { IoLogoBitbucket } from "react-icons/io5";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineManageSearch } from "react-icons/md";
const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-950 py-4">
      <div className="flex justify-center space-x-20 relative">
        <h1 className=" absolute left-8 text-purple text-4xl flex font-serif"><IoLogoBitbucket className="text-white text-4xl" />Understood</h1>
        <FlyoutLink flyoutContent={About}>
          <span className="flex items-center space-x-1">
            <span>About</span>
            <IoIosArrowDown />
          </span>
        </FlyoutLink>

        <FlyoutLink flyoutContent={Explorewithus}>
          <span className="flex items-center space-x-1">
            <span>Explore</span>
            <IoIosArrowDown />
          </span>
        </FlyoutLink>

        <div className="absolute right-4 ">
          <button onClick={()=> setisopen(!isopen)}>
          <MdOutlineManageSearch   className="text-5xl m-0 text-white " />
          </button>
          {isopen && (<div className="absolute top-20   transform -translate-x-1/2  text-white p-4 shadow-xl  bg-blue-950">
  <ul className="flex flex-col space-y-4 right-12">
    <li className="hover:bg-green"><Link href="/page1">Home</Link></li>
    <li className="hover:bg-green"><Link href="/page1">About</Link></li>
    <li className="hover:bg-green"><Link href="/page1">services</Link></li>
    <li className="hover:bg-green"><Link href="/page1">customer</Link></li>
  </ul>
  </div>
  )}
        </div>
      </div>
    </div>
  );
};

const FlyoutLink = ({
  children,
  flyoutContent,
}: {
  children: React.ReactNode;
  flyoutContent: React.ComponentType;
}) => {
 
  const [open, setOpen] = useState(false);
  const showFlyout = open && flyoutContent;

  return (
    <div className="relative">
      {/* Link with text and arrow icon */}
      <a
        className="text-2xl font-extrabold text-white cursor-pointer flex items-center space-x-1"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </a>

      {/* Flyout Content */}
      {showFlyout && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2  text-black p-4 shadow-xl  bg-[url('/13.jpg')] bg-cover bg-center bg-no-repeat">
          {React.createElement(flyoutContent)}
        </div>
      )}
    </div>
  );
};

const Explorewithus = () => {
  return (
    <div className="h-100 w-200 p-6 shadow-xl">Explore with us</div>
  );
};

const About = () => {
  return (
    <div className="h-100 w-200 shadow-xl p-4">
      <h2 className="font-bold">What is Lorem Ipsum?</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text since
        the 1500s.
      </p>
    </div>
  );
};

  
export default Navbar;
