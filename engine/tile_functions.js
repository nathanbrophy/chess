function clear_tile(id) {
  document.getElementById(id).innerHTML = "<div class='empty'></div>";
}

function add_piece(tile_id, piece) {
  if (!document.getElementById(tile_id).children[0].classList.contains("empty")) { // capture
    window.alert(document.getElementById(tile_id).children[0].classList[0] + " captured");
  }
  document.getElementById(tile_id).innerHTML = "<div id='" + piece.id + "' class='" + piece.class + " piece " + piece.color + "'>" +  piece.unicode + "</div>";
}

function move_piece() {
  clear_tile(start_selected.tile_id);
  add_piece(end_selected.tile_id, start_selected.piece);
}
