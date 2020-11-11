// Leetcode Problems

// 1. Two Sum - Easy

// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.

// @param {number[]} nums
// @param {number} target
// @return {number[]}

let nums = [2, 7, 11, 15];
let target = 9;

let twoSum = function (nums, target) {

    let indexNum = {};
    let resultArray = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let comp = target - num;

        if (indexNum[comp] !== undefined) {
            resultArray[0] = indexNum[comp]
            resultArray[1] = [i];

            return resultArray
        }
        indexNum[num] = [i];
    }

    return resultArray;
};

console.log(twoSum(nums, target));

// ________________________________________

