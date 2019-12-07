
var a = prompt("Enter Number:\n0-999", 123);
var units = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
var teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var tens = ["", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

if(a.length==1 && a[0]=='0')
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
    a=a-parseInt(a/100)*100;
    a = a.toString();
}

if(a.length==2)
{
    if(a[1]!='0')
    {
        if(a>10 && a<20)
        {
            document.write(teens[parseInt(a-10)]);
            //stop();
            a=0;
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
    a=a-parseInt(a/10)*10;
    a = a.toString();
}

if(a.length==1 && a[0]!='0')
{
    document.write(" "+units[a]);
    a = a.toString();
}