import React, { createContext, useContext, useState } from "react";
import { cards } from "../constants";

const extensionContext = createContext();

export const useExtensionContext = () => useContext(extensionContext);

export const ExtensionContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [filterData, setfilterData] = useState(cards);
  const [cardData, setcardData] = useState(cards);
  const [navActive, setnavActive] = useState("all");

  const toggleSetDark = () => {
    setIsDark(!isDark);
  };

  const toggleClickAll = () => {
    setnavActive("all");
    setfilterData(cards);
  };

  const toggleActive = () => {
    setfilterData(
      cardData.filter((item) => {
        item.isActive === true;
      })
    );
  };
  const toggleInActive = () => {
    setfilterData(
      cardData.filter((item) => {
        item.isActive === false;
      })
    );
  };

  const setActiveState = (id) => {
    const updateData = cardData.map((index) =>
      index.id === id ? { ...index, isActive: !index.isActive } : index
    );
    setcardData(updateData);
    setfilterData(
      filterData.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  const removeItems = (id) => {
    setcardData(cards.filter((item) => item.id !== id));
  };
  const defaultData = {
    isDark,
    toggleSetDark,
    toggleActive,
    toggleInActive,
    setActiveState,
    removeItems,
    cardData,
    filterData,
    navActive,
    toggleClickAll,
  };

  return (
    <extensionContext.Provider value={defaultData}>
      {children}
    </extensionContext.Provider>
  );
};
