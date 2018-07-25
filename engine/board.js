var board = [...Array(8)].map(e => Array(8));

function load_board() {
  for (var variable in pieces) {
    board[pieces[variable].location.y][pieces[variable].location.x] = pieces[variable].id;
  }
  console.log(board);
}
load_board();
