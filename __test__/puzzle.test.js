import Puzzle from "./../src/puzzle.js"

describe("Puzzle", () => {
  
  test("should correctly create a puzzle object with rows and columns", () => {
    const puzzle = new Puzzle();
    expect(puzzle.rows).toEqual([]);
    expect(puzzle.columns).toEqual([[], [], [], [], [], [], [], [], []]);
  });
  test("should correctly create a row array in the puzzle", () => {
    const rowArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const puzzle = new Puzzle();
    puzzle.addRow(rowArr1);
    puzzle.addRow(rowArr2);
    expect(puzzle.rows).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]]);
  });
  test("should correctly create a column array from row arrays", () => {
    const rowArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const puzzle = new Puzzle();
    puzzle.addRow(rowArr1);
    puzzle.addRow(rowArr2);
    puzzle.addRow(rowArr3);
    puzzle.addRow(rowArr4);
    puzzle.addRow(rowArr5);
    puzzle.addRow(rowArr6);
    puzzle.addRow(rowArr7);
    puzzle.addRow(rowArr8);
    puzzle.addRow(rowArr9);
    // console.log(puzzle.rows[0]);
    // console.log(puzzle.rows[0][1]);
    // console.log(puzzle.rows[1]);
    // console.log(puzzle.rows[1][4]);
    puzzle.addColumn();
    console.log(puzzle.columns);
    expect(puzzle.columns).toEqual([[1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2], [3, 3, 3, 3, 3, 3, 3, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4], [5, 5, 5, 5, 5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9]]);
  });
  test('should check that all rows have nine elements with each number 1-9', () => {
    const rowArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rowArr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const puzzle = new Puzzle();
    puzzle.addRow(rowArr1);
    puzzle.addRow(rowArr2);
    puzzle.addRow(rowArr3);
    puzzle.addRow(rowArr4);
    puzzle.addRow(rowArr5);
    puzzle.addRow(rowArr6);
    puzzle.addRow(rowArr7);
    puzzle.addRow(rowArr8);
    puzzle.addRow(rowArr9);
    puzzle.addColumn();
    console.log(puzzle.checkPuzzle);
    expect(puzzle.checkPuzzle).toEqual("Row 0 passes the test.");
  })
});




// Puzzle.prototype.checkPuzzle = function () {
//   for (let i=0; i<this.rows.length; i++) {
//     if (this.rows[i].length === 9 && this.rows[i].includes(1, 2, 3, 4, 5, 6, 7, 8, 9)) {
//       return ("Row " + [i] + " passes the test.");
//     } else {
//       return ("Test failed - Try harder");
//     };  
//   };
// };
