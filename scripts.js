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
    const discountBtn = document.querySelector('.discount-btn'); // Кнопка "Скидка"
    const discountModal = document.getElementById('discount-modal');
    const closeBtn = discountModal.querySelector('.button-cancel');

    // Убедимся, что окно скрыто при загрузке страницы
    // discountModal.style.display = 'none';

    discountBtn.addEventListener('click', function() {
        discountModal.style.display = 'flex';
    });

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

