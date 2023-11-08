import dom from './module/dom';
import loadHandlers from './module/handlers';

window.onload = () => {
  dom.render();
  loadHandlers.others();
};
