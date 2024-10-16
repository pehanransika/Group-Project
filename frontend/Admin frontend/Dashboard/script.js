// Setup the data for the Users pie chart
const userData = {
    labels: ['Citizens', 'Politicians', 'Political Parties'],
    datasets: [{
        label: 'User Distribution',
        data: [60, 25, 15], // Adjust data based on your actual distribution
        backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
        hoverOffset: 4
    }]
};

// Setup the data for the Political Parties pie chart
const partyData = {
    labels: ['Party A', 'Party B', 'Party C'],
    datasets: [{
        label: 'Political Party Types',
        data: [45, 35, 20], // Adjust data for party types
        backgroundColor: ['#2196F3', '#FF5722', '#9C27B0'],
        hoverOffset: 4
    }]
};

// Configuration for the Users pie chart
const userConfig = {
    type: 'pie',
    data: userData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom' // Position legend at the bottom
            }
        }
    }
};

// Configuration for the Political Parties pie chart
const partyConfig = {
    type: 'pie',
    data: partyData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom' // Position legend at the bottom
            }
        }
    }
};

// Render the pie charts
const userCtx = document.getElementById('userPieChart').getContext('2d');
const partyCtx = document.getElementById('partyPieChart').getContext('2d');
new Chart(userCtx, userConfig);
new Chart(partyCtx, partyConfig);

// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.createElement('button');
toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
toggleBtn.id = 'toggleSidebar';
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '70px';
toggleBtn.style.left = '10px';
toggleBtn.style.zIndex = '2';
toggleBtn.style.background = 'transparent';
toggleBtn.style.border = 'none';
toggleBtn.style.color = '#fff';
toggleBtn.style.cursor = 'pointer';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});
