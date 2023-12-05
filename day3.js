const { input } = require("./input");

let anw = 0;
let num = "";
let flag = false;

const checkAdjacent = (x, y) => {
    if (
        isValidCoord(x - 1, y - 1) &&
        input[x - 1][y - 1] !== "." &&
        isNaN(input[x - 1][y - 1])
    ) {
        return true;
    } else if (
        isValidCoord(x - 1, y) &&
        input[x - 1][y] !== "." &&
        isNaN(input[x - 1][y])
    ) {
        return true;
    } else if (
        isValidCoord(x - 1, y + 1) &&
        input[x - 1][y + 1] !== "." &&
        isNaN(input[x - 1][y + 1])
    ) {
        return true;
    } else if (
        isValidCoord(x, y - 1) &&
        input[x][y - 1] !== "." &&
        isNaN(input[x][y - 1])
    ) {
        return true;
    } else if (
        isValidCoord(x, y + 1) &&
        input[x][y + 1] !== "." &&
        isNaN(input[x][y + 1])
    ) {
        return true;
    } else if (
        isValidCoord(x + 1, y - 1) &&
        input[x + 1][y - 1] !== "." &&
        isNaN(input[x + 1][y - 1])
    ) {
        return true;
    } else if (
        isValidCoord(x + 1, y) &&
        input[x + 1][y] !== "." &&
        isNaN(input[x + 1][y])
    ) {
        return true;
    } else if (
        isValidCoord(x + 1, y + 1) &&
        input[x + 1][y + 1] !== "." &&
        isNaN(input[x + 1][y + 1])
    ) {
        return true;
    }
    return false;
};

const isValidCoord = (x, y) => {
    return x >= 0 && x < input.length && y >= 0 && y < input[0].length;
};

for (let i = 0; i < input.length; i++) {
    if (flag) {
        anw += parseInt(num);
    }
    num = "";
    flag = false;
    for (let j = 0; j < input[i].length; j++) {
        if (!isNaN(input[i][j])) {
            num = num + "" + input[i][j];
            if (checkAdjacent(i, j)) {
                flag = true;
            }
        } else {
            if (flag) {
                anw += parseInt(num);
            }
            num = "";
            flag = false;
        }
    }
}
if (flag) {
    anw += parseInt(num);
}

console.log(anw);
