/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

let LIMIT = 7, POUND = '#', string = '', count = 0;

while (count < LIMIT) {
    string = string + POUND;
    console.log(string);
    count++;
}