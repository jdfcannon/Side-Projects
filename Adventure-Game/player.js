angular.module("learningApp")
    .factory("playerService", ["keyPressHandlerService", "globalSettings", playerService])

function playerService(keyPressHandlerService, globalSettings) {
    "use strict";

    var factory = {
        player: player,
        createPlayer: createPlayer,
        movePlayer: movePlayer
    };
    return factory;

    ////////////////////////////

    var player;
    function createPlayer() {
        var newPlayer = {
            x: Math.round(Math.random() * (globalSettings.gameBoardWidth - 1)),
            y: Math.round(Math.random() * (globalSettings.gameBoardHeight - 1)),
            direction: "none"
        }
        player = newPlayer;
        return player;
    }

    function movePlayer(direction) {
        var square;
        switch (direction) {
            case "left": //left
                if (player.x > globalSettings.gameBoardWidth - globalSettings.gameBoardWidth)
                player.x -= 1;
                break;

            case "up": //up
                if (player.y > globalSettings.gameBoardHeight - globalSettings.gameBoardHeight)
                player.y -= 1;
                break;

            case "right": //right
                if (player.x < globalSettings.gameBoardWidth -1)
                player.x += 1;
                break;

            case "down": //down
                if (player.y < globalSettings.gameBoardHeight -1)
                player.y += 1;
                break;

            default:
                return "dangit";
        }
    }
}