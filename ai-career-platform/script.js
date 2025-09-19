document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('load-profile-btn');
    const profileData = document.getElementById('profile-data');

    loadButton.addEventListener('click', function() {
        // Пока просто прячем кнопку и показываем "данные"
        loadButton.style.display = 'none';
        profileData.style.display = 'block';

        // Здесь потом будет реальный запрос к API
        console.log('Кнопка нажата! Можно делать запрос к бэкенду.');
    });
});