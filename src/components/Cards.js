import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>These are Template cards</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-5.jpg"
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Text for the card will go here."
              label="Template label"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
