const arr = [
  "........#..#.##.#..............",
  "...#...............#.#.........",
  "...#..#...#..##....#...........",
  "...#.............#....#.....#..",
  "..#......#..#...#.......#......",
  "..............##...............",
  "#.......#.........#......#....#",
  ".#.....###.....#...#.#.#...#...",
  "#.....................#....#.#.",
  ".......#...................#...",
  "...#.#...................#....#",
  "....#....#.......#...#.........",
  "..##.#............#..#.........",
  ".....##.#..............##..###.",
  "...........#....#....#.........",
  "#.....#...#...#.#.#.#.##.#...#.",
  ".#...............#....##.......",
  ".....#..#......#....#.......##.",
  ".....#........#.......#........",
  "...#...##...#..##...#.....##...",
  ".....#.........#.###...##...#..",
  ".#.##...#........#.#.#.#....#..",
  "....#......##.#...#.....#....#.",
  ".......###..........#..#..#....",
  "......#...#.##.................",
  "....#...#...#.........#......#.",
  ".....#...........#...###....#..",
  ".....#...#.#.#....##.#......#.#",
  "......#...#.....#..#..#........",
  "#......#..#...##........###....",
  "##.....#....##..#.#.###.#...#..",
  "........#....#.......#.....#..#",
  "#.#.#.##.#.#...................",
  "..#...##....#......#.....##....",
  ".......#.##..#........##..#....",
  ".#.#....##......#.#..........#.",
  "#..............#............#..",
  ".#.#.#.#.#.####.#.#...##.......",
  ".#..#.....##.#.......#.##...#..",
  "..#.#........#.............#.#.",
  "..#.#..........#..#........#...",
  "..#..#...#.......##...#.#....##",
  "...#.....#.#.#.....#....#....#.",
  ".#...#......#.....#..##........",
  "...#.......##.#.#.....#......#.",
  "...........#.....#.#.......#...",
  "#...........#...#..#.#........#",
  "....#......#..##........#..###.",
  ".#..#........................#.",
  "#.......#......#...#...#..#....",
  "....#.#...#..#.#....#....##.#..",
  ".....#......#..#..........##.#.",
  ".#.....#...........#.........#.",
  "...###.#...#.......#.#.........",
  ".......#....#..........#..#...#",
  "......##..#.......#...##.......",
  "..#..........#.......#.........",
  "..........#..#..#..#..#........",
  ".#.................####...#.#.#",
  "..##.....#............#........",
  "....#.....###...#......#....#.#",
  "...##.#...........#.##......#..",
  "#..##..#..#....#...#..#........",
  "......#....#........#.......#..",
  "......#.....#......###.........",
  ".#.....#.#......#.......#......",
  "..#.........#..#..#........##.#",
  "..#.#....#.....#....##....#.#..",
  "...#.............##............",
  "........#..#..#......#...#.....",
  ".....#.#...#...##.....#.....#..",
  ".#..#.#..........##...##.....#.",
  "......##.#..........#...#.....#",
  "#.#.##......#....#..........#..",
  "................#.......#.##...",
  "#.......#.....#.......#....#...",
  "#..#.....#.##..##...........#..",
  ".....#....#.#.##..........#..##",
  "#.......#.....#.##...........#.",
  "........#.##........###..#.#...",
  "........#..................#...",
  "#.........................#...#",
  "....#.........#...#.#..#.....#.",
  ".#............#....#...........",
  "..#.#...#..##...#.#.......#....",
  ".#.#....#...........#.........#",
  "...#.#..........#.....#...#....",
  "......#....#.#...............##",
  "....##......###...##.##.....##.",
  "............#.#....#.#.....#..#",
  ".....#..#.....#.#...###....#...",
  ".......##....##..#...##..#...##",
  ".....#.......##..#...#...#....#",
  "#.........##....#........###.#.",
  "...#..##...#...#.........#.#.#.",
  "....#.#.....#.....#............",
  "#........#....#..#........#....",
  ".......#....#...#..............",
  "#...#.........##.....###.#.....",
  ".#....##..#...#..##.........#..",
  "....#.....#......##..#..#....#.",
  "#.#..#.........#........#......",
  "..#.......#.........#.....###..",
  "..#..........#...........#....#",
  "..#...............#......#..#..",
  "....#..#...#....###.....#..#..#",
  "#...#...#..#...........#....#..",
  ".#....#.#..#....#.#...........#",
  ".....#.....#..#....#..#....#...",
  "#.#..#...........#.#...........",
  "..................#.#.......#..",
  "...#.........#.....#..##....#..",
  ".........#.#...#.........##....",
  "...#..#....#.....#...#..#......",
  ".#.##.....#....#....#......##..",
  "##..#.........#.#....#...#.....",
  "#......#.#...#....#.#..#.......",
  ".......#.....#.....###....#.#..",
  ".#....##.#.....#...#.......#...",
  ".#.......#..#...#......#..#..##",
  "...............#...#...........",
  "#..............#....#.#.#....#.",
  "...........#..#.......#.##..#..",
  "..#......#.#....#...#.#.....#..",
  "#..............................",
  "#..#....#..........#...#.......",
  "......#.............#####......",
  ".#...###......#.#.#.##..#......",
  "............#.##.....#.........",
  ".........#....##....#..........",
  "###....#......#.......#........",
  ".#.......##..........#..#....#.",
  "#..#.....................#....#",
  "........#...........#..........",
  "..#..........#...#..#.........#",
  "..#..#......##................#",
  ".....##..#...#..#..............",
  ".......#...##..#...............",
  ".......##..#.####....#....#.#..",
  "#.#..#..........#........##....",
  "....##....#.#..#....#.#...#....",
  "......#.......#...#.....#...#..",
  "..#..#...#.....#.......###.....",
  "...#.......#.#.#.......#.##....",
  "...............#..#.#........#.",
  ".#....###.#......#.............",
  ".#..#...#....#.#..#.....#......",
  ".......#.##....#.#.##.##...#.#.",
  "..#...#....#.#..##.#.....#...##",
  "..#...#......#...#......#...#..",
  "....#..#...#.#..#......#.......",
  "#..#...............#......#.##.",
  ".#....#...#..........#.#.....#.",
  ".#..#.#.#................#..#..",
  ".#....#.#...#..##.###..#...###.",
  "#.............#.....#.........#",
  "...#.........#...#.......#..#..",
  "......#..#.........#..........#",
  "........##................#..#.",
  "......#...#.#.....#......##....",
  "...............#...#....#......",
  "...#.#..#..#.....##.###..##..#.",
  ".#....##......#...#..##..#.....",
  ".....#.........##.##....#...#..",
  ".....#.#..................####.",
  "#.....#...#.............##....#",
  "#.#..........#...#..#..#.......",
  "#..#.#.........#...............",
  "....#...#.........#...##.......",
  "...........#.....#..##..#......",
  "#.....#.......#.#........#.....",
  "..##..#.....#...##......#......",
  "....#....#.....................",
  "............#......#.........##",
  ".....##.............#.....##..#",
  ".......#.............#..#.#.##.",
  ".###...#......#..#........##.#.",
  "..#.#...#.#....#.....#..#......",
  "..#.#..#.##........#...#.......",
  "........#.#...............#..#.",
  "........##.......#...#.......#.",
  "...#........##.#..........#.#.#",
  "..#..###.#.#.......#.#......#..",
  "....#..........#...#..#........",
  "...#..#...#...#.#....#...#..#..",
  "...#...#........#......##...#.#",
  "#...........#..........#..#.##.",
  "...#..##..................#.#..",
  "...##.#...#....#.#...#.####....",
  ".....#...#.#.#..#..............",
  ".....#..#.#.#..#...............",
  "..#..#..##...#.#..#.....##....#",
  ".......#.#..#.....#....#.......",
  "...#..#....#.........#...#.....",
  "..............#.#...#...##.....",
  "...................#...........",
  ".#......#.#...................#",
  ".##.....#........#.........#..#",
  ".##..##...#...................#",
  "...#....#.#..#.#.#..#.....##...",
  ".......#..#....#......####.#...",
  ".##..#..##....#.......#........",
  ".#...#...........##............",
  ".....#.....#........#..........",
  "....##..#....#.....#...........",
  ".#...#....................#....",
  "....#.........#.......##.....#.",
  ".#....#..#.....#.##....#.......",
  "....#..#.........#.#....#.#....",
  ".......#.........##....#.......",
  "..#......#....#....#...#.......",
  "........#..#.......#.##......#.",
  "..#.....#......#...#..#.......#",
  "#..#.....##...#...#............",
  ".......##.......#........#...#.",
  "..#......................#...#.",
  "....##.#.............#......#..",
  "#.#............................",
  "...##.#.....#.#............#.##",
  "......#...#..#.........##......",
  ".#.......#.....##.......#.#....",
  "...........#.#.........#..##...",
  "...#..........#.##....#........",
  "........#..#..#...#....#....#..",
  "........##....#.#....#........#",
  "..#........##....###....#......",
  "#................###...#...#...",
  "................#.#..###......#",
  "..#.....##.#................#..",
  ".....#...............#..#......",
  "..#.......####.....#..#.#....##",
  "..#.....#..#....#..............",
  "#.#...........#.#.....#..##....",
  "#.#..........#.......#...#.###.",
  "........#....#...#..#.#........",
  ".#.....#......#..#..#..###..#..",
  ".#.........#.##.#.#......##....",
  "..#.........#...##..#........#.",
  ".#...................#.........",
  "...#.#........#................",
  "............#.....#..##........",
  "..#.....#.#......#.......#...#.",
  "........#....##..##...#.....##.",
  ".#........#.#....#.#....#.#..#.",
  "#.#.......#....................",
  ".#..#...##.........#..#........",
  ".........#...............#.....",
  "...#...#.....#......#.......#..",
  "###......................#.#..#",
  "...#.....####........#..#.....#",
  "#.#...#.#...................##.",
  ".........#.....................",
  "#..........##..#.....#....#....",
  ".......#...#.#.##.#..##........",
  "..........#..#.#..#.#.......#.#",
  ".....................#.#...#...",
  "...........#.#........#.#.#....",
  ".......#......#........#...#.#.",
  ".........#....................#",
  ".##.##....#...#.#.#.#..........",
  "#....##..#.##....#....#.......#",
  ".##.#...#...............#....#.",
  ".......#...#.###....#..........",
  ".....#....#...#..#.............",
  "#.........#.##....#.#.#........",
  "..#...#.............##..#..#...",
  "#..##.......#..........#...#.#.",
  ".#..#.....#...........#......#.",
  "......#......#..............##.",
  ".#...#..#...#..####.....#.....#",
  "....##.......#..........##.....",
  ".#.....#.......#.....#.#...#...",
  "..#..#..#.#...#......#.........",
  "......#.#....#........#.......#",
  "........#.......#..............",
  "..#...#.#....#........#.......#",
  "............#....#...##.#......",
  ".........#.............#..#....",
  "#.............#.#..##.......#..",
  "#....#...........###....#......",
  "...#.....................#.....",
  "....#.#..........#...#.......#.",
  "......#..#.......#...#...#....#",
  ".#.#..#.....##.#........#......",
  "...........#...#.#.............",
  "...###............#...#..#.....",
  "..#.#.......#...#.#..#.........",
  ".#......##...........#.....#.##",
  ".....##.....#....##...##.#.#...",
  "..........#.#.#......#........#",
  "..#.#........#....##....#.#....",
  ".#....#...##...........#....#..",
  "##......#...#.......#..........",
  ".##...###..#...#......#..##.#.#",
  "...........##.#..##...#.......#",
  "..#..............##............",
  "........#..#........#...#..#.#.",
  "..#.............#......#...##..",
  "#...##....#...#....#....#.#....",
  ".#.#......#..##............#.#.",
  ".....###.#....##....#....#.....",
  "#.#.#..........#...#...#.#.#...",
  ".....#.#...........####........",
  ".....#....##...#.##..#......#..",
  "#....#.......#.##.......#..#...",
  ".....#.....#........#..........",
  ".......#.......#...#.##......#.",
  "...#.........##...#.#.#......##",
  "#........#........#...#..#.....",
  ".#......#.#......#.#...#....#..",
  "#..#....##.....##..............",
  "...#.##............#..........#",
  ".....#.#....#..#.#............#",
  "..#......#...###.##.......###..",
  "........#....#.#.#.#...........",
  "............#..#........#.....#",
  "....#...............#..........",
  "......#....#....###..#.......##",
  "#...#...##....#.........#...#..",
  "...........#.#.............#...",
  "...#..#.....#..##.#....#......#",
  "..#...#..#...#......#..........",
  "....#..#....#.......#........#."
];

function countTreeHit(down = 1, right = 3) {
  let count = 0;
  let pos = right;
  for (let line = down; line < arr.length; line += down) {
    if (arr[line].charAt(pos) === '#') {
      count++;
    }
    pos += right
    pos = pos % arr[pos].length
  }
  return count
}
