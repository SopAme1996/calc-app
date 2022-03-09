export const cambioBtn = (estadoInicial, newValue, indice) => {
  return estadoInicial.map((value, i) => {
    return i === indice ? newValue : value;
  });
};
