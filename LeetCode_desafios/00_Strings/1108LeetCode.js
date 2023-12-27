const entrada1 = '1.1.1.1'
const entrada2 = '255.100.50.0'

var defangIPaddr = function (address) {
  const regexIp = /(\.)/g;
  const fangIp = address.replace(regexIp, '[.]');
  return fangIp
};

console.log(defangIPaddr(entrada1));
(defangIPaddr(entrada2));