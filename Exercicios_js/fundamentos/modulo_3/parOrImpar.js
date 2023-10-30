let num = 13

function parOrImpart(n) {
  const result = n % 2 === 0 ? console.log(`O número é Par ${n}`) : console.log(`O número e impar ${n}`)
  return result;
}
parOrImpart(num)