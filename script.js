function updateTime() {
    const now = new Date();
    const offset = 1; // GMT+1
    const gmt1Time = new Date(now.getTime() + offset * 60 * 60 * 1000);
    
    // Formatting the time to a more readable format
    const hours = String(gmt1Time.getUTCHours()).padStart(2, '0');
    const minutes = String(gmt1Time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(gmt1Time.getUTCSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Formatting the date to a readable format
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[gmt1Time.getUTCDay()];

    // Updating the HTML elements
    document.querySelector('[data-testid="currentTimeGMT1"]').textContent = formattedTime;
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

// Updating the time every second
setInterval(updateTime, 1000);
window.onload = updateTime;

