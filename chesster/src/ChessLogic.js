// ChessLogic.js

export let PIECE_TYPES = {
    NONE: 0,
    PAWN: 1,
    ROOK: 2,
    KNIGHT: 3,
    BISHOP: 4,
    QUEEN: 5,
    KING: 6,
};
export let GAME_STATES = { INIT: 0, TURN_1: 1, TURN_2: 2, DONE: 99 };
export let PLAYERS = { PLAYER_NONE: 0, PLAYER_1: 1, PLAYER_2: 2 };

export function makePieceLocation(column, row, piece_type, player) {
    // return a piece location map binding piece_type to column and row
    return {
        col: column,
        row: row,
        piece_type: piece_type,
        player: player,
    };
}


export function defaultPieceLocations() {
    return [
        makePieceLocation(0, 0, PIECE_TYPES.ROOK, PLAYERS.PLAYER_1),
        makePieceLocation(1, 0, PIECE_TYPES.KNIGHT, PLAYERS.PLAYER_1),
        makePieceLocation(2, 0, PIECE_TYPES.BISHOP, PLAYERS.PLAYER_1),
        makePieceLocation(3, 0, PIECE_TYPES.QUEEN, PLAYERS.PLAYER_1),
        makePieceLocation(4, 0, PIECE_TYPES.KING, PLAYERS.PLAYER_1),
        makePieceLocation(5, 0, PIECE_TYPES.BISHOP, PLAYERS.PLAYER_1),
        makePieceLocation(6, 0, PIECE_TYPES.KNIGHT, PLAYERS.PLAYER_1),
        makePieceLocation(7, 0, PIECE_TYPES.ROOK, PLAYERS.PLAYER_1),

        makePieceLocation(0, 1, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(1, 1, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(2, 1, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(3, 1, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(4, 1, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(5, 1, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(6, 1, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(7, 1, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),

        makePieceLocation(0, 6, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(1, 6, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(2, 6, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(3, 6, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(4, 6, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(5, 6, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(6, 6, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),
        makePieceLocation(7, 6, PIECE_TYPES.PAWN, PLAYERS.PLAYER_1),

        makePieceLocation(0, 7, PIECE_TYPES.ROOK, PLAYERS.PLAYER_2),
        makePieceLocation(1, 7, PIECE_TYPES.KNIGHT, PLAYERS.PLAYER_2),
        makePieceLocation(2, 7, PIECE_TYPES.BISHOP, PLAYERS.PLAYER_2),
        makePieceLocation(3, 7, PIECE_TYPES.QUEEN, PLAYERS.PLAYER_2),
        makePieceLocation(4, 7, PIECE_TYPES.KING, PLAYERS.PLAYER_2),
        makePieceLocation(5, 7, PIECE_TYPES.BISHOP, PLAYERS.PLAYER_2),
        makePieceLocation(6, 7, PIECE_TYPES.KNIGHT, PLAYERS.PLAYER_2),
        makePieceLocation(7, 7, PIECE_TYPES.ROOK, PLAYERS.PLAYER_2),
    ];
}
