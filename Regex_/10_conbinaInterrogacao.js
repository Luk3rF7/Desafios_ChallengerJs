/* 
Em expressões regulares, uma correspondência gananciosa encontra a parte
mais longa possível de uma string que se ajusta ao padrão regex e a 
retorna como uma correspondência. A alternativa é chamada de correspondência 
lenta , que encontra a menor parte possível da string que satisfaz o 
padrão regex.Você pode aplicar o regex /t[a-z]*i/à string "titanic". 
Este regex é basicamente um padrão que começa com t, termina com ie 
tem algumas letras entre eles.As expressões regulares são gananciosas 
por padrão, então a correspondência retornaria ["titani"]. Ele encontra 
a maior substring possível para se ajustar ao padrão.
No entanto, você pode usar o ?caractere para alterá-lo para correspondência 
lenta. "titanic"comparado com o regex ajustado de /t[a-z]*?i/return ["ti"].
Nota: A análise de HTML com expressões regulares deve ser evitada, mas a 
correspondência de padrões de uma string HTML com expressões regulares 
é perfeitamente aceitável.

*/