// Assignment: Reversing
//
// Given an array X of multiple values (e.g.
// [-3,5,1,3,2,10]), write a program that reverses the values in the array.  Once
// your program is done X should be in the reserved order.  Do this without
// creating a temporary array.  Also do NOT use the reverse method but find a way
// to reverse the values in the array (HINT: swap the first value with the last;
// second with the second to last and so forth).

var x = [-3,5,1,3,2,10];

var temp = x[0];
x[0] = x[x.length-1];
x[x.length-1] = temp;

var temp2 = x[1];
x[0] = x[x.length-2];
x[x.length-2] = temp2;

var temp3 = x[2];
x[0] = x[x.length-3];
x[x.length-3] = temp3;

console.log(x);
