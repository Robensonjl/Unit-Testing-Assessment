/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

function partitionStudentsByScore(students, score) {
  let result = [];

  const filterAbove = students.filter((student) => student.score > score);
  const high = filterAbove.map((student) => student)
  const filterBelow = students.filter((student) => student.score < score);
  const low = filterBelow.map((student) => student)
  result = [low, high];
  return result;
}

module.exports = partitionStudentsByScore;


const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
];

partitionStudentsByScore(students, 8);

console.log(partitionStudentsByScore(students, 8));