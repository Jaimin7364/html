let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user_score");
const compscorepara = document.querySelector("#comp_score");


//generate computer choice 
const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    //have random select karva mate aapde math.random nu use karisu jema ene 3 thi multiply karisu bcz eni value aam to 0 to 1 j hoy chhe etle aapde to 0 to 2 etle ke 3 vale joie chhe 
    //3 thi multiply karya pachi math.floor(math.random() * 10 ) karsu aanathi point vala number ae intizer thai jase
    const randidx= Math.floor(Math.random() * 3); // upar nu badhu ek var ma store karsu jenathi arrway mathi koi ek index select kari sakay chhe
    //rock,paper , scissor
    return options[randidx];
};

const drawgame = () =>{
    console.log("game was draw."); // aa console print thase
    msg.innerText = "Game Was Draw!";//aa screen par msg vali jagya par print thase
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!"); // aa console ma print thse
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;//aa screen par msg vali jagya par print thase
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose!");
        msg.innerText = `You lose!  ${compchoice} beats your ${userchoice}`;//aa screen par msg vali jagya par print thase
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    //generate computer choice mate 
    const compchoice = gencompchoice();
    console.log("computer choice = ",compchoice);

    // for who will win the match
    //1 draw game 
    if (userchoice === compchoice) {
        drawgame();
    }
    else{
        let userwin = true;
        if (userchoice == "rock") {
            // compchoice == scissor or paper thase to
            userwin = compchoice === "paper" ? false : true;
        }else if (userchoice == "paper") {
            //compchoice == scissor or rock
            userwin = compchoice === "scissor" ? false : true;
        }else{
            // userchoice == scissor so that 
            //compchoice = rock or paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id")
        // aane aapde upar lai gaya siye console.log("Choice was clicked",userchoice);
        playgame(userchoice);
    });
});
