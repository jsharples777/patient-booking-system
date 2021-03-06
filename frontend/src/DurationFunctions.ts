export function addDurations(duration1: string, duration2: string): string {
    const durationRegexp = /^(\d+:)?[0-5]?\d:[0-5]\d$/;

    // check both are valid durations
    const duration1Valid: boolean = durationRegexp.test(duration1);
    const duration2Valid: boolean = durationRegexp.test(duration2);

    if (duration1Valid && duration2Valid) {

        // split them into seconds, minutes, and hours
        const duration1Components: string[] = duration1.split(':');
        const duration2Components: string[] = duration2.split(':');


        let carry = 0;
        // add the seconds (last elements in each)
        const duration1Seconds = parseInt(duration1Components[duration1Components.length - 1]);
        const duration2Seconds = parseInt(duration2Components[duration2Components.length - 1]);


        let sumSeconds = duration1Seconds + duration2Seconds;
        if (sumSeconds >= 60) {
            carry = 1;
            sumSeconds -= 60;
        }

        const duration1Minutes = parseInt(duration1Components[duration1Components.length - 2]);
        const duration2Minutes = parseInt(duration2Components[duration2Components.length - 2]);

        let sumMinutes = duration1Minutes + duration2Minutes + carry;
        if (sumMinutes >= 60) {
            carry = 1;
            sumMinutes -= 60;
        }

        // do we have hours?
        let duration1Hours = 0;
        if (duration1Components.length == 3) {
            duration1Hours = parseInt(duration1Components[0]);
        }
        let duration2Hours = 0;
        if (duration2Components.length == 3) {
            duration2Hours = parseInt(duration2Components[0]);
        }


        const sumHours = duration1Hours + duration2Hours + carry;

        return `${(sumHours > 0) ? sumHours + ':' : ''}${(sumMinutes < 10) ? '0' + sumMinutes : sumMinutes}:${(sumSeconds < 10) ? '0' + sumSeconds : sumSeconds}`
    } else {
        return '00:00';
    }
}

export function computeTimeStringFromStartTimeAndDurationInSeconds(appointmentTime: string, duration: number): string {
    const time = parseInt(appointmentTime); // HHMMSS as a time


    const startTimeHours = Math.floor(time / 10000);
    const startTimeMinutes = Math.floor((time - (startTimeHours * 10000)) / 100);
    const appointmentDuration = Math.floor(duration / 60);

    let endTimeHours = startTimeHours;
    let endTimeMinutes = startTimeMinutes + appointmentDuration;

    if (endTimeMinutes >= 60) {
        endTimeMinutes -= 60;
        endTimeHours += 1; // 24 hour time
    }

    let timeString = `${endTimeHours}`;
    if (endTimeHours < 10) timeString = '0' + timeString;
    if (endTimeMinutes < 10) timeString += '0';
    timeString += `${endTimeMinutes}`;
    return timeString;
}