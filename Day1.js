const { input } = require("./input");

let answer1 = 0;
let answer2 = 0;
// Part 2
const numbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

input.forEach((line) => {
    let firstIndex = line.length;
    let first = 0;
    let lastIndex = 0;
    let last = 0;
    for (let i = 0; i < line.length; i++) {
        if (!isNaN(line[i])) {
            firstIndex = i;
            first = line[i];
            break;
        }
    }
    for (let i = line.length - 1; i >= 0; i--) {
        if (!isNaN(line[i])) {
            lastIndex = i;
            last = line[i];
            break;
        }
    }

    answer1 += parseInt(first + "" + last);
    if (firstIndex != 0) {
        let newLine = line.slice(0, firstIndex);
        numbers.forEach((num) => {
            const index = newLine.indexOf(num);
            if (index >= 0 && index <= firstIndex) {
                firstIndex = index;
                first = numbers.indexOf(num) + 1;
            }
        });
    }
    if (lastIndex != line.length) {
        newLine = line.slice(lastIndex).split("").reverse().join("");
        lastIndex = newLine.length;
        numbers.forEach((num) => {
            let newnum = num.split("").reverse().join("");
            const index = newLine.indexOf(newnum);
            if (index >= 0 && index <= lastIndex) {
                lastIndex = index;
                last = numbers.indexOf(num) + 1;
            }
        });
    }
    answer2 += parseInt(first + "" + last);
});

console.log("part 1 answer ", answer1, " part 2 answer ", answer2);
