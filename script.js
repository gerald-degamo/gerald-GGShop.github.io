// Sample product data
const products = [
    { id: 1, name: "Classic Acoustic Guitar", price: 299.99, rating: 4.5, image: "/GGShop/images/image1.jpeg" },
    { id: 2, name: "Electric Guitar Pro", price: 599.99, rating: 4.8, image: "images/images2.jpeg" },
    { id: 3, name: "Bass Guitar Deluxe", price: 449.99, rating: 4.6, image: "images/image3.jpeg" },
    { id: 4, name: "Acoustic-Electric Guitar", price: 399.99, rating: 4.7, image: "images/image4.jpeg" },
    { id: 5, name: "Classical Guitar", price: 249.99, rating: 4.4, image: "images/images5.jpeg" },
    { id: 6, name: "12-String Guitar", price: 499.99, rating: 4.9, image: "images/image7.jpg" },
    { id: 7, name: "Travel Guitar", price: 199.99, rating: 4.3, image: "images/images6.jpeg" },
    { id: 8, name: "Resonator Guitar", price: 699.99, rating: 4.7, image: "images/images8.jpeg" },
];

// Function to generate star rating
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '★';
        } else if (i === fullStars && halfStar) {
            stars += '½';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <div class="rating">${generateStarRating(product.rating)}</div>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        <button class="buy-now" data-id="${product.id}">Buy Now</button>
    `;
    return card;
}

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
        const productId = event.target.getAttribute('data-id');
        const product = products.find(p => p.id === parseInt(productId));
        const action = event.target.classList.contains('add-to-cart') ? 'added to cart' : 'purchased';
        showNotification(`${product.name} has been ${action}!`);
    }
}

// Initialize product grid
function initProductGrid() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        products.forEach(product => {
            const card = createProductCard(product);
            productGrid.appendChild(card);
        });
        productGrid.addEventListener('click', handleButtonClick);
    }
}

// Function to toggle the mobile menu
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.menu-toggle');
    nav.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', nav.classList.contains('show'));
}

// Initialize the mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
        menuToggle.setAttribute('aria-expanded', 'false');
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
    initMobileMenu();
    handleMenuToggle();
});

