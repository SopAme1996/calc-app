import React, { useState } from "react";
import { BtnCalculadora } from "../Components/BtnCalculadora";
import { DisplayCalculadora } from "../Components/DisplayCalculadora";
import { cambioBtn } from "../utils/cambioBtn";
import { operadores } from "../utils/operadores";

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
  let operadorActivo = false;

  const handleChangeDisplay = (value) => {
    let concatenar = "";
    if (!excluir.includes(value)) {
      setBtnValue(cambioBtn(estadoInicial, "C", 0));
      if (!numero.includes(".")) {
        if (value === ".") {
          concatenar = numero + value;
        } else {
          console.log(operadorActivo);
          if (!operadorActivo) {
            concatenar = (numero === "0" ? "" : numero) + value;
          } else {
            concatenar = numero;
            operadorActivo = false;
          }
          console.log(concatenar);
        }
      } else {
        concatenar = numero + (value === "." ? "" : value);
      }
      setNumero(concatenar);
    } else {
      operadorActivo = true;
      const resultado = operadores(numero, value);
      setNumero(resultado.toString());
    }
  };
  return (
    <div className="container">
      <DisplayCalculadora value={numero} />
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
