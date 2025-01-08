// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Function to handle button clicks
function handleButtonClick(event) {
    if (event.target.classList.contains('add-to-cart') || event.target.classList.contains('buy-now')) {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h2').textContent;
        const action = event.target.classList.contains('add-to-cart') ? 'added to cart' : 'purchased';
        showNotification(`${productName} has been ${action}!`);
    }
}

// Initialize product grid
function initProductGrid() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        productGrid.addEventListener('click', handleButtonClick);
    }
}

// Function to handle menu toggle
function handleMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
}

// Update the initialization function
document.addEventListener('DOMContentLoaded', () => {
    initProductGrid();
    handleMenuToggle();
});

