let str = "Tôi là một FrontEnd Developer FrontEnd Reactjs";
// Kiểm tra một string có chứa 1 string khác :
str.includes("Front End");
console.log(str.includes("FrontEnd"));

// Tìm vị trí của string đó
str.indexOf("FrontEnd");
console.log(str.indexOf("FrontEnd"));

//Tìm số lần xuất hiện của string đó
let arrStr = [];
arrStr = str.split("FrontEnd");
console.log(arrStr);
console.log(arrStr.length - 1);
