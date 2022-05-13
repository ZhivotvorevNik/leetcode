// 4. Median of Two Sorted Arrays
// Hard
//
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//
//     The overall run time complexity should be O(log (m+n)).
//
//
//
//     Example 1:
//
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
//
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
//
//
//     Constraints:
//
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const middle = Math.floor((nums1.length + nums2.length) / 2) + 1;
    let pointer1 = 0;
    let pointer2 = 0;
    let currentValue = 0, prevValue = 0;

    for (let i = 0; i < middle; i++) {
        prevValue = currentValue;

        if ((nums1[pointer1] < nums2[pointer2]) && (pointer1 < nums1.length) || pointer2 == nums2.length) {
            currentValue = nums1[pointer1];
            pointer1++;
        } else {
            currentValue = nums2[pointer2];
            pointer2++;
        }
    }

    if ((nums2.length + nums1.length) % 2) {
        return currentValue;
    }

    return (prevValue + currentValue) / 2;
};


console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));
console.log(findMedianSortedArrays([0,0], [0,0]));
