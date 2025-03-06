const $burger = document.getElementById("burger");
const $nav = document.getElementById("navbar");
const $header = document.getElementById("header");
const $overlay = document.getElementById("overlay");

$burger.addEventListener("click", () => {
	$burger.classList.toggle("open");
	$nav.classList.toggle("shown");
	// $header.classList.toggle("overflow-hidden");
	document.body.classList.toggle("overflow-hidden");
	$overlay.classList.toggle("d-none");
});

const $toggle = document.getElementById("toggle");
const $dropdown = document.getElementById("dropdown");

$toggle.addEventListener("click", (e) => {
	e.preventDefault();
	$dropdown.classList.toggle("shown");
});

const $closeMenu = document.querySelectorAll(".close-menu");
$closeMenu.forEach((el) => {
	el.addEventListener("click", () => {
		$burger.classList.remove("open");
		$nav.classList.remove("shown");
		document.body.classList.remove("overflow-hidden");
		$overlay.classList.add("d-none");
	});
});
