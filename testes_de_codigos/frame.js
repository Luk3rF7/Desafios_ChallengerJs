function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 + 32);

  return fahrenheit.toFixed(2);
}

console.log(convertCtoF(30))
//
function reverseString(str) {
  const arrStr = str.split('')
  return arrStr.reverse().join('')
}

console.log(reverseString("hello"));

//
function factorialize(num) {
  // Se o número for inferior a 0, rejeite-o.
  if (num < 0)
    return -1;

  // Se o número for 0, seu fatorial é 1.
  else if (num == 0)
    return 1;

  // Caso contrário, chame o procedimento de recursão novamente
  else {
    return (num * factorialize(num - 1));
    /* 
    Primeira parte do método de recursão
    É preciso lembrar que você não terá apenas uma chamada, mas diversas chamadas "aninhadas"
    
    Cada chamada: num === "?"      	         num * factorialize(num - 1)
    1ª chamada – factorialize(5) retornará    5  * factorialize(5 - 1) // factorialize(4)
    2ª chamada – factorialize(4) retornará    4  * factorialize(4 - 1) // factorialize(3)
    3ª chamada – factorialize(3) retornará    3  * factorialize(3 - 1) // factorialize(2)
    4ª chamada – factorialize(2) retornará    2  * factorialize(2 - 1) // factorialize(1)
    5ª chamada – factorialize(1) retornará    1  * factorialize(1 - 1) // factorialize(0)
    
    Segunda parte do método de recursão
    O método chega na condição do if, retorna 1, com o qual num será multiplicado
    A função sairá retornando o valor total
    
    A 5ª chamada retornará (5 * (5 - 1))     // num = 5 * 4
    A 4ª chamada retornará (20 * (4 - 1))    // num = 20 * 3
    A 3ª chamada retornará (60 * (3 - 1))    // num = 60 * 2
    A 2ª chamada retornará (120 * (2 - 1))   // num = 120 * 1
    A 1ª chamada retornará (120)             // num = 120
    
    Se somarmos todas as chamadas em uma linha, temos
    (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
    */
  }
}
factorialize(5);