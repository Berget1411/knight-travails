import '../main.scss';
import dom from './dom';

const handler = () => {
  dom.createBoard();
  document
    .querySelectorAll('#chessboard div')
    .forEach((square) => square.addEventListener('click', dom.clickedSquare));
};

export default handler;
