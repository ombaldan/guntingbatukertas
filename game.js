
//ini karena nyontek di Channel Web Pemrograman UNPAS
// gak tau kenapa dibuat seperti ini
//udah nyontek gak jalan juga codenya hhahaha

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

//masih bingung di sini
//pengen ganti tulisan "VS" jadi text dari setWinner saat keluar result, tapi gak berfungsi

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

//the winner
function setWinner(text){
    let winner = document.getElementById("the-winner")
    winner.textContent = text
}

//ini juga copas dari web programming unpas, tapi gak bisa running karena element yang dipakai di videonya class, sementara di element htmlnya saya pakai id dan saya bingung manggil id-nya di baris 55 mengganti className.
let playerGunting = document.getElementById("player-gunting");
playerGunting.addEventListener("click", function(){
    let pilihanComputer = computerChoices();
    let pilihanPlayer = playerGunting.className;
    let result = result(pilihanComputer, pilihanPlayer);
    // console.log("computer:" + pilihanComputer);
    // console.log("player:" + pilihanPlayer);
    // console.log("result:" + result);
});

//ini tombol reloadpage
function reset(){
    window.location.reload();
} 

//secara umum untuk chapter 4 pemahaman materi saya cuma 20% "maybe". Sudah beberapa kali replay recording FGD, dan beberapa video referensi lain, tapi masih belum paham menulis kembali ke dalam code. Hehe..

//Belum tahu bagaimana metode belajar yang pas biar mudah memahami rules javascript ini.