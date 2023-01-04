function isPalindrome(word) {
    let originalWord = word.split('').join(''); 
    let reverseWord = word.split('').reverse().join('');
    return originalWord == reverseWord;
}
console.log(isPalindrome('racecar'));// true 
console.log(isPalindrome('programmer'));// false