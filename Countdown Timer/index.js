function startCountdown(targetDateString) {
    let targetDate = new Date(targetDateString).getTime(); // ==> Gets the original time function!
    let intervalId = setInterval(() => {
        let currentTime = new Date().getTime();
        let timeDifference = targetDate - currentTime; // ==> Calculates the time difference between the initial time and the remaining time
        if (timeDifference <= 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!"); // ==> Checks if the timer has ended or the seconds have reached to zero
        }
        else {
            let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000); // ==> Here 1000 represents 1000 miliseconds which means the after every 1 second the function inside setInterval executes again and again
}
let targetDate = new Date();
targetDate.setSeconds(targetDate.getSeconds() + 60); // Set target date to 1 minute from now
startCountdown(targetDate.toISOString());
export {};
