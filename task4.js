//JavaScript RegEx (Regular Expression): /^ = Start, ([a-zA-Z0-9_\-.]+) = At Least 1 character, @ = @ is mandotory, ([a-zA-Z0-9_\-.]+) = at least one character after @, \. = . mandatory here, ([a-zA-Z]+) = At least one character after .
var emailFormat = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]+)$/;
var emailAddress = prompt("Please Enter Email Address:");

for(;!emailAddress.match(emailFormat);)
{
    emailAddress = prompt("Please enter a valid Email Address:\na. This string must contain @\nb. Ths string must contact chars\nc. The @ must have at least 1 char in front\nd. The string must contain .(dot) after @ and at least 1 char");
}
document.write("Email Addresss is Valid.");