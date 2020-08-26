/* function getStrings(city) {
    let strArr = city.toLowerCase().split(''),
        idx, res = '',
        newArr = [];

    for (let i = 0; i < strArr.length; i++) {
        if (newArr.indexOf(strArr[i]) != -1) continue;
        res += strArr[i];
        idx = strArr.indexOf(strArr[i], i);
        while (idx != -1) {
            idx = strArr.indexOf(strArr[i], idx + 1);
            res += "*";
        }
        res += ";";
        newArr.push(strArr[i]);
    }
    return res;
}


console.log(getStrings("qwsdasd2sqadd")); */


function wordPattern(word) {
    let result = "",
        pattern = "";
    word.split("").reduce((prev, v) => {
        if (pattern.indexOf(v) != -1) {
            result += pattern.indexOf(v) + ".";
        } else {
            pattern += v;
            result += prev + ".";
            prev++;
        }
        return prev;
    }, 0);
    result = result.slice(0, -1);
    return result;
};
//console.log(wordPattern("dfdfdfdddr"));

const generateRandomString = function() {
    return Math.random().toString(16).substr(2, 6);;
}
let aa = "aasddd";
//console.log([...aa]);
//console.log(generateRandomString());
//console.log(generateRandomString());

function nextId(ids) {
    let result = 0;
    let temp = ids.sort((a, b) => a - b).forEach(function(val) {
        if ((result - val) < 0) return true;
        result = val + 1;
    });
    return result;
}
console.log(nextId([0, 0, 1, 0, 11, 2, 3, 3, 5, 5]));
console.log();
console.log()
console.log();
console.log();