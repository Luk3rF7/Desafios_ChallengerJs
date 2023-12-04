// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//     title: ""
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   let collectionCopy = JSON.parse(JSON.stringify(collection));

//   // Only change code below this line
//   function updateRecords(id, prop, value) {
//     if (prop !== "tracks" && value !== "") {
//       collection[id][prop] = value;
//     }
//     else if (prop === "tracks" && collection[id][prop] === undefined) {
//       collection[id][prop] = [];
//       console.log(prop);
//       collection[id][prop].push(value);
//     }
//     else if (value === "") {
//       delete collection[id][prop];
//     }
//     else {
//       collection[id][prop].push(value);
//     }
//   }
//   return recordCollection
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    console.log(`Sub-array ${i}: ${arr[i]}`);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(`Element ${j}: ${arr[i][j]}`);
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);