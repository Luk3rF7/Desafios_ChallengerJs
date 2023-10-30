/*
Crie algoritmos que receba conta do mes ,
faça soma dos valores  e diminua do salario ,como saida
o total de gasto e o quanto ira sobrar no final do mes
*/

// entrada : Conta,Soma,salario,totalGasto e sobra

let salario = 3500;

let gasto = {
  'Aluguel': 1200,
  'Agua': 80,
  'luz': 150,
  'Internet': 90
}

const total = Object.values(gasto).reduce((acc, curr) => {
  return acc + curr
});

console.log(`Sálario é ${salario.toFixed(2)}
valor total de gasto' R$:${total.toFixed(2)}
Restante: R$${salario - total}`)