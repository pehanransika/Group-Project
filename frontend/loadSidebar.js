document.addEventListener("DOMContentLoaded", function () {
    // Load the sidebar from a fixed path
    fetch('/frontend/sidebar.html')  // Use root-relative path
        .then(response => {
            if (!response.ok) throw new Error('Sidebar not found');
            return response.text();
        })
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;

            // Add event listeners to each radio button for navigation
            const navRadios = document.querySelectorAll('.sidebar input[type="radio"][name="nav"]');
            navRadios.forEach(radio => {
                radio.addEventListener('change', function () {
                    if (this.checked) {
                        window.location.href = this.value;
                    }
                });
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
