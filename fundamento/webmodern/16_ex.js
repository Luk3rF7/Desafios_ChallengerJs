/* 
A fim de manter o calendário anual ajustado com o movimento de 
translação da Terra, criou-se os anos bissextos,
que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se 
ele é multiplo de 4. Não pode ser múltiplo de 100,exceto se 
for também múltiplo de 400.Com isso em mente, desenvolva
uma função que recebe um número correspondente a um ano 
e retorna se ele é bissexto ou não.

*/
function yearBissexto(year) {
  if (year % 4 === 0) {
    return 'ano e bissexto!'
  } else {
    return 'não e bissexto'
  }
}

console.log(yearBissexto(2020))

// exemplo :

function anoBi(year) {
  const divPerFour = year % 4 === 0
  const divPerHundred = year % 100 === 0
  const divPerForhundred = year % 400 === 0
}