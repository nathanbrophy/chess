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
      var elem = document.getElementById(i + "" + j);
      if (board[i][j]) {
        var piece_div = "<div id='" + board[i][j].id + "' class='" + board[i][j].class + " piece " + board[i][j].color + "'>" +  board[i][j].unicode + "</div>";
      } else {
        var piece_div = "<div class='empty'></div>";
      }
      elem.innerHTML = piece_div;
    }
  }
  load_listeners();
}

var selected_count = 0;

function select(id) {
  var tile = document.getElementById(id);
  var elem = tile.children[0];

  if (elem.classList.contains("selected")) {
    elem.classList.remove("selected");
    selected_count--;
    return;
  } else if (selected_count==0 && valid_first_selection(elem)) {
    elem.classList.add("selected");
    selected_count++;
    return;
  } else if (selected_count==1 && valid_second_selection(elem)) {
    elem.classList.add("selected");
    selected_count++;
    validate_move();
    clear_selected();
  }
}

function clear_selected() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var elem = document.getElementById(i + "" + j).children[0];
      if (elem.classList.contains("selected")) {
        elem.classList.remove("selected");
      }
    }
  }
  selected_count = 0;
}

function load_listeners() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var id = i + "" + j;
      document.getElementById(id).addEventListener("click", function(e) {
        select(e.path[1].id);
      });
    }
  }
}

function clear_tile(id) {
  document.getElementById(id).innerHTML = "<div class='empty'></div>";
}

function add_piece(tile_id, piece) {
  if (!document.getElementById(title_id).children[0].classList.contains("empty")) { // capture
    window.alert(document.getElementById(title_id).children[0].classList[0] + " captured");
  }
  document.getElementById(tile_id).innerHTML = "<div id='" + piece.id + "' class='" + piece.class + " piece " + piece.color + "'>" +  piece.unicode + "</div>";
}

function move_piece(start_id, end_id, piece) {
  clear_tile(start_id);
  add_piece(end_id, piece);
}
