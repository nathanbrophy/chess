var board = [...Array(8)].map(e => Array(8));

function load_board() {
  for (var variable in pieces) {
    board[pieces[variable].location.y][pieces[variable].location.x] = pieces[variable];
  }
  console.log(board);
}
load_board();


function print_board() {
  var table = "<table>";
  for (var i = 0; i < board.length; i++) {
    table += "<tr>"
    for (var j = 0; j < board[i].length; j++) {
      board[i][j] = board[i][j] || "";
       table += "<td class='piece' id=" + board[i][j] + ">" + board[i][j] + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById('board_container').innerHTML= table;
}
