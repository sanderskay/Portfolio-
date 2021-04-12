import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import sales from "../images/salespic.jpg";
import temp from "../images/img-1.jpg";
import temp2 from "../images/img-2.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              img={sales}
              text="A template sales site, which includes a landing page, pricing, and a sign up page. Project was completed using React, React Router, and Node.js"
              label="REACT SALES WEBSITE"
              path="https://sanderskay.github.io/React-Sales-Website/"
            />
            <CardItem
              img={temp}
              text="Project 2 Description"
              label="Project 2"
              path="/services"
            />
            <CardItem
              img={temp2}
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
