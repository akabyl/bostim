const swiper = document.querySelector('.mySwiper');
const caseSwiper = document.querySelector('.case-slider');
const quoteSwiper = document.querySelector('.quote-swiper');
const energoSwiper = document.querySelector('.company-swiper');

if (swiper) {
	new Swiper(swiper, {
		// loop: true, // Зацикливание слайдера
		pagination: {
			el: '.swiper-pagination',
			clickable: true, // Позволяет кликать по точкам пагинации
		},
		// autoplay: {
		// 	delay: 3000, // Автопрокрутка каждые 3 секунд
		// 	disableOnInteraction: false, // Остановка автопрокрутки при взаимодействии
		// },
		effect: 'fade', // Плавная смена фона без смещения слайдов
		fadeEffect: {
			crossFade: true, // Плавное исчезновение старого слайда
		},
	});
}

if (caseSwiper) {
	new Swiper(caseSwiper, {
		slidesPerView: 1,
		centeredSlides: false,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			640: {
				slidesPerView: 2,
				centeredSlides: false,
				loop: true,
			},
			// 768: {
			// 	slidesPerView: 2,
			// },
			// 1024: {
			// 	slidesPerView: 3,
			// 	centeredSlides: false,
			// },
		},

		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
	});
}
if (quoteSwiper) {
	new Swiper(quoteSwiper, {
		slidesPerView: 1,
		centeredSlides: false,
		navigation: {
			nextEl: '.btn-next',
			prevEl: '.btn-prev',
		},
		pagination: {
			el: '.swiper-pagination-quote',
			type: 'fraction',
		},
		// autoHeight: true,
		// on: {
		// 	slideChange: function () {
		// 		swiper.updateAutoHeight(); // Обновляем высоту при смене слайда
		// 	},
		// },
	});
}

if (energoSwiper) {
	new Swiper(energoSwiper, {
		pagination: {
			el: '.energo-pagination',
			clickable: true, // Позволяет кликать по точкам пагинации
		},
	});
}
