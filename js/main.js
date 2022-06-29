/*----- constants -----*/
const COLOR_LOOKUP = {
  '1': 'purple',
  '-1': 'orange',
  null: 'white'
};

/*----- app's state (variables) -----*/
// Array of 9 elements...
// null -> sq avail; 1 or -1 for the players
let board;
let turn;  // 1 or -1
let gameStatus; // null -> game in play; 1/-1 player win; 'T' -> tie

/*----- cached element references -----*/
const squareEls = document.querySelectorAll('#board > div');
const msgEl = document.querySelector('h1');

/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
  // board = new Array(9).fill(null);
  board = [
    null, null, null,
    null, null, null,
    null, null, null,
  ];
  turn = 1;
  gameStatus = null;
  render();
}

// Render's job is to transfer/visualize
// all state to the DOM
function render() {
  squareEls.forEach(function(squareEl, idx) {
    squareEl.style.backgroundColor = COLOR_LOOKUP[board[idx]];
  });
  renderMessage();
}

function renderMessage() {
  if (gameStatus === null) {
    msgEl.innerHTML = `Player ${turn}'s Turn`;
  } else if (gameStatus === 'T') {
    // Tie game
  } else {
    // Player has won!
  }
}