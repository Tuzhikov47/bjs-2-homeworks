class AlarmClock {
    constructor() {
        this.alarmColection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (typeof id === 'undefined') {
            throw new Error('error text');
        } else if (typeof this.alarmColection.find(clock => clock.id === id) !== 'undefined') {
            return console.error ('Звонок с таким id уже существует');
        }
        return this.alarmColection.push([id, time, callback]);
    }
    removeClock(id) {
        let input = this.alarmColection.length;
        this.alarmColection = this.alarmColection.filter(clock => clock.id !== id);
        let output = this.alarmColection.length;
        return output < input;
    }
    getCurrentFormattedTime() {
        let zero = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        let factTime = new Date();
        let hours = zero(factTime.getHours());
        let minutes = zero(factTime.getMinutes());
        return hours + ':' + minutes;
    }
    start() {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return clock.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmColection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        return;
    }
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }
    }
    printAlarms() {
        return this.alarmColection.forEach(clock => console.log(clock.id + ':' + clock.time));
    }
    clearAlarms() {
        this.stop();
        return this.alarmColection = [];
    }
}

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock('7:00', () => console.log('Доброе утро!'), 1);
phoneAlarm.addClock('7:01', () => console.log('Поднимайся!'), 2);
phoneAlarm.removeClock(2);
phoneAlarm.addClock('7:02', () => console.log('Я надеюсь ты проснулся!'), 3);
phoneAlarm.start();
phoneAlarm.stop();
phoneAlarm.printAlarms();