import React from "react";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.img} alt={props.alt} className="card_img" />
        <div className="card_info">
          <span className="card_category">A netflix Series</span>
          <h3 className="card_title">{props.title}</h3>
          <a href={props.link} target="blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
