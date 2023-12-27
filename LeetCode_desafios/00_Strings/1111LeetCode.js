
const seq1 = '(()())'
const seq2 = '()(())()'
var maxDepthAfterSplit = function (seq) {
  const n = seq.length;

  const result = Array(n).fill(0)

  let depth = 0

  for (let i = 0; i < n; i++) {
    const colchets = seq[i];

    if (colchets === '(') {
      depth++
    }
    result[i] = depth % 2
    if (colchets === ')') depth--
  }
  return result
};

console.log(maxDepthAfterSplit(seq1));
console.log(maxDepthAfterSplit(seq2));