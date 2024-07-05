const longestString = (words) => {
    let longestStr = "";
    for (let i = 0; i < words.length; i++) {
        const currentStr = words[i];
        if (currentStr.length > longestStr.length) {
            longestStr = currentStr
        }
    }
    return longestStr
}

const words1 = ['a', 'ab', 'abc', 'abcd'];
const words2 = ['apple', 'banana', 'mango', 'pinapple'];
const words3 = ['car', 'road', 'building', 'city'];

console.log(longestString(words1));
console.log(longestString(words2));
console.log(longestString(words3));

Output:

bcd
pinapple
building
