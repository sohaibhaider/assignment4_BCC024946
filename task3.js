//JavaScript RegEx (Regular Expression): /^ = Start, [A-Za-z] = first character shoud be A-Z or a-z, (?=.*[0-9]) = (?=.*\d) = At least one number, [A-Za-z0-9]$ = rest can be anything from A-Z or a-z or 0-9 for 0 to infinite times, {7,} sets the minimum length of expression (?=.*[0-9])[A-Za-z0-9]$ as 7 (Note 1st expression [A-Za-z] one character so 1+7=8)
var passFormat = /^[A-Za-z](?=.*[0-9])[A-Za-z0-9]{7,}$/;
var password = prompt("Please Enter Password");

for(;!password.match(passFormat);)
{
    password = prompt("Please enter a valid password.\na. It should contain alphabets and numbers (Should contain atleast 1 Number & No special character)\nb. It should not start with a number\nc. It must be at least 8 characters long\nFor character codes of a-z, A-Z & 0-9");
}
document.write("Password is Valid.");