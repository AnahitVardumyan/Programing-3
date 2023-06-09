class Parent {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }

    chooseCell(ch1, ch2) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch1 || matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

}