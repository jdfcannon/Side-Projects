angular.module("learningApp")
    .factory("gameService",["globalSettings", "keyPressHandlerService", "playerService", gameService])

function gameService(globalSettings, keyPressHandlerService, playerService) {
    "use strict";

    var factory = {
        createBoard: createBoard,
        placePlayer: placePlayer,
        oldBoard: oldBoard,
        getSquare: getSquare,
        activateMove: activateMove
    };
    return factory;

    ///////////////////////////////

    var oldBoard;
    var player;

    function placePlayer(board) {
        // player = {x:1, y:2};
        player = playerService.createPlayer();
        var row = player.y;
        var column = player.x;
        var square = getSquare(board, row, column);
        square.content = "player";
        square.isCovered = false;
    }

    function createBoard() {

        var board = {};
        board.rows = [];

        for (var i = 0; i < globalSettings.gameBoardWidth; i++) {
            var row = {};
            row.squares = [];

            for (var j = 0; j < globalSettings.gameBoardWidth; j++) {
                var square = {};
                square.isCovered = true;
                square.content = "empty";
                row.squares.push(square);
            }

            board.rows.push(row);
        }

        if (oldBoard == null) {
            placePlayer(board);
            oldBoard = board;
        }

        return board;
    }

    function activateMove(keycode) {
        player.direction = keyPressHandlerService.processKeyCode(keycode);
        var direction = player.direction;
        var row = player.y;
        var column = player.x;
        var square = getSquare(oldBoard, row, column);
        square.content = "empty";
        square.isCovered = false;

        playerService.movePlayer(direction);
        row = player.y;
        column = player.x;
        square = getSquare(oldBoard, row, column);
        square.content = "player";
        square.isCovered = false;
    }

    function getSquare(board, row, column) {
        return board.rows[row].squares[column];
    }
}