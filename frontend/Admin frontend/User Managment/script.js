const users = [
    { name: 'John Doe', role: 'Citizen', status: 'Active', verification: 'Approved' },
    { name: 'Jane Smith', role: 'Politician', status: 'Inactive', verification: 'Pending' },
    { name: 'Party A', role: 'Political Party', status: 'Active', verification: 'Approved' },
    { name: 'David King', role: 'Citizen', status: 'Active', verification: 'Rejected' }
];

// Function to render the table
function renderTable(usersList) {
    const userTable = document.getElementById('user-table');
    userTable.innerHTML = ''; // Clear previous rows

    usersList.forEach(user => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>${user.status}</td>
            <td>${user.verification}</td>
            <td class="actions">
                <button onclick="approveUser('${user.name}')">Approve</button>
                <button onclick="suspendUser('${user.name}')">Suspend</button>
                <button onclick="banUser('${user.name}')">Ban</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

// User actions
function approveUser(name) {
    alert(`User ${name} approved.`);
}

function suspendUser(name) {
    alert(`User ${name} suspended.`);
}

function banUser(name) {
    alert(`User ${name} banned.`);
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchValue));
    renderTable(filteredUsers);
});

// Filter functionality
document.getElementById('filter-role').addEventListener('change', applyFilters);
document.getElementById('filter-status').addEventListener('change', applyFilters);
document.getElementById('filter-verification').addEventListener('change', applyFilters);

function applyFilters() {
    const roleFilter = document.getElementById('filter-role').value;
    const statusFilter = document.getElementById('filter-status').value;
    const verificationFilter = document.getElementById('filter-verification').value;

    const filteredUsers = users.filter(user => {
        return (roleFilter === "" || user.role === roleFilter) &&
               (statusFilter === "" || user.status === statusFilter) &&
               (verificationFilter === "" || user.verification === verificationFilter);
    });

    renderTable(filteredUsers);
}

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



// Render the initial table
window.onload = function() {
    renderTable(users);
}
