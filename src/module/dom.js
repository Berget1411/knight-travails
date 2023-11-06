import '../main.scss';

const createBoard = () => {
  const board = document.querySelector('#chessboard');
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      // Cartesian coordinates
      square.id = `${7 - i},${j}`;
      if ((i + j) % 2 === 0) {
        square.classList.add('white');
      } else {
        square.classList.add('black');
      }
      board.appendChild(square);
    }
  }
};

createBoard();
