var j = prompt("How many times do you want to roll the dice", 10);
for(i=1;i<=j;i++)
{
    document.write("Roll "+i+"> Random Dice Value: "+Math.ceil(Math.random()*6)+"<br/>");
    //document.write("Roll "+i+"> Random Dice Value: "+Math.ceil(Math.random()*10%6)+"<br/>");
    //document.write("Roll "+i+"> Random Dice Value: "+Math.floor(Math.random()*6+1)+"<br/>");
    //document.write("Roll "+i+"> Random Dice Value: "+Math.floor(Math.random()*10%6+1)+"<br/>");
}