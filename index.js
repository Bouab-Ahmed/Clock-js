setInterval(setClock, 1000);

const hourBar = document.querySelector(".clock__hour");
const minuteBar = document.querySelector(".clock__minute");
const secondBar = document.querySelector(".clock__second");

function setClock() {
	const currentDate = new Date();
	const seconds = currentDate.getSeconds() / 60;
	const minutes = (seconds + currentDate.getMinutes()) / 60;
	const hours = (minutes + currentDate.getHours()) / 12;
	setRotation(secondBar, seconds);
	setRotation(minuteBar, minutes);
	setRotation(hourBar, hours);
}

let setRotation = (element, rotationRatio) => {
	element.style.setProperty("--rotation", rotationRatio * 360);
};

setClock();
