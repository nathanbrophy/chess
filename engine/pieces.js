var pieces = {
  black_king: {
    color: "black_piece",
    location: {
      x: 4,
      y: 7
    },
    captured: false,
    id: "black_king",
    class: "king",
    unicode: "&#9818"
  },

  black_queen: {
    color: "black_piece",
    location: {
      x: 3,
      y: 7
    },
    captured: false,
    id: "black_queen",
    class: "queen",
    unicode: "&#9819"
  },

  black_bishop_1: {
    color: "black_piece",
    location: {
      x: 2,
      y: 7
    },
    captured: false,
    id: "black_bishop_1",
    class: "bishop",
    unicode: "&#9821"
  },

  black_bishop_2: {
    color: "black_piece",
    location: {
      x: 5,
      y: 7
    },
    captured: false,
    id: "black_bishop_2",
    class: "bishop",
    unicode: "&#9821"
  },

  black_knight_1: {
    color: "black_piece",
    location: {
      x: 1,
      y: 7
    },
    captured: false,
    id: "black_knight_1",
    class: "knight",
    unicode: "&#9822"
  },

  black_knight_2: {
    color: "black_piece",
    location: {
      x: 6,
      y: 7
    },
    captured: false,
    id: "black_knight_2",
    class: "knight",
    unicode: "&#9822"
  },

  black_rook_1: {
    color: "black_piece",
    location: {
      x: 0,
      y: 7
    },
    captured: false,
    id: "black_rook_1",
    class: "rook",
    unicode: "&#9820"
  },

  black_rook_2: {
    color: "black_piece",
    location: {
      x: 7,
      y: 7
    },
    captured: false,
    id: "black_rook_2",
    class: "rook",
    unicode: "&#9820"
  },


  black_pawn_1: {
    color: "black_piece",
    location: {
      x: 0,
      y: 6
    },
    captured: false,
    id: "black_pawn_1",
    class: "pawn",
    move_count: 0,
    unicode: "&#9823"
  },

  black_pawn_2: {
    color: "black_piece",
    location: {
      x: 1,
      y: 6
    },
    captured: false,
    id: "black_pawn_2",
    class: "pawn",
    move_count: 0,
    unicode: "&#9823"
  },

  black_pawn_3: {
    color: "black_piece",
    location: {
      x: 2,
      y: 6
    },
    captured: false,
    id: "black_pawn_3",
    class: "pawn",
    move_count: 0,
    unicode: "&#9823"
  },

  black_pawn_4: {
    color: "black_piece",
    location: {
      x: 3,
      y: 6
    },
    captured: false,
    id: "black_pawn_4",
    class: "pawn",
    move_count: 0,
    unicode: "&#9823"
  },

  black_pawn_5: {
    color: "black_piece",
    location: {
      x: 4,
      y: 6
    },
    captured: false,
    id: "black_pawn_5",
    class: "pawn",
    move_count: 0,
    unicode: "&#9823"
  },

  black_pawn_6: {
    color: "black_piece",
    location: {
      x: 5,
      y: 6
    },
    captured: false,
    id: "black_pawn_6",
    class: "pawn",
    move_count: 0,
    unicode: "&#9823"
  },

  black_pawn_7: {
    color: "black_piece",
    location: {
      x: 6,
      y: 6
    },
    captured: false,
    id: "black_pawn_7",
    class: "pawn",
    move_count: 0,
    unicode: "&#9823"
  },

  black_pawn_8: {
    color: "black_piece",
    location: {
      x: 7,
      y: 6
    },
    captured: false,
    id: "black_pawn_8",
    class: "pawn",
    move_count: 0,
    unicode: "&#9823"
  },


  white_king: {
    color: "white_piece",
    location: {
      x: 4,
      y: 0
    },
    captured: false,
    id: "white_king",
    class: "king",
    unicode: "&#9812"
  },

  white_queen: {
    color: "white_piece",
    location: {
      x: 3,
      y: 0
    },
    captured: false,
    id: "white_queen",
    class: "queen",
    unicode: "&#9813"
  },

  white_bishop_1: {
    color: "white_piece",
    location: {
      x: 2,
      y: 0
    },
    captured: false,
    id: "white_bishop_1",
    class: "bishop",
    unicode: "&#9815"
  },

  white_bishop_2: {
    color: "white_piece",
    location: {
      x: 5,
      y: 0
    },
    captured: false,
    id: "white_bishop_2",
    class: "bishop",
    unicode: "&#9815"
  },

  white_knight_1: {
    color: "white_piece",
    location: {
      x: 1,
      y: 0
    },
    captured: false,
    id: "white_knight_1",
    class: "knight",
    unicode: "&#9816"
  },

  white_knight_2: {
    color: "white_piece",
    location: {
      x: 6,
      y: 0
    },
    captured: false,
    id: "white_knight_2",
    class: "knight",
    unicode: "&#9816"
  },

  white_rook_1: {
    color: "white_piece",
    location: {
      x: 0,
      y: 0
    },
    captured: false,
    id: "white_rook_1",
    class: "rook",
    unicode: "&#9814"
  },

  white_rook_2: {
    color: "white_piece",
    location: {
      x: 7,
      y: 0
    },
    captured: false,
    id: "white_rook_2",
    class: "rook",
    unicode: "&#9814"
  },


  white_pawn_1: {
    color: "white_piece",
    location: {
      x: 0,
      y: 1
    },
    captured: false,
    id: "white_pawn_1",
    class: "pawn",
    move_count: 0,
    unicode: "&#9817"
  },

  white_pawn_2: {
    color: "white_piece",
    location: {
      x: 1,
      y: 1
    },
    captured: false,
    id: "white_pawn_2",
    class: "pawn", move_count: 0,
    unicode: "&#9817"
  },

  white_pawn_3: {
    color: "white_piece",
    location: {
      x: 2,
      y: 1
    },
    captured: false,
    id: "white_pawn_3",
    class: "pawn",
    move_count: 0,
    unicode: "&#9817"
  },

  white_pawn_4: {
    color: "white_piece",
    location: {
      x: 3,
      y: 1
    },
    captured: false,
    id: "white_pawn_4",
    class: "pawn",
    move_count: 0,
    unicode: "&#9817"
  },

  white_pawn_5: {
    color: "white_piece",
    location: {
      x: 4,
      y: 1
    },
    captured: false,
    id: "white_pawn_5",
    class: "pawn",
    move_count: 0,
    unicode: "&#9817"
  },

  white_pawn_6: {
    color: "white_piece",
    location: {
      x: 5,
      y: 1
    },
    captured: false,
    id: "white_pawn_6",
    class: "pawn",
    move_count: 0,
    unicode: "&#9817"
  },

  white_pawn_7: {
    color: "white_piece",
    location: {
      x: 6,
      y: 1
    },
    captured: false,
    id: "white_pawn_7",
    class: "pawn",
    move_count: 0,
    unicode: "&#9817"
  },

  white_pawn_8: {
    color: "white_piece",
    location: {
      x: 7,
      y: 1
    },
    captured: false,
    id: "white_pawn_8",
    class: "pawn",
    move_count: 0,
    unicode: "&#9817"
  }
}
