const { input } = require("./input");

const ticketSplitter = (line) => {
    let [winningNumbers, ticket] = line.split(": ")[1].split(" | ");
    winningNumbers = winningNumbers.split(" ");
    ticket = ticket.split(" ");
    return [winningNumbers, ticket];
};

// Part 1
let ans = 0;
input.forEach((line) => {
    const [winningNumbers, ticket] = ticketSplitter(line);
    let point = 0;
    for (let i = 0; i < ticket.length; i++) {
        if (parseInt(ticket[i]) && winningNumbers.includes(ticket[i])) {
            point = point ? point * 2 : 1;
        }
    }
    ans += point;
});

console.log(ans);

// Part 2
ans = 0;
point = 0;
const multArr = Array(input.length).fill(1);
let index = 0;
input.forEach((line) => {
    const [winningNumbers, ticket] = ticketSplitter(line);
    point = 0;
    for (let i = 0; i < ticket.length; i++) {
        if (parseInt(ticket[i]) && winningNumbers.includes(ticket[i])) {
            point++;
        }
    }
    const mult = multArr[index];
    index++;
    for (let i = index; i < index + point; i++) {
        multArr[i] = multArr[i] + mult;
    }
});
multArr.map((x) => (ans += x));
console.log(ans);
