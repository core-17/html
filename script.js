const taskMenuLink = document.getElementById('task-menu-link');
const taskMenu = document.getElementById('task-menu');


taskMenuLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    if (taskMenu.style.display === 'block') {
        taskMenu.style.display = 'none'; 
    } else {
        taskMenu.style.display = 'block'; 
    }
});


window.addEventListener('click', function(event) {
    if (event.target !== taskMenuLink) {
        taskMenu.style.display = 'none';
    }
});
