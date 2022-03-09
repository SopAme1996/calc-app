import React from "react";

export const BtnCalculadora = ({ id, value, inputSelect }) => {
  return (
    <button className={`btn btn_${id}`} onClick={() => inputSelect(value)}>
      {value}
    </button>
  );
};
