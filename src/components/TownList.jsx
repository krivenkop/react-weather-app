import React from "react";
import TownItem from "./TownItem";
import DefaultTown from "./DefaultTown";
const _ = require("lodash");

const TownList = props => {
  if (_.isEmpty(props.towns)) {
    return (
      <ul className="town-list">
        <DefaultTown
          defaultTown={props.defaultTown}
          selectCurrent={props.selectCurrent}
        />
      </ul>
    );
  }
  let townItems = props.towns.map(el => {
    el.town.origName = el.origName;
    return (
      <TownItem
        data={el.town}
        selectCurrent={props.selectCurrent}
        key={el.uniqueKey}
        uniqueKey={el.uniqueKey}
        delTown={props.delTown}
      />
    );
  });
  return (
    <ul className="town-list">
      <DefaultTown
        defaultTown={props.defaultTown}
        selectCurrent={props.selectCurrent}
      />
      {townItems}
    </ul>
  );
};

export default TownList;
