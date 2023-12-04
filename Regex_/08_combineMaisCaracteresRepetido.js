/* 
Às vezes, você precisa combinar um caractere (ou grupo de caracteres) 
que aparece uma ou mais vezes seguidas. Isso significa que ocorre pelo 
menos uma vez e pode ser repetido.Você pode usar o +personagem para 
verificar se for esse o caso. Lembre-se, o caractere ou padrão deve 
estar presente consecutivamente. Ou seja, o personagem tem que repetir 
um após o outro.Por exemplo, /a+/gencontraria uma correspondência abce 
retornaria ["a"]. Por causa de +, ele também encontraria uma única 
correspondência aabce retornaria ["aa"].Se, em vez disso, estivesse 
verificando a string abab, encontraria duas correspondências e retornaria 
["a", "a"]porque os acaracteres não estão consecutivos - há um bentre eles. 
Finalmente, como não existe ana string bcd, não encontraria uma 
correspondência.
*/