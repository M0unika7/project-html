// Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// // abcdef

var s = "abcadeecfb";
var n = s.length;
function removeDuplicates( s , n) {
var exists = new Map();

var st = "";
for (var i = 0; i < n; i++) {
    if (!exists.has(s[i])) {
        st += s[i];
        exists.set(s[i], 1);
    }
}
console.log(st)
}
removeDuplicates(s,n)



// Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1




var s="abcadeecfb";
function prCharWithFreq(s)
{
// Store all characters and
// their frequencies in dictionary
var d = new Map();

s.split('').forEach(element => {
 
    if(d.has(element))
    {
        d.set(element, d.get(element)+1);
    }
    else
        d.set(element, 1);
});

// Print characters and their
// frequencies in same order
// of their appearance

s.split('').forEach(element => {
// Print only if this
// character is not printed
// before
if(d.has(element) && d.get(element)!=0)
{
  document.write( element + d.get(element) + " ");
  d.set(element, 0);
}
});
}
prCharWithFreq(s);

