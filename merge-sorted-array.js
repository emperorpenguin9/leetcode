/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var nums1 = [1,2,3,0,0,0]
var m = 3;
var nums2 = [2,5,6];
var n = 3;

// Below function didn't implement when m < n case.

var merge = function(nums1, m, nums2, n) {
    m = m + n;
    let j = 0;
    let k = 0;    
    while (j < n ) {
        if( nums2[j] >= nums1[m - n - 1 + k] ) {
            nums1[m - n + k] = nums2[j];
        } 
        else {
            for (let i = 0; i < m - n; i ++) {
                if (nums2[j] <= nums1[i]) {
                    nums1.splice(i, 0, nums2[j]);
                    nums1.pop();
                    break;
                }
            }
        }
        j++;
        k++;
    }
    
    return nums1.slice(0, m);
};

// Below function perfect function for merge sorted array.

// var merge = function(nums1, m, nums2, n) {
//     for (let i = m, j = 0; j < n; i++, j++) {
//         nums1[i] = nums2[j];
//     }
//     return nums1.sort((a, b) => a - b);
// };

console.log(merge(nums1, m, nums2, n));