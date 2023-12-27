/* 

Dado um número inteiro positivo millis, escreva uma função assíncrona que 
durma por millis milissegundos. Pode resolver qualquer valor.

Exemplo 1:

Entrada: milis = 100
 Saída: 100
 Explicação: Deve retornar uma promessa que é resolvida após 100 ms.
deixe t = Date.now();
dormir(100).então(() => {
  console.log(Data.agora() - t); // 100
});
*/

async function sleep(millis) {

  function callback(resolve, reject) {
    setTimeout(resolve, millis)
  };

  return new Promise(callback);
}

async function sleepAwait(millis) {

  await new Promise((resolve, reject) => {
    setTimeout(resolve, millis)
  };)


  return new Promise(callback);
}