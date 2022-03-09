import React, { useRef, useState } from "react";
import { BtnCalculadora } from "../Components/BtnCalculadora";
import { DisplayCalculadora } from "../Components/DisplayCalculadora";
import { cambioBtn } from "../utils/cambioBtn";

const estadoInicial = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const excluir = ["AC", "+/-", "%", "/", "*", "-", "+", "=", "C"];

export const CalculadoraScreen = () => {
  const [btnValue, setBtnValue] = useState(estadoInicial);
  const [numero, setNumero] = useState("0");
  const displayRef = useRef(null);

  const handleChangeDisplay = (value) => {
    let concatenar = "";
    if (!excluir.includes(value)) {
      setBtnValue(cambioBtn(estadoInicial, "C", 0));

      if (!numero.includes(".")) {
        if (value === ".") {
          concatenar = numero + value;
        } else {
          concatenar = (numero === "0" ? "" : numero) + value;
        }
        setNumero(concatenar);
      } else {
        concatenar = numero + (value === "." ? "" : value);
      }
      setNumero(concatenar);
    } else {
    }
  };
  return (
    <div className="container">
      <DisplayCalculadora value={numero} referencia={displayRef} />
      <div className="container-btn">
        {btnValue.map((btn, indice) => {
          return (
            <BtnCalculadora
              key={indice}
              id={indice}
              value={btn}
              inputSelect={handleChangeDisplay}
            />
          );
        })}
      </div>
    </div>
  );
};
