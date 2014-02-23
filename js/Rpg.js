'use strict';

var Rpg = {
    canvas: {
		fg: document.getElementById('fg'),
		fgContext: fg.getContext('2d'),
		hero: document.getElementById('hero'),
		heroContext: hero.getContext('2d'),
		npc: document.getElementById('npc'),
		npcContext: npc.getContext('2d'),
    },

    sprite: {
        main: new Image(),
        hero: new Image(),
        npc: new Image()
    },

	maps: {},	// populate content with additional js files.

    meta: {
		size: 32,   // size of one tile in pixels
		n: 6,   	// Number of tiles drawn above hero
		e: 7,   	// Number of tiles drawn right of hero
		s: 6,   	// Number of tiles drawn below hero
		w: 7,   	// Number of tiles drawn left of hero
		animateX: 0,    // Used to animate map left & right
		animateY: 0,    // Used to animate map up & down
		screen: [],     // Subset of map tiles we'll be rendering on the fg canvas
		arrowKeyPressed: false,     // @@ BOOLEAN @@ Is user pressing an arrow key?
		userDirection: undefined,   // @@ STRING @@ Updated on user keypress
		map: undefined,     		// @@ STRING @@ name of current map
		prevMap: undefined, 		// @@ STRING @@ name of previous map
		mode: undefined,    		// @@ STRING @@ name of current game mode
		prevMode: undefined 		// @@ STRING @@ name of previous game mode
    },



    init: function init() {
console.log('INIT: Rpg');
        Rpg.sprite.main.src = 'img/sprite-main.gif',
        Rpg.sprite.hero.src = 'img/sprite-hero.gif',
        Rpg.sprite.npc.src = 'img/sprite-npc.gif',

        Rpg.updateMode('town');
        //Rpg.meta.map = 'town1';
        Rpg.meta.map = 'castle1_f1';
        Rpg.meta.userDirection = 'down';
        Rpg.updateScreen();
    },



	/**
	* Build a smaller "screen" array from a larger "map" array.
	* We need to center a single tile around viewable tiles (n, e, s, w). Also: we 
	* need to take into account an additional row of tiles to animate onto the screen
	* when the controls are pressed.
    *
	* @return - Rpg.meta.screen (array)
	*/
	updateScreen: function updateScreen() {
		var map = Rpg.maps[Rpg.meta.map],
		    xOffset,
		    yOffset;

        // If X and Y positions for current map are undefined,
        // set them to their defaults.
        if (typeof map.x === 'undefined') {
            map.x = map.dx
        }
        if (typeof map.y === 'undefined') {
            map.y = map.dy
        }

        xOffset = -Rpg.meta.w + map.x - 1;
        yOffset = -Rpg.meta.n + map.y - 1;

		for (var i = 0; i <= Rpg.meta.n + Rpg.meta.s + 2; i++) {	// For each row
			Rpg.meta.screen[i] = [];
			for (var j = 0; j <= Rpg.meta.e + Rpg.meta.w + 2; j++) {	// For each column
				if (map.tiles[i + yOffset]) {
					if (map.tiles[i + yOffset][j + xOffset]) {
						// Copy original array value to new position.
						Rpg.meta.screen[i][j] = map.tiles[i + yOffset][j + xOffset];
					} else {
						// If no value at this location, use the default tile for this map.
						Rpg.meta.screen[i][j] = map.dTile;
					}
				} else {
					// We need an entire row of default tiles.
					Rpg.meta.screen[i][j] = map.dTile;
				}
			}
		}
	},



	/**
	* Returns the tile user is trying to move to.
	* x and y vars are probably either: 1, 0, or -1
	*
	* @RETURNS object of information about a specific tile
	*/
    getRequestedTile: function getRequestedTile( x, y ) {
        var x, y, tile;
        tile = Rpg.meta.screen[Rpg.meta.n + y + 1][Rpg.meta.w + x + 1];
        return Rpg.tiles[tile];
    },



    /*
    * Updates the current game mode.
    * Calling with 'mode' undefined transposes current and prev modes.
    */
    updateMode: function updateMode( mode ) {
        //var mode;

        // If mode is not defined, set it to previous mode.
        if (mode === undefined) {
            mode = Rpg.meta.prevMode;
        }

        // Die on undefined modes
        if (mode != 'field' && mode != 'menu' && mode != 'town') {
			throw new Error("no such mode: " + mode );
        }

        // If passed mode is different than current
        if (Rpg.meta.mode != mode) {
            Rpg.meta.prevMode = Rpg.meta.mode;
            Rpg.meta.mode = mode;
        } else {
            Rpg.meta.mode = Rpg.meta.prevMode;
            Rpg.meta.prevMode = mode;
        }
    },


    /**
    * Handle key presses
    */
    handleShiftKey: function handleShiftKey() {
        Rpg.updateMode('menu');
	    if (Rpg.meta.mode === 'menu') {
		    Menu.show();
	    } else {
		    Menu.hide();
	    }
    },

    handleLeftArrowKey: function handleLeftArrowKey() {
	    if (Rpg.meta.mode === 'menu') {
		    Menu.moveLeft();
	    } else {
    		Rpg.meta.userDirection ='left';
	    }
    },

    handleUpArrowKey: function handleUpArrowKey() {
	    if (Rpg.meta.mode === 'menu') {
		    Menu.moveUp();
	    } else {
    		Rpg.meta.userDirection ='up';
	    }
    },

    handleRightArrowKey: function handleRightArrowKey() {
	    if (Rpg.meta.mode === 'menu') {
		    Menu.moveRight();
	    } else {
    		Rpg.meta.userDirection ='right';
	    }
    },

    handleDownArrowKey: function handleDownArrowKey() {
	    if (Rpg.meta.mode === 'menu') {
		    Menu.moveDown();
	    } else {
    		Rpg.meta.userDirection ='down';
	    }
    },

    handleCancelKey: function handleCancelKey() {
        console.log('cancel key');
	    if (Rpg.meta.mode === 'menu') {
		    Menu.revert();
	    }
    },

    handleConfirmKey: function handleConfirmKey() {
        console.log('confirm key');
	    if (Rpg.meta.mode === 'menu') {
		    Menu.trigger();
	    }
    },
};




