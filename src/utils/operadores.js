let valorActual = 0;

export const operadores = (numero, operador) => {
  switch (operador) {
    case "+":
      valorActual += parseFloat(numero);
      return valorActual;
    case "/":
      break;
    case "-":
      break;
    case "*":
      break;
    case "=":
      break;
    default:
      break;
  }
};
