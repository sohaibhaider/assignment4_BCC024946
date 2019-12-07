var str = "<p><strong><em>Only print this</em></strong></p>";
var tagFormat = /<([a-zA-Z0-9/]+)>/ig;

document.write(str.replace(/</g, "&lt;").replace(/>/g, "&gt;")+"<br/>");
str = str.replace(tagFormat, "");
document.write(str);