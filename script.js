"use strict";
function clock() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Months = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let hrs = document.getElementById("hours");
  let min = document.getElementById("Minutes");
  let sec = document.getElementById("seconds");
  let period = document.getElementById("ampm");
  let date = document.getElementById("ddmmyy");
  let day = document.getElementById("dd");
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let d = time.getDay();
  let dd = time.getDate();
  let mm = time.getMonth();
  let yy = time.getFullYear();
  if (h > 12) {
    h = h - 12;
  }
  if (h == 0) {
    h = 12;
  }
  let ampm = h >= 12 ? "AM" : "PM";
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hrs.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  period.innerHTML = ampm;
  day.innerHTML = days[d];
  date.innerHTML = Months[mm] + " " + dd + "," + yy;

  // Calculate rotation angles for hour, minute, and second bars
  let hourRotation = (h % 12) * 30 + m / 2; // Each hour = 30 degrees, and each minute = 0.5 degrees
  let minuteRotation = (m / 60) * 360; // Each minute = 6 degrees (360 degrees in total for 60 minutes)
  let secondRotation = (s / 60) * 360; // Each second = 6 degrees (360 degrees in total for 60 seconds)

  // Apply rotation to the bars
  document.querySelector(
    ".hour-bar"
  ).style.transform = `translate(-50%, -50%) rotate(${hourRotation}deg)`;
  document.querySelector(
    ".minute-bar"
  ).style.transform = `translate(-50%, -50%) rotate(${minuteRotation}deg)`;
  document.querySelector(
    ".second-bar"
  ).style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
}

clock();
setInterval(clock, 1000);
