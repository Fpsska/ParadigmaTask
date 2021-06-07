$(document).ready(function () {
	$('.slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}
	});
});

// /. slider gallary

// let map = document.querySelector("#map");
// let mapBtn = document.querySelector("#mapBtn");

// mapBtn.addEventListener("click", (event) => {
// 	event.preventDefault();
// 	map.classList.add("visible");
// })
// map.addEventListener("mouseout", () => {
// 	map.classList.remove("visible");
// })
// window.addEventListener("keydown", event => {
// 	if (event.code === "Escape") {
// 		map.classList.remove("visible")
// 	}
// })

// /. map

$('.nav__menu-mobile').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	responsive: [
		{
			breakpoint: 520,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
	]
});


