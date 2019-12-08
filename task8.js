
var a = prompt("Enter Number:\nOption 1: 0-10^63\nOption 2: 0-999", 1234567890);
var word = "";
var units = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var tens = ["", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var shifts = ["Hundred","Thousand","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion","Undecillion","Duodecillion","Tredecillion","Quattuordecillion","Quindecillion","Sexdecillion","Septendecillion","Octodecillion","Novemdecillion","Vigintillion"];

//Option 1: Quite efficient since can handle as long as 64 Digit Number (Uses string.replace function and string.length property)
for(i=1;i<=a.length;i++)
{
    if((i%3!=2 && a[a.length-i]!='0') || a.length==1)
    {
        if((a.length-(a.length-i-1))%3!=2 || a[a.length-i-1]!='1')
        {
            word = word.replace("", " "+units[a[a.length-i]]);
        }
    }
    else
    {
        if(a[a.length-i]=='1' && a[a.length-i+1]!='0')
        {
            word = word.replace("", " "+teens[a[a.length-i+1]]);
        }
        else
        {
            word = word.replace("", " "+tens[a[a.length-i]]);
        }
    }
    if(i!=a.length)
    {
        if(i%3==2 && a[a.length-i-1]!='0')
        {
            word = word.replace("", " "+shifts[0]);
        }
        if(i%3==0 && (a[a.length-i-1]!='0' || a[a.length-i-2]!='0' || a[a.length-i-3]!='0'))
        {
            word = word.replace("", " "+shifts[i/3]+",");
        }
    }
}

document.write("Entered Number: "+parseInt(a).toLocaleString()+"<br/>");
word = word.replace(" ", "");
document.write("Number in Words: "+word);

//Option 2: Not Efficient since needs one Condition for every index of Number in String format (Uses parseInt and toString functions)
/*if(a.length==1 && a[0]=='0')
{
    document.write(units[0]);
    stop();
}

if(a.length==3)
{
    document.write(units[parseInt(a/100)]+" Hundred ");
    if(a[1]!='0' || a[2]!='0')
    {
        document.write("and ");
    }
    a=(a-parseInt(a/100)*100).toString();
}

if(a.length==2)
{
    if(a[1]!='0')
    {
        if(a>10 && a<20)
        {
            document.write(teens[parseInt(a-10)]);
            stop();
        }
        else
        {
            document.write(tens[parseInt(a/10)]);
        }
    }
    else
    {
        document.write(tens[parseInt(a/10)]);
    }
    a=(a-parseInt(a/10)*10).toString();
}

if(a.length==1 && a[0]!='0')
{
    document.write(" "+units[a]);
}*/