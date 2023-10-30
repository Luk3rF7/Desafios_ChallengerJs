function escada(n) {

  let symbol = '#'
  let line = ''
  let positionLine = n - 1

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {

    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {

      if (columnIndex < positionLine) {
        line += ' '
      } else {
        line += symbol;
      }
    }
    console.log(line)
    line = ''
    positionLine -= 1
    // termina loop ele volta pro primeiro loop ate bate numero
  }
}

escada(4)