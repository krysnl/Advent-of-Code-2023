const { input } = require("./input");

// Part 1
let ans = 0;
input.forEach((line) => {
    let [winningNumbers, ticket] = line.split(": ")[1].split(" | ");
    winningNumbers = winningNumbers.split(" ");
    ticket = ticket.split(" ");
    let point = 0;
    for (let i = 0; i < ticket.length; i++) {
        if (parseInt(ticket[i]) && winningNumbers.includes(ticket[i])) {
            point = point ? point * 2 : 1;
        }
    }
    ans += point;
});

console.log(ans);
