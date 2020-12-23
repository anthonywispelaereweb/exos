
document.querySelector('body').addEventListener("mousemove", eyeBall);
function eyeBall(){
	const eye = document.querySelectorAll('.eye');
	eye.forEach(function(eye) {
		let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2),
			y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2),
			radian = Math.atan2(event.pageX - x, event.pageY - y),
			rotation = ((radian * (180 / Math.PI) * -1) + 270).toFixed(0);

		eye.style.transform = "rotate("+rotation+"deg)";

	});
}
