const alice = [1, 2, 3]
const bob = [3, 2, 1]

function compareTriplets(a, b) {
  let alice = 0
  let bob = 0
  for (let i = o; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1
    } else if (a[i] < b[i]) {
      bob += 1
    };
  }

  console.log(compareTriplets(alice, bob))