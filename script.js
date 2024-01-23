//Accessing elements()
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


// Making variables for traking turns X or O 
let turnO = true;  // playerX , playerO


//Storing winning patters 
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


//adding event listeners by the use of foreach for click to get O or X
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }
        else{ //playerx
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
         
        checkWinner();

    })
})


// Function for CheckWinner &
const checkWinner = () =>{
    for(let pattern of winPatterns){
            let post1Val =  boxes[pattern[0]].innerText; 
            let post2Val =  boxes[pattern[1]].innerText;
            let post3Val =  boxes[pattern[2]].innerText;

            if(post1Val != "" && post2Val !="" && post3Val !=""){
                if(post1Val === post2Val && post2Val === post3Val){
                    console.log ("Winner",post1Val);
                    showWinner(post1Val);
                }
            }
    }
}


//new Fucntion for whowing winner 
const showWinner = (winner) => {
    msg.innerText =`Congratulations, winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};


// For reset game
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


//Funciton for disabling boxes
const disableBoxes = () =>{
    for(let box of boxes ){
        box.disabled = true;
    }
}


//Funciton for enabling boxes
const  enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}


// for new game and reset game 
newGamebtn.addEventListener("click", resetGame );
resetBtn.addEventListener("click" , resetGame);