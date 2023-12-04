// 1 fatorial com recursivo :
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
// 2 metodo while :
function factorialize(num) {
  // Passo 1. Criar uma variável result para armazenar o valor de num
  var result = num;

  // Se num = 0 OU num = 1, o fatorial retornará 1
  if (num === 0 || num === 1)
    return 1;

  // Passo 2. Criar o laço WHILE 
  while (num > 1) {
    num--; // diminuir 1 a cada iteração
    result = result * num; // ou result *= num; 
    /* 
                    num           num--      var result      result *= num         
    1ª iteração:   5             4            5             20 = 5 * 4      
    2ª iteração:   4             3           20             60 = 20 * 3
    3ª iteração:   3             2           60            120 = 60 * 2
    4ª iteração:   2             1          120            120 = 120 * 1
    5ª iteração:   1             0          120
    Fim do laço WHILE 
    */
  }

  // Passo 3. Retornar o fatorial do inteiro fornecido
  return result; // 120
}
factorialize(5);

// 3 for :
function factorialize(num) {
  // Se num = 0 OU num = 1, o fatorial retornará 1
  if (num === 0 || num === 1)
    return 1;

  // Começamos o laço FOR loop com i = 5
  // Diminuímos i em uma unidade após cada iteração 
  for (var i = num - 1; i >= 1; i--) {
    // Armazenamos o valor de num a cada iteração
    num = num * i; // ou num *= i;
    /* 
                 num    var i = num - 1   num *= i         i--       i >= 1?
    1ª iteração:   5    4 = 5 - 1         20 = 5 * 4        3          sim   
    2ª iteração:  20    3 = 4 - 1         60 = 20 * 3       2          sim
    3ª iteração:  60    2 = 3 - 1        120 = 60 * 2       1          sim  
    4ª iteração: 120    1 = 2 - 1        120 = 120 * 1      0          não 
    5ª iteração: 120    0                120
    Fim do laço FOR 
    */
  }
  return num; //120
}
factorialize(5);