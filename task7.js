var str = "The quick brown fox jumps over the lazy dog";
var newStr = prompt("Enter", "the");
//Creating new RegEx using newStr prompt value with 'g' & 'i' flags
var newRex = new RegExp(newStr, "gi");

document.write("Text: "+str);

if(str.match(newRex)!==null)
{
    document.write("<br/>List: {"+str.match(newRex));
    document.write("}<br/>There are "+str.match(newRex).length+" occurrence(s) of the word '"+newStr+"'");
}
else
{
    document.write("<br/>List: {null}");
    document.write("<br/>There are 0 occurrence(s) of the word '"+newStr+"'");
}
