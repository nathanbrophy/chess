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
