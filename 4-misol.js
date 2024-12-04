 /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res="";
    let reverse="";
    for(let i = 0; i<s.length; i++){
        if(s[i] == s[i].toUpperCase()){
            s[i] = s[i].toLowerCase();
        }
        if(s[i]!=" "){
        res+=s[i];
        reverse=s[i]+reverse;
        }
    }

    if (reverse == res){
        return true;
    }
    return false;
    }
    