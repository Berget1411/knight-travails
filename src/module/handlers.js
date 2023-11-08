import dom from './dom';

const loadHandlers = (() => {
  const squares = () => {
    document
      .querySelectorAll('#chessboard div')
      .forEach((square) => square.addEventListener('click', dom.clickedSquare));
  };
  const others = () => {
    document.querySelector('.reset').addEventListener('click', dom.render);

    document.querySelector('.theme').addEventListener('click', () => {
      document.documentElement.classList.toggle('second-theme');
    });
  };
  return { squares, others };
})();

export default loadHandlers;
