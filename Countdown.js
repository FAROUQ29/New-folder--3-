const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    'June',
    "July",
    "August",
    "September",
    "October",
    "November",
    'December',
];
const weedays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    'Saturday',
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(.deadline-format h4);

let futureDate = new Date(2020, 8, 29, 11, 30,0);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minutes = futureDate.getminutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
const today = new Date().getTime();
const t = futureTime - today;
console.log(t);
// 1s = 1000ms
// 1min = 60s
// 1hr = 60min
// 1day =24hr

// values in ms
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinutes = 60 * 1000;
// calculate all values
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinutes);
let seconds = Math.floor((t % oneMinutes) / 1000);

// set values array
const values = [days, hours, minutes, seconds];

function.format(item) {
    if (item < 10) {
        return (item = `0${item}`);
    }
    return item;
}

items.forEach(function (item, index) {
    item.innerHTML = values[index];
    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired`>sorry this birthday has expired</h4>;
    }  
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
