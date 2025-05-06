import React from "react";
import Active from "./Active";
import Inactive from "./Inactive";
import Button from "./Button";
import { Link } from "react-router-dom";
import { cards } from "../constants";
const Cards = () => {
  return (
    <div className="container mx-auto">
      
      <div className="grid col-3">
        <h1>hi</h1>
        {cards.map((itme) => (
          <div key={itme.id} className="w-[200px] h-20 border-sky-100 rounde ">
            <div>
              <img src={itme.logo} height={40} width={40} alt="" />
              <h2>{itme.name}</h2>
              <p>{itme.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
