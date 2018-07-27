var WHITETURN = 0;
var BLACKTURN = 1;
var ENDGAME = 2;
var NOTSTARTED = 3;

var game_info = {
  turn: WHITETURN,
  move_log: {}
}


function valid_first_selection(piece) {
  if (game_info.turn == WHITETURN) {
    return piece.classList.contains("white_piece");
  } else if (game_info.turn == BLACKTURN) {
    return piece.classList.contains("black_piece");
  } else {
    return false;
  }
}

function valid_second_selection(piece) {
  if (game_info.turn == WHITETURN) {
    return piece.classList.contains("black_piece") || piece.classList.contains("empty");
  } else if (game_info.turn == BLACKTURN) {
    return piece.classList.contains("white_piece") || piece.classList.contains("empty");
  } else {
    return false;
  }
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
