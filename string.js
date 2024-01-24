// string
//string=it is a  sequence of character used to represent text sting behave like a object

// example:
let str="hello world!"
console.log(str)

let firstName="isha";
let lastName="bisht"
let fullName=firstName+lastName;
console.log(fullName)
console.log("length",fullName.length)
console.log(fullName[0])
let substring=fullName.substring(0,4)
console.log("first name of substring is",substring)

//string method..
console.log(fullName.toUpperCase());  //uppercase
console.log(fullName.toLowerCase());  //lowercase

//searching a substring
let indexof=fullName.indexOf("bisht"); 
console.log(indexof);

//checking the string is availabel for this string

let contain=fullName.includes("bisht")
console.log(contain);

//splice method
let heroes=["pokemen","batman","saktiman","flyman"]
let cut=heroes.splice(0,1)   //this method is used to removed replace and add the element of  array
console.log(heroes)
console.log(cut)


//split method converts the string to an array of strings.
 let fname="isha"
 let lname="bisht"
 let element=fname.split()
 console.log(element);

 

