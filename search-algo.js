const SquareNode = (coordinates, predecessor = undefined) => ({
  coordinates,
  predecessor,
});
// possible changes of coordinates x & y when knight moves
const KNIGHT_MOVES = [
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

const visited = new Map();

// get all possible & allowed moves of knight in start position x & y
const getMoves = ([x, y]) =>
  KNIGHT_MOVES.map(([a, b]) => [a + x, b + y]).filter(
    ([a, b]) => a >= 0 && a < 8 && b >= 0 && b < 8 && !visited.has(`${a},${b}`),
  );
const knightMoves = (start, target) => {
  visited.clear();
  const startSquare = SquareNode(start);
  let targetSquare;

  const queue = [startSquare];

  while (!targetSquare) {
    const currentSquare = queue.shift();

    visited.set(
      currentSquare.coordinates.toString(),
      getMoves(currentSquare.coordinates),
    );

    const enqueueList = getMoves(currentSquare.coordinates).map(
      (squareCoord) => {
        const newSquare = SquareNode(squareCoord, currentSquare);

        if (squareCoord.toString() === target.toString()) {
          targetSquare = newSquare;
        }
        return newSquare;
      },
    );
    queue.push(...enqueueList);
  }
  const path = [targetSquare];
  while (!path.includes(startSquare)) {
    const prevSquare = path[0].predecessor;
    path.unshift(prevSquare);
  }
  console.log(path);
  console.log(`You made it in ${path.length - 1} moves`);
  console.log("Here's your path:");
  path.forEach((square) => console.log(square.coordinates));
};

const start = [3, 4];
const second = [7, 0];
console.log(knightMoves(start, second));
