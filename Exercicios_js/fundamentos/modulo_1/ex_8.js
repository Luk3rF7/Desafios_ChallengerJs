/* 
Escreva uma função que informe o retorno de um investimento(montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.

Use a fórmula: M = C * (1 + i)t
Onde:

C = Capital inicial investido
i = Taxa de juros, em percentual
t = Tempo do investimento, em meses
Exiba o resultado com duas casas decimais.
*/

function retornoInvestimento(c, i, t) {
  let m = c * (1 + i) ** t;
  return m
}

let capital = 1000
let txJuros = 0.5 / 100
let periodo = 24
let calculo = retornoInvestimento(capital, txJuros, periodo);

console.log(calculo)