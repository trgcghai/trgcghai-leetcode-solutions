function smallestIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {

        let sum = 0;
        let tmp = nums[i]

        while (tmp) {
            sum += tmp % 10
            tmp = Math.floor(tmp / 10)
        }

        if (sum == i) return i

    }

    return -1;
};