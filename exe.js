const choice = ["rock","scissors","paper"];
let humanScore=0;
let computerScore=0;
let getComputerChoice = ()=>{
    return choice[Math.floor(Math.random()*3)];
}

let getHumanChoice = ()=>{
    let c=prompt("please enter your choice");
    for(let i=0;i<3;i++){
        if (c==choice[i]){
            return c;
        }
    }
  
}
function playRound(humanChoice, computerChoice) {
  if(humanChoice=="rock" && computerChoice =="rock"){
    return "same"
  }
  else if(humanChoice=="paper" && computerChoice =="paper"){
    return "same"
  }
  else if(humanChoice=="scissors" && computerChoice =="scissors"){
    return "same"
  }
  else if(humanChoice=="rock" && computerChoice =="scissors"){
    humanScore++;
    return "human win"
  }
   else if(humanChoice=="scissors" && computerChoice =="paper"){
    humanScore++;
    return "human win"
  }
   else if(humanChoice=="paper" && computerChoice =="rock"){
    humanScore++;
    return "human win"
  }
   else if(humanChoice=="scissors" && computerChoice =="rock"){
    computerScore++;
    return "computer win"
  }
  else if(humanChoice=="rock" && computerChoice =="paper"){
    computerScore++;
    return "computer win"
  }
  else if(humanChoice=="paper" && computerChoice =="scissors"){
    computerScore++;
    return "computer win"
  }
    return "Prompt Again";
  
}


let i=0;
while (i!=5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
i++;
}