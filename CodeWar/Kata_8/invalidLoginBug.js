/* 
? https://www.codewars.com/kata/55e4c52ad58df7509c00007e/train/javascript
todo : Security - depuração 
*/

function validate(username, password) {
  if (password.includes('||') || password.includes('//'))
    return 'Wrong username or password!'

  var database = new Database();
  return database.login(username, password);
}
//! #2 
function validate_regex(username, password) {
  for (let str of [username, password]) {
    if (/\/\/|\|\|/.test(str)) {
      return "Wrong username or password!";
    }
  }
  var valid = new Validator();
  return valid.login(username, password);
}
// ? #3
function validate_regex3(username, password) {
  let database = new Database();
  return /(\||\/){2}/.test(password) ? 'Wrong username or password!' : database.login(username, password);
}