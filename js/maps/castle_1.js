'use strict';

// Main floor
Rpg.maps.castle1 = {
	x: undefined,
	y: undefined,
	dx: 11,
	dy: 30,
	dTile: "iii",
	offMap: 'world',
	hotspots: [
		[8, 8, 'castle1_f1', 9, 9],
		[30, 30, 'castle1_b1']
	],
	tiles: [
        ['iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'iii', 'TTT', 'HHH', 'TTT', 'iii', 'FFF', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'FFF', 'iii', 'FFF', 'FFF', 'iii', 'FFF', 'iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'TTT', 'ooo', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'HHH', 'DSK', 'HHH', 'iii', 'iii', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'HHH', 'HHH', 'HHH', 'HHH', 'ooo', 'ooo', 'HHH', 'HHH', 'HHH', 'HHH', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii', 'FFF', 'FFF', 'iii', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'FFF', 'FFF', 'FFF', 'iii', 'iii', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'HHH', 'HHH', 'HHH', 'TTT', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'HHH', 'HHH', 'DR1', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'ooo', 'HHH', 'HHH', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'HHH', 'ooo', 'TTT', 'STU', 'bbb', 'bbb', 'bbb', 'bbb', 'ooo', 'HHH', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'bbb', 'bbb', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'TTT', 'HHH', 'HHH', 'ooo', 'bbb', 'bbb', 'ooo', 'HHH', 'HHH', 'TTT', 'HHH', 'HHH', 'TTT', 'HHH', 'HHH', 'TTT', 'HHH', 'HHH', 'TTT', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'HHH', 'HHH', 'HHH', 'TTT', 'ooo', 'TTT', 'FFF', 'FFF', 'ooo', 'bbb', 'bbb', 'ooo', 'FFF', 'FFF', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'TTT', 'FFF', 'FFF', 'ooo', 'bbb', 'bbb', 'ooo', 'FFF', 'FFF', 'TTT', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'HHH', 'ooo', 'TTT', 'FFF', 'iii', 'ooo', 'bbb', 'bbb', 'ooo', 'iii', 'FFF', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'TRS', 'ooo', 'ooo', 'DR1', 'ooo', 'TTT', 'iii', 'iii', 'ooo', 'bbb', 'bbb', 'ooo', 'iii', 'iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'TRS', 'ooo', 'TTT', 'ooo', 'TTT', 'iii', 'iii', 'ooo', 'bbb', 'bbb', 'ooo', 'iii', 'iii', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'TRS', 'ooo', 'TRS', 'TTT', 'ooo', 'TTT', 'iii', 'ooo', 'ooo', 'bbb', 'bbb', 'ooo', 'ooo', 'iii', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'ooo', 'HHH', 'iii', 'ooo', 'www', 'www', 'www', 'www', 'ooo', 'iii', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'HHH', 'HHH', 'HHH', 'ooo', 'HHH', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'www', 'BAR', 'BAR', 'www', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'www', 'BAR', 'BAR', 'www', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'HHH', 'HHH', 'ooo', 'ooo', 'HHH', 'HHH', 'TTT', 'ooo', 'www', 'www', 'www', 'www', 'ooo', 'TTT', 'HHH', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'BAR', 'BAR', 'BAR', 'BAR', 'BAR', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'bbb', 'bbb', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'HHH', 'TTT', 'ooo', 'bbb', 'bbb', 'ooo', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'www', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'bbb', 'bbb', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'www', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'bbb', 'bbb', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii', 'iii'],
        ['iii', 'TTT', 'ooo', 'www', 'www', 'ooo', 'ooo', 'HHH', 'ooo', 'TTT', 'ooo', 'bbb', 'bbb', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'HHH', 'HHH', 'TTT', 'HHH', 'TTT', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii', 'iii'],
        ['iii', 'TTT', 'www', 'www', 'www', 'www', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'bbb', 'bbb', 'ooo', 'TTT', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'HHH', 'ooo', 'TTT', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii', 'iii'],
        ['iii', 'TTT', 'www', 'www', 'www', 'www', 'ooo', 'ooo', 'ooo', 'TTT', 'HHH', 'bbb', 'bbb', 'HHH', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'DSK', 'ooo', 'TTT', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii', 'iii'],
        ['iii', 'TTT', 'www', 'www', 'www', 'www', 'www', 'ooo', 'ooo', 'TTT', 'ooo', 'bbb', 'bbb', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'TTT', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii', 'iii'],
        ['iii', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'bbb', 'bbb', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii', 'iii'],
        ['iii', 'www', 'www', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'bbb', 'bbb', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'STD', 'iii'],
        ['iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii']
    ]
};

// Upper floor
Rpg.maps.castle1_f1 = {
	x: undefined,
	y: undefined,
	dx: 4,
	dy: 6,
	dTile: 'rrr',
	hotspots: [
		[9, 9, 'castle1', 8, 8]
	],
	tiles: [
        ['rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr'],
        ['rrr', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'rrr'],
        ['rrr', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TRS', 'ooo', 'ooo', 'TTT', 'rrr'],
        ['rrr', 'TTT', 'ooo', 'THL', 'THB', 'THR', 'THL', 'THB', 'THR', 'ooo', 'TTT', 'rrr'],
        ['rrr', 'TTT', 'ooo', 'THA', 'THC', 'THA', 'THA', 'THC', 'THA', 'ooo', 'TTT', 'rrr'],
        ['rrr', 'TTT', 'ooo', 'ooo', 'THC', 'TRS', 'TRS', 'THC', 'ooo', 'ooo', 'TTT', 'rrr'],
        ['rrr', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'rrr'],
        ['rrr', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'rrr'],
        ['rrr', 'TTT', 'HHH', 'HHH', 'HHH', 'ooo', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'rrr'],
        ['rrr', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'STD', 'TTT', 'rrr'],
        ['rrr', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'rrr'],
        ['rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr']
    ],
    npc: [
    	{
    		x: undefined,
    		y: undefined,
    		dx: 1,
    		dy: 3,
    		type: 'merchant',
    		canMove: false,
    		direction: 2,
    		message: 'Hello World!'
    	}
    ]
};

// First basement
Rpg.maps.castle1_b1 = {
	x: undefined,
	y: undefined,
	dx: 1,
	dy: 5,
	dTile: "TTT",
	hotspots: [
		[1, 5, 'castle1']
	],
	tiles: [
        ['TTT', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'TTT'],
        ['TTT', 'HHH', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'HHH', 'TTT'],
        ['TTT', 'ooo', 'HHH', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'HHH', 'ooo', 'TTT'],
        ['TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT'],
        ['TTT', 'ooo', 'ooo', 'ooo', 'TTT', 'HHH', 'HHH', 'TTT', 'ooo', 'ooo', 'ooo', 'TTT'],
        ['TTT', 'STU', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'TTT'],
        ['TTT', 'ooo', 'ooo', 'ooo', 'TTT', 'TRS', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'TTT'],
        ['TTT', 'ooo', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'HHH', 'ooo', 'ooo', 'ooo', 'TTT'],
        ['TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT'],
        ['TTT', 'ooo', 'HHH', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'HHH', 'ooo', 'TTT'],
        ['TTT', 'TTT', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'TTT'],
        ['TTT', 'TTT', 'TTT', 'TTT', 'TTT', 'TTT', 'TTT', 'TTT', 'TTT', 'TTT', 'TTT', 'TTT']
    ]
};
