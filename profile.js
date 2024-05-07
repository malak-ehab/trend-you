document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;


    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    setDarkMode(darkModeEnabled);

    darkModeToggle.addEventListener('click', () => {
        const darkModeCurrentlyEnabled = body.classList.contains('dark-mode');
        setDarkMode(!darkModeCurrentlyEnabled);
    });

    function setDarkMode(enableDarkMode) {
        body.classList.toggle('dark-mode', enableDarkMode);
        localStorage.setItem('darkModeEnabled', enableDarkMode);
    }
});
