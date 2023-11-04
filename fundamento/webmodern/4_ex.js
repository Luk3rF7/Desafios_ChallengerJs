/* 
Crie uma função que recebe um número 
(de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar
"fevereiro", pois este é o 2° mês.
*/

function mounthFind(n) {
  switch (n) {
    case 1:
      return "January";
    case 2:
      return "February"
    case 3:
      return "March"
    case 4:
      return "April"
    case 5:
      return "May"
    case 6:
      return "june"
    case 7:
      return "july"
    case 8:
      return "August"
    case 9:
      return "September"
    case 10:
      return "October"
    case 11:
      return "November"
    case 12:
      return "December"
  }
}
console.log(mounthFind(10));

function findMount(n) {
  if (n > 13) {
    return "Mounth is not exists!"
  }
  const mouth = [
    "janurary", "February", "March", "April", "May", "june",
    "july", "August", "September", "October", "November", "December"]


  return mouth[--n];
}

console.log(findMount(12))