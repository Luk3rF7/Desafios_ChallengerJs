/* 
  * Promisse:

  - then()
  - cahtch()
  -finaly()
*/

const promise = new Promise(callback);

promise
  .then(() => console.log('hello'))
  .catch((error) => {
    return console.log('Deu erro aqui !', error)
  })
function callback(resolve, reject) {
  setTimeout(() => resolve(), 1000)

  try {
    resolve()
  } catch (error) {
    reject()
  }
}