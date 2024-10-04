document.addEventListener('DOMContentLoaded', function () {
	const buttons = document.querySelectorAll('.case__btn');
	const slides = document.querySelectorAll('.case-slider__item');

	// Функция для активации слайда и кнопки
	function activateSlide(index) {
		// Удаляем активные классы со всех кнопок
		buttons.forEach(button => button.classList.remove('case__btn-active'));
		// Скрываем все слайды
		slides.forEach(slide => (slide.style.display = 'none'));

		// Активируем выбранную кнопку
		buttons[index].classList.add('case__btn-active');
		// Показываем соответствующий слайд
		slides.forEach(slide => {
			if (slide.getAttribute('data-slide') === String(index)) {
				slide.style.display = 'block';
			}
		});
	}

	// Добавляем обработчики кликов для всех кнопок
	buttons.forEach((button, index) => {
		button.addEventListener('click', function () {
			activateSlide(index);
		});
	});

	// Инициализация по умолчанию (отображение IT-услуг)
	activateSlide(1); // IT-услуги активны по умолчанию
});
