/* 
Escreva uma função em JavaScript
 que realize a conversão de uma 
 temperatura fornecida em graus 
 Fahrenheit (F) para Celsius (C).
*/

function convertFparaC(f) {
  let celsius = (f - 32) * (5 / 9)

  return celsius
}