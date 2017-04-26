angular.module("learningApp")
    .factory("keyPressHandlerService", keyPressHandlerService)

function keyPressHandlerService() {
    var factory = {
        processKeyCode: processKeyCode
    };

    return factory;
    
    //////////////
    
    function processKeyCode(keyCode) {
        switch (keyCode) {
            case 37: //left
                return "left";

            case 38: //up
                return "up";

            case 39: //right
                return "right";

            case 40: //down
                return "down";

            default:
                return "none";
        }
    }

    // function processKeyCode(keyCode) {
    //     switch (keyCode) {
    //         case 37: //left
    //             return characterDirection.left;

    //         case 38: //up
    //             return characterDirection.up;

    //         case 39: //right
    //             return characterDirection.right;

    //         case 40: //down
    //             return characterDirection.down;

    //         default:
    //             return characterDirection.none;
    //     }
    // }
};