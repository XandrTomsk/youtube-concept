const myChannelSlider = new Swiper('.channel-container', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1900: {
			slidesPerView: 6
		},
		1600: {
			slidesPerView: 5
		},
		1300: {
			slidesPerView: 4
		},
		1100: {
			slidesPerView: 3
		},
		800: {
			slidesPerView: 2
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.chanel-button-next',
		prevEl: '.chanel-button-prev',
	},
});

const recommendedSlider = new Swiper('.recommended-channel', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1600: {
			slidesPerView: 3
		},
		1100: {
			slidesPerView: 2
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.recommended-button-next',
		prevEl: '.recommended-button-prev',
	},
});

const recommendeChanneldSlider = new Swiper('.recommended-channel-slider', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		1900: {
			slidesPerView: 6
		},
		1600: {
			slidesPerView: 5
		},
		1300: {
			slidesPerView: 4
		},
		1100: {
			slidesPerView: 3
		},
		800: {
			slidesPerView: 2
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.recommended-channel-slider-button-next',
		prevEl: '.recommended-channel-slider-button-prev',
	},
});


const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener ('click', () => {
	mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
	myChannelSlider.destroy();
	recommendedSlider.destroy();
	recommendeChanneldSlider.destroy();
}