import React from "react";
const _ = require("lodash");

const CurrentTown = props => {
  if (!_.isEmpty(props.current)) {
    return (
      <div className="current-town">
        <h4>
          Вы выбрали город:{" "}
          <b>
            {props.current.origName !== undefined
              ? props.current.origName
              : props.current.name}
          </b>
        </h4>
        <div className="forecast">
          <ul>
            <li>
              <i className="fa fa-thermometer-half" /> Температура:{" "}
              {Math.round(props.current.main.temp)}&deg;C
            </li>
            <li>
              <i className="fa fa-tint" /> Влажность:{" "}
              {props.current.main.humidity}%
            </li>
            <li>
              <i className="fa fa-cloud" /> Ветер:{" "}
              {props.current.wind.speed.toFixed(2)} м/с
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="current-town">Выберите город или добавьте новый</div>
    );
  }
};

export default CurrentTown;
