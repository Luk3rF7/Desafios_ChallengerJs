function contaLetra(texto, letra) {
  let count = 0;
  texto = texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) == letra) {
      count++
    }
  }
  return count
}

console.log(contaLetra('abacate', 'a'));