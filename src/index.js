import './sass/main.scss';

const refs = {
    clockfaceDays: document.querySelector('.value[data-value="days"]'),
    clockfaceHours: document.querySelector('.value[data-value="hours"]'),
    clockfaceMinutes: document.querySelector('.value[data-value="mins"]'),
    clockfaceSeconds: document.querySelector('.value[data-value="secs"]'),
}



class CountdownTimer {
    constructor({onTick}) {
        this.intervalId = null;
        this.onTick = onTick;
    }

    start() {
        const targetTime = new Date('May 22, 2021');
        
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = targetTime - currentTime;
            const { days, hours, mins, secs } = this.getDaysAndTimeComponents(deltaTime);
            
            this.onTick(days, hours, mins, secs);
        }, 1000);
        
    }

    getDaysAndTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs}
    }

    pad(value) {
    return String(value).padStart(2, "0")
}

   
}
    
const countdownTimer = new CountdownTimer({
    onTick: updateClockface
});

countdownTimer.start();



function updateClockface(days, hours, mins, secs) {
    updateDays(days);
    updateHours(hours);
    updateMinutes(mins);
    updateSeconds(secs);
}

function updateDays(days) {
    refs.clockfaceDays.textContent = `${days}`;
}

function updateHours(hours) {
    refs.clockfaceHours.textContent = `${hours}`;
}

function updateMinutes(minutes) {
    refs.clockfaceMinutes.textContent = `${minutes}`;
}

function updateSeconds(seconds) {
    refs.clockfaceSeconds.textContent = `${seconds}`;
}


