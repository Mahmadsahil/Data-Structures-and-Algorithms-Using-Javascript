const TwoSum = (nums, target) => {
    let numObject = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (numObject.hasOwnProperty(complement)) {
            return [numObject[complement], i];
        }
        numObject[num] = i
    }
    return []
}

console.log(TwoSum([4, 5, 10], 9));
