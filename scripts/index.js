// Lista de productos
const products = [
    { id: 1, brand: 'Nike Original', name: 'Air Max 1', price: 120, gender: 'Hombre', image: 'product_images/Air_Max_1.png' },
    { id: 2, brand: 'New Balance', name: 'New Balance 9060', price: 80, gender: 'Mujer', image: 'product_images/NB_9060.png' },
    { id: 3, brand: 'Nike Original', name: 'Nike Revolution', price: 90, gender: 'Hombre', image: 'product_images/Nike_Revolution.png' },
    { id: 4, brand: 'Adidas Original', name: 'Forum Buckle', price: 100, gender: 'Niños', image: 'product_images/Forum_Buckle.png' }
];

// DOM Elements
const frame10 = document.getElementById('frame10');
const frame13 = document.getElementById('frame13');
const filterModal = document.getElementById('filterModal');
const brandFilter = document.getElementById('brandFilter');
const genderFilter = document.getElementById('genderFilter');
const priceFilter = document.getElementById('priceFilter');
const arrowIcon = document.getElementById('arrowIcon');
const filterIcon = document.getElementById('filterIcon');
const clearButton = document.querySelector('.clear-button');
const brandFilterButton = document.querySelector('.brandfilter-button');
const genderFilterButton = document.querySelector('.genderfilter-button');
const priceFilterButton = document.querySelector('.maxprice-button');

// Inicializar opciones de filtros (marcas, géneros, precios)
function populateFilters() {
    const brands = [...new Set(products.map(product => product.brand))];
    const genders = [...new Set(products.map(product => product.gender))];
    const prices = [...new Set(products.map(product => product.price))];

    // Rellenar filtro de marcas
    brandFilter.innerHTML = brands.map(brand => `<option value="${brand}">${brand}</option>`).join('');

    // Rellenar filtro de géneros
    genderFilter.innerHTML = genders.map(gender => `<option value="${gender}">${gender}</option>`).join('');

    // Rellenar precios únicos en priceFilter no es necesario (input de usuario)
}

// Mostrar productos
function renderProducts(filteredProducts) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="image-container">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="model-container">
                        <p class="model">${product.brand}</p>
                    </div>
                    <div class="price-container">
                        <span class="name">${product.name}</span>
                        <span class="price">${product.price} €</span>
                    </div>
                    <div class="buy-button">Comprar</div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Lógica de filtrado
function applyFilters() {
    const selectedBrand = brandFilter.value;
    const selectedGender = genderFilter.value;
    const maxPrice = parseFloat(priceFilter.value);

    const filteredProducts = products.filter(product => {
        return (!selectedBrand || product.brand === selectedBrand) &&
               (!selectedGender || product.gender === selectedGender) &&
               (!maxPrice || product.price <= maxPrice);
    });

    renderProducts(filteredProducts);
}

// Eventos de filtro
brandFilterButton.addEventListener('click', () => {
    filterModal.classList.toggle('hidden');
});
genderFilterButton.addEventListener('click', () => {
    filterModal.classList.toggle('hidden');
});
priceFilterButton.addEventListener('click', () => {
    filterModal.classList.toggle('hidden');
});

// Aplicar filtros
filterModal.addEventListener('submit', (e) => {
    e.preventDefault();
    applyFilters();
    frame10.classList.remove('hidden'); // Mostrar Frame 10 al aplicar filtros
    frame13.style.top = '367px'; // Mover Frame 13 hacia abajo
    filterModal.classList.add('hidden'); // Ocultar modal
});

// Limpiar filtros
clearButton.addEventListener('click', () => {
    renderProducts(products); // Mostrar todos los productos
    frame10.classList.add('hidden'); // Ocultar Frame 10 al limpiar filtros
    frame13.style.top = '269px'; // Restaurar la posición de Frame 13
    priceFilter.value = ''; // Limpiar filtros de precio
});

// Mostrar Frame 10 y alternar flecha entre arriba/abajo
arrowIcon.addEventListener('click', () => {
    const isFrame10Visible = !frame10.classList.contains('hidden');
    frame10.classList.toggle('hidden');
    frame13.style.top = isFrame10Visible ? '269px' : '367px'; // Ajustar posición del frame 13
    arrowIcon.src = isFrame10Visible ? 'icons/icon_arrow_downward.png' : 'icons/icon_arrow_upward.png'; // Cambiar ícono
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // Mostrar todos los productos al inicio
    populateFilters(); // Rellenar filtros de marca, género y precio
});
