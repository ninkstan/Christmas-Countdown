// set Christmas day
var countDate = new Date("Dec 25, 2022 00:00:00").getTime();
//update countdown every 1sec
var x = setInterval(function () {
  //get today's date and time
  var now = new Date().getTime();
  //distance between now and countdown date
  var distance = countDate - now;
  //calculate days/hrs/mins/secs
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //display result in class
  document.querySelector(".day").innerHTML = days;
  document.querySelector(".hour").innerHTML = hours;
  document.querySelector(".min").innerHTML = minutes;
  document.querySelector(".sec").innerHTML = seconds;
  //if countdown finish
  if (distance <= 0) {
    clearInterval(x);
    document.querySelector("h1").innerHTML = "Merry Christmas!";
    document.querySelector("h1")[1].remove();
    document.querySelector(".timer").style.marginBottom = "2rem";
  }
});
