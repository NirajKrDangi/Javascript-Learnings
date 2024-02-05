// zero or more character written inside single or double quotes. javascript strings are used to string and manipulating text. 👉 ==>
let name1 = 'Niraj Kumar';
let name2 = "Roushan Kumar";
console.log(name1);
console.log(name2);



// 👉 Use string() to create strings. it is not necessary ==>
let name3 = new String("Nitu Kumari");
console.log(name3);



// 👉 Return the length of the strings .length -->
let name4 = "Kumar Gupta";
console.log(name4.length);



// 👉 Escape character -->
let anySentence = 'we are the so-called "Viking" from the north.';
let anySentence1 = "we are the so-called 'Viking' from the north.";
let anySentence2 = 'we are the so-called \"Viking\" from the north.';
console.log(anySentence);
console.log(anySentence1);
console.log(anySentence2);



// 👉 Finding a string in a string by using indexOf()-->
// let myBioData = 'I am Niraj Kumar from Ranchi';
let find = myBioData.indexOf("Kumar");
console.log(find);

let find2 = myBioData.indexOf("a", 9);
console.log(find2);
let find3 = myBioData.lastIndexOf("a", 6);
console.log(find3);



// 👉 Search() in string -->
let myBioData = 'I am Niraj Kumar from Ranchi';
let searchData = myBioData.search("Niraj");
console.log(searchData);