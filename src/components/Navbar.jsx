import React from "react";
import Logo from "../assets/images/Logo.jsx";
import Button from "./Button";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import { useExtensionContext } from "../Context/ExtentionContex";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { toggleSetDark, isDark } = useExtensionContext();
  return (
    <div className={`py-4  justify-items-center `}>
      <div
        className={`container ${
          isDark
            ? "border-neutral-200 bg-neutral-100"
            : "bg-neutral-800 border-none"
        } border-1 py-2 px-5 flex justify-between items-center rounded-2xl`}
      >
        <div>
          <Logo
            className={`logo ${
              isDark ? "fill-neutral-900" : "fill-neutral-200"
            }`}
          />
        </div>
        <div>
          <Button
            className={`p-2 rounded-md ${
              isDark ? "bg-neutral-200" : "bg-neutral-700"
            }`}
            src={`${isDark ? moon : sun}`}
            toggleclick={toggleSetDark}
          />
        </div>
      </div>
      <div className=" flex flex-wrap w-[85%] py-2 mt-[1rem] gap-3 to_center ">
        <h3 className="text-[19px] text-center mx-auto font-medium">Extension list</h3>
        <div className="flex flex-wrap text-center mx-auto justify-center ">
          <nav>
            <ul className="">
              <Link to="/">All</Link>
              <Link to="/active">Active</Link>
              <Link to="/inactive">Inactive</Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
