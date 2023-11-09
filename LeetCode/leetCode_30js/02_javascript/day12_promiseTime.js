/* 
Dada uma função assíncrona  fn e um tempo t
em milissegundos, retorne uma nova  versão com limite
 de tempo  da função de entrada. fnrecebe argumentos
 
A função limitada por tempo deve seguir estas regras:

Se for fnconcluído dentro do limite de tempo 
de tmilissegundos, a função limitada por tempo
 deverá ser resolvida com o resultado.
Se a execução do fnexceder o limite de tempo,
 a função limitada por tempo deverá ser rejeitada
  com a string "Time Limit Exceeded".

Exemplo 1:

Entrada: 
fn = assíncrono (n) => {
  aguarde nova promessa(res => setTimeout(res, 100));
  retornar n*n;
}
entradas = [5]
t = 50
Saída: {"rejected":"Prazo excedido","time":50}
 Explicação:
const limitado = timeLimit(fn, t)
const início = desempenho.now()
deixe o resultado;
tentar {
   const res = aguardar limitado(...entradas)
   resultado = {"resolvido": res, "tempo": Math.floor(desempenho.now() - início)};
} pegar (errar) {
   resultado = {"rejeitado": err, "tempo": Math.floor(desempenho.now() - início)};
}
console.log(resultado) // Saída

A função fornecida está configurada para resolver após 100 ms. 
No entanto, o limite de tempo está definido para 50ms. Rejeita 
em t=50ms porque o limite de tempo foi atingido.
*/

const timeLimit = function (fn, t) {

  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      const id = setTimeout(() => reject("O tempo foi extendido!"), t);

      try {
        const res = await fn(...args);
        resolve(res);
      } catch (error) {
        reject(error)
      }

    })
  }
}