var age = parseInt(prompt("Please enter your age:", 32));
var birthYear = new Date().getFullYear()-age;

document.write("Your age is "+age);
document.write("<br/>Your birth year is "+birthYear);