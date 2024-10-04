(() => {
	const body = document.body;
	const openNav = document.querySelector('.open-menu');
	const navMenu = document.querySelector('.nav');
	const background = document.querySelector('.background');
	const mediaSize = 992;

	openNav.addEventListener('click', toggleMenu);
	background.addEventListener('click', toggleMenu);

	function toggleMenu() {
		navMenu.classList.toggle('open');
		openNav.classList.toggle('is-active');
		background.classList.toggle('active');
		// Если меню открыто, блокируем прокрутку
		if (navMenu.classList.contains('open')) {
			body.classList.add('no-scroll');
		} else {
			body.classList.remove('no-scroll');
		}
	}

	navMenu.addEventListener('click', event => {
		if (event.target.hasAttribute('data-toggle') && window.innerWidth < mediaSize) {
			event.preventDefault();
			const dropdownMenuBranch = event.target.parentElement;
			const dropdownMenu = dropdownMenuBranch.querySelector('.dropdown-menu');

			if (!dropdownMenu) {
				return; // Прекратить выполнение, если подменю нет
			}

			if (dropdownMenuBranch.classList.contains('active')) {
				collapseDropdowMenu();
			} else {
				if (navMenu.querySelector('.dropdown-menu-branch.active')) {
					collapseDropdowMenu();
				}

				dropdownMenuBranch.classList.add('active');
				const dropdownMenu = dropdownMenuBranch.querySelector('.dropdown-menu');
				dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
			}
		}
	});
	function collapseDropdowMenu() {
		const activeDropdown = navMenu.querySelector('.dropdown-menu-branch.active .dropdown-menu');
		const activeBranch = navMenu.querySelector('.dropdown-menu-branch.active');

		if (activeDropdown && activeBranch) {
			activeDropdown.removeAttribute('style');
			activeBranch.classList.remove('active');
		} else {
			console.log('Нету саб меню');
		}
	}
})();
