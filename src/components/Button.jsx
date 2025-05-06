import React from "react";

// import { useExtensionContext } from "../Context/ExtentionContex";
const Button = ({ src, toggleclick, className,text}) => {
  // const { toggleSetDark, isDark } = useExtensionContext();
  return (
    <div>
      <button className={`cursor-pointer ${className}` } onClick={toggleclick} >
      <img src={src} alt="" />
      {text}
      </button>
    </div>
  );
};

export default Button;

// className={`p-2 rounded-md ${
//   isDark ? "bg-neutral-200" : "bg-neutral-700"
// }`}
// onClick={toggleSetDark}
// >
// <img src={isDark ? moon : sun} alt="" />