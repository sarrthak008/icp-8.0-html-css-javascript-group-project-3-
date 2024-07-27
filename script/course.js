document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.querySelector('.cart');
    const cartItemsContainer = document.querySelector('.items');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartIcon.addEventListener('click', function () {
        cartItemsContainer.style.display = cartItemsContainer.style.display === 'none' ? 'block' : 'none';
    });

    window.addToCart = function (course) {
        cartItems.push(course);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${course.name} has been added to the cart`);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<span>No items in the cart</span>';
        } else {
            cartItemsContainer.innerHTML = '<ul>' + cartItems.map(item => `<li> You Have Buy the Course ${item.name} - Price ${item.price} /- </li>`).join('') + '</ul>';
        }
    }

    updateCartDisplay();
});

