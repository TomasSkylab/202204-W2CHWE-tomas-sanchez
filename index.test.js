const vertical = 10;
const horizontal = 10;
const grid = [];

const createGrid = () => {
  for (let y = 0; y < vertical; y++) {
    for (let x = 0; x < horizontal; x++) {
      grid.push(y, x);
    }
  }
  return createGrid;
};
