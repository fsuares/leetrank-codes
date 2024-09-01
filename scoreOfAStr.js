/**
 *          3110. Score of a String
 *              You are given a string s. The score of a string is defined as the sum of the absolute difference *              between the ASCII values of adjacent characters.
* */

var scoreOfString = function(s) {
    let value = 0;
    for(let i = 1; i < s.length; i++){
       value += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    };
    return value
};

console.log(scoreOfString('hello'));
