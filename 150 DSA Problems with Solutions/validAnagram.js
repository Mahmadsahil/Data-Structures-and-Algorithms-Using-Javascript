
const isAnagram = (s, t) => {
    if (s.length === t.length) {
        return false;
    }
    const sortedS = s.split('').sort().join();
    const sortedT = split('').sort().join();
    sortedS === sortedT
}

const s1 = 'anagram', t1 = 'nagaram';
const s2 = 'rat', t2 = 'cat';

console.log(isAnagram(s1, t1));
console.log(isAnagram(s2, t2));
