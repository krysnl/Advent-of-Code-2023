const { input } = require("./input");

const times = input[0]
    .split(": ")[1]
    .split(" ")
    .filter((item) => item.trim() != "");

const distances = input[1]
    .split(": ")[1]
    .split(" ")
    .filter((item) => item.trim() != "");

let ans = 1;

const getOptions = (time, distance) => {
    let options = 0;
    for (let i = 0; i < time; i++) {
        if (i * (time - i) > distance) {
            options++;
        }
    }
    return options;
};

for (let i = 0; i < times.length; i++) {
    const time = parseInt(times[i]);
    const distance = parseInt(distances[i]);
    ans = ans * getOptions(time, distance);
}
console.log(ans);
