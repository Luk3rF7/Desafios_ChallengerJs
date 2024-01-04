const alunos_turma_202 = ['aluno1', 'aluno2', 'aluno3', 'alunon']
const notas_turma_202 = ['nota1', 'nota2', 'nota3', 'notan']

console.log(alunos_turma_202[0]);
console.log(notas_turma_202[1]);

const alunos_ordenado = alunos_turma_202.sort();

const info_aluno = alunos_ordenado.map((alunos, index) => {
  return console.log(`Aluno ${index + 1} : ${alunos}`)
});

info_aluno;

// imperativa 

let count = 10;

for (let init = 0; init < count; init++) {
  console.log(init);
}

console.log(count);

// funcional 


function contador(init) {
  return fim = (fim) => {
    if (init >= fim) {
      return init++
    }
  }
}

contador(0)(5);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const counting = array => array;

console.log(num.map(counting));