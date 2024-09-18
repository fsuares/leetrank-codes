/**
 *          125. Valid Palindrome
 *              A phrase is a palindrome if, after converting all uppercase letters into
 * 				lowercase letters and removing all non-alphanumeric characters,
 * 				it reads the same forward and backward. Alphanumeric characters include
 * 				letters and numbers.
* */

var isPalindrome = function (s) {
	return filterAlphaNumeric(s) == filterAlphaNumeric(s).split('').reverse().join('')
};

const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]', 'gi')) => s
	.toLowerCase()
	.replace(nonAlphaNumeric, '')