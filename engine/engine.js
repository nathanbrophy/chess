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
