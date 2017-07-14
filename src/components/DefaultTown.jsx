import React from "react";

const DefaultTown = props => {
  return (
    <li
      onClick={() => {
        props.selectCurrent(props.defaultTown);
      }}
      className="default-town item"
    >
      <h5 className="item-title">Данные по местоположению:</h5>
      <br />{" "}
      <span>
        Температура: <b>{Math.round(props.defaultTown.main.temp)}&deg;C</b>
      </span>
      <br />{" "}
      <span>
        Ветер: <b>{Math.round(props.defaultTown.wind.speed)} м/с</b>
      </span>
    </li>
  );
};

export default DefaultTown;
