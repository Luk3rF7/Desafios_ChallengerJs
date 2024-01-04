function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURI(user)}`;

}

console.log(generateLink('user 1'));