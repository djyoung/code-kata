// https://www.codewars.com/kata/josephus-permutation

function josephus(items, k) {
    let result = [];
    let i = 0;

    while (items.length > 0) {
        i = (i + k - 1) % items.length;
        const removedItem = items.splice(i, 1)[0];
        result.push(removedItem);
    }

    return result;
}