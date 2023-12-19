const pi=3.1416;
var username="bca";
let email="bca123@gmail.com";
city="rajkot";

console.log("print the value of different variables............");
console.log("value of const variable pi="+pi);
console.log("value of variable name="+username);
console.log("value of let variable email="+email);
console.log("value of city="+city);

//pi=123;// error :cannot change the value of const variable
username="bcasy";
email="bcasy123@gmail.com";
city="surat";
let ac_state;//without initializing value of variable and print this variable as result javascript gives "undefined"

console.log("\nprint the value after modification of variables............");
console.log("value of const variable pi="+pi);
console.log("value of variable name="+username);
console.log("value of let variable email="+email);
console.log("value of city="+city);
//second method of console to print many values without use of console.log easily
console.table([pi,username,email,city,ac_state]);
