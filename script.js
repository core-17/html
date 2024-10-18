// Отримуємо посилання на "Завдання" і саме меню
const taskMenuLink = document.getElementById('task-menu-link');
const taskMenu = document.getElementById('task-menu');

// Додаємо обробник подій для натискання на "Завдання"
taskMenuLink.addEventListener('click', function(event) {
    event.preventDefault(); // Забороняємо перезавантаження сторінки при кліку
    if (taskMenu.style.display === 'block') {
        taskMenu.style.display = 'none'; // Якщо меню відкрите, закриваємо його
    } else {
        taskMenu.style.display = 'block'; // Якщо меню закрите, відкриваємо його
    }
});

// Закриваємо меню, якщо натиснули в будь-якому іншому місці
window.addEventListener('click', function(event) {
    if (event.target !== taskMenuLink) {
        taskMenu.style.display = 'none';
    }
});
