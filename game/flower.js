class Flower extends Parent {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 10;
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
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;
            var flower = new Flower(newX, newY, 6);
            flowerArr.push(flower);
            this.energy = 8;
        }
    }
}

// class Flower {
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
//     multflower() {
//         var emptyCells = this.chooseCell(3);
//         var newCell = random(emptyCells);
//         if (newCell && this.energy >= 8) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 6;
//             var flower = new Flower(newX, newY, 6);
//             flowerArr.push(flower);
//             this.energy = 8;
//         }
//     }
// }