'use strict';

Rpg.maps.town1 = {
	x: undefined,
	y: undefined,
	dx: 1,
	dy: 15,
	dTile: "iii",
	offMap: 'world',
	hotspots: [
		[22, 7, 'shop1'],
		[23, 24, 'shop2']
	],
	tiles: [
		['iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii'],
		['iii', 'TTT', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'ddd', 'bbb', 'bbb', 'ddd', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'FFF', 'FFF', 'iii', 'iii', 'iii', 'iii', 'FFF', 'FFF', 'FFF', 'FFF', 'ddd', 'ddd', 'bbb', 'bbb', 'ddd', 'ddd', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'FFF', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'FFF', 'iii', 'FFF', 'iii', 'ddd', 'bbb', 'bbb', 'ddd', 'iii', 'iii', 'FFF', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'FFF', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'iii', 'TTT', 'HHH', 'HHH', 'HHH', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'bbb', 'bbb', 'iii', 'iii', 'iii', 'FFF', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'FFF', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'iii', 'TTT', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'bbb', 'bbb', 'ddd', 'iii', 'iii', 'iii', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'FFF', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'iii', 'TTT', 'ooo', 'DSK', 'ooo', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'bbb', 'bbb', 'ddd', 'iii', 'FFF', 'iii', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'FFF', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'iii', 'HHH', 'HHH', 'ooo', 'HHH', 'HHH', 'iii', 'iii', 'ddd', 'ddd', 'iii', 'iii', 'bbb', 'bbb', 'ddd', 'ddd', 'FFF', 'iii', 'rrr', 'DR1', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'iii', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'iii', 'iii', 'iii', 'bbb', 'WPN', 'iii', 'iii', 'ddd', 'ddd', 'ddd', 'ddd', 'iii', 'bbb', 'bbb', 'ddd', 'iii', 'FFF', 'iii', 'iii', 'iii', 'iii', 'FFF', 'iii', 'iii', 'FFF', 'iii', 'iii', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'FFF', 'iii', 'iii', 'bbb', 'iii', 'iii', 'ddd', 'ddd', 'QQQ', 'ddd', 'ddd', 'iii', 'bbb', 'bbb', 'ddd', 'iii', 'iii', 'iii', 'iii', 'iii', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'FFF', 'iii', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'iii', 'iii', 'iii', 'bbb', 'iii', 'iii', 'ddd', 'QQQ', 'QQQ', 'QQQ', 'ddd', 'ddd', 'bbb', 'bbb', 'iii', 'iii', 'TTT', 'HHH', 'HHH', 'HHH', 'TTT', 'HHH', 'HHH', 'HHH', 'TTT', 'FFF', 'iii', 'TTT', 'iii'],
		['iii', 'TTT', 'FFF', 'iii', 'iii', 'iii', 'bbb', 'iii', 'ddd', 'ddd', 'ddd', 'WEL', 'QQQ', 'QQQ', 'ddd', 'bbb', 'bbb', 'iii', 'iii', 'TTT', 'ooo', 'oPo', 'ooo', 'TTT', 'ooo', 'oPo', 'ooo', 'TTT', 'iii', 'iii', 'TTT', 'iii'],
		['iii', 'TTT', 'iii', 'iii', 'iii', 'iii', 'bbb', 'iii', 'ddd', 'ddd', 'QQQ', 'QQQ', 'QQQ', 'ddd', 'iii', 'bbb', 'bbb', 'iii', 'iii', 'TTT', 'ooo', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'iii', 'TTT', 'iii'],
		['iii', 'HHH', 'FFF', 'FFF', 'iii', 'iii', 'bbb', 'iii', 'iii', 'ddd', 'ddd', 'ddd', 'ddd', 'ddd', 'iii', 'bbb', 'bbb', 'iii', 'iii', 'HHH', 'HHH', 'ooo', 'HHH', 'HHH', 'HHH', 'ooo', 'HHH', 'HHH', 'iii', 'FFF', 'HHH', 'iii'],
		['iii', 'FFF', 'FFF', 'iii', 'iii', 'iii', 'bbb', 'iii', 'iii', 'iii', 'iii', 'ddd', 'ddd', 'iii', 'iii', 'bbb', 'bbb', 'iii', 'iii', 'iii', 'iii', 'bbb', 'iii', 'iii', 'iii', 'bbb', 'iii', 'iii', 'iii', 'FFF', 'FFF', 'iii'],
		['iii', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'iii'],
		['iii', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'iii'],
		['iii', 'FFF', 'FFF', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'bbb', 'iii', 'iii', 'iii', 'iii', 'FFF', 'iii', 'bbb', 'iii', 'iii', 'iii', 'FFF', 'iii', 'iii', 'iii', 'iii', 'iii', 'www', 'www', 'www', 'FFF', 'FFF', 'iii'],
		['iii', 'TTT', 'FFF', 'FFF', 'iii', 'iii', 'iii', 'iii', 'iii', 'bbb', 'iii', 'iii', 'iii', 'FFF', 'FFF', 'iii', 'bbb', 'iii', 'FFF', 'FFF', 'FFF', 'FFF', 'iii', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'FFF', 'iii'],
		['iii', 'TTT', 'FFF', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'bbb', 'iii', 'iii', 'FFF', 'FFF', 'iii', 'iii', 'bbb', 'FFF', 'FFF', 'FFF', 'iii', 'iii', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'TTT', 'INN', 'ooo', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'bbb', 'iii', 'FFF', 'iii', 'iii', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'TTT', 'HHH', 'HHH', 'TTT', 'HHH', 'HHH', 'ooo', 'HHH', 'HHH', 'TTT', 'iii', 'iii', 'iii', 'bbb', 'QQQ', 'iii', 'iii', 'www', 'www', 'www', 'www', 'iii', 'iii', 'www', 'www', 'www', 'www', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'TTT', 'DRW', 'DRW', 'TTT', 'ooo', 'ooo', 'ooo', 'DSK', 'ooo', 'TTT', 'iii', 'iii', 'iii', 'bbb', 'iii', 'iii', 'www', 'www', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'www', 'www', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'TTT', 'ooo', 'ooo', 'HHH', 'ooo', 'HHH', 'HHH', 'HHH', 'HHH', 'TTT', 'iii', 'FFF', 'iii', 'bbb', 'bbb', 'bbb', 'BRG', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'TTT', 'ooo', 'ooo', 'DR1', 'ooo', 'ooo', 'ooo', 'ooo', 'ooo', 'TTT', 'iii', 'FFF', 'iii', 'iii', 'iii', 'iii', 'www', 'iii', 'iii', 'rrr', 'bbb', 'rrr', 'rrr', 'rrr', 'rrr', 'FFF', 'iii', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'TTT', 'ooo', 'HHH', 'TTT', 'ooo', 'HHH', 'TTT', 'ooo', 'ooo', 'TTT', 'iii', 'FFF', 'FFF', 'iii', 'iii', 'www', 'www', 'iii', 'iii', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'FFF', 'iii', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'ooo', 'TTT', 'ooo', 'oCo', 'TTT', 'FFF', 'FFF', 'FFF', 'FFF', 'iii', 'www', 'www', 'www', 'iii', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'iii', 'www', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'TTT', 'ooB', 'Boo', 'TTT', 'oCo', 'oTo', 'TTT', 'ooo', 'oTo', 'TTT', 'iii', 'FFF', 'FFF', 'iii', 'iii', 'www', 'www', 'iii', 'iii', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'iii', 'FFF', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'iii', 'FFF', 'iii', 'iii', 'www', 'www', 'www', 'www', 'iii', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'rrr', 'FFF', 'FFF', 'www', 'iii'],
		['iii', 'TTT', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'www', 'www', 'www', 'www', 'www', 'iii', 'iii', 'iii', 'iii', 'iii', 'www', 'www', 'FFF', 'www', 'www', 'iii'],
		['iii', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'www', 'iii'],
		['iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii', 'iii']
	]
};

Rpg.maps.shop1 = {
	x: undefined,
	y: undefined,
	dx: 1,
	dy: 4,
	dTile: "BLACKOUT",
	hotspots: [],
	tiles: [
		['TTT', 'HHH', 'HHH', 'TTT', 'HHH', 'HHH', 'HHH', 'TTT'],
		['TTT', 'bbb', 'bbb', 'HHH', 'bbb', 'www', 'www', 'TTT'],
		['TTT', 'bbb', 'bbb', 'DSK', 'bbb', 'www', 'www', 'TTT'],
		['TTT', 'bbb', 'bbb', 'TTT', 'bbb', 'www', 'www', 'TTT'],
		['HHH', 'bbb', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH']
	]
};

Rpg.maps.shop2 = {
	x: undefined,
	y: undefined,
	dx: 1,
	dy: 0,
	dTile: "BLACKOUT",
	hotspots: [],
	tiles: [
		['TTT', 'bbb', 'HHH', 'TTT', 'HHH', 'TTT'],
		['TTT', 'bbb', 'bbb', 'HHH', 'bbb', 'TTT'],
		['TTT', 'bbb', 'bbb', 'DSK', 'bbb', 'TTT'],
		['TTT', 'bbb', 'bbb', 'TTT', 'bbb', 'TTT'],
		['HHH', 'HHH', 'HHH', 'HHH', 'HHH', 'HHH']
	]
};
