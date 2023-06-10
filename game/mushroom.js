class Mushroom extends Parent {
    constructor(x, y, index) {
        super(x, y, index);
    }
    getRandomElementForMushroom() {
        if (mushRoomArr.length < 10) {
            var x = Math.floor(Math.random() * matrix[0].length);
            var y = Math.floor(Math.random() * matrix.length);
            matrix[y][x] = 5
            var mush = new Mushroom(x, y, 5)
            mushRoomArr.push(mush)
        }
    }
}