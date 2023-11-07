import knightMoves from './knight-move';
import knightSrc from '../assets/images/knight.svg';
import pawnSrc from '../assets/images/pawn.svg';

const dom = (() => {
  let start;
  let target;
  let count = 0;
  const knightImg = document.createElement('img');
  knightImg.src = knightSrc;
  knightImg.style.width = '40px';
  const pawnImg = document.createElement('img');
  pawnImg.src = pawnSrc;
  pawnImg.style.width = '40px';

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

  function clickedSquare(e) {
    if (count < 2) {
      if (count === 0) {
        start = e.target.id.split(',').map((str) => parseInt(str));
        e.target.append(knightImg);
      } else {
        target = e.target.id.split(',').map((str) => parseInt(str));
        e.target.append(pawnImg);
        let moves = knightMoves(start, target);
        moves.forEach((move, index) => {
          setTimeout(() => {
            if (index > 0) {
              document.getElementById(
                moves[index - 1].coordinates,
              ).style.opacity = `${(1 / moves.length) * (index + 1)}`;
            }
            const square = document.getElementById(move.coordinates);
            square.style.backgroundColor = '#064e3b';
            if (moves.length - 1 === index) square.textContent = '';
            square.append(knightImg);
          }, index * 400);
        });
      }
      count += 1;
    }
  }
  return { createBoard, clickedSquare };
})();

export default dom;
