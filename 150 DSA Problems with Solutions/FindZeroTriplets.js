var FindTriplets = function (nums) {
    let found = false;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; i < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    return nums[i], nums[j], nums[k] 
                    found = true;
                }
            }
        }
    }
    if (!found) {
        console.log('No triplets')
    }
};

const nums1 = [0, -1, 2, -3, 1];

FindTriplets(nums1)
