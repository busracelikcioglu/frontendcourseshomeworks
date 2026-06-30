let userName = prompt("Adınız nedir?");

if (!userName || userName.trim() === "") {
  userName = "Ziyaretçi";
}

document.getElementById("myName").innerText = userName;

function showTime() {
  const clock = document.getElementById("myClock");
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const day = days[now.getDay()];

  clock.innerHTML = `${hours}:${minutes}:${seconds} ${day}`;
}

setInterval(showTime, 1000);
showTime();