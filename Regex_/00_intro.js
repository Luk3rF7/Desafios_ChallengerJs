const frase = "Meu nome é "
/* 
 utilizamos / string procura /

 guardando regex numa variavel para depois utilizar metodo
 .test() caso tenho nos retorn true ,caso nao tenha retorna false!
 */
let regexSearch = /Lucas/;

if (regexSearch.test(frase)) {
  return console.log('Lucas foi encontrado!')
} else {
  return console.log("Não existe Lucas nessa frase!")
}