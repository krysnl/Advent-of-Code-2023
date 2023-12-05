const { input } = require("./input");

let ans = 0;
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
        ans += parseInt(num);
    }
    num = "";
    flag = false;
    for (let j = 0; j < input[i].length; j++) {
        if (!isNaN(input[i][j])) {
            num = num + input[i][j];
            if (checkAdjacent(i, j)) {
                flag = true;
            }
        } else {
            if (flag) {
                ans += parseInt(num);
            }
            num = "";
            flag = false;
        }
    }
}
if (flag) {
    ans += parseInt(num);
}

console.log(ans);

// Part 2
const checkAdjacentStar = (x, y) => {
    if (isValidCoord(x - 1, y - 1) && input[x - 1][y - 1] === "*") {
        return x - 1 + " " + (y - 1);
    } else if (isValidCoord(x - 1, y) && input[x - 1][y] === "*") {
        return x - 1 + " " + y;
    } else if (isValidCoord(x - 1, y + 1) && input[x - 1][y + 1] === "*") {
        return x - 1 + " " + (y + 1);
    } else if (isValidCoord(x, y - 1) && input[x][y - 1] === "*") {
        return x + " " + (y - 1);
    } else if (isValidCoord(x, y + 1) && input[x][y + 1] === "*") {
        return x + " " + (y + 1);
    } else if (isValidCoord(x + 1, y - 1) && input[x + 1][y - 1] === "*") {
        return x + 1 + " " + (y - 1);
    } else if (isValidCoord(x + 1, y) && input[x + 1][y] === "*") {
        return x + 1 + " " + y;
    } else if (isValidCoord(x + 1, y + 1) && input[x + 1][y + 1] === "*") {
        return x + 1 + " " + (y + 1);
    }
    return false;
};

const starMatSetter = (star, num) => {
    starMap.get(star)
        ? starMap.set(star, [parseInt(num), ...starMap.get(star)])
        : starMap.set(star, [parseInt(num)]);
};

ans = 0;
const starMap = new Map();
let star = "";
for (let i = 0; i < input.length; i++) {
    if (flag) {
        starMatSetter(star, num);
    }
    num = "";
    flag = false;
    for (let j = 0; j < input[i].length; j++) {
        if (!isNaN(input[i][j])) {
            num = num + input[i][j];
            if (checkAdjacentStar(i, j)) {
                star = checkAdjacentStar(i, j);
                flag = true;
            }
        } else {
            if (flag) {
                starMatSetter(star, num);
            }
            num = "";
            flag = false;
        }
    }
}
if (flag) {
    starMatSetter(star, num);
}

starMap.forEach((value) => {
    if (value.length === 2) {
        ans += value[0] * value[1];
    }
});

console.log(ans);
