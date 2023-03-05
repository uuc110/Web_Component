const twosum = function (nums, target){
    let i=0;
    let j = nums.length;
    while(i < j){
        if(nums[i]+nums[j]===target){
            console.log([i,j]);
        }
        i++;
        j--;
    }
};

twosum([2,7,11,15], 9);