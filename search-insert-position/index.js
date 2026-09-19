function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1;

    // tim duoc
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] == target) return mid;

        if (target > nums[mid]) left = mid + 1;
        else if (target < nums[mid]) right = mid - 1;
    }

    // ko tim duoc
    return left;
}; 