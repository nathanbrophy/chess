function valid_first_selection(piece) {
  var valid = false;
  if (game_info.player1) {
    valid = piece.classList.contains("white_piece");
  } else {
    valid = piece.classList.contains("black_piece");
  }

  if (valid) {
    start_selected.piece_id = piece.id;
    start_selected.piece_class = piece.classList[0];
    start_selected.tile.x = piece.parentElement.id[0];
    start_selected.tile.y = piece.parentElement.id[1];
    start_selected.piece = pieces[piece.id];
  }

  return valid;
}

function valid_second_selection(piece) {
  var valid = false;
  if (game_info.player1) {
    valid = piece.classList.contains("black_piece") || piece.classList.contains("empty");
  } else {
    valid = piece.classList.contains("white_piece") || piece.classList.contains("empty");
  }

  if (valid) {
    end_selected.tile.x = piece.parentElement.id[0];
    end_selected.tile.y = piece.parentElement.id[1];
    end_selected.isEmpty = piece.classList.contains("empty");

    if (!end_selected.isEmpty) {
      end_selected.piece_id = piece.id;
      end_selected.piece_class = piece.classList[0];
      end_selected.piece = pieces[piece.id];
    }
  }
  return valid;
}

function validate_move() {
  switch (start_selected.piece_class) {
    case "king":
      return king_validate_move();
    case "queen":
      return queen_validate_move();
    case "bishop":
      return bishop_validate_move();
    case "knight":
      return knight_validate_move();
    case "rook":
      return rook_validate_move();
    case "pawn":
      return pawn_validate_move();
    default:
      return false;
  }
}

function king_validate_move() {
  var piece = start_selected.piece;
  var x = Number(end_selected.tile_id[0]);
  var y = Number(end_selected.tile_id[1]);

  var x_dif = Math.abs(piece.location.x - x);
  var y_dif = Math.abs(piece.location.y - y);

  if ((x_dif == 1 && y_dif == 1) || (x_dif == 1 && y_dif == 0) || (x_dif == 0 && y_dif == 1)) {
    pieces[piece.id].location.x = x;
    pieces[piece.id].location.y = y;
  }
}

function queen_validate_move() {
  return true;
}

function bishop_validate_move() {
  return true;
}

function knight_validate_move() {
  return true;
}

function rook_validate_move() {
  return true;
}

function pawn_validate_move() {
  return true;
}
