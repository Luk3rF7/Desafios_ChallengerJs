/* 
Criar uma nova string com os mesmos caracteres que a string passada,
só que sem o caractere ignorado;

Retirar os zeros à frente da string resultante, seja manualmente ou usando a 
expressão regular /^(0+)/, que checa se há um ou mais zeros à frente da string
formada.

*/

while (lines.length) {
  let [D, N] = lines.shift().trim().split(' ');

  if (D === '0' && N === '0') break;

  N = N.split('').filter((x) => x != D).join('');

  let re = /^(0+)/i;
  let resultado = N.match(re);
  if (resultado) N = N.replace(resultado[0], '');

  if (N.length === 0) console.log('0');
  else console.log(N);
}