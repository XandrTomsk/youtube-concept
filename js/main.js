const swiper1 = new Swiper('.channel-container', {
	// Optional parameters
	loop: true,
	slidesPerView: 6,

	// Navigation arrows
	navigation: {
		nextEl: '.chanel-button-next',
		prevEl: '.chanel-button-prev',
	},
});

const swiper2 = new Swiper('.recommended-container', {
	// Optional parameters
	loop: true,
	slidesPerView: 3,

	// Navigation arrows
	navigation: {
		nextEl: '.recommended-button-next',
		prevEl: '.recommended-button-prev',
	},
});

const swiper3 = new Swiper('.recommended-for-you-channel', {
	// Optional parameters
	loop: true,
	slidesPerView: 6,

	// Navigation arrows
	navigation: {
		nextEl: '.recommended-for-you-channel-button-next',
		prevEl: '.recommended-for-you-channel-button-prev',
	},
});

