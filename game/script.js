var matrix = [
    [0, 2, 1, 1, 0, 2, 0, 0, 2, 1, 0, 0, 1, 1, 2, 0, 0, 1, 2, 1, 0, 1, 0, 1, 2, 0, 0, 2, 1, 0, 0, 0, 1, 1],
    [1, 3, 6, 2, 2, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 1, 2, 1, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 1, 2, 1, 0, 2],
    [0, 0, 2, 4, 2, 1, 1, 3, 0, 0, 1, 0, 0, 1, 2, 0, 1, 0, 0, 0, 2, 1, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 2, 2],
    [4, 4, 4, 4, 0, 1, 2, 0, 1, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 2, 0],
    [0, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 3, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 2, 0, 6, 1, 0],
    [1, 3, 1, 0, 0, 1, 0, 0, 0, 3, 1, 0, 1, 0, 2, 0, 0, 3, 1, 0, 0, 2, 1, 0, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0],
    [1, 1, 0, 0, 3, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0, 2, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 2],
    [1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 2, 5, 0, 1, 0, 6, 1, 0, 4, 4, 4, 4, 4, 0, 1, 2, 1, 0, 0, 0, 0, 1, 0, 3],
    [1, 1, 0, 0, 0, 1, 2, 3, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 4, 0, 0, 1, 3, 0, 0, 1, 1, 0, 2, 0],
    [0, 0, 1, 3, 0, 1, 1, 0, 2, 1, 3, 2, 2, 3, 6, 0, 0, 0, 1, 1, 0, 2, 4, 2, 0, 1, 0, 0, 1, 0, 1, 2, 0, 0],
    [1, 1, 0, 2, 0, 1, 0, 0, 0, 1, 2, 2, 0, 0, 2, 0, 1, 0, 1, 0, 2, 0, 4, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [2, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 2, 4, 1, 2, 2, 1, 0, 0, 1, 0, 0, 0, 3],
    [1, 2, 2, 0, 0, 1, 1, 0, 1, 0, 0, 6, 1, 0, 0, 0, 1, 1, 0, 5, 4, 4, 4, 4, 4, 4, 0, 0, 0, 3, 1, 1, 0, 0],
    [0, 1, 2, 3, 0, 0, 2, 0, 0, 0, 1, 0, 1, 1, 2, 3, 0, 0, 0, 0, 1, 0, 1, 2, 2, 1, 0, 0, 1, 0, 2, 3, 0, 0],
    [1, 1, 0, 0, 2, 2, 1, 0, 0, 1, 0, 1, 2, 0, 1, 2, 2, 1, 0, 2, 1, 0, 1, 0, 6, 0, 2, 1, 0, 1, 2, 1, 1, 0],
    [1, 0, 0, 0, 1, 0, 1, 2, 0, 0, 1, 2, 3, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 2, 0, 2, 1, 0, 1, 1, 0],
    [1, 1, 0, 2, 2, 1, 1, 0, 0, 1, 2, 1, 0, 0, 1, 2, 2, 3, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0],
    [1, 1, 0, 2, 0, 1, 2, 0, 0, 1, 0, 1, 1, 0, 1, 2, 0, 1, 0, 0, 2, 0, 2, 1, 0, 0, 1, 0, 1, 2, 0, 0, 1, 0],
    [1, 2, 2, 0, 0, 1, 0, 0, 0, 1, 2, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 2, 2, 1, 2, 2, 1, 0, 2, 0, 0, 1, 6, 1, 0, 1, 1, 0, 2, 0],
    [0, 0, 1, 2, 0, 0, 1, 0, 0, 1, 0, 1, 0, 3, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 1, 0, 1, 0, 0],
    [0, 2, 1, 0, 0, 1, 0, 0, 2, 1, 0, 4, 1, 1, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1, 0, 0, 0, 2, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 4, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 3, 0, 1, 0, 0, 0, 1, 2, 1, 0, 2],
    [0, 1, 0, 0, 0, 1, 1, 0, 0, 4, 4, 4, 0, 1, 2, 0, 1, 0, 0, 0, 2, 1, 6, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 2],
    [1, 1, 0, 0, 0, 4, 4, 4, 4, 4, 0, 2, 1, 0, 1, 0, 0, 0, 1, 1, 0, 3, 0, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 2],
    [0, 0, 1, 0, 0, 0, 1, 5, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
    [1, 1, 0, 6, 0, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0, 2, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 0],
    [1, 2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 2, 0, 1, 0, 0, 0, 0, 1, 2, 1, 0, 4, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 6, 1, 2, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 2, 1, 0, 0, 3, 1, 0, 0, 4, 1, 1, 0, 2, 1],
    [0, 0, 1, 2, 0, 3, 1, 0, 0, 1, 1, 0, 0, 0, 1, 3, 0, 0, 1, 1, 0, 1, 1, 2, 2, 1, 0, 0, 4, 0, 1, 2, 0, 0],
    [1, 3, 2, 0, 2, 1, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 1, 0, 1, 0, 4, 4, 4, 1, 0, 2],
    [2, 1, 3, 1, 2, 3, 1, 0, 0, 1, 2, 1, 0, 0, 0, 1, 2, 0, 1, 1, 0, 0, 0, 1, 2, 2, 1, 0, 0, 1, 4, 4, 4, 4],
    [1, 2, 0, 0, 2, 1, 1, 0, 1, 2, 2, 0, 1, 0, 0, 0, 2, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 5, 0, 2, 1, 1, 0, 4],
];

var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var mushRoomArr = [];
var flowerArr = [];
var side = 25;

function preload(){
    grassimage = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQitBtIndt4Io7-AUNF64EHU_MQSpl6m4gw&usqp=CAU")
    grasseater = loadImage("https://i1.wp.com/kartinki.detki.today/wp-content/uploads/2017/06/kuznechik-detskiy.jpg")
    predatorimage = loadImage("https://static.wikia.nocookie.net/fortnite/images/4/42/Predator_%28No_Mask%29_-_Outfit_-_Fortnite.png/revision/latest?cb=20211120223209")
    mushroomimage = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZElGvK8CPFDijEwv4i71vjeXD4gvYsxKlq8ruLb_vCT-ZWonOMPfU6g_lhuT7eySTec&usqp=CAU")
    flowerimage = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV08TYJXM2vc_RD0uSeepXKezDx-BJddsNcw&usqp=CAU")
}

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var greater = new GrassEater(x, y, 2);
                grassEaterArr.push(greater);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3);
                predatorArr.push(pre);
            }
            else if (matrix[y][x] == 5) {
                var mush = new Mushroom(x, y, 5);
                mushRoomArr.push(mush);
            }
            else if (matrix[y][x] == 6) {
                var flower = new Flower(x, y, 5);
                flowerArr.push(flower);
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                image(grassimage, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                image(grasseater, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                image(predatorimage, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                image(mushroomimage, x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                image(flowerimage, x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].move();
        grassEaterArr[i].mult();
        grassEaterArr[i].die();
    }
    if (grassEaterArr.length == 2){
        for(var i = 0; i < 20; i++){
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 1
            var greater = new GrassEater(x, y, 2)
            grassEaterArr.push(greater)
        }
    }
    if (predatorArr.length > 5){
        for(var i = 0; i < 1; i++){
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 1
            var pre = new Predator(x, y, 2)
            predatorArr.push(pre)
        }
    }
    for (var i in predatorArr) {
        predatorArr[i].eatpredator()
        predatorArr[i].movepredator()
        predatorArr[i].mult()
        predatorArr[i].diepredator()
    }
    for (var i in mushRoomArr) {
        mushRoomArr[i].getRandomElementForMushroom()
    }
    for (var i in flowerArr) {
        flowerArr[i].multflower()
    }
}




