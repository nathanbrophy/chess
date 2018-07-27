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
      if (color_class) { table += "<td class='tile black' "; }
      else { table += "<td  class='tile white' "; }
      table += "id='" + i + "" + j + "'></td>";
      color_class = !color_class;
    }
    table += "</tr>";
    color_class = !color_class;

  }

  table += "</table>";
  document.getElementById('board_container').innerHTML= table;
}

function load_pieces() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j]) {
        var elem = document.getElementById(i + "" + j);
        elem.innerHTML = board[i][j].unicode;
      }
    }
  }
  load_listeners();
}

var selected_count = 0;

function select(id) {
  var elem = document.getElementById(id);
  if (elem.classList.contains("selected")) {
    elem.classList.remove("selected");
    selected_count--;
  } else if (selected_count < 2) {
    elem.classList.add("selected");
    selected_count++;
  }
}

function load_listeners() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var id = i + "" + j;
      document.getElementById(id).addEventListener("click", function(e) {
        select(e.target.id);
      });
    }
  }
}
