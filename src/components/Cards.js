import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Project 1 Description"
              label="Project 1"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Project 2 Description"
              label="Project 2"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Project 3 Description"
              label="Project 3"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
