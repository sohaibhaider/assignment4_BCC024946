var newDate = new Date();

document.write("Current Date: "+newDate);
newDate.setHours(newDate.getHours()-1);
document.write("<br/>One hour ago it was: "+newDate);
newDate.setHours(newDate.getHours()+2);
document.write("<br/>One hour later it will be: "+newDate);