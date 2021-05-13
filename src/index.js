import './sass/main.scss';

const refs = {
    timerfaceDays: document.querySelector('.value[data-value="days"]'),
    timerfaceHours: document.querySelector('.value[data-value="hours"]'),
    timerfaceMinutes: document.querySelector('.value[data-value="mins"]'),
    timerfaceSeconds: document.querySelector('.value[data-value="secs"]'),
}



class CountdownTimer {
    constructor({onTick, selector, targetDate}) {
        // this.intervalId = null;
        this.onTick = onTick;
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimerComponents(deltaTime);
            
            this.onTick(time);
        }, 1000);
        
    }

    getTimerComponents(time) {
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
    onTick: updateTimerface,
    selector: '#timer-1',
    targetDate: new Date('May 22, 2021'),
});





function updateTimerface({days, hours, mins, secs}) {
    updateDays(days);
    updateHours(hours);
    updateMinutes(mins);
    updateSeconds(secs);
}

function updateDays(days) {
    refs.timerfaceDays.textContent = `${days}`;
}

function updateHours(hours) {
    refs.timerfaceHours.textContent = `${hours}`;
}

function updateMinutes(minutes) {
    refs.timerfaceMinutes.textContent = `${minutes}`;
}

function updateSeconds(seconds) {
    refs.timerfaceSeconds.textContent = `${seconds}`;
}


