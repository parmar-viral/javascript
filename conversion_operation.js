/*
console.log("*********************************************Conversions****************************************\n")
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

console.log("Number type to boolean................");
let no=-1; //if no is 0 then boolean type value is false otherwise value is true
console.log("before type of no="+typeof no+"    before value of no="+no);
let no1=Boolean(no);
console.log("after type of no1="+typeof no1+"   after value of no1="+no1);

console.log("\nstring type to boolean..................");
let S="1234"; //if an empty string then boolean type value if false otherwise it return true
console.log("before type of S="+typeof S+"  before value of S="+S);
let b=Boolean(S);
console.log("after type of b="+typeof b+"  after value of b="+b);
*/
console.log("************************************************Operation**************************************\n")

//basic operations.................
let num=10;
let negativenum=-num;
console.log("negativenum="+negativenum);
//arithmatic operations.................
console.log("add="+(90+900));
console.log("sub="+(900-9));
console.log("mul="+(90*90));
console.log("div="+(1000/20));
console.log("reminder="+(300%20));
console.log("power="+(5**2));

//string concatenation...............
let a="hello!"
let b=" javascript"
console.log("string="+(a+b));

console.log("ans="+"1"+2); //ans=12
console.log("ans="+1+"2");//ans=12
console.log("ans="+"1"+2+2);//ans=122 
console.log(1+2+"2");//ans is 32

// "+" convert the type................. 
console.log(true);// true
console.log(+true);// 1
console.log(+false); // 0
console.log(+"");// 0

//increment and decrement operation..................
let x=12;
x++;
console.log("x="+x)
++x;
console.log("x="+x)
x--;
console.log("decrement="+x)
