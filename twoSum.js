/**
 *          1. Two Sum
 *              Given an array of integers nums and an integer target, return indices of the two numbers such that hey *              add up to target.
*               You may assume that each input would have exactly one solution, and you may not use the same element *  *               twice.
* */

var twoSum = function(nums, target) {
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        let aux = target - nums[i];
        if(hash.hasOwnProperty(aux)){
            return [i, hash[aux]];
        };
        hash[nums[i]] = i;
    };
    return null;
};

console.log(twoSum([2,7,11,15], 9));
