'use strict';

var Animate = {

    metronome: 1,       // @@ BOOLEAN @@ For super crappy animation
    move: 1.5,          // @@ FLOAT @@ global constant: Higher is faster movement
    speed: undefined,   // @@ FLOAT @@ Computed move moveRate

    init: function init() {
        console.log('INIT: Animate');

        Rpg.sprite.npc.onload = function() {
            Animate.updateNpc();
        }

        Rpg.sprite.hero.onload = function() {
            Animate.updateHero();
        }

        Rpg.sprite.main.onload = function() {
            setInterval(Animate.updateMetronome, 380);
            Animate.updateForeground();
            Animate.render();
        }
    },

    render: function render() {
        requestAnimFrame(Animate.render);
        switch (Rpg.meta.mode) {
            case 'town':
            case 'field':
                //console.log('animate foreground');
                //Menu.hide();
                Animate.updateHero();
                Animate.updateForeground();
                break;

            case 'menu':
                //console.log('show menu');
                //Menu.show();
                break;
        }
    },

    updateSpeed: function speed( multiplyer ) {
        var multiplyer;
        Animate.speed = Math.round(Animate.move * multiplyer * 100) / 100;
    },

    updateMetronome: function updateMetronome() {
        Animate.metronome === 1 ? Animate.metronome = 0 : Animate.metronome = 1;
    },

	updateForeground: function updateForeground() {
        var requestedTile,
            tmpMap,
            map = Rpg.maps[Rpg.meta.map];

    	// If we're traveling in some direction, continue in that direction
    	if (Rpg.meta.animateX < 0) { Rpg.meta.animateX -= Animate.speed; }	// right
    	if (Rpg.meta.animateX > 0) { Rpg.meta.animateX += Animate.speed; }	// left
    	if (Rpg.meta.animateY < 0) { Rpg.meta.animateY -= Animate.speed; }	// down
    	if (Rpg.meta.animateY > 0) { Rpg.meta.animateY += Animate.speed; }	// up

        // User can switch direction at any point. Code something that ignores
        // user input until the beginning of a new animation cycle.
        if (Rpg.meta.arrowKeyPressed && Rpg.meta.animateX === 0 && Rpg.meta.animateY === 0) {
            switch (Rpg.meta.userDirection) {
                case 'right':
                    requestedTile = Rpg.getRequestedTile(1, 0);
                    Animate.updateSpeed(requestedTile.moveRate);
                    Rpg.meta.animateX -= Animate.speed;	// Begin moving right
                    break;

                case 'left':
                    requestedTile = Rpg.getRequestedTile(-1, 0);
                    Animate.updateSpeed(requestedTile.moveRate);
                    Rpg.meta.animateX += Animate.speed;	// Begin moving left
                    break;

                case 'down':
                    requestedTile = Rpg.getRequestedTile(0, 1);
                    Animate.updateSpeed(requestedTile.moveRate);
                    Rpg.meta.animateY -= Animate.speed;	// Begin moving down
                    break;

                case 'up':
                    requestedTile = Rpg.getRequestedTile(0, -1);
                    Animate.updateSpeed(requestedTile.moveRate);
                    Rpg.meta.animateY += Animate.speed;	// Begin moving up
                    break;
            }
        }

        // Did the animation cycle end?
        if (Math.abs(Rpg.meta.animateX) >= Rpg.meta.size || Math.abs(Rpg.meta.animateY) >= Rpg.meta.size) {
            // Increment our position on the map
            if (Rpg.meta.animateX < 0) { map.x++; }
            if (Rpg.meta.animateX > 0) { map.x--; }
            if (Rpg.meta.animateY < 0) { map.y++; }
            if (Rpg.meta.animateY > 0) { map.y--; }

            // Did we trigger any hotspots?
            for (var i=0; i<map.hotspots.length; i++) {
                if (map.x === map.hotspots[i][0] && map.y === map.hotspots[i][1]) {
                    // Switch to triggered map
                    Rpg.meta.prevMap = Rpg.meta.map;
                    Rpg.meta.map = map.hotspots[i][2];
                    console.log('hotspot triggered');
                    if (map.hotspots[i][3] && map.hotspots[i][4]) {
                        Rpg.maps[Rpg.meta.map].x = map.hotspots[i][3];
                        Rpg.maps[Rpg.meta.map].y = map.hotspots[i][4];
                    }
                }
            }

            // Did we walk off the edge of the map?
            if (!(map.x >= 0 && map.x < map.tiles[0].length && map.y >= 0 && map.y < map.tiles.length)) {
                // We're not on the map anymore, revert to previous map
                console.log('Requested position is off current map');
                
                // If an 'offMap' has been defined:
                // 1. reset x & y from previous map
                // 2. set our current map to the offMap
                // Otherwise, set our current map to our previous map
                if (typeof map.offMap != 'undefined') {
                    console.log('going to new map');
                    map.x = map.dx;
                    map.y = map.dy;
                    Rpg.meta.prevMap = Rpg.meta.map;
                    Rpg.meta.map = map.offMap;
                } else {
                    console.log('returning to previous map');
                    Rpg.meta.map = tmpMap;
                    Rpg.meta.map = Rpg.meta.prevMap;
                    Rpg.meta.prevMap = tmpMap;
                }
            }

            // Update tiles to show on the screen
            Rpg.updateScreen();

            // Reset animation counters
            Rpg.meta.animateX = 0;
            Rpg.meta.animateY = 0;
        }

		// clear the foreground canvas
		Rpg.canvas.fgContext.clearRect(0, 0, Rpg.canvas.fg.width, Rpg.canvas.fg.height);

		// draw the foreground tiles
		for (var i = 0; i < Rpg.meta.screen.length; i++) {	// y
			for (var j = 0; j < Rpg.meta.screen[i].length; j++) {	// x
				// Helpful errors, plz!
                if (!Rpg.tiles[Rpg.meta.screen[i][j]]) {
                    throw new Error('Missing tile definition for: ' + Rpg.meta.screen[i][j]);
                }

				// If a tile exists here, draw it.
                if (Rpg.meta.screen[i][j]) {
    				Rpg.canvas.fgContext.drawImage(
    					Rpg.sprite.main,
    					0,
    					Rpg.tiles[Rpg.meta.screen[i][j]].position * Rpg.meta.size,
    					Rpg.meta.size,
    					Rpg.meta.size,
    					(j-1) * Rpg.meta.size + Rpg.meta.animateX,
    					(i-1) * Rpg.meta.size + Rpg.meta.animateY,
    					Rpg.meta.size,
    					Rpg.meta.size
    				);
                }
			}
		}
    },


	updateHero: function updateHero() {

	    var direction;

        switch (Rpg.meta.userDirection) {
            case 'right':
                direction = 1;
                break;

            case 'left':
                direction = 3;
                break;

            case 'down':
                direction = 0;
                break;

            case 'up':
                direction = 2;
                break;
        }

    	// clear canvas
		Rpg.canvas.heroContext.clearRect(0, 0, Rpg.canvas.hero.width, Rpg.canvas.hero.height);	

        // draw hero
		Rpg.canvas.heroContext.drawImage(
			Rpg.sprite.hero,
			direction * Rpg.meta.size,	// direction hero is facing
			Animate.metronome * Rpg.meta.size,	// crappy animation toggle
			Rpg.meta.size,
			Rpg.meta.size,
			Rpg.meta.w * Rpg.meta.size,
			Rpg.meta.n * Rpg.meta.size,
			Rpg.meta.size,
			Rpg.meta.size
		);
	},

	updateNpc: function updateNpc() {
		var npc = Rpg.maps[Rpg.meta.map].npc;

    	// clear canvas
		Rpg.canvas.npcContext.clearRect(0, 0, Rpg.canvas.npc.width, Rpg.canvas.npc.height);	

		for (var i=0; i<npc.length; i++) {
			console.log(npc[i]);

	        // draw each npc
			Rpg.canvas.npcContext.drawImage(
				Rpg.sprite.npc,
				npc[i].direction * Rpg.meta.size,	// direction this npc is facing
				Animate.metronome * Rpg.meta.size,	// crappy animation toggle
				Rpg.meta.size,
				Rpg.meta.size,
				Rpg.meta.w * Rpg.meta.size,
				Rpg.meta.n * Rpg.meta.size,
				Rpg.meta.size,
				Rpg.meta.size
			);

		}
	}
};
