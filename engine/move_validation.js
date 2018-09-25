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
  if (Math.abs(Number(start_selected.tile.x) - Number(end_selected.tile.x)) > 1 ||
      Math.abs(Number(start_selected.tile.y) - Number(end_selected.tile.y)) > 1) {
    return false;
  }
  return true;
}

function queen_validate_move() {
  return isValidDiagonal(Number(start_selected.tile.x), Number(start_selected.tile.y), Number(end_selected.tile.x), Number(end_selected.tile.y)) || isValidStraight(Number(start_selected.tile.x), Number(start_selected.tile.y), Number(end_selected.tile.x), Number(end_selected.tile.y));
}

function bishop_validate_move() {
  return isValidDiagonal(Number(start_selected.tile.x), Number(start_selected.tile.y), Number(end_selected.tile.x), Number(end_selected.tile.y));
}

function knight_validate_move() {
  return isValidKnightMove(Number(start_selected.tile.x),
                            Number(start_selected.tile.y),
                            Number(end_selected.tile.x),
                            Number(end_selected.tile.y));
}

function rook_validate_move() {
  return isValidStraight(Number(start_selected.tile.x),
                          Number(start_selected.tile.y),
                          Number(end_selected.tile.x),
                          Number(end_selected.tile.y));
}
// TODO: implement pawn move
function pawn_validate_move() {
  if (start_selected.move_count > 0) {
    console.log("second move");
  }
  return true;
}


function isValidKnightMove(x_start, y_start, x_end, y_end) {
  if (!((Math.abs(x_start - x_end) == 2 && Math.abs(y_start - y_end) == 1) || (Math.abs(x_start - x_end) == 1 && Math.abs(y_start - y_end) == 2))) {
    return false;
  }
  return true;
}

function isValidDiagonal(x_start, y_start, x_end, y_end) {
  if (Math.abs(x_start - x_end) != Math.abs(y_start - y_end)) {
    return false;
  }
  var i,j;

  if (x_start < x_end && y_start < y_end) {
    // q1
    i = x_start + 1;
    j = y_start + 1;
    while (i < x_end && j < y_end) {
      if (board[i][j] != "") {
        return false;
      }
      i++;
      j++;
    }
    return true;
  } else if (x_start < x_end && y_start > y_end) {
    // q2
    i = x_start + 1;
    j = y_start - 1;
    while (i < x_end && j > y_end) {
      if (board[i][j] != "") {
        return false;
      }
      i++;
      j--;
    }
    return true;
  } else if (x_start > x_end && y_start < y_end) {
    // q3
    i = x_start - 1;
    j = y_start + 1;
    while (i > x_end && j < y_end) {
      if (board[i][j] != "") {
        return false;
      }
      i--;
      j++;
    }
    return true;
  } else if (x_start > x_end && y_start > y_end) {
    // q4
    i = x_start - 1;
    j = y_start - 1;
    while (i > x_end && j > y_end) {
      if (board[i][j] != "") {
        return false;
      }
      i--;
      j--;
    }
    return true;
  } else {
    return false;
  }
}

function isValidStraight(x_start, y_start, x_end, y_end) {
  if (!(x_start == x_end|| y_start == y_end)) {
    return false;
  }

  var i,j;

  if (y_start == y_end) {
    j = y_start;
    if (x_start < x_end) {
      i = x_start + 1;
      while (i < x_end) {
        if (board[i][j] != "") {
          return false;
        }
        i++;
      }
      return true;
    } else {
      i = x_start - 1;
      while (i > x_end) {
                console.log(i + " " + j);
        if (board[i][j] != "") {
          return false;
        }
        i--;
      }
      return true;
    }
  } else {
    i = x_start;
    if (y_start < y_end) {
      j = y_start + 1;
      while (j < y_end) {
        if (board[i][j] != "") {
          return false;
        }
        j++;
      }
      return true;
    } else {
      j = y_start - 1;
      while (j > y_end) {
        if (board[i][j] != "") {
          return false;
        }
        j--;
      }
      return true;
    }
  }
}
