// Dice 1
var randomNumber1 = (Math.random()*6)+1;
randomNumber1 = Math.floor(randomNumber1);

switch(randomNumber1){
        case 1: {image = '.dice1.png'; break;}
        case 2: {image = '.dice2.png'; break;}
        case 3: {image = '.dice3.png'; break;}
        case 4: {image = '.dice4.png'; break;}
        case 5: {image = '.dice5.png'; break;}
        case 6: {image = '.dice6.png'; break;}
        default: break;
}

 document.getElementById("die1Img").src = "images/dice"+randomNumber1+".png";


// Dice 2
var randomNumber2 = (Math.random()*6)+1;
randomNumber2 = Math.floor(randomNumber2);
switch (randomNumber2) {
  case 1: {image = '.dice1.png'; break;}
  case 2: {image = '.dice2.png'; break;}
  case 3: {image = '.dice3.png'; break;}
  case 4: {image = '.dice4.png'; break;}
  case 5: {image = '.dice5.png'; break;}
  case 6: {image = '.dice1.png'; break;}
  default: break;
}
 document.getElementById("die2Img").src = "images/dice"+randomNumber2+".png";

 // winners

if(randomNumber1 === randomNumber2 ){
  document.querySelector("h1").innerHTML=("Its a Draw");
}

else if(randomNumber1 > randomNumber2 ){
  document.querySelector("h1").innerHTML=("🚩Player 1 wins");
}

else{
  document.querySelector("h1").innerHTML=("Player 2 wins🚩");
}
