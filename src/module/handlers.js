import dom from './dom';

const loadHandlers = () => {
  document
    .querySelectorAll('#chessboard div')
    .forEach((square) => square.addEventListener('click', dom.clickedSquare));

  document.querySelector('.reset').addEventListener('click', dom.render);

  document.querySelector('.theme').addEventListener('click', () => {
    document.documentElement.classList.toggle('second-theme');
  });
};

export default loadHandlers;
