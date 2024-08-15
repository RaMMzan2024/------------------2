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
