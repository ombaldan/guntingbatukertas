
function computerChoices() {
    let computer = Math.random();

    if( computer < 0.34 ) {
        computer = "gunting";
    } else if( computer >= 0.34 && computer < 0.67 ) {
        computer = "batu";
    } else {
        computer = "kertas";
    }
}

function result(computer, player){
    if( player == "gunting" ){
        result = (computer == "kertas")
        setWinner("YOU WINNER");
    }else if( player == "gunting"){
        result = (computer == "batu")
        setWinner("YOU LOSE");
    }else if( player == "batu"){
        result = (computer == "gunting")
        setWinner("YOU WIN");
    }else if( player == "batu"){
        result = (computer == "kertas")
        setWinner("YOU LOSE");
    }else if( player == "kertas"){
        result = (computer == "gunting")
        setWinner("YOU LOSE");
    }else if( player == "kertas"){
        result = (computer == "batu")
        setWinner("YOU WIN");
    }else{
        setWinner("SERI");
    }
}

function setWinner(text){
    let winner = document.getElementById("the-winner")
    winner.textContent = text
}

let playerGunting = document.getElementById("player-gunting");
playerGunting.addEventListener("click", function(){
    let pilihanComputer = computerChoices();
    let pilihanPlayer = playerGunting.;
    let result = result(pilihanComputer, pilihanPlayer);
    // console.log("computer:" + pilihanComputer);
    // console.log("player:" + pilihanPlayer);
    // console.log("result:" + result);
});

function reset(){
    window.location.reload();
} 