function updateTime() {
    const now = new Date();
    const offset = 1; // GMT+1
    const gmt1Time = new Date(now.getTime() + offset * 60 * 60 * 1000);
    const currentTimeGMT1 = gmt1Time.toISOString().slice(0, 19).replace("T", " ");
    
    document.querySelector('[data-testid="currentTimeGMT1"]').textContent = currentTimeGMT1;
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[gmt1Time.getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

window.onload = updateTime;

