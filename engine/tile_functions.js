function move_piece() {
  var captured_piece = board[end_selected.tile.x][end_selected.tile.y];
  if (captured_piece != "") {
    if (game_info.player1) {
      document.getElementById("white_capture").innerHTML += captured_piece.unicode + "<br />";
    } else {
      document.getElementById("black_capture").innerHTML += captured_piece.unicode + "<br />";
    }
  }
  var move_piece = board[start_selected.tile.x][start_selected.tile.y];
  board[start_selected.tile.x][start_selected.tile.y] = "";
  board[end_selected.tile.x][end_selected.tile.y] = move_piece;
  load_pieces();
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
  game_info.selected_count = 0;
}
