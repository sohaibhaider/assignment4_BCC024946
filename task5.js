var num = parseFloat(prompt("Please enter a positive number with decimal places:", 3.45214));
if(num<0)
{
    num = num*(-1);
}
document.write("Number: "+num);
document.write("<br/>Round Off Value: "+Math.round(num));
document.write("<br/>Floor Value: "+Math.floor(num));
document.write("<br/>Ceil Value: "+Math.ceil(num));