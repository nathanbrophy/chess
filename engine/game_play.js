////////////////////////////////////////////////////////////////////////////////
// Global Variables

var start_selected = {
  tile: {
    x: 0,
    y: 0
  },
  piece_id: "",
  piece_class: "",
  piece: {}
}
var end_selected = {
  tile: {
    x: 0,
    y: 0
  },
  piece_id: "",
  piece_class: "",
  piece: {},
  isEmpty: ""
}

var game_info = {
  player1: true,
  selected_count: 0,
  move_log: {}
}

////////////////////////////////////////////////////////////////////////////////

function change_turn() {
  if (game_info.player1) {
    document.getElementById("turn_box").innerHTML = "Black's Turn";
  } else {
    document.getElementById("turn_box").innerHTML = "White's Turn";
  }
  game_info.player1 = !game_info.player1;


  start_selected = {
    tile: {
      x: 0,
      y: 0
    },
    piece_id: "",
    piece_class: "",
    piece: {}
  };
  end_selected = {
    tile: {
      x: 0,
      y: 0
    },
    piece_id: "",
    piece_class: "",
    piece: {},
    isEmpty: ""
  };

  game_info.selected_count = 0;
  clear_selected();
}

function game_step() {
  move_piece();
  log_move();
  change_turn();
}

function log_move() {
  var piece = start_selected.piece_class;
  var from = start_selected.tile.x + "" + start_selected.tile.y;
  var to = end_selected.tile.x + "" + start_selected.tile.y;

  var str = "" + piece + " from " + from + " to " + to;
  var player;
  if (game_info.player1) { player = "White"; }
  else { player = "Black"; }

  var row = "<tr><td>" + str + "</td><td>" + player + "</td></tr>";

  document.getElementById("move_log").innerHTML += row;

}
var listeners_loaded = false;

function begin_game() {
  new_board();
  load_pieces();
  if (!listeners_loaded) {
    load_listeners();
    listeners_loaded = true;
  }
  document.getElementById("turn_box").innerHTML = "White's Turn";
  document.getElementById("game_btn").innerHTML = "Restart Game";
  document.getElementById("move_log").innerHTML = "<tr><th id='move'>Move</th><th id='player'>Player</th></tr>";
  game_info.player1 = true;
}
