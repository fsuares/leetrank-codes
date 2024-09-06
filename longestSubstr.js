/**
*          3. Longest Substring Without Repeating Characters
*                   Given a string str, find the length of the longest substring
*                   without repeating characters.
* */

var lengthOfLongestSubstring = function (str) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (str.length === 0) return 0;
    if (str.length === 1) return 1;

    for (let i = 0; i < str.length; i++) {

        while (set.has(str[i])) {
            set.delete(str[left])
            left++;
        }
        set.add(str[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}

console.log(lengthOfLongestSubstring('aabbcc'));
