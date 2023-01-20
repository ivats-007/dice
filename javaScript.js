function randomNumber(){
    return Math.floor((Math.random()*6) + 1);
}
function myFunction(){
    var randomNumber1 = randomNumber();
    var randomNumber2 = randomNumber();
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "<i class='fa-solid fa-flag flag'></i> Player 1 wins!";
    }else if(randomNumber1==randomNumber2){
        document.querySelector("h1").textContent = "Draw!";
    }else{
        document.querySelector("h1").innerHTML = "Player 2 wins! <i class='fa-solid fa-flag flag'></i>";
    }
}
