const raceDate = new Date("May 17, 2026 00:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = raceDate - now;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

document.getElementById("timer").innerHTML =
days + "d " + hours + "h " + minutes + "m ";

},1000);