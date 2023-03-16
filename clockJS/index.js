let hourEL = document.getElementById("hour")
let minutesEL = document.getElementById("minutes")
let secondsEL = document.getElementById("seconds")
let am_pmEL = document.getElementById("am_pm")


function showTime() {

  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

hourEL.innerText = hour
minutesEL.innerText = min
secondsEL.innerText = sec
am_pmEL.innerText  = am_pm
  setTimeout(()=>{
    showTime()
  }, 1000);
}
showTime();
