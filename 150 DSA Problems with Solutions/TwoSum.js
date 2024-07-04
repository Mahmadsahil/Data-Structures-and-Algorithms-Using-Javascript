var TwoSum = function (nums, target) {
    const numSet = new Set();
    for (i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numSet.has(complement)) {
            const complementIndex = nums.indexOf(complement);
            return [complement, i];
        }
        numSet.add(nums[i]);
    }
    return
}

const nums1 = [2, 7, 11, 15], target1 = 9
const nums2 = [3, 2, 4], target2 = 6
const nums3 = [3, 3], target3 = 6

console.log(TwoSum(nums1, target1));
console.log(TwoSum(nums2, target2));
console.log(TwoSum(nums3, target3));
