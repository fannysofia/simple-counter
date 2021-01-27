const inc = document.getElementById("increment");
const count = document.getElementById("counter");

let counter = 0;

document.getElementById("decrement").addEventListener("click", function() {
	counter=counter-1;
		if (counter < -5) {
		counter = 5;
	}
	document.getElementById("counter").innerHTML = counter;
});

document.getElementById("increment").addEventListener("click", function() {
	counter=counter+1;
	if (counter > 5) {
		counter = -5;
	}
  document.getElementById("counter").innerHTML = counter;
});

document.getElementById("reset").addEventListener("click", function() {
	  counter=0;
  document.getElementById("counter").innerHTML = 0;
});
