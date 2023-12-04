/* 
Você aprendeu como pesquisar espaços em branco usando \s,
com letras minúsculas s. Você também pode pesquisar tudo, 
exceto espaços em branco.
Procure por espaços que não sejam em branco usando \S, 
que é uma letra maiúscula s. Este padrão não corresponderá a 
espaços em branco, retorno de carro, tabulação, feed de formulário e 
caracteres de nova linha. Você pode pensar nisso como algo semelhante à 
classe de personagem [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; */