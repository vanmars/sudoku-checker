import Puzzle from "./../src/puzzle.js"

describe("Puzzle", () => {
  
  test("should correctly create a puzzle object with rows and columns", () => {
    const puzzle = new Puzzle();
    expect(puzzle.rows).toEqual([]);
    expect(puzzle.columns).toEqual([]);
  });
  test("should correctly create a row array in the puzzle", () => {
    const rowArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const puzzle = new Puzzle();
    puzzle.addRow(rowArr);
    expect(puzzle.rows).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9]])
  })
});