document.addEventListener('DOMContentLoaded', function() {
    const managersBtn = document.getElementById('managers-btn');
    const regionsBtn = document.getElementById('regions-btn');
    const newSectionBtn = document.getElementById('new-section-btn'); // Новая кнопка
    const managersPage = document.getElementById('managers');
    const regionsPage = document.getElementById('regions');
    const newSectionPage = document.createElement('div'); // Новая страница

    newSectionPage.id = 'new-section';
    newSectionPage.classList.add('page-left');
    newSectionPage.innerHTML = '<h1>Содержание нового раздела</h1>';
    document.querySelector('.content-left').appendChild(newSectionPage);

    const buttons = document.querySelectorAll('.sidebar-left button');
    const pages = document.querySelectorAll('.page-left');

    function resetActiveStates() {
        buttons.forEach(button => button.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
    }

    function setActivePage(pageId, buttonId) {
        resetActiveStates();
        document.getElementById(buttonId).classList.add('active');
        document.getElementById(pageId).classList.add('active');
        localStorage.setItem('activePage', pageId);
        localStorage.setItem('activeButton', buttonId);
    }

    managersBtn.addEventListener('click', function() {
        setActivePage('managers', 'managers-btn');
    });

    regionsBtn.addEventListener('click', function() {
        setActivePage('regions', 'regions-btn');
    });

    newSectionBtn.addEventListener('click', function() { // Логика для новой кнопки
        setActivePage('new-section', 'new-section-btn');
    });

    const activePage = localStorage.getItem('activePage') || 'managers';
    const activeButton = localStorage.getItem('activeButton') || 'managers-btn';
    setActivePage(activePage, activeButton);
});












document.addEventListener('DOMContentLoaded', function() {
    const addProductBtn = document.getElementById('addManagerBtn');
    const addProductPage = document.getElementById('add-product');
    const managersPage = document.getElementById('managers');

    addProductBtn.addEventListener('click', function() {
        managersPage.classList.remove('active');
        addProductPage.classList.add('active');
    });

    function cancelAddProduct() {
        addProductPage.classList.remove('active');
        managersPage.classList.add('active');
    }
});


document.getElementById('description').addEventListener('input', function () {
    const maxLength = 2000;
    const currentLength = this.value.length;
    document.querySelector('.char-counter').textContent = `${currentLength} / ${maxLength}`;
});






document.addEventListener('DOMContentLoaded', function() {
    const filterBtn = document.querySelector('.right-filter-btn');
    const filterSidebar = document.getElementById('filter-sidebar');
    const closeFilterBtn = document.getElementById('close-filter-btn');

    filterBtn.addEventListener('click', function() {
        filterSidebar.classList.add('open');
    });

    closeFilterBtn.addEventListener('click', function() {
        filterSidebar.classList.remove('open');
    });

    // Закрытие фильтра при клике вне окна
    document.addEventListener('click', function(event) {
        if (!filterSidebar.contains(event.target) && !filterBtn.contains(event.target)) {
            filterSidebar.classList.remove('open');
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const discountBtn = document.getElementById('discount-btn'); // Используем ID кнопки "Скидка"
    const discountModal = document.getElementById('discount-modal');
    const closeBtn = discountModal.querySelector('.button-cancel');

    // Убедимся, что окно скрыто при загрузке страницы
    discountModal.style.display = 'none';

    // Обработчик клика для открытия модального окна
    discountBtn.addEventListener('click', function() {
        discountModal.style.display = 'flex';
    });

    // Обработчик клика для закрытия модального окна
    closeBtn.addEventListener('click', function() {
        discountModal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === discountModal) {
            discountModal.style.display = 'none';
        }
    });
});

function closeDiscountModal() {
    document.getElementById('discount-modal').style.display = 'none';
}





document.addEventListener('DOMContentLoaded', function() {
    const addCategoryBtn = document.querySelector('.markAll-btn:nth-child(6)'); // Кнопка "Добавить в категорию"
    const categoryModal = document.getElementById('category-modal');
    const closeCategoryBtn = categoryModal.querySelector('.close-category-btn');

    // Показать модальное окно
    addCategoryBtn.addEventListener('click', function() {
        categoryModal.style.display = 'flex';
    });

    // Закрыть модальное окно при нажатии на крестик
    closeCategoryBtn.addEventListener('click', function() {
        categoryModal.style.display = 'none';
    });

    // Закрыть модальное окно при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === categoryModal) {
            categoryModal.style.display = 'none';
        }
    });
});














document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page-section'); // Изменен класс на общий для всех страниц
    const buttons = document.querySelectorAll('.sidebar-left button');

    function resetActiveStates() {
        buttons.forEach(button => button.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
    }

    function setActivePage(pageId, buttonId) {
        resetActiveStates();
        document.getElementById(buttonId).classList.add('active');
        document.getElementById(pageId).classList.add('active');
    }

    document.getElementById('managers-btn').addEventListener('click', function() {
        setActivePage('managers', 'managers-btn');
    });

    document.getElementById('regions-btn').addEventListener('click', function() {
        setActivePage('regions', 'regions-btn');
    });

    document.getElementById('new-section-btn').addEventListener('click', function() {
        setActivePage('categories-page', 'new-section-btn'); // Изменен id на нужный для страницы "Категории"
    });

    // Активная страница по умолчанию
    const activePage = localStorage.getItem('activePage') || 'managers';
    const activeButton = localStorage.getItem('activeButton') || 'managers-btn';
    setActivePage(activePage, activeButton);
});






document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page-section'); // Находит все страницы по классу
    const buttons = document.querySelectorAll('.sidebar-left button'); // Находит все кнопки на боковой панели

    function resetActiveStates() {
        buttons.forEach(button => button.classList.remove('active')); // Сбрасывает активное состояние кнопок
        pages.forEach(page => page.classList.remove('active')); // Скрывает все страницы
    }

    function setActivePage(pageId, buttonId) {
        resetActiveStates();
        document.getElementById(buttonId).classList.add('active'); // Делает кнопку активной
        document.getElementById(pageId).classList.add('active'); // Отображает нужную страницу
        localStorage.setItem('activePage', pageId);
        localStorage.setItem('activeButton', buttonId);
    }

    document.getElementById('managers-btn').addEventListener('click', function() {
        setActivePage('managers', 'managers-btn');
    });

    document.getElementById('regions-btn').addEventListener('click', function() {
        setActivePage('regions', 'regions-btn');
    });

    document.getElementById('new-section-btn').addEventListener('click', function() {
        setActivePage('categories-page', 'new-section-btn');
    });

    // Активная страница по умолчанию
    const activePage = localStorage.getItem('activePage') || 'managers';
    const activeButton = localStorage.getItem('activeButton') || 'managers-btn';
    setActivePage(activePage, activeButton);
});

