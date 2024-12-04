/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let new_str = s.trim().split(" ");
    return new_str[new_str.length-1].length;
     
    
};