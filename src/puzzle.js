// Create a constructor for a puzzle with row and column properties
export default function Puzzle (){
  this.rows = [];
  this.columns = [[], [], [], [], [], [], [], [], []];
};

Puzzle.prototype.addRow = function ([num1, num2, num3, num4, num5, num6, num7, num8, num9]){
  this.rows.push([num1, num2, num3, num4, num5, num6, num7, num8, num9]);
};

Puzzle.prototype.addColumn = function () {
    for (let i=0; i<this.rows.length; i++) {
      for(let numIndex=0; numIndex<9; numIndex++){
        // console.log(this.rows[numIndex][i]);
        this.columns[i].push(this.rows[numIndex][i]);
      };
    };
   
Puzzle.prototype.checkPuzzle = function () {
  let result;
  for (let i=0; i<this.rows.length; i++) {
    if (this.rows[i].length === 9 && this.rows[i].includes(1, 2, 3, 4, 5, 6, 7, 8, 9)) {
      result = ("Row " + [i] + " passes the test.");
    } else {
      result = ("Test failed - Try harder");
    };  
  };
  return result;
};



//loop through rows check:
// a) rows.length = 9
// b) 1-9 are present


// Method: Check Rows


// Method: Check Columns

 // Scratch Work
  // 1, 2, 3, 4, 5
  // 2, 3, 4, 5, 1
  // 3, 4, 5, 1, 2
  // 4, 5, 1, 2, 3
  // 5, 4, 3, 2, 1

//   i=0
//   col[0] = 1, 2, 3, 4, 5 // row[0][0], row[1][0], row[2][0], row[3][0], row[4][0], 
//   col[1] = 2, 3, 4, 5, 4 //row[0][1], row[1][1], row[2][1], row[3][1], row[4][1]
  
//  col[0] row[0][0]
//  col[0] row[0][1]
};


