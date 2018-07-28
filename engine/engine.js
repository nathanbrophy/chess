var WHITETURN = 0;
var BLACKTURN = 1;
var ENDGAME = 2;
var NOTSTARTED = 3;

var game_info = {
  turn: WHITETURN,
  selected_count: 0,
  current_move: {
    start_selected: {
      tile_id: "",
      piece_id: "",
      piece_class: "",
      piece: {}
    },
    end_selected: {
      tile_id: "",
      piece_id: "",
      piece_class: "",
      piece: {},
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
    game_info.current_move.start_selected.piece = pieces[piece.id];
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
      game_info.current_move.end_selected.piece = pieces[piece.id];
    }
  }
  return valid;
}

function validate_move() {
  switch (game_info.current_move.start_selected.piece_class) {
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
  var piece = game_info.current_move.start_selected.piece;
  var x = Number(game_info.current_move.end_selected.tile_id[0]);
  var y = Number(game_info.current_move.end_selected.tile_id[1]);

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

function change_turn() {
  if (game_info.turn == WHITETURN) {
    game_info.turn = BLACKTURN;
    document.getElementById("turn_box").innerHTML = "Black's Turn";

  } else if (game_info.turn == BLACKTURN) {
    game_info.turn = WHITETURN;
    document.getElementById("turn_box").innerHTML = "White's Turn";

  }

  game_info.current_move = {
    start_selected: {
        tile_id: "",
        piece_id: "",
        piece_class: "",
        piece: {}
      },
      end_selected: {
        tile_id: "",
        piece_id: "",
        piece_class: "",
        piece: {},
        isEmpty: ""
      }
    };

    game_info.selected_count = 0;
    clear_tile();
}

function game_step() {
  move_piece();
  log_move();
  change_turn();
}

function log_move() {
  var piece = game_info.current_move.start_selected.piece_class;
  var from = game_info.current_move.start_selected.tile_id;
  var to = game_info.current_move.end_selected.tile_id;

  var str = "Moved " + piece + " from " + from + " to " + to;
  var player;
  if (game_info.turn == WHITETURN) { player = "White"; }
  else { player = "Black"; }

  var row = "<tr><td>" + str + "</td><td>" + player + "</td></tr>";

  document.getElementById("move_log").innerHTML += row;

}

function begin_game() {
  load_pieces();
  document.getElementById("turn_box").innerHTML = "White's Turn";
  document.getElementById("game_btn").innerHTML = "Restart Game";
  document.getElementById("move_log").innerHTML = "<tr><th>Move</th><th>Player</th></tr>";
}
