class GrassEater extends Parent {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.directions = [];
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char1, char2) {
        this.getNewDirections()
        return super.chooseCell(char1, char2);
    }

    mult() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 13) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            var newGrassEater = new GrassEater(newX, newY, 2);
            grassEaterArr.push(newGrassEater);
            this.energy = 8;
        }
    }

    eat() {
        var food = random(this.chooseCell(1, 6));
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1)
                    }
                }
            }
            else if (matrix[newY][newX] == 6) {
                for (var i in flowerArr) {
                    if (flowerArr[i].x == newX && flowerArr[i].y == newY) {
                        flowerArr.splice(i, 1)
                        this.energy = 6
                        break;
                    }
                }
            }
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
            this.energy += 2
        }
    }

    move() {
        var food = random(this.chooseCell(0));
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
            this.energy--
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
        }
    }
}

// class GrassEater {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 8;
//         this.index = index;
//         this.directions = [];
//     }
//     getNewDirections() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];

//     }
//     chooseCell(character, character1) {
//         this.getNewDirections()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character || matrix[y][x] == character1) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
// mult() {
//     var emptyCells = this.chooseCell(0);
//     var newCell = random(emptyCells);
//     if (newCell && this.energy >= 13) {
//         var newX = newCell[0];
//         var newY = newCell[1];
//         matrix[newY][newX] = 2;
//         var newGrassEater = new GrassEater(newX, newY, 2);
//         grassEaterArr.push(newGrassEater);
//         this.energy = 8;
//     }
// }
// eat() {
//     var food = random(this.chooseCell(1, 6));
//     if (food) {
//         matrix[this.y][this.x] = 0
//         var newX = food[0]
//         var newY = food[1]
//         if (matrix[newY][newX] == 1) {
//             for (var i in grassArr) {
//                 if (grassArr[i].x == newX && grassArr[i].y == newY) {
//                     grassArr.splice(i, 1)
//                 }
//             }
//         }
//         else if (matrix[newY][newX] == 6) {
//             for (var i in flowerArr) {
//                 if (flowerArr[i].x == newX && flowerArr[i].y == newY) {
//                     flowerArr.splice(i, 1)
//                     this.energy = 6
//                     break;
//                 }
//             }
//         }
//         matrix[newY][newX] = 2
//         this.x = newX
//         this.y = newY
//         this.energy += 2
//     }


// }
// move() {
//     var food = random(this.chooseCell(0));
//     if (food) {
//         matrix[this.y][this.x] = 0
//         var newX = food[0]
//         var newY = food[1]
//         matrix[newY][newX] = 2
//         this.x = newX
//         this.y = newY
//         this.energy--
//     }
// }
// die() {
//     if (this.energy <= 0) {
//         matrix[this.y][this.x] = 0
//         for (var i in grassEaterArr) {
//             if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
//                 grassEaterArr.splice(i, 1)
//                 break
//             }
//         }
//     }
// }

// }

