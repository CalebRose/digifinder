import React, { Component } from "react";
import "./card-list.styles.css";
import MonsterCard from "../MonsterCard/monstercard";

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <MonsterCard key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
