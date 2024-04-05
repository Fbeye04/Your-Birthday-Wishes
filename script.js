var openLights = document.querySelector(".button1");
var openBalloons = document.querySelector(".button2");
var popUpCake = document.querySelector(".button3");
var greeting = document.querySelector(".button4");

var balloon1 = document.querySelector(".balloon1");
var balloon2 = document.querySelector(".balloon2");
var lights = document.querySelector(".lights");
var confetti1 = document.querySelector(".confetti1");
var confetti2 = document.querySelector(".confetti2");
var greet = document.querySelector(".greet");
var audio = document.querySelector(".audio");
var cake = document.querySelector(".cake");

openLights.addEventListener("click", function(){
  audio.play();
  lights.style.display = "block";
})

openBalloons.addEventListener("click",function(){
  balloon1.classList.add("addBalloons");
  balloon2.classList.add("addBalloons");
  balloon1.style.display = "block";
  balloon2.style.display = "block";
})

popUpCake.addEventListener("click", function(){
  cake.style.display = "block";
})

greeting.addEventListener("click", function(){
  confetti1.style.display = "block";
  confetti2.style.display = "block";
  greet.style.display = "block";
})