

const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

function updateTime() {
    const date = new Date();
    document.getElementById("date").innerHTML = date.getDate();
    document.getElementById("day").innerHTML = weekdays[date.getDay()];
    document.getElementById("month").innerHTML = months[date.getMonth()];
    document.getElementById("year").innerHTML = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Initial call to updateTime to set the initial date and time
updateTime();

// Set up a timer to update the date and time every second
setInterval(updateTime, 1000);
