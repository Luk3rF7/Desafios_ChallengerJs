/* 
sabendo que o fuso horario da frança em relação
ao Brasil e de 5horas(no horario de verao na França)
elaborar um programa que leia a hora no brasil
e informe a hora na frança
*/

let horaBrasil = 22;
let minutos = 28;
let horaFranca = horaBrasil + 5

if (horaFranca > 24) {
  horaFranca = horaFranca - 24
}

console.log(`Brasil: ${horaBrasil}:${minutos}
  França: ${horaFranca}:${minutos}
`)