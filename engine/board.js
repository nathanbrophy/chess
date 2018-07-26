var board = [...Array(8)].map(e => Array(8));

function load_board() {
  for (var variable in pieces) {
    board[pieces[variable].location.y][pieces[variable].location.x] = pieces[variable];
  }
}
load_board();


function print_board() {
  var table = "<table id='chess_board'>";
  var color_class = true;
  for (var i = 0; i < board.length; i++) {
    table += "<tr>"
    for (var j = 0; j < board[i].length; j++) {
      if (color_class) { table += "<td class='piece black' "; }
      else { table += "<td  class='piece white' "; }
      color_class = !color_class;

      if (board[i][j]) {
       table += "onclick='select(" +  board[i][j].id + ");' id=" + board[i][j].id + ">" + board[i][j].unicode + "</td>";
      }else {
        table += "onclick='select();'></td>";
     }
     console.log(table);
    }
    table += "</tr>";
    color_class = !color_class;

  }
  table += "</table>";
  document.getElementById('board_container').innerHTML= table;
}
