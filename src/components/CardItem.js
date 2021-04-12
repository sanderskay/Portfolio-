import React from "react";
import { Link } from "react-router-dom";

function CardItem({
  path,
  img,
  text,
  label,}) {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" href={path} target='_blank'>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img
              src={img}
              alt="Project Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </a>
      </li>
      
    </>
  );
}

export default CardItem;
