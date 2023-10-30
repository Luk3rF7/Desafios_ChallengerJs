function catAndMouse(x, y, z) {
  let catA = x
  let catB = y
  let mouse = z

  if ((Math.abs(mouse - gatoA)) < (Math.abs(mouse - catB))) {
    return 'Cat A'
  } else if ((Math.abs(mouse - gatoA)) === (Math.abs(mouse - catB))) {
    return 'Mouse C'
  } else {
    return 'Cat B'
  }
}