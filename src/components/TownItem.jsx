import React from "react";

const TownItem = props => {
  return (
    <li className="town-item item">
      <div
        onClick={() => {
          props.selectCurrent(props.data);
        }}
        className="item-data"
      >
        <h5 className="item-title">{props.data.origName}</h5>
        Данные:
        <br />{" "}
        <span>
          Температура: <b>{Math.round(props.data.main.temp)}&deg;C</b>
        </span>
        <br />{" "}
        <span>
          Ветер: <b>{Math.round(props.data.wind.speed)} м/с</b>
        </span>
      </div>
      <div
        onClick={() => {
          console.log('UniqueKey: ', props.uniqueKey)
          props.delTown(props.uniqueKey);
        }}
        className="del"
      >
        Удалить
      </div>
    </li>
  );
};

export default TownItem;
