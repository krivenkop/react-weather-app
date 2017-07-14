import React from "react";

const WarnTownName = props => {
  return (
    <div className="warn">
      <h3>Вы ввели некорректные данные</h3>

      <div className="btn-warn-wrapper">
        <button
          onClick={() => props.setWarn()}
          type="button"
          className="btn-warn left"
        >
          Хорошо
        </button>
        <button
          onClick={() => props.setNeverDisplay()}
          type="button"
          className="btn-warn right"
        >
          Больше не показывать
        </button>
      </div>
    </div>
  );
};

export default WarnTownName;
