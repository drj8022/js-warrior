void setup() {

  int tileSize = 16;                       // Tile size in pixels.
  PImage map = loadImage("castle_02.gif");      // Our map.
  String grail = "[\n";                    // Begin JSON return string.
  int tileRows = map.width/tileSize;       // How many rows of tiles?
  int tileCols = map.height/tileSize;      // How many columns of tiles?

  int y = 0;  // Curent row we're on
  for (int i = 0; i < tileRows*tileCols; i++) {
    
    if (i % tileCols == 0 && i != 0) {
      y++;  // Increment row.
      grail = grail.substring(0, grail.length()-2);  // remove ", "
      grail += "],\n  [";  // End old row, start new row.
    }

    // First time through? Start a new row.
    if (i == 0) { grail += "  ["; }

    // Test this little piece of the map.
    PImage tmp = sliceMap(map, i%tileCols, y, tileSize);
    grail += "'" + getTileLabel(tmp) + "', ";  // Add result to JSON string.
  }
  
  grail = grail.substring(0, grail.length()-2);  // remove ", "
  grail += "]\n]";  // Close last row, close JSON string.

  // CMD-A / CMD-C / CMD-V is the best!
  print(grail);
}





// Cut out tile-sized slice from the larger map.
// Return an image
PImage sliceMap(PImage map, int x, int y, int size) {
  int pixel = 0;
  int counter = 0;
  PImage tile = createImage(size, size, RGB);

  for (int i=0; i<pow(size, 2); i++) {
    pixel = i % size;
    if(pixel == 0 && i != 0) { counter++; }
    int xOff = x * size;
    int yOff = y * size * map.width;
    tile.pixels[i] = map.pixels[pixel + xOff + yOff + map.width*counter];
  }
  return tile;
}





// Brute force
// Just try everything until something
String getTileLabel( PImage img ) {

  String label = "ERR";
  PImage brick   = loadImage("dw1_brick.gif");
  PImage wall    = loadImage("dw1_wall.gif");
  PImage door    = loadImage("dw1_door.gif");
//  PImage inn     = loadImage("dw1_inn.gif");
  PImage roof    = loadImage("dw1_roof.gif");
//  PImage shield  = loadImage("dw1_shield.gif");
  PImage desk    = loadImage("dw1_desk.gif");
  PImage barrier    = loadImage("dw1_barrier.gif");

  PImage water   = loadImage("dw1_water.gif");
  PImage grass   = loadImage("dw1_grass.gif");
  PImage forest  = loadImage("dw1_forest.gif");
//  PImage desert  = loadImage("dw1_desert.gif");
//  PImage swamp   = loadImage("dw1_swamp.gif");
//  PImage bridge  = loadImage("dw1_bridge.gif");

  if (matchTile(img, grass))  { return label = "iii"; }
  if (matchTile(img, brick))  { return label = "bbb"; }
  if (matchTile(img, wall))   { return label = "HHH"; }
  if (matchTile(img, door))   { return label = "DOR"; }
//  if (matchTile(img, inn))    { return label = "INN"; }
  if (matchTile(img, roof))   { return label = "rrr"; }
//  if (matchTile(img, shield)) { return label = "SHL"; }
  if (matchTile(img, desk))   { return label = "DSK"; }
  if (matchTile(img, barrier))   { return label = "BAR"; }

  if (matchTile(img, water))   { return label = "___"; }
  if (matchTile(img, forest))  { return label = "fff"; }
//  if (matchTile(img, desert))  { return label = "ddd"; }
//  if (matchTile(img, swamp))   { return label = "xxx"; }
//  if (matchTile(img, bridge))  { return label = "BRG"; }
  
  return label;

}



boolean matchTile( PImage a, PImage b) {
  for (int i=0; i<a.height*a.width; i++) {
    if (a.pixels[i] != b.pixels[i]) {
      return false;
    }
  }
  return true;
}

