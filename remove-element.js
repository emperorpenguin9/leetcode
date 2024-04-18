var nums = [0,1,2,2,3,0,4,2]
var value = 2;
// var removeElement = function(nums, val) {
//     nums.forEach((numsVal, idx) => {
//         if (numsVal === val) {
//             nums[idx] = null;
//         }
//     });
//     for (let i = 0; i< nums.length; i++) {
//         if (nums[i] === null) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
    
//     return nums.length;
// };

var removeElement = function(nums, val) {
    var zeroStartIdx = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[zeroStartIdx]=nums[i];
            zeroStartIdx++
        }
    }
    return zeroStartIdx; 
};

console.log(removeElement(nums, value));