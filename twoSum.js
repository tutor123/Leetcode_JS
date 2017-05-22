/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    var result = [];
    for(var i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            result.push(i,map.get(target - nums[i]));
        }
        else{
            map.set(nums[i],i);
        }
    }
    return result;
};
