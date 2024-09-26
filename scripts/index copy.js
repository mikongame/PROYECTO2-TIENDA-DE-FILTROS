// Lista de productos
const products = [
    { id: 1, brand: 'Nike Original', name: 'Air Max 1', price: 120, gender: 'Hombre', image: 'product_images/Air_Max_1.png' },
    { id: 2, brand: 'New Balance', name: 'New Balance 9060', price: 80, gender: 'Mujer', image: 'product_images/NB_9060.png' },
    { id: 3, brand: 'Nike Original', name: 'Nike Revolution', price: 90, gender: 'Hombre', image: 'product_images/Nike_Revolution.png' },
    { id: 4, brand: 'Adidas Original', name: 'Forum Buckle', price: 100, gender: 'Niños', image: 'product_images/Forum_Buckle.png' },
    { id: 5, brand: 'Adidas Original', name: 'Campus', price: 120, gender: 'Hombre', image: 'product_images/Campus.png' },
    { id: 6, brand: 'New Balance', name: 'NB 327', price: 120, gender: 'Niños', image: 'product_images/NB_327.png' },
    { id: 7, brand: 'Nike Original', name: 'Dunk Low', price: 100, gender: 'Hombre', image: 'product_images/Dunk_Low.png' },
    { id: 8, brand: 'Adidas Original', name: 'Gazelle', price: 90, gender: 'Niños', image: 'product_images/Gazelle.png' },
    { id: 9, brand: 'Nike Original', name: 'Air Max SC', price: 150, gender: 'Mujer', image: 'product_images/Air_Max_SC.png' },
    { id: 10, brand: 'Adidas Original', name: 'Handball Spezial', price: 120, gender: 'Hombre', image: 'product_images/Handball_Spezial.png' },
    { id: 11, brand: 'Nike Original', name: 'Air Force', price: 130, gender: 'Hombre', image: 'product_images/Air_Force.png' },
    { id: 12, brand: 'New Balance', name: 'NB 9060', price: 100, gender: 'Niños', image: 'product_images/NB_9060_2.png' },
    { id: 13, brand: 'New Balance', name: 'NB 480', price: 150, gender: 'Mujer', image: 'product_images/NB_480.png' },
    { id: 14, brand: 'Nike Original', name: 'Full Force Low', price: 70, gender: 'Niños', image: 'product_images/Full_Force_Low.png' },
    { id: 15, brand: 'Nike Original', name: 'Air Max SC', price: 160, gender: 'Niños', image: 'product_images/Air_Max_SC_2.png' },
    { id: 16, brand: 'Adidas Original', name: 'Handball Spezial', price: 140, gender: 'Mujer', image: 'product_images/Handball_Spezial_2.png' }
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
    updateFilterButtons(); // Actualizar los botones de filtros después de aplicar filtros
    frame13.style.top = '367px'; // Mover Frame 13 hacia abajo
    filterModal.classList.add('hidden'); // Ocultar modal
});

// Limpiar filtros
clearButton.addEventListener('click', () => {
    // Restablecer los filtros a los valores por defecto
    brandFilter.value = '';
    genderFilter.value = '';
    priceFilter.value = '';

    renderProducts(products); // Mostrar todos los productos
    updateFilterButtons(); // Actualizar los botones de filtros después de limpiar filtros
    frame13.style.top = '269px'; // Restaurar la posición de Frame 13
});

// Mostrar u ocultar los botones de filtros basados en los filtros seleccionados
function updateFilterButtons() {
    const selectedBrand = brandFilter.value;
    const selectedGender = genderFilter.value;
    const maxPrice = parseFloat(priceFilter.value);

    // Ocultar o mostrar botones de filtros específicos si hay filtros aplicados
    brandFilterButton.style.display = selectedBrand ? 'inline-block' : 'none';
    genderFilterButton.style.display = selectedGender ? 'inline-block' : 'none';
    priceFilterButton.style.display = maxPrice ? 'inline-block' : 'none';

    // Actualizar el texto de los botones con el filtro seleccionado
    brandFilterButton.querySelector('span').textContent = selectedBrand ? selectedBrand : 'Filtrar por Marca';
    genderFilterButton.querySelector('span').textContent = selectedGender ? selectedGender : 'Filtrar por Género';
    priceFilterButton.querySelector('span').textContent = maxPrice ? `Hasta ${maxPrice} €` : 'Filtrar por Precio Máximo';

    // Mostrar u ocultar clear-button si hay algún filtro aplicado
    const hasFiltersApplied = selectedBrand || selectedGender || maxPrice;
    clearButton.style.display = hasFiltersApplied ? 'inline-block' : 'none';

    // Mostrar u ocultar frame10 si hay algún filtro
    frame10.classList.toggle('hidden', !hasFiltersApplied);
}


// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // Mostrar todos los productos al inicio
    populateFilters(); // Rellenar filtros de marca, género y precio
    updateFilterButtons(); // Asegurarse de que los botones estén en el estado correcto al cargar
});