function updateTime() {
    const currentTimeUTC = new Date().toISOString().slice(0, 19).replace("T", " ");
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[new Date().getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

window.onload = updateTime;

