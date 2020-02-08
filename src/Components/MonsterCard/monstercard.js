import React from "react";
import "./monstercard.styles.css";

const MonsterCard = props => {
  //
  return (
    <div className="card-container">
      <div className="image">
        <img src={props.monster.img} />
      </div>
      <h3>{props.monster.name}</h3>
      <h5>{props.monster.level}</h5>
    </div>
  );
};

export default MonsterCard;
