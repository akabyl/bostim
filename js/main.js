if (document.querySelectorAll('.questions__item')) {
	document.querySelectorAll('.questions__item').forEach(item => {
		const head = item.querySelector('.questions__head');
		head.addEventListener('click', () => {
			// Переключаем класс "active" для текущего элемента
			item.classList.toggle('active');

			// Скрываем контент всех других элементов, если нужно, чтобы только один блок был открыт
			document.querySelectorAll('.questions__item').forEach(i => {
				if (i !== item) {
					i.classList.remove('active');
				}
			});
		});
	});
}
