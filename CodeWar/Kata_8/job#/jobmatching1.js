/* 
?https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
todo : algorithmos 
*/
function match({ minSalary }, { maxSalary }) {
  // is this job a valid match for the candidate?
  if (!minSalary || !maxSalary) throw new Error('')
  return minSalary * 0.9 <= maxSalary
}