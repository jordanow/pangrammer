# Pangrammer
Test if the given string is a pangram or not. Return the missing letters if it's not.

## Problem :
The sentence: "the quick brown fox jumps over the lazy dog" is a pangram.
Pangram is a string that contains all the lower-case letters (a to z) at least once.

You are given a N strings, these strings consist of lower-case letters (a-z) and space only.
Your task is to find whether the string is pangram or not. If string is pangram print 1 otherwise print the missing letters.

Contraints
1<= N <=100
1<= |S| <=10^5, where |S| is the length of string S

Input Format
First line is an integer N, total number of strings. Each of next N lines contains a string S, consisting of lower-case letters (a-z) and spaces.

Output formart
Output are N rows, consisting of One for the strings that are pangrams and the missing letters for the strings that are not

Sample Input #1 

4
we promptly judge antique ivory buckles for the next prize
we promptly judge antique ivory buckles for the prize
the quick brown fox jumps over the lazy dog
the quick brown fox jump over the lazi dog

Sample Output #1
1
x
1
sy

## Environment

 - The following software will run in any machine which has NodeJS installed.

## How to run
 - To run the app, simply type npm start and pass the parameters. Eg. `npm start 4,"big brown","cold war","fox jumped","on the wall"`
## Testing

 - Run npm install -g mocha before running the test cases.
 - To run the tests, type npm test.
