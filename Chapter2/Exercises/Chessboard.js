/*
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/

let SIZE = 8;
let WHITESPACE = ' ', POUND = '#';

for (let rowIdx = 0; rowIdx < SIZE; rowIdx++) {
    let string = 0 == rowIdx % 2 ? WHITESPACE : POUND;
    let lastChar = string;
    for (let colIdx = 1; colIdx < SIZE; colIdx++) {
        string = string + (lastChar = (POUND == lastChar ? WHITESPACE : POUND));
    }
    console.log(string);
}