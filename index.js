let grid;
const rows = 100;
const columns = 100;

function creaArray2D(f, c) {
  const array = new Array(f);
  for (y = 0; y < f; y++) {
    array[y] = new Array(c);
  }

  return array;
}

const cell = function (x, y, status) {
  this.x = x;
  this.y = y;
  this.status = status;
  this.state = this.status;

  this.neighbour = [];

  this.addNeighbour = function () {
    let neighbourX;
    let neighbourY;

    for (i = -1; i < 2; i++) {
      for (j = -1; j < 2; j++) {
        neighbourX = (this.x + j + columns) % columns;
        neighbourY = (this.y + i + rows) % rows;

        if (i != 0 || j != 0) {
          this.neighbour.push(grid[neighbourY][neighbourX]);
        }
      }
    }
  };

  this.newLoop = function () {
    let sum = 0;

    for (i = 0; i < this.neighbour.length; i++) {
      sum += this.neighbour[i].status;
    }
    this.state = this.status;

    if (sum < 2 || sum > 3) {
      this.state = 0;
    }

    if (sum === 3) {
      this.state = 1;
    }
  };

  this.mutacion = function () {
    this.status = this.state;
  };
};
