document.addEventListener("DOMContentLoaded", function () {
	const portal = document.getElementById("portal");
	const respectech = document.getElementById("respectech");
	const textContent = document.getElementById("text-content");

	// animate portal closing
	portal.animate([
		{ width: "100%" },
		{ width: "0%" }
	], {
		duration: 500, // 5 seconds
		fill: "forwards"
	});

	// animate respectech moving out
	respectech.animate([
		{ transform: "translate(-50%, -50%) scale(0)" },
		{ transform: "translate(-50%, -50%) scale(1)" }
	], {
		duration: 5000, // 5 seconds
		fill: "forwards"
	});

	// fade in text content sequentially
	const textElements = textContent.children;
	textElements.forEach((element, index) => {
		element.animate([
			{ opacity: 0 },
			{ opacity: 1 }
		], {
			duration: 500, // 0.5 seconds
			delay: index * 500, // staggered delay
			fill: "forwards"
		});
	});
});