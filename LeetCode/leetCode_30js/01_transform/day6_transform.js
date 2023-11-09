/* 
Dado um array inteiro  nums, uma função redutora  fne um valor inicial  init,
retorne um   array reduzido .

Um  array reduzido  é criado aplicando a seguinte operação: 
val = fn(init, nums[0]), val = fn(val, nums[1]),  val = fn(val, nums[2]),  
... até que todos os elementos do array tenham sido processados. 
O valor final de  val é retornado.

Se o comprimento do array for 0, ele deverá retornar  init.

Por favor, resolva isso sem usar o método integrado Array.reduce.
Exemplo 1:

Entrada: 
números = [1,2,3,4]
fn = função soma(accum, curr) { return accum + curr; }
inicialização = 0
Resultado: 10
 Explicação:
inicialmente, o valor é init=0.
(0) + números[0] = 1
(1) + números[1] = 3
(3) + números[2] = 6
(6) + números[3] = 10
A resposta final é 10.
*/

const arr = [1, 2, 3, 4, 5]
var reduce = function (nums, fn, init) {
  let res = init;

  nums.forEach((num) => {
    res = fn(res, n)
  })
  return res;
  /*
  * Reduce: 
  
  nums.reduce(fn, init);
  
  * loops for
  let res = init;

  for(const num of nums){
    res = fn(init,num)
  }

  return res;
  * If else 

    let val = 0;
    if(nums.length == 0){
        return init;
    }else{
       
        for(let i = 0; i < nums.length;i++){
            if(i == 0){
                val = fn(init,nums[i])
            }else{
                val = fn(val,nums[i])
            }
        }
    }
    return val;
  */
};

console.log(reduce(arr,))