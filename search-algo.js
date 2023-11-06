// A square of chessboard
const SquareNode = (coordinates, predecessor = undefined) => ({
  coordinates,
  predecessor,
});
// possible changes of coordinates [x, y] when knight moves
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

// get all possible & allowed moves of a knight located at [x, y]
const getMoves = ([x, y], visitedSquares) =>
  KNIGHT_MOVES.map(([a, b]) => [a + x, b + y]).filter(
    ([a, b]) =>
      a >= 0 && a < 8 && b >= 0 && b < 8 && !visitedSquares.has(`${a},${b}`),
  );

// search for shortest path for knight to get from start to target
const knightMoves = (start, target, visitedSquares = new Map()) => {
  const startSquare = SquareNode(start);
  let targetSquare;
  const queue = [startSquare];

  while (!targetSquare) {
    const currentSquare = queue.shift();
    visitedSquares.set(
      currentSquare.coordinates.toString(),
      getMoves(currentSquare.coordinates, visitedSquares),
    );

    const enqueueList = getMoves(currentSquare.coordinates, visitedSquares).map(
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
  return path;
  /*   console.log(path);
  console.log(`You made it in ${path.length - 1} moves`);
  console.log("Here's your path:");
  path.forEach((square) => console.log(square.coordinates)); */
};

export default knightMoves;
