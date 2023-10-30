function numPrimo(num) {
  if (typeof num !== 'number') {
    return 'Não e numero'
  }

  if (n === 1) {
    return "Número 1 não e primo."
  } else if (n < 1) {
    return "números menores que 1 não são primos"
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        primo = false;
        break;
      }
    }
  }

  if (primo) {
    return `${n} e um número primo`
  } else {
    return `${n} não é um número primo!`
  }
}

console.log(numPrimo('teste'))