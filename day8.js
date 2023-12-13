const { input } = require("./input");

const instructions = input[0]
    .replaceAll("L", "0")
    .replaceAll("R", "1")
    .split("");

const map = new Map();

input.slice(2).forEach((inp) => {
    const [key, value] = inp.split(" = ");
    map.set(key, value.slice(1, value.length - 1).split(", "));
});

let ans = 0;
let key = "AAA";

loop: while (true) {
    for (let i = 0; i < instructions.length; i++) {
        ans++;
        key = map.get(key)[instructions[i]];
        if (key === "ZZZ") {
            break loop;
        }
    }
}

console.log(ans);
