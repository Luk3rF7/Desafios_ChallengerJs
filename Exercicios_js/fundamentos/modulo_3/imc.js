/* 
Desenvolva um algoritmo para calcular peso ideal
de uma pessoa o peso ideal de um adulto pode ser calculado
a partir das formula

 * 22 * altura2 (p/ homem)
 * 23 * altura2 (p/ mulheres)
*/

let altura = 1.80;
let sexo = 'Masculino';
let pesoIdeal = 0;

if (sexo === 'Masculino') {
  pesoIdeal = 22 * Math.pow(altura, 2)
} else {
  pesoIdeal = 21 * Math.pow(altura, 2)

}