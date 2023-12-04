// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/* 
Temos uma série de objetos que representam diferentes pessoas em
nossas listas de contatos.

Uma lookUpProfile função que recebe name uma
propriedade ( prop) como argumentos foi pré-escrita para você.

A função deve verificar se name é um contato real firstNamee
se a propriedade fornecida ( prop) é uma propriedade desse contato.

Se ambos forem verdadeiros, retorne o "valor" dessa propriedade.

Se namenão corresponder a nenhum contato, retorne a string No such contact.

Se propnão corresponder a nenhuma propriedade válida de
um contato correspondente, nameretorne a string No such property.
*/
//exemplo 1 :
function lookUpProfile(name, prop) {
  // loop 
  for (let x = 0; x < contacts.length; x++) {

    if (contacts[x].firstName === name) {

      if (contacts[x].hasOwnProperty(prop)) {

        return contacts[x][prop];

      } else {

        return "No such property";

      }
    }
  }
  return "No such contact";
}

// exemplo 2 :
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}