var containsDuplicate = function (nums) {
    let uniqueSet = new Set();
    for (const num of nums) {
        if (uniqueSet.has(num)) {
            return true
        }
        uniqueSet.add(num);
    }
    return false
}

// Test Cases

const num1 = [1, 2, 3, 1];
const num2 = [1, 2, 3, 4];
const num3 = [1, 1, 1, 2, 2, 3, 3, 1];


console.log(containsDuplicate(num1));
console.log(containsDuplicate(num2));
console.log(containsDuplicate(num3));
