// Show all categories by default when the page loads
window.onload = function () {
    showAllCategories();
};

// Function to show all categories by default
function showAllCategories() {
    document.querySelectorAll('.category').forEach(category => {
        category.classList.remove('hidden');
        category.style.display = 'block'; // Ensure it's displayed
        category.querySelectorAll('.product-card').forEach(item => {
            item.style.display = 'block'; // Make sure all items are visible
        });
    });
}

// Function to display selected category only when a menu item is clicked
function showCategory(categoryId) {
    // Hide all categories
    document.querySelectorAll('.category').forEach(cat => {
        cat.classList.add('hidden');
        cat.style.display = 'none'; // Hide the category
    });

    // Show the selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.classList.remove('hidden');
        selectedCategory.style.display = 'block'; // Ensure the selected category is shown
    }
}

// Function to search items within all categories
function searchItems() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        let categoryVisible = false;

        category.querySelectorAll('.product-card').forEach(item => {
            const itemName = item.querySelector('h3').innerText.toLowerCase();
            if (itemName.includes(query)) {
                item.style.display = 'block'; // Show the item if it matches the query
                categoryVisible = true; // Set category visible if at least one item matches
            } else {
                item.style.display = 'none'; // Hide the item if it doesn't match
            }
        });

        // Show the category if it has visible items, otherwise hide it
        category.style.display = categoryVisible ? 'block' : 'none';
    });
}

// Function to toggle the sidebar visibility for mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

// Function to handle the close button for the sidebar
document.getElementById('closeSidebar').onclick = function() {
    document.querySelector('.sidebar').style.display = 'none';
};

// Event listener for opening sidebar on mobile view (if you have a button)
document.getElementById('openSidebar').onclick = function() {
    document.querySelector('.sidebar').style.display = 'block';
};
