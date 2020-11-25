function sameFrequency(int1, int2) {
    // good luck. Add any arguments you deem necessary.
    let strNum1 = int1.toString();
    let strNum2 = int2.toString();
    if (strNum1.length !== strNum2.length) {
        return false
    }
    const countNum1 = {};
    const countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }

    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

console.log(sameFrequency(6598, 5623))

