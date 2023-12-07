const { input } = require("./input");

let ans = Infinity;
const checkNum = (num, arr) => {
    const [destination, source, range] = arr.map((item) => parseInt(item));
    if (num >= source && num <= source + range) {
        return destination + (num - source);
    }
    return false;
};

input[0]
    .split(": ")[1]
    .split(" ")
    .map((seed) => {
        let res = false;
        let num = seed;
        for (let i = 3; i < input.length; i++) {
            if (input[i].trim().length === 0) {
                num = res === false ? num : res;
                res = false;
                i = i + 1;
                continue;
            }
            if (res) {
                num = res;
                continue;
            }
            res = checkNum(num, input[i].split(" "));
        }
        if (res === false) {
            res = num;
        }
        ans = ans > res ? res : ans;
    });

console.log(ans);

// Part 2
ans = Infinity;
const seeds = input[0].split(": ")[1].split(" ");

for (let i = 0; i < seeds.length; i = i + 2) {
    const startSeed = parseInt(seeds[i]);
    const range = parseInt(seeds[i + 1]);
    for (let k = startSeed; k < range + startSeed; k++) {
        let res = false;
        let num = k;
        for (let j = 3; j < input.length; j++) {
            if (input[j].trim().length === 0) {
                num = res === false ? num : res;
                res = false;
                j = j + 1;
                continue;
            }
            if (res) {
                num = res;
                continue;
            }
            res = checkNum(num, input[j].split(" "));
        }
        if (res === false) {
            res = num;
        }
        ans = ans > res ? res : ans;
    }
}

console.log(ans);
