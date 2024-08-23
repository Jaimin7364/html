document.body.style.background = "green"; 

//alert("hello bhai");//pop pop batavse web ma ener thsu etle
// dom etle html ma koi pan vastu change kari shakay chhe
let head = document.getElementById("heading");// anathin heading access kari shakay chhe
// same aa rite class thi pan aapi shakay chhe
 let div = document.querySelector("div");
 console.dir(div);

 // aagal na h1 tag ma i am jaimin add karva mate
 let add = document.querySelector("#bhai");
 console.dir(add.innerText);
 add.innerText = add.innerText + " i am Jaimin"; // i am jaimin add thai gayu chhe

// koin div na end ma element add karva mate 
//supose aapde div na nd ma btn add karvu chhe
let nbtn = document.createElement("button");
nbtn.innerText = "click me!";
console.log(nbtn);
let d =document.querySelector("div");
d.append(nbtn);
//.append ae andar ni side add karva mate
//.prepend andar ni side but start ma add karva mate
//.before bahar ni side div mna pela add karva mate
//.after div na bahar end ma add karva mate

let btn1 = document.querySelector(".btn1");
btn1.onclick = () => {
    console.log("Button was clicked");
};
let box = document.querySelector(".raval");
box.onmouseover = () =>{
    console.log("you are the great");
};

let modebtn = document.querySelector(".jaimin");
let mode = "light"; //dark karvano che
modebtn.onclick = () => {
    if (mode == "light") {
        mode = "dark";
        document.querySelector(".jaimin").style.background = "black";
        document.querySelector(".jaimin").style.color = "white";

    }
    else{
        mode = "light";
        document.querySelector(".jaimin").style.background = "white";
        document.querySelector(".jaimin").style.color = "black";
    }
    console.log("mode");
};


//callback
function hello() {
    console.log("say hello");
}
setTimeout(hello,2000); // here 2000 etle 2s pachhi prnt thase
// we can write it like folllowing 
setTimeout(() => {
    console.log("hello");
}, 2000); // time delay aapva mate aano use thay che 

// callback

function getdata(dataid, getnextdata) {
    setTimeout(() => {
        console.log("data",dataid);// ahi aapde data 1 evu print karavasu
        if (getnextdata) { // aanathi bija 2s pachhi data 2 print thase
            getnextdata();
        } // aa ena mate ke bijo data ae bija 2s pachi print thase
    }, 2000);
}
getdata(1, () => { // data 1 mate
    getdata(2);//data 2 mate
});

let promise = new Promise((resolve, reject) => {
    console.log("i am a promise");
});
//class in js

class car { // aa aappdi class thai gai 
   
   start(){
    console.log("satrt"); // car start thay chhe 
   }
   stop(){
    console.log("stop"); //cAR stop thai gai chhe 
   } 
   setbrand(brand){
    this.brandname = brand;// aa brand ae arg ma aapelu ae che
   }
}
// class thi object create karvu 
let Eon = new car(); // aa object bani gayyu
// jyare aapde aane console ma print karavisuand type josu tyare aaano type object batavs
// same evu j aapde santro car laisu
let santro = new car(); // aama pan car ni badhi properties lagse
Eon.setbrand("hyundai");// ahi car ni brand set thai jase

