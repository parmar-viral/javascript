console.log("boolean type to number.................")
let bool=true;
console.log("before converting type="+typeof(bool));
console.log("berfore converting bool="+bool+"\n");
let bool1=Number(bool);
console.log("after converting type="+typeof bool1);
console.log("after converting bool1="+bool1+"\n");

console.log("string type to number.............................")
let s="33";
console.log("before converting type="+typeof(s)+"before converting s="+s);
let s1=Number(s);
console.log("after converting type="+typeof(s1)+"after converting s1="+s1); //s1=33=>means "33" string convert into s1=33(number type)

//second string
let str="33abc"; //string type
console.log("before converting type="+typeof(str));
console.log("berfore converting str="+str+"\n");

let str1=Number(str); //convert string type to number

console.log("after converting type="+typeof str1);
console.log("after converting str1="+str1+"\n"); //str1=Nan=>not a number

console.log("undefined type to number................................")
let num; //undefined type
console.log("before converting type="+typeof(num));
console.log("berfore converting num="+num+"\n");

let num2=Number(num); //convert undefined type to number

console.log("after converting type="+typeof num2);
console.log("after converting num2="+num2+"\n");

console.log("null type to number.............................")
let n=null; //null type
console.log("before converting type="+typeof(n));
console.log("berfore converting n="+n+"\n");

let n1=Number(n); //convert null type to number

console.log("after converting type="+typeof n1);
console.log("after converting n1="+n1+"\n");