//Option 1: Variable as String
var numStr = prompt("Please Enter a Number to find Mean of all Digits", 1245);
var numSum = 0;

for(i=0;i<numStr.length;i++)
{
    numSum = numSum + parseFloat(numStr[i]);
}
document.write("Mean: "+numSum/numStr.length);


//Option 2: Variables as Numbers
/*var digiNum = parseInt(prompt("Please Enter a Number to find Mean of all Digits", 1245));
var numSum = 0;
var digiLength = digiNum.toString().length

for(i=10**(digiLength-1);i>=1;i/=10)
{   
    numSum = numSum + Math.floor((digiNum/i));
    digiNum = digiNum%i;
}
document.write("Mean: "+numSum/digiLength);*/