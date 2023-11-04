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
const getMoves = ([x, y]) =>
  // map adds change in coordinater while filter makes sure the coordinates are not outside the chess board with 8x8
  KNIGHT_MOVES.map(([a, b]) => [a + x, b + y]).filter(
    ([a, b]) => a >= 0 && a < 8 && b >= 0 && b < 8,
  );
