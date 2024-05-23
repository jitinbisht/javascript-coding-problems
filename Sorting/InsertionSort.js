// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]

const insertionSort = (nums) =>{
    for(let i = 1; i<=nums.length; i++){
        let j = i-1;
        while(j>=0 && nums[j+1] < nums[j]){
            let temp = nums[j+1];
            nums[j+1] = nums[j];
            nums[j] = temp;
            j -= 1;
        }
    }
    return nums
}

console.log(insertionSort([5,2,3,1]))