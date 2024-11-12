document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-btn button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'nav-active' class from all buttons
            document.querySelectorAll('.nav-btn button').forEach(btn => {
                btn.classList.remove('nav-active');
                btn.classList.add('nav-link');
            });

            // Add 'nav-active' class to the clicked button
            button.classList.add('nav-active');
            button.classList.remove('nav-link');
        });
    });
});