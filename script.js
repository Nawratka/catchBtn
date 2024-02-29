const btn = document.querySelector('.btn');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
let btnLeftX = btn.offsetLeft;
let btnTopY = btn.offsetTop;
let btnHeight = btn.offsetHeight;
let btnWidth = btn.offsetWidth;

const newPosition = function () {
	const minX = windowWidth - (windowWidth - btnLeftX);
	const maxX = windowWidth - btnWidth - btnLeftX;
	const minY = windowHeight - (windowHeight - btnTopY);
	const maxY = windowHeight - btnHeight - btnTopY;

	const randomWidth = getRandomInt(-minX, maxX);
	const randomHeight = getRandomInt(-minY, maxY);

	function getRandomInt(min, max) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
	}

	btn.style.transform = `translate(${randomWidth}px, ${randomHeight}px)`;
};

btn.addEventListener('mouseover', newPosition);

btn.addEventListener('click', () => {
	console.log('✨✨✨ SUCCESS! ✨✨✨');
	setTimeout(newPosition(), 700)
});