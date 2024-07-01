// 1-masala
const strLentgth = (str) => `${str} - ${str.length} ta harf bor`;

// console.log(strLentgth("hello"));
// console.log(strLentgth("hi"));
// console.log(strLentgth("JavaScript"));

// 2-masala
const greeting = (user) => `Hello ${user.name}`;

// console.log(greeting({ name: "John" }));
// console.log(greeting({ name: "Selena" }));}

// 3-masala
const findQuestionMark = (text) => text.indexOf("?");

// console.log(findQuestionMark("sal?om"));
// console.log(findQuestionMark("Namangan?"));

// 4-masala
const repeatNumber = (a, b) => {
    let result = "";
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};

// console.log(repeatNumber(5, 3));
// console.log(repeatNumber(7, 2));
// console.log(repeatNumber(3, 4));

// 5-masala
const isMarried = (user) =>
    `${user.name} ${user.isMarried ? "oilali" : "yolg'iz"}`;

// console.log(isMarried({ name: "Anvar", isMarried: true }));
// console.log(isMarried({ name: "Shavkat", isMarried: false }));
// console.log(isMarried({ name: "Sarvar", isMarried: true }));

// 6-masala
(function (a, b) {
    return a + b;
})(1, 7);

// 7-masala
const filterByPositive = (numbers) => numbers.filter((number) => number > 0);

// console.log(filterByPositive([-5, 6, 3, -3]));
// console.log(filterByPositive([12, -4, 5, -6, 33]));

// 8-masala
const dollarToUZS = (amount) => {
    let dollar = 12700;
    return amount * dollar;
};

// console.log(dollarToUZS(150));
// console.log(dollarToUZS(230));

// 9-masala
const onlyFalse = (array) => array.filter((bool) => bool === false);

// console.log(onlyFalse([false, false, true]));
// console.log(onlyFalse([true, false, true]));

// 10-masala
const weekdays = (week) => {
    const weeks = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba",
    ];

    return weeks[week] ?? `Bunday hafta kuni mavjud emas`;
};

// console.log(weekdays(1));
// console.log(weekdays(3));
// console.log(weekdays(6));
