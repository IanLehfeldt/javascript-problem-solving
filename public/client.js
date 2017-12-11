// console.log('Javascript sourced');

$(document).ready( function () {
    console.log('jQuery loaded');
    
    longestWord = (sen) => {
        var longWord = "";
        var splitSen = sen.split(" ");
    
        for (var i = 0; i < splitSen.length; i++) {
            if (longWord.length < splitSen[i].length) {
                longWord = splitSen[i];
                // console.log(longWord);
            }
        }
        // code goes here
        sen = longWord;
        console.log(sen);
    
        return sen;
    }
    
    isItAPalindrome = (sen) => {
        var palindromeToCheck = sen.replace(/[.,+ ]/g, "").toLowerCase();
        var reversedSentence = "";
    
        console.log(`Sen: ${sen}, ${sen.length} : palindromeToCheck: ${palindromeToCheck}`);
    
        for (var i = palindromeToCheck.length - 1; i >= 0; i--) {
            console.log(`Sen at ${i} ${palindromeToCheck[i]}`);
            reversedSentence += (palindromeToCheck[i]);
        }
    
        console.log("Reversed array:", reversedSentence);
        if (palindromeToCheck = reversedSentence) {
            return true;
        } else {
            return false;
        }
    }
    
    // isItAPalindrome("A car, a man, a maraca.");
    // isItAPalindrome("No lemon, no melon");
    // LongestWord("This is a really positutitottallyly, verily, absolutely, positutitottallyly long sentence.");
});