console.log("hello") //here log is variable 
var a = 74  //var or let ae variabe declare karva mate use thay chhe
let d = undefined
let c = null
console.log(a) //console ae prit karva mate
a = "Jaimin" //here a is string
console.log(a) //ahi string print thase
//ahi java script ma variable ma ek karta vadhare values store kari shakay chhe ahi c jevu thatu nathi
// let better than var so we will use let 
let b = 11 // let no use pan variable mate
{
    let b = 'this' //ahi this ae block ma j rese b mate jyare box na bar jata b ni value 11 chhe
    console.log(b) //ahi let no use karavathi b na banne value print thse jyare var no use aravathi khali last value j print thase
}
console.log(b)
const j = 5; //koi constant declare karva mate jeni value change thase mahi
console.log(j)
//nn bb ss u  > aani samajuti niche chhe
let z = null;
let y = 345 // number
let x = true; // boolean
let w = BigInt("567") // biglnt
let e = "jaimin"  //string
let f = Symbol("i am a nice symbole") //symbole
let g = undefined //undefined
console.log(z, y, x, w, e, f, g);
console.log(typeof z,typeof y,typeof x,typeof w,typeof e,typeof f,typeof g );
//upar na badha j data type che nn bb ss u
var ab = 5;
var bc = 10;
var cd = "I am jaimin";
// javascript me var name and function name case sensitive hote hai yani ki javascript case sesitive hai.
// ex
var JAIMIN ;
/*
JAIMIN = 10; // right
jaimin = 10 // wrong
*/
// mathematical operations 
var sum = 10 + 10;
var sub = 20 - 10;
var mult = 10 *10;
var div = 20 / 2;
var myvar = 87;
myvar++;
myvar--;
var remainder;
remainder = 11 % 3;
console.log(remainder);
// decimal number mate pan aavu j thay chhe 
//strings
var mystr = "i am jaimin !";
//be strings jodva mate 
var mystr1 = "hello " + mystr;
console.log(mystr1);
// lenth of string
var str2 = "jaimin";
var l1 = 0;
l1 = str2.length; // here .lenth ae string ni lenth mapva mate use thay che.
console.log(l1);
//bracket notation to find first character in string
var firstname = "jaimin";
var firstletter = firstname[0]; // koi pan number no letter shodhva mate
console.log(firstletter);
// last letter shodhva mate 
var lastname = "Raval";
var lastletter = lastname[lastname.length - 1];
console.log(lastletter);
//word blanks  // world blanks no use niche na gatako no use kari senstense banava thay chhe jema function no use thay chhe 

function wordblanks(mynoun, myadjective, myverb, myadverb) {
    var result = "";
    result += "The " + myadjective + " " + mynoun + " " + myverb + " to the store " + myadverb;
    return result;
}
console.log(wordblanks("dog","big","ran","quickly"));

//arrays

var ourarray = ["john",74];
var myarray = ["jaimin",8];

//nested arrays

var narray = [["jaimin",74], ["mahin",89]];

//access array data with indexes  // aa same to same bracket notation na jevu chhe array no Nth gatak shodhva mate 

var array = [50,60,70];
var data = array[0];  // etle ke 1 number no gatak print thase etle ke 50 print thase 

console.log(data); // 50 print thase

//modify array data with indexes // etle ke nth gatak shodhine ene badli pan shakay chhe

var mainarray = [18, 64, 99];
mainarray[1] = 45 // have array ma 64 ni jagya ae 45 thai jase 
console.log(mainarray); // [18,45,99]

// access multi dimensional array with indexes 

var multiarray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var adata = multiarray[0][2]; // 0 2 gatak print thase etle ke pela array [1,2,3] no trijo gatak etle ke 3 print thase
console.log(adata);
var adata = multiarray[3][0][1]; // ahi chhelo array etle [[10,11,12], 13, 14] no pelo gatak etle ke [10,11,12] no bijo gatak etle ke 11 print thase  
console.log(adata);


//manipulate arrays with push() //aano mean ae thay ke aapde array ma pachhal bijo element add kari shakiye chhiye

var manarray =["jaimin", "j", "cat"];
manarray.push(["happy", "joy"]); //aa array pela array ma add thai jase
console.log(manarray);

//Manipulate arrays with pop() // pop karvathi array no last element remove thai jase 

var a1 = [1,2,3];
a1.pop();
console.log(a1);
//var a2 =a1.pop(); // aa fakt ae jova mate ke aapde kayo element remove thayo chhe aama 3 thayo chhe jo aa line lakhiye to upar ni lakhvani jarur nathi 

//Manipulate arrays with shift() // aa same pop na jevu j chhe but ama pelo element remove thase

var a2 = [1,2,3];
a2.shift();
console.log(a2);

// Manipulate arrays with unshift() // shift thi undhu thase aama aagal ek element add karva mate

var uary = ["jaimin","bhai"];
uary.unshift("raval");
console.log(uary);

//write reusable code with function // function call

function ourreusablefunction(){
    console.log("Heyya");
}
ourreusablefunction();
ourreusablefunction();

//passing values to function with arguments

function argary(q,w){
    console.log(q - w);
}
argary(10,5); // aama 5 output aavse

//global scope and functions

// aama global ariable aaavse je badha function ma use kari shakay chhe
// aama koi game te example lai shakay chhe function lai ne ena bar ek variable declair kari devano
//extra
function fun1(){
    oopsglobal = 5; //ahi aapde var lakhyo nathi etle oopsglobal ae global variable chhe 
}
fun1();
var t = 5 + oopsglobal;
console.log(t);

//local scope and function // local varible

function mylocalscope(){
    var localvar =5;
    console.log(localvar); // ahi 5 print thai jase pan bar thase nahi
}
mylocalscope(); //function call farjiyat chhe badha ma 
//console.log(localvar);//ahi print thsae nahi error aavse

//return a value from a function with return

function rfun(num){
    return num - 7;
}
console.log(rfun(10)); // ama 10 - 7 thase 

// Assignment with a returned value

function change(i){
    return(i + 5)/3;
}
var changed = change(10); // aama upar ma 10 value nakhi ne return thase
console.log(changed);// amaa 5 ans aavse

// Use condition logic with if statements

function ourtrueorfalse(isittrue){
    if (isittrue) {
        return "yes, it is true";
    }
    return "no, it is false";
}
console.log(ourtrueorfalse(true)); //true valu statement print thase

//comparison with the equality operator

function testequal(val){
    if (val == 12) {
        return "equal";
    }
    return "not equal";
}
console.log(testequal(10));

//comparision with the strict equality operator

// ama upar jevu j same aavse but aama 3 === aavse etle ene apde strict comparision kahiye siye


//practice comparing different values// 2 values ne compare karva mate vaparay chhe 

function compareequality(jy,yj) {
    if (jy == yj) {
        return "equal";   
    }
    return "not equal";
}
console.log(compareequality(10,10)); // here these are equal

//nested if //if vala ma else pan lai levanu rese

function nif(v){
    if (v >= 50) {
        if (v >= 100) {
            return "over 100";
        }
        return "over 50";
    }
    return "under 50";
}
console.log(nif(101));

//else if 

function elif(f) {
    if (f>=50 && f <70) {
        return "B grade";
    }
    else if (f>=70 && f<90) {
        return "A grade";
    }
    else if(f>=90){
        return "A+ grade"
    }
    else{
        return "fail";
    }
}
console.log(elif(75));

// switch statement

function fswitch(s) {
    var answer;
    switch (s) {
        case 1:
            answer = "jaimin";
            break;
        case 2:
            answer = "bhai";
            break;
        default:
            answer = "wrong";
            break;
    }
    return answer;
}
console.log(fswitch(2));

//for knoledge only 
//user input leva mate prompt no use thay chhe 
// ena mate nicheni library ni jarur pade chhe
//let prompt = require("prompt-sync")();
//let alert = require("prompt-sync")();
//input leva mateni line niche chhe 
//let name = prompt("enter your name :");
//console.log(name);

//return boolean values

function isless(a,b) {
    return a<b; // if a <b then it give true else give false
}
console.log(isless(10,15));

//create objects in javascripts

var testobj = {
    "hat" : "black", // here hat,15,name are our keys and
    15 : "jaimin",   //black,jaimin,yogesh are our values 
    "name" : "ypgesbhai"  //and all are entries
};
var hatvalue = testobj.hat; // for print
console.log(hatvalue);  //black will print
testobj.hat = "white";// for change the values
console.log(testobj.hat); 
testobj.id = "raval"; // for add new entry in the object
delete testobj.name; // for delete any entry in the object

//while loop

var wary = [];
var i = 2;
while (i<5) {
    wary.push(i);
    i++;
}
console.log(wary); // for print [2,3,4]

//for loop

var fary = [];
for (let i = 0; i < 5;i++) {
     fary.push(i);
}
console.log(fary);//print [0,1,2,3,4]

