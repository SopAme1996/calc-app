import React from "react";

export const DisplayCalculadora = ({ value, referencia }) => {
  return (
    <div className="display">
      <p ref={referencia}>{value}</p>
    </div>
  );
};
