import React, { useEffect } from "react";
import Button from "./Button";
import "./Button.css";
import { useExtensionContext } from "../Context/ExtentionContex";
const Cards = () => {
  const { setfilterData, filterData, removeItems, cardData, setActiveState } =
    useExtensionContext();
  useEffect(() => {
    setfilterData(cardData);
  }, [cardData]);
  return (
    <div className="container mx-auto">
      <div
        // onClick={toggleClickAll}
        className="grid lg:grid-cols-3 gap-[15px] sm:grid-cols-2 "
      >
        {filterData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col p-[15px] rounded-3xl border-neutral-0 border-1 card_bg w-full h-[190px]"
          >
            <div className="flex justify-center items-center gap-5">
              <img src={item.logo} width={50} height={50} alt="logo" />
              <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="flex">
              <Button
                toggleclick={() => removeItems(item.id)}
                className=" cursor-pointer absolute border-1 py-2 px-5 rounded-full bottom-[.7rem] left-[.7rem]"
                text={`Remove`}
              />
              <div className="absolute right-0 bottom-4">
                <input
                  checked={item.isActive}
                  onChange={() => setActiveState(item.id)}
                  type="checkbox"
                  id={`switch-${index}`}
                />
                <label htmlFor={`switch-${index}`}></label>
                {/* <div class="light"></div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
