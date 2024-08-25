const date = document.querySelector("#date");
const weekday = document.querySelector("#weekday");
const daysOfWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

function getDate() {
    const today = new Date();
    const year = today.getFullYear() % 100;
    const month = String(today.getMonth()+1).padStart(2,"0");
    const day = String(today.getDate()).padStart(2,"0");
    const dayy = daysOfWeek[today.getDay()];
    date.innerText = `${year}.${month}.${day}`;
    weekday.innerText = `${dayy}`;
}

getDate();
setInterval(getDate,1000);