class Predator extends Parent {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
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
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            var predator = new Predator(newX, newY, 3);
            predatorArr.push(predator);
            this.energy = 8;
        }
    }

    eatpredator() {
        var food = random(this.chooseCell(2, 5));
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                        grassEaterArr.splice(i, 1)
                    }
                }
                matrix[newY][newX] = 3
                this.x = newX
                this.y = newY
                this.energy += 2
            }
            else if (matrix[newY][newX] == 5) {
                this.energy = -5;
                for (var i in mushRoomArr) {
                    if (mushRoomArr[i].x == newX && mushRoomArr[i].y == newY) {
                        mushRoomArr.splice(i, 1)
                        matrix[newY][newX] = 0
                    }
                }
            }
        }
    }
    
    movepredator() {
        var food = random(this.chooseCell(0));
        this.energy--
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }
    }

    diepredator() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in predatorArr) {
                if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                    predatorArr.splice(i, 1)
                    break
                }
            }
        }
    }
}

// class Predator {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 10;
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
//     chooseCell(char1, char2) {
//         this.getNewDirections()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == char1 || matrix[y][x] == char2) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     mult() {
//         var emptyCells = this.chooseCell(2);
//         var newCell = random(emptyCells);
//         if (newCell && this.energy >= 8) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 3;
//             var predator = new Predator(newX, newY, 3);
//             predatorArr.push(predator);
//             this.energy = 8;
//         }
//     }

//     eatpredator() {
//         var food = random(this.chooseCell(2, 5));
//         if (food) {
//             matrix[this.y][this.x] = 0
//             var newX = food[0]
//             var newY = food[1]
//             if (matrix[newY][newX] == 2) {
//                 for (var i in grassEaterArr) {
//                     if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
//                         grassEaterArr.splice(i, 1)
//                     }
//                 }
//                 matrix[newY][newX] = 3
//                 this.x = newX
//                 this.y = newY
//                 this.energy += 2
//             }
//             else if (matrix[newY][newX] == 5) {
//                 this.energy = -5;
//                 for (var i in mushRoomArr) {
//                     if (mushRoomArr[i].x == newX && mushRoomArr[i].y == newY) {
//                         mushRoomArr.splice(i, 1)
//                         matrix[newY][newX] = 0
//                     }
//                 }
//             }

//         }
//     }
//     movepredator() {
//         var food = random(this.chooseCell(0));
//         this.energy--
//         if (food) {
//             matrix[this.y][this.x] = 0
//             var newX = food[0]
//             var newY = food[1]
//             matrix[newY][newX] = 3
//             this.x = newX
//             this.y = newY
//         }
//     }

//     diepredator() {
//         if (this.energy <= 0) {
//             matrix[this.y][this.x] = 0
//             for (var i in predatorArr) {
//                 if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
//                     predatorArr.splice(i, 1)
//                     break
//                 }
//             }
//         }
//     }

// }

