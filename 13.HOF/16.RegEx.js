//*** pattern matching */====> 

const regEx = "PwSkill is best! and pwTeacher is always best. PW provide industry top content in all filedPwSkill is best!";

const pattern = /pw/gmi;
console.log(regEx.match(pattern));

//  pw    :   pattern to search for.
// /pw/   :	  regular expression.
// /pw/gi :   global match with case-insensitive regular expression.

/*******************************************************************************************/

// ^m$ ==>
// 'm' : multiline search.
// '^' : match at the start of a string.
// '$' : match at the end of a string.

let regEx1 = 'I SCREAM FOR ICE CREAM!';

const patter1 = /[A-C]/gmi;
console.log(regEx1.match(patter1)); 

/*******************************************************************************************/

