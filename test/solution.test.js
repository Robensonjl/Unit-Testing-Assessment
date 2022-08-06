// Write your tests here!
const expect = require("chai").expect;
const partitionStudentsByScore = require("../src/solution");

describe("partitionStudentsByScore", () => {
  it("should partition the students into their appropriate arrays", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const expected = [
      [{ name: "Morgan Sutton", score: 7.4 }],
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Natalee Vargas", score: 9.2 },
      ],
    ];
    const actual = partitionStudentsByScore(students, 8);
    expect(actual).to.eql(expected);
  });
  it("is possible for all of the students to go into one array, when necessary", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const expected = [
      [
        { name: "Leo Yeon-Joo", score: 8.9 },
        { name: "Morgan Sutton", score: 7.4 },
        { name: "Natalee Vargas", score: 9.2 },
      ],
      []
    ];
    const actual = partitionStudentsByScore(students, 10);
    expect(actual).to.eql(expected);
  });
  it("should return an array of two arrays, when given an empty list", () => {
    const students = [];
    const expected = [[],[]];
    const actual = partitionStudentsByScore(students, 10);
    expect(actual).to.eql(expected);
  })
});
