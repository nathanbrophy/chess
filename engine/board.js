var board = [...Array(8)].map(e => Array(8));

function new_board() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      board[i][j] = "";
    }
  }
  for (var variable in pieces) {
    board[pieces[variable].location.y][pieces[variable].location.x] = pieces[variable];
  }
}

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
      if (board[i][j] != "") {
        var piece_div = "<div id='" + board[i][j].id + "' class='" + board[i][j].class + " piece " + board[i][j].color + "'>" +  board[i][j].unicode + "</div>";
      } else {
        var piece_div = "<div class='empty'></div>";
      }
      elem.innerHTML = piece_div;
    }
  }
}

function select(id) {
  var tile = document.getElementById(id);
  var elem = tile.children[0];
  remove_error_animations();

  if (elem.classList.contains("selected")) {
    elem.classList.remove("selected");
    game_info.selected_count--;
    return;
  } else if (game_info.selected_count==0 && valid_first_selection(elem)) {
    elem.classList.add("selected");
    game_info.selected_count++;
    return;
  } else if (game_info.selected_count==1 && valid_second_selection(elem) && validate_move()) {
    elem.classList.add("selected");
    game_info.selected_count++;
    game_step();
    clear_selected();
  } else {
    elem.parentElement.classList.add("error");
  }
}

function load_listeners() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var id = i + "" + j;
      document.getElementById(id).addEventListener("click", function(e) {
        if (e.path) {
          select(e.path[1].id);
        } else {
          window.alert("An error has occurred. \nIf you are using firefox, try using another browser");
        }
      });
    }
  }
}

function remove_error_animations() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var elem = document.getElementById(i + "" + j).children[0];
      if (elem.parentElement.classList.contains("error")) {
        elem.parentElement.classList.remove("error");
      }
    }
  }
}
