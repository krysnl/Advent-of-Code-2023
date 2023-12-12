const { input } = require("./input");

const Rankings = {
    A: "14",
    K: "13",
    Q: "12",
    J: "11",
    T: "10",
    9: "9",
    8: "8",
    7: "7",
    6: "6",
    5: "5",
    4: "4",
    3: "3",
    2: "2",
};

let ans = 0;

const getType = (hand) => {
    hand.sort();
    let sum = 0;
    let point = 0;
    let card = hand[0];
    for (let i = 1; i < hand.length; i++) {
        if (hand[i] === card) {
            point = point == 0 ? 1 : point * 2;
            sum += point;
        } else {
            point = 0;
        }
        card = hand[i];
    }
    return sum;
};
let handRank = [];

const checkHighCard = (hand1, hand2) => {
    for (let i = 0; i < hand1.length; i++) {
        const h1 = parseInt(Rankings[hand1[i]]);
        const h2 = parseInt(Rankings[hand2[i]]);
        if (h1 > h2) {
            return true;
        } else if (h1 < h2) {
            return false;
        }
    }
};

input.forEach((inp) => {
    const hand = inp.split(" ")[0].split("");
    const level = getType(inp.split(" ")[0].split(""));
    const bet = inp.split(" ")[1];
    let index = 0;
    let flag = true;
    while (index < handRank.length) {
        let item = handRank[index];
        if (level > item.level) {
            handRank = [
                ...handRank.slice(0, index),
                { level, hand, bet },
                ...handRank.slice(index),
            ];
            flag = false;
            break;
        } else if (level === item.level) {
            if (checkHighCard(hand, item.hand)) {
                handRank = [
                    ...handRank.slice(0, index),
                    { level, hand, bet },
                    ...handRank.slice(index),
                ];
                flag = false;
                break;
            }
        }
        index++;
    }
    if (flag) handRank.push({ level, hand, bet });
});

for (let i = 0; i < handRank.length; i++) {
    const item = handRank[handRank.length - i - 1];
    ans += parseInt(item.bet) * (i + 1);
}

console.log(ans);
