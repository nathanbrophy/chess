var WHITETURN = 0;
var BLACKTURN = 1;
var ENDGAME = 2;
var NOTSTARTED = 3;

var game_info = {
  turn: WHITETURN,
  current_move: {
    start_selected: {
      tile_id: "",
      piece_id: "",
      piece_class: ""
    },
    end_selected: {
      tile_id: "",
      piece_id: "",
      piece_class: "",
      isEmpty: ""
    }
  },
  move_log: {}
}


function valid_first_selection(piece) {
  var valid = false;
  if (game_info.turn == WHITETURN) {
    valid = piece.classList.contains("white_piece");
  } else if (game_info.turn == BLACKTURN) {
    valid = piece.classList.contains("black_piece");
  }

  if (valid) {
    game_info.current_move.start_selected.piece_id = piece.id;
    game_info.current_move.start_selected.piece_class = piece.classList[0];
    game_info.current_move.start_selected.tile_id = piece.parentElement.id;
  }

  return valid;
}

function valid_second_selection(piece) {
  var valid = false;
  if (game_info.turn == WHITETURN) {
    valid = piece.classList.contains("black_piece") || piece.classList.contains("empty");
  } else if (game_info.turn == BLACKTURN) {
    valid = piece.classList.contains("white_piece") || piece.classList.contains("empty");
  }

  if (valid) {
    game_info.current_move.end_selected.tile_id = piece.parentElement.id;
    game_info.current_move.end_selected.isEmpty = piece.classList.contains("empty");
    if (!game_info.current_move.end_selected.isEmpty) {
      game_info.current_move.end_selected.piece_id = piece.id;
      game_info.current_move.end_selected.piece_class = piece.classList[0];
    }
  }
  return valid;
}

function validate_move(start_location, end_location, piece_id) {
  var piece = document.getElementById(piece_id);
  switch (piece.class) {
    case "king":
      return king_validate_move(start_location, end_location, piece);
      break;
    case "queen":
      return queen_validate_move(start_location, end_location, piece);
      break;
    case "bishop":
      return bishop_validate_move(start_location, end_location, piece);
      break;
    case "kinght":
      return knight_validate_move(start_location, end_location, piece);
      break;
    case "rook":
      return rook_validate_move(start_location, end_location, piece);
      break;
    case "pawn":
      return pawn_validate_move(start_location, end_location, piece);
      break;
    default:
      return false;

  }
}

function valid_selection() {

}

function king_validate_move(start_location, end_location, piece) {

}

function queen_validate_move(start_location, end_location, piece) {

}

function bishop_validate_move(start_location, end_location, piece) {

}

function knight_validate_move(start_location, end_location, piece) {

}

function rook_validate_move(start_location, end_location, piece) {

}

function pawn_validate_move(start_location, end_location, piece) {

}
