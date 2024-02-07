var randNumber1 = Math.floor(Math.random()*6 + 1);

document.querySelector(".img1").setAttribute('src',"images/dice" +randNumber1 + ".png") 

var randNumber2 = Math.floor(Math.random()*6 + 1);

document.querySelector(".img2").setAttribute('src',"images/dice" +randNumber2 + ".png") 

var title = document.querySelector("h1");

if(randNumber1> randNumber2){
    title.textContent = "🚩 Player 1 wins";
}
else if(randNumber1< randNumber2){
    title.textContent = "Player 2 wins 🚩";


}
else{
    title.textContent = "Draw";

}