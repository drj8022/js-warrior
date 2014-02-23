'use strict';

// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();



window.onkeydown = function ( e ) {
	switch ( e.keyCode ) {
		case 16:    // shift
			Rpg.handleShiftKey();
			break;

		case 37:	// left
            Rpg.meta.arrowKeyPressed = true;
            Rpg.handleLeftArrowKey();
			break;

		case 38:	// up
            Rpg.meta.arrowKeyPressed = true;
            Rpg.handleUpArrowKey();
			break;

		case 39:	// right
            Rpg.meta.arrowKeyPressed = true;
            Rpg.handleRightArrowKey();
			break;

		case 40:	// down
            Rpg.meta.arrowKeyPressed = true;
            Rpg.handleDownArrowKey();
			break;

        case 88:    // x (cancel)
            Rpg.handleCancelKey();
            break;

        case 90:    // z (confirm)
            Rpg.handleConfirmKey();
            break;
	}
//console.log(Rpg.meta.userDirection);
};	// end window.onkeydown



window.onkeyup = function ( e ) {
	switch ( e.keyCode ) {
		case 37:
		case 38:
		case 39:
		case 40:
			// If user stops pressing an arrow key, unset direction.
			Rpg.meta.arrowKeyPressed = false;
			break;
	}
//console.log(Rpg.meta.userDirection);
};	// end window.onkeyup





(function(){

    Rpg.init();
    Npc.init();
    Animate.init();
    Menu.init();

    console.log(Rpg);
    console.log(Npc);
    console.log(Animate);
    console.log(Menu);

})();
