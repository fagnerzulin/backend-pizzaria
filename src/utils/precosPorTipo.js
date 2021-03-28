module.exports = {
  valores(preco, tipo) {
    switch (tipo) {
      case "promocao":
        return arrayPrecos(preco);
      case "vegetariana":
        return arrayPrecos(preco);
      case "premium":
        return arrayPrecos(preco);
      default:
        break;
    }
  },
};

function arrayPrecos(valorIni) {
  const precos = [];
  for (let i = 1; i <= 3; i++) {
    const valor = valorIni + 7 * i;
    precos.push(valor);
  }
  return precos;
}
