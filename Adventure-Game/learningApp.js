angular.module("learningApp", [])
    .controller("AppController", ["keyPressHandlerService", "gameService", AppController]);

function AppController(keyPressHandlerService, gameService) {
    var vm = this;
    vm.board = gameService.createBoard();
    vm.keyDown = function (keyEvent) {
        vm.keyChode = keyEvent.keyCode;
        gameService.activateMove(keyEvent.keyCode);
    }
};

