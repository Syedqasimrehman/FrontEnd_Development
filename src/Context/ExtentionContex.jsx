import React, { createContext, useContext, useState } from "react";
import { cards } from "../constants";

const extensionContext = createContext();

export const useExtensionContext = () => useContext(extensionContext);

export const ExtensionContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [filterData, setfilterData] = useState(cards);
  const [cardData, setcardData] = useState(cards);

  const toggleSetDark = () => {
    setIsDark(!isDark);
  };

  const toggleClickAll = () => {
    setfilterData(cards);
  };

  const toggleActive = () => {
    setfilterData(cardData.filter((item) => item.isActive === true));
  };
  const toggleInActive = () => {
    setfilterData(cardData.filter((item) => item.isActive === false));
  };

  const setActiveState = (id) => {
    const updateData = cardData.map((item) =>
      item.id === id ? { ...item, isActive: !item.isActive } : item
    );
    setcardData(updateData);
   
  };

  const removeItems = (id) => {
    const updateCard = cardData.filter((item) => item.id !== id);
    setcardData(updateCard);
    setfilterData(updateCard);
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
    toggleClickAll,
    setfilterData,
  };

  return (
    <extensionContext.Provider value={defaultData}>
      {children}
    </extensionContext.Provider>
  );
};
