const today = new Date();

const displayDate = document.querySelector('#today');

const year = today.getFullYear();
const month = today.getMonth() +1;
const date = today.getDate();
const day_num = today.getDay();

let day_str = "";

switch (day_num) {
    case 0:
        day_str = "일요일"; break;
    case 1:
        day_str = "월요일"; break;
    case 2:
        day_str = "화요일"; break;
    case 3:
        day_str = "수요일"; break;
    case 4:
        day_str = "목요일"; break;
    case 5:
        day_str = "금요일"; break;
    case 6:
        day_str = "토요일"; break;
}

displayDate.innerHTML = `${year}년 ${month}월 ${date}일 <span style="font-weight:bold">${day_str}</span>`;

const displayTime = document.querySelector('#clock');

let clock = () => {

    let current = new Date();
    let hours = current.getHours();
    let mins = current.getMinutes();
    let secs = current.getSeconds();

    let period = "AM";
    if (hours === 0) {
        hours = 12;
    } else if (hours === 12) {
        period = "PM";
    } else if (hours > 12) {
        hours = hours - 12;
        period = "PM"
    }

    hours = (hours < 10) ? "0" + hours : hours;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    displayTime.innerText = `${period} ${hours} : ${mins} ; ${secs}`;

    const container = document.querySelector('#container');
    const randomX = getRandomPosition(500);
    const randomY = getRandomPosition(300);
    container.style.left = `${randomX}px`;
    container.style.top = `${randomY}px`;

    const body = document.querySelector('body');


    if (secs % 2 == 0) {
        console.log("0")
        const even = document.createElement("div");
        even.innerHTML = "딱"
        body.appendChild(even);
    } else {
        const odd = document.createElement("div");
        odd.innerHTML = "똑"
        body.appendChild(odd);
    }
}

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

setInterval(clock, 1000);