/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise(async resolve => {
    const sumPromise = await promise1 + await promise2
    resolve(sumPromise)
  })
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4
