import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import sales from "../images/salespic.jpg";
import crypto from "../images/cryptothumbnail.jpg";
import product from "../images/project2thumbnail.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              img={sales}
              text="A template sales site, which includes a landing page, pricing, and a sign up page. Project was completed using React, React Router, and Node.js."
              label="REACT SALES WEBSITE"
              path="https://sanderskay.github.io/React-Sales-Website/"
            />
            <CardItem
              img={crypto}
              text="A website for searching through a database of up to 100 different cryptocurrencies and see up to date information on them. The project uses React, CSS, and Axios API to get the info for the site."
              label="CRYPTO SEARCH"
              path="https://sanderskay.github.io/Crypto-Tracker/"
            />
            <CardItem
              img={product}
              text="A custom template product site, which includes custom cards and buttons, and uses Router for instant load times between pages.Project was completed using React, React Router, and Node.js."
              label="TEMPLATE PRODUCT SITE"
              path="https://sanderskay.github.io/Template-React-Portfolio-Project/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
