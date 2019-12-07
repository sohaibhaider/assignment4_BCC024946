var numStr = prompt("Please Enter Number, Decimal Places to round off", "16.765, 2");
numStr = numStr.replace(/ /g, "");
numStr = numStr.split(",");
document.write("Number: "+numStr[0]+" Decimal Place: "+numStr[1]+"<br/>")
document.write("Output: "+parseFloat(numStr[0]).toFixed(parseInt(numStr[1])));