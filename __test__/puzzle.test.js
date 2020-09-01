import Puzzle from "./../src/puzzle.js"

describe("Puzzle", () => {
  
  test("should correctly create a puzzle object with rows and columns", () => {
    const puzzle = new Puzzle();
    expect(puzzle.rows).toEqual([]);
    expect(puzzle.columns).toEqual([]);
  });
});