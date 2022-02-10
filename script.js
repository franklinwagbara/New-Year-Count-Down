const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const newYear = new Date("1 Jan 2023");

function main() {
  const currentDate = new Date();
  const diff = newYear - currentDate;
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const hours = Math.floor(diff / 1000 / 3600) % 24;
  const days = Math.floor(diff / 1000 / 3600 / 24);
  console.log(days, hours, minutes, seconds);

  daysElement.innerHTML = format(days);
  hoursElement.innerHTML = format(hours);
  minutesElement.innerHTML = format(minutes);
  secondsElement.innerHTML = format(seconds);
}

function format(number) {
  if (number < 10) return `0${number}`;
  return number;
}

setInterval(main, 1000);
