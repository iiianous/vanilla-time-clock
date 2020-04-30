const timeClock = (function() {
    const qs = element => document.querySelector(`[data-js-hand="${element}"]`);
    const secondElement = qs('second');
    const minuteElement = qs('minute');
    const hourElement = qs('hour');

    const setDate = () => new Date();

    function setSeconds() {
        const time = setDate();
        const second = time.getSeconds();
        const secondsRotate = ((second / 60) * 360) + 90;
        secondElement.style.transform = `rotate(${secondsRotate}deg)`;
    }

    function setMinutes() {
        const time = setDate();
        const minutes = time.getMinutes();
        const minutesRotate = ((minutes / 60) * 360) + 90;
        minuteElement.style.transform = `rotate(${minutesRotate}deg)`;
    }

    function setHour() {
        const time = setDate();
        const hour = time.getHours();
        const hoursRotate = ((hour / 12) * 360) + 90;
        hourElement.style.transform = `rotate(${hoursRotate}deg)`;
    }

    setInterval(() => {
        setSeconds();
        setMinutes();
        setHour();
    }, 1000);
})();