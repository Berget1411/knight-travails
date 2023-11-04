class SquareNode {
  constructor(coordinates, predecessor = undefined) {
    this.coordinates = coordinates;
    this.predecessor = predecessor;
  }
}

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

// get all possible & allowed moves of knight in start position x & y
const getMoves = (node) => {
  const [nodeX, nodeY] = node.coordinates;
  let [predX, predY] = [null, null]; // if no predecessor to node exists
  if (node.predecessor !== undefined) {
    [predX, predY] = node.predecessor.coordinates;
  }
  return KNIGHT_MOVES.map(([a, b]) => [a + nodeX, b + nodeY]).filter(
    ([a, b]) =>
      a >= 0 && a < 8 && b >= 0 && b < 8 && `${a}${b}` !== `${predX}${predY}`,
  );
};
// map adds change in coordinater while filter makes sure the coordinates are not outside the chess board with 8x8

//tests below
const start = [0, 0];
const second = [1, 2];

const squareStart = new SquareNode(start);
const squareSecond = new SquareNode(second);

squareSecond.predecessor = squareStart;
const visited = new Map();
visited.set(squareStart.coordinates.toString(), getMoves(squareStart));
visited.set(squareSecond.coordinates.toString(), getMoves(squareSecond));
console.log(visited);
