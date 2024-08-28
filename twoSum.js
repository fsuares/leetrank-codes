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
