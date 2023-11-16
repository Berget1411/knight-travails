"use strict";
(self["webpackChunkknight_travails"] = self["webpackChunkknight_travails"] || []).push([["bundle"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/dom */ "./src/module/dom.js");
/* harmony import */ var _module_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/handlers */ "./src/module/handlers.js");


window.onload = function () {
  _module_dom__WEBPACK_IMPORTED_MODULE_0__["default"].render();
  _module_handlers__WEBPACK_IMPORTED_MODULE_1__["default"].others();
};

/***/ }),

/***/ "./src/module/dom.js":
/*!***************************!*\
  !*** ./src/module/dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ "./src/main.scss");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ "./src/module/handlers.js");
/* harmony import */ var _knight_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knight-move */ "./src/module/knight-move.js");
/* harmony import */ var _assets_images_knight_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/knight.svg */ "./src/assets/images/knight.svg");
/* harmony import */ var _assets_images_pawn_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/pawn.svg */ "./src/assets/images/pawn.svg");





var knightImg = document.createElement('img');
knightImg.src = _assets_images_knight_svg__WEBPACK_IMPORTED_MODULE_3__;
var pawnImg = document.createElement('img');
pawnImg.src = _assets_images_pawn_svg__WEBPACK_IMPORTED_MODULE_4__;
var dom = function () {
  var instructionDisplay = document.querySelector('#instructions h2');
  var belowInstructions = document.querySelector('#instructions p');
  var start;
  var target;
  var count = 0;
  var render = function render() {
    createBoard();
    resetVar();
    _handlers__WEBPACK_IMPORTED_MODULE_1__["default"].squares();
    belowInstructions.textContent = '';
    instructionDisplay.textContent = 'Select starting square';
  };
  var resetVar = function resetVar() {
    start = undefined;
    target = undefined;
    count = 0;
  };
  var createBoard = function createBoard() {
    var board = document.querySelector('#chessboard');
    board.textContent = '';
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        var square = document.createElement('div');
        square.classList.add('square');
        // Cartesian coordinates
        square.id = "".concat(7 - i, ",").concat(j);
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
        start = e.target.id.split(',').map(function (str) {
          return parseInt(str);
        });
        e.target.append(knightImg);
        instructionDisplay.textContent = 'Select target';
      } else {
        target = e.target.id.split(',').map(function (str) {
          return parseInt(str);
        });
        e.target.append(pawnImg);
        moveKnight();
      }
      count += 1;
    }
  }
  function moveKnight() {
    instructionDisplay.textContent = "";
    var textPath = '';
    var moves = (0,_knight_move__WEBPACK_IMPORTED_MODULE_2__["default"])(start, target);
    console.log(moves);
    moves.forEach(function (move, index) {
      setTimeout(function () {
        if (index > 0) {
          document.getElementById(moves[index - 1].coordinates).style.opacity = "".concat(1 / moves.length * (index + 1));
        }
        var square = document.getElementById(move.coordinates);
        square.style.backgroundColor = '#064e3b';
        if (moves.length - 1 === index) {
          square.textContent = '';
          instructionDisplay.textContent = "You made it in ".concat(moves.length - 1, " moves!");
          textPath += "[".concat(move.coordinates, "]");
          belowInstructions.textContent = textPath;
        }
        textPath += "[".concat(move.coordinates, "] => ");
        square.append(knightImg);
      }, index * 400);
    });
  }
  return {
    render: render,
    clickedSquare: clickedSquare
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/module/handlers.js":
/*!********************************!*\
  !*** ./src/module/handlers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/module/dom.js");

var loadHandlers = function () {
  var squares = function squares() {
    document.querySelectorAll('#chessboard div').forEach(function (square) {
      return square.addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__["default"].clickedSquare);
    });
  };
  var others = function others() {
    document.querySelector('.reset').addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__["default"].render);
    document.querySelector('.theme').addEventListener('click', function () {
      document.documentElement.classList.toggle('second-theme');
    });
  };
  return {
    squares: squares,
    others: others
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHandlers);

/***/ }),

/***/ "./src/module/knight-move.js":
/*!***********************************!*\
  !*** ./src/module/knight-move.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// A square of chessboard
var SquareNode = function SquareNode(coordinates) {
  var predecessor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return {
    coordinates: coordinates,
    predecessor: predecessor
  };
};
// possible changes of coordinates [x, y] when knight moves
var KNIGHT_MOVES = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];

// get all possible & allowed moves of a knight located at [x, y]
var getMoves = function getMoves(_ref, visitedSquares) {
  var _ref2 = _slicedToArray(_ref, 2),
    x = _ref2[0],
    y = _ref2[1];
  return KNIGHT_MOVES.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      a = _ref4[0],
      b = _ref4[1];
    return [a + x, b + y];
  }).filter(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      a = _ref6[0],
      b = _ref6[1];
    return a >= 0 && a < 8 && b >= 0 && b < 8 && !visitedSquares.has("".concat(a, ",").concat(b));
  });
};

// search for shortest path for knight to get from start to target
var knightMoves = function knightMoves(start, target) {
  var visitedSquares = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Map();
  var startSquare = SquareNode(start);
  var targetSquare;
  var queue = [startSquare];
  var _loop = function _loop() {
    var currentSquare = queue.shift();
    visitedSquares.set(currentSquare.coordinates.toString(), getMoves(currentSquare.coordinates, visitedSquares));
    var enqueueList = getMoves(currentSquare.coordinates, visitedSquares).map(function (squareCoord) {
      var newSquare = SquareNode(squareCoord, currentSquare);
      if (squareCoord.toString() === target.toString()) {
        targetSquare = newSquare;
      }
      return newSquare;
    });
    queue.push.apply(queue, _toConsumableArray(enqueueList));
  };
  while (!targetSquare) {
    _loop();
  }
  var path = [targetSquare];
  while (!path.includes(startSquare)) {
    var prevSquare = path[0].predecessor;
    path.unshift(prevSquare);
  }
  return path;
  /*   console.log(path);
  console.log(`You made it in ${path.length - 1} moves`);
  console.log("Here's your path:");
  path.forEach((square) => console.log(square.coordinates)); */
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knightMoves);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #713f12;
  --secondary-color: #b58863;
  --third-color: #f0d9b5;
}
:root.second-theme {
  --primary-color: #1e3a8a;
  --secondary-color: #3b82f6;
  --third-color: #dbeafe;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
}

header {
  width: 600px;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header h1 {
  color: var(--primary-color);
  font-size: 2.4em;
}
header .right-side {
  display: flex;
  align-items: center;
  gap: 20px;
}
header .right-side button {
  padding: 5px 20px;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.2s;
}
header .right-side button:hover {
  filter: brightness(105%);
}
header .theme {
  background-color: var(--third-color);
  color: var(--secondary-color) !important;
}
header .reset {
  background-color: #f87171;
}

#chessboard {
  width: 600px;
  height: 600px;
  display: grid;
  display: flex;
  flex-wrap: wrap;
  border: 8px solid var(--primary-color);
  border-radius: 10px;
}
#chessboard .square {
  width: 12.5%;
  height: 12.5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#chessboard .black {
  background-color: var(--third-color);
}
#chessboard .white {
  background-color: var(--secondary-color);
}
#chessboard img {
  width: 40px;
}

.light-dark-mode {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.light-dark-mode img {
  width: 25px;
}

#instructions {
  width: 600px;
  padding: 5px;
  font-weight: bold;
  text-align: center;
  color: var(--primary-color);
  background-color: var(--third-color);
  margin-top: 20px;
  border-radius: 10px;
  border: 8px solid var(--primary-color);
}
#instructions h2 {
  font-size: 1.8em;
  margin-bottom: 10px;
}
#instructions p {
  font-size: 1.2em;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  color: var(--primary-color);
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  font-weight: bold;
}
footer p {
  color: var(--primary-color);
  text-align: center;
}
footer a {
  text-decoration: none;
  color: var(--secondary-color);
  transition: color 0.2s;
}
footer a:hover {
  color: var(--third-color);
}

@media (max-width: 650px) {
  header {
    width: 500px;
  }
  header h1 {
    font-size: 2em;
  }
  header button {
    font-size: 1em !important;
  }
  #chessboard {
    height: 500px;
    width: 500px;
  }
  #chessboard img {
    width: 30px;
  }
  #instructions {
    width: 500px;
  }
  #instructions h2 {
    font-size: 1.6em;
  }
  #instructions p {
    font-size: 1em;
  }
}
@media (max-width: 500px) {
  header {
    width: 350px;
  }
  header h1 {
    font-size: 1.3em;
  }
  header button {
    font-size: 0.8em !important;
    padding: 5px 10px !important;
  }
  #chessboard {
    height: 350px;
    width: 350px;
  }
  #chessboard img {
    width: 20px;
  }
  #instructions {
    width: 350px;
  }
  #instructions h2 {
    font-size: 1.2em;
  }
  #instructions p {
    font-size: 0.8em;
  }
}`, "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"AAEA;EACE,wBAAA;EACA,0BAAA;EACA,sBAAA;AAAF;AAEE;EACE,wBAAA;EACA,0BAAA;EACA,sBAAA;AAAJ;;AAIA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;EACA,qCAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;AADF;;AAIA;EACE,YAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AADF;AAGE;EACE,2BAAA;EACA,gBAAA;AADJ;AAIE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAFJ;AAII;EACE,iBAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,uBAAA;AAFN;AAIM;EACE,wBAAA;AAFR;AAOE;EACE,oCAAA;EACA,wCAAA;AALJ;AAQE;EACE,yBAAA;AANJ;;AAUA;EACE,YAAA;EACA,aAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,sCAAA;EACA,mBAAA;AAPF;AASE;EACE,YAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAPJ;AAUE;EACE,oCAAA;AARJ;AAUE;EACE,wCAAA;AARJ;AAWE;EACE,WAAA;AATJ;;AAaA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAVF;AAWE;EACE,WAAA;AATJ;;AAaA;EACE,YAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,2BAAA;EACA,oCAAA;EACA,gBAAA;EACA,mBAAA;EACA,sCAAA;AAVF;AAYE;EACE,gBAAA;EACA,mBAAA;AAVJ;AAYE;EACE,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,oCAAA;EACA,2BAAA;AAVJ;;AAcA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;EAEA,iBAAA;AAZF;AAaE;EACE,2BAAA;EACA,kBAAA;AAXJ;AAaE;EACE,qBAAA;EACA,6BAAA;EACA,sBAAA;AAXJ;AAaI;EACE,yBAAA;AAXN;;AAgBA;EACE;IACE,YAAA;EAbF;EAeE;IACE,cAAA;EAbJ;EAeE;IACE,yBAAA;EAbJ;EAgBA;IACE,aAAA;IACA,YAAA;EAdF;EAgBE;IACE,WAAA;EAdJ;EAkBA;IACE,YAAA;EAhBF;EAkBE;IACE,gBAAA;EAhBJ;EAkBE;IACE,cAAA;EAhBJ;AACF;AAoBA;EACE;IACE,YAAA;EAlBF;EAoBE;IACE,gBAAA;EAlBJ;EAoBE;IACE,2BAAA;IACA,4BAAA;EAlBJ;EAqBA;IACE,aAAA;IACA,YAAA;EAnBF;EAqBE;IACE,WAAA;EAnBJ;EAuBA;IACE,YAAA;EArBF;EAuBE;IACE,gBAAA;EArBJ;EAuBE;IACE,gBAAA;EArBJ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap');\r\n\r\n:root {\r\n  --primary-color: #713f12;\r\n  --secondary-color: #b58863;\r\n  --third-color: #f0d9b5;\r\n\r\n  &.second-theme {\r\n    --primary-color: #1e3a8a;\r\n    --secondary-color: #3b82f6;\r\n    --third-color: #dbeafe;\r\n  }\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n  height: 100vh;\r\n}\r\n\r\nheader {\r\n  width: 600px;\r\n  padding: 20px 0px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  h1 {\r\n    color: var(--primary-color);\r\n    font-size: 2.4em;\r\n  }\r\n\r\n  .right-side {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n\r\n    button {\r\n      padding: 5px 20px;\r\n      color: white;\r\n      border: none;\r\n      border-radius: 10px;\r\n      font-size: 1.2em;\r\n      font-weight: bold;\r\n      cursor: pointer;\r\n      transition: filter 0.2s;\r\n\r\n      &:hover {\r\n        filter: brightness(105%);\r\n      }\r\n    }\r\n  }\r\n\r\n  .theme {\r\n    background-color: var(--third-color);\r\n    color: var(--secondary-color) !important;\r\n  }\r\n\r\n  .reset {\r\n    background-color: #f87171;\r\n  }\r\n}\r\n\r\n#chessboard {\r\n  width: 600px;\r\n  height: 600px;\r\n  display: grid;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  border: 8px solid var(--primary-color);\r\n  border-radius: 10px;\r\n\r\n  .square {\r\n    width: 12.5%;\r\n    height: 12.5%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .black {\r\n    background-color: var(--third-color);\r\n  }\r\n  .white {\r\n    background-color: var(--secondary-color);\r\n  }\r\n\r\n  img {\r\n    width: 40px;\r\n  }\r\n}\r\n\r\n.light-dark-mode {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 15px;\r\n  img {\r\n    width: 25px;\r\n  }\r\n}\r\n\r\n#instructions {\r\n  width: 600px;\r\n  padding: 5px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: var(--primary-color);\r\n  background-color: var(--third-color);\r\n  margin-top: 20px;\r\n  border-radius: 10px;\r\n  border: 8px solid var(--primary-color);\r\n\r\n  h2 {\r\n    font-size: 1.8em;\r\n    margin-bottom: 10px;\r\n  }\r\n  p {\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    color: var(--primary-color);\r\n  }\r\n}\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 10px;\r\n\r\n  font-weight: bold;\r\n  p {\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n  }\r\n  a {\r\n    text-decoration: none;\r\n    color: var(--secondary-color);\r\n    transition: color 0.2s;\r\n\r\n    &:hover {\r\n      color: var(--third-color);\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 650px) {\r\n  header {\r\n    width: 500px;\r\n\r\n    h1 {\r\n      font-size: 2em;\r\n    }\r\n    button {\r\n      font-size: 1em !important;\r\n    }\r\n  }\r\n  #chessboard {\r\n    height: 500px;\r\n    width: 500px;\r\n\r\n    img {\r\n      width: 30px;\r\n    }\r\n  }\r\n\r\n  #instructions {\r\n    width: 500px;\r\n\r\n    h2 {\r\n      font-size: 1.6em;\r\n    }\r\n    p {\r\n      font-size: 1em;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  header {\r\n    width: 350px;\r\n\r\n    h1 {\r\n      font-size: 1.3em;\r\n    }\r\n    button {\r\n      font-size: 0.8em !important;\r\n      padding: 5px 10px !important;\r\n    }\r\n  }\r\n  #chessboard {\r\n    height: 350px;\r\n    width: 350px;\r\n\r\n    img {\r\n      width: 20px;\r\n    }\r\n  }\r\n\r\n  #instructions {\r\n    width: 350px;\r\n\r\n    h2 {\r\n      font-size: 1.2em;\r\n    }\r\n    p {\r\n      font-size: 0.8em;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/knight.svg":
/*!**************************************!*\
  !*** ./src/assets/images/knight.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "knight.svg";

/***/ }),

/***/ "./src/assets/images/pawn.svg":
/*!************************************!*\
  !*** ./src/assets/images/pawn.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pawn.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=bundle93005b28588c84e875f9.js.map