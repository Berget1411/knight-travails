import '../main.scss';
import loadHandlers from './handlers';
import knightMoves from './knight-move';
import knightSrc from '../assets/images/knight.svg';
import pawnSrc from '../assets/images/pawn.svg';

const knightImg = document.createElement('img');
knightImg.src = knightSrc;
knightImg.classList.add('icons');
const pawnImg = document.createElement('img');
pawnImg.src = pawnSrc;
pawnImg.classList.add('icons');

const dom = (() => {
  const instructionDisplay = document.querySelector('#instructions h1');
  const belowInstructions = document.querySelector('#instructions p');
  let start;
  let target;
  let count = 0;

  const render = () => {
    createBoard();
    resetVar();
    loadHandlers();
    belowInstructions.textContent = '';
    instructionDisplay.textContent = 'Select starting square of the knight';
  };

  const resetVar = () => {
    start = undefined;
    target = undefined;
    count = 0;
  };

  const createBoard = () => {
    const board = document.querySelector('#chessboard');
    board.textContent = '';

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
        instructionDisplay.textContent = 'Select square to attack';
      } else {
        target = e.target.id.split(',').map((str) => parseInt(str));
        e.target.append(pawnImg);
        moveKnight();
      }
      count += 1;
    }
  }

  function moveKnight() {
    instructionDisplay.textContent = ``;
    let textPath = '';
    let moves = knightMoves(start, target);
    console.log(moves);
    moves.forEach((move, index) => {
      setTimeout(() => {
        if (index > 0) {
          document.getElementById(
            moves[index - 1].coordinates,
          ).style.opacity = `${(1 / moves.length) * (index + 1)}`;
        }
        const square = document.getElementById(move.coordinates);
        square.style.backgroundColor = '#064e3b';
        if (moves.length - 1 === index) {
          square.textContent = '';
          instructionDisplay.textContent = `You made it in ${
            moves.length - 1
          } moves!`;
          textPath += `[${move.coordinates}]`;
          belowInstructions.textContent = textPath;
        }
        textPath += `[${move.coordinates}] => `;
        square.append(knightImg);
      }, index * 400);
    });
  }
  return { render, clickedSquare };
})();

export default dom;
