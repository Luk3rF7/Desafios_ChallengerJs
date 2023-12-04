/* 
Combine números e letras do alfabeto
O uso do hífen ( -) para corresponder a um intervalo de caracteres 
não se limita a letras. Também funciona para corresponder a um
intervalo de números.
Por exemplo, /[0-5]/corresponde a qualquer número entre 0e 5,
incluindo 0e 5.Além disso, é possível combinar uma série de 
letras e números em um único conjunto de caracteres.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
*/