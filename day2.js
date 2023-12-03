const { input } = require("./input");

let index = 0;
let ans = 0;
input.forEach((line) => {
    index++;
    const newLine = line.split(": ")[1].split(";").join(",");
    let flag = true;
    newLine.split(", ").forEach((cubes) => {
        const cubeArr = cubes.split(" ");
        if (cubeArr[1] === "red") {
            if (cubeArr[0] > 12) {
                flag = false;
            }
        } else if (cubeArr[1] === "green") {
            if (cubeArr[0] > 13) {
                flag = false;
            }
        } else if (cubeArr[1] === "blue") {
            if (cubeArr[0] > 14) {
                flag = false;
            }
        }
    });
    if (flag) {
        ans += index;
    }
});
console.log(ans);

//Part 2
ans = 0;
input.forEach((line) => {
    const newLine = line.split(": ")[1].split(";").join(",");
    let red = 0;
    let blue = 0;
    let green = 0;
    newLine.split(", ").forEach((cubes) => {
        const cubeArr = cubes.split(" ");
        if (cubeArr[1] === "red") {
            red = cubeArr[0] > red ? parseInt(cubeArr[0]) : red;
        } else if (cubeArr[1] === "green") {
            green = cubeArr[0] > green ? parseInt(cubeArr[0]) : green;
        } else if (cubeArr[1] === "blue") {
            blue = cubeArr[0] > blue ? parseInt(cubeArr[0]) : blue;
        }
    });
    ans += red * blue * green;
});
console.log(ans);
