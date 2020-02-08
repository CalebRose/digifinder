import React from "react";
import "./monstercard.styles.css";

const MonsterCard = props => {
  //
  return (
    <div className="card-container">
      <img src={props.monster.img} />
      <h2>{props.monster.name}</h2>
      <h5>{props.monster.level}</h5>
    </div>
  );
};

export default MonsterCard;
