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
const filterForm = document.getElementById('filterForm');
const modalContent = document.querySelector('.modal-content');
const brandFilter = document.getElementById('brandFilter');
const genderFilter = document.getElementById('genderFilter');
const priceFilter = document.getElementById('priceFilter');
const arrowIcon = document.getElementById('arrowIcon');
const filterIcon = document.getElementById('filterIcon');
const clearButton = document.querySelector('.clear-button');
const brandFilterButton = document.querySelector('.brandfilter-button');
const genderFilterButton = document.querySelector('.genderfilter-button');
const priceFilterButton = document.querySelector('.maxprice-button');
const catalogoBtn = document.getElementById('catalogo'); // Botón de catálogo

// Otros elementos de filtro rápido
const hombreBtn = document.getElementById('hombre');
const mujerBtn = document.getElementById('mujer');
const niñosBtn = document.getElementById('niños');
const ofertasBtn = document.getElementById('ofertas');

// Inicializar opciones de filtros (marcas, géneros)
function populateFilters() {
    const brands = [...new Set(products.map(product => product.brand))];
    const genders = [...new Set(products.map(product => product.gender))];

    // Añadir la opción genérica "Todos"
    brandFilter.innerHTML = '<option value="">Todos</option>' + brands.map(brand => `<option value="${brand}">${brand}</option>`).join('');
    genderFilter.innerHTML = '<option value="">Todos</option>' + genders.map(gender => `<option value="${gender}">${gender}</option>`).join('');
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
    updateFilterButtons(); // Actualizar botones de filtro tras aplicar filtros
}

// Función para actualizar los botones de filtro y cambiar el ícono de filtro
function updateFilterButtons() {
    const selectedBrand = brandFilter.value;
    const selectedGender = genderFilter.value;
    const maxPrice = parseFloat(priceFilter.value);

    // Actualización de botones visibles
    brandFilterButton.style.display = selectedBrand ? 'inline-block' : 'none';
    genderFilterButton.style.display = selectedGender ? 'inline-block' : 'none';
    priceFilterButton.style.display = maxPrice ? 'inline-block' : 'none';

    // Actualizar texto en los botones de filtro
    brandFilterButton.querySelector('span').textContent = selectedBrand || 'Filtrar por Marca';
    genderFilterButton.querySelector('span').textContent = selectedGender || 'Filtrar por Género';
    priceFilterButton.querySelector('span').textContent = maxPrice ? `Hasta ${maxPrice} €` : 'Filtrar por Precio Máximo';

    // Mostrar botón de limpiar si algún filtro está aplicado
    const hasFiltersApplied = selectedBrand || selectedGender || maxPrice;
    clearButton.style.display = hasFiltersApplied ? 'inline-block' : 'none';

    // Cambiar ícono de filtro basado en filtros activos
    filterIcon.src = hasFiltersApplied ? 'icons/yellow_icon_filter.png' : 'icons/icon_filter.png';
}

// Función para alternar la visibilidad del modal
function toggleModal() {
    // Mostrar frame10 si está oculto
    if (frame10.classList.contains('hidden')) {
        toggleFrame10(); // Mostrar frame10 antes de mostrar el modal
    }
    filterModal.classList.toggle('hidden'); // Mostrar/ocultar el modal
}

// Función para alternar la visibilidad de frame10 y cambiar la flecha
function toggleFrame10() {
    const isVisible = !frame10.classList.contains('hidden');
    frame10.classList.toggle('hidden');
    arrowIcon.src = isVisible ? 'icons/icon_arrow_downward.png' : 'icons/icon_arrow_upward.png';
    frame13.style.top = isVisible ? '269px' : '367px';
}

// Mostrar el modal y el formulario cuando se haga clic en los botones de filtro en frame10
[brandFilterButton, genderFilterButton, priceFilterButton].forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevenir la propagación del evento

        // Asegurarse de que el modal y el formulario de filtro estén visibles
        filterModal.classList.remove('hidden');
        filterForm.classList.remove('hidden');

        // Mostrar frame10 si está oculto
        if (frame10.classList.contains('hidden')) {
            frame10.classList.remove('hidden');
            arrowIcon.src = 'icons/icon_arrow_upward.png';
            frame13.style.top = '367px';
        }
    });
});


// Alternar solo frame10 al hacer clic en arrowIcon (sin interferir con el modal)
arrowIcon.addEventListener('click', () => {
    const isVisible = !frame10.classList.contains('hidden');
    frame10.classList.toggle('hidden');
    arrowIcon.src = isVisible ? 'icons/icon_arrow_downward.png' : 'icons/icon_arrow_upward.png';
    frame13.style.top = isVisible ? '269px' : '367px';
});

// Cerrar modal si se hace clic fuera de su contenido, excepto en los botones de filtro
window.addEventListener('click', (e) => {
    if (!filterModal.classList.contains('hidden') &&
        !modalContent.contains(e.target) &&
        e.target !== filterIcon &&
        ![brandFilterButton, genderFilterButton, priceFilterButton].includes(e.target)
    ) {
        filterModal.classList.add('hidden'); // Ocultar modal si se hace clic fuera
    }
});

// Mostrar el modal al hacer clic en filterIcon
filterIcon.addEventListener('click', () => {
    filterModal.classList.toggle('hidden'); // Mostrar/ocultar el modal al hacer clic en el ícono de filtro
});

// Limpiar filtros antes de aplicar uno nuevo
function resetFilters() {
    brandFilter.value = '';
    genderFilter.value = '';
    priceFilter.value = '';
}

// Asignar eventos de filtro rápido
[hombreBtn, mujerBtn, niñosBtn, ofertasBtn].forEach(btn => {
    btn.addEventListener('click', (e) => {
        resetFilters(); // Limpiar filtros primero
        switch (e.target.id) {
            case 'hombre':
                genderFilter.value = 'Hombre';
                break;
            case 'mujer':
                genderFilter.value = 'Mujer';
                break;
            case 'niños':
                genderFilter.value = 'Niños';
                break;
            case 'ofertas':
                priceFilter.value = '99';
                break;
        }
        applyFilters();
        if (frame10.classList.contains('hidden')) {
            toggleFrame10(); // Mostrar frame10 si está oculto
        }
        updateFilterButtons(); // Actualizar los botones de filtro
    });
});

// Limpiar filtros y mostrar todos los productos al hacer clic en el botón de catálogo
catalogoBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar comportamiento por defecto del enlace
    resetFilters(); // Limpiar los filtros
    renderProducts(products); // Mostrar todos los productos
    updateFilterButtons(); // Actualizar estado del ícono de filtro y botones
    filterModal.classList.add('hidden'); // Asegurarse de que el modal esté oculto
    if (!frame10.classList.contains('hidden')) {
        toggleFrame10(); // Ocultar frame10 si está visible
    }
    frame13.style.top = '269px'; // Restaurar la posición del frame13
});

// Evento para enviar el formulario y aplicar los filtros
filterForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar que el formulario recargue la página
    applyFilters(); // Aplicar los filtros
    filterModal.classList.add('hidden'); // Ocultar modal tras aplicar
    updateFilterButtons(); // Actualizar los botones de filtro tras aplicar
});

// Limpiar filtros
clearButton.addEventListener('click', () => {
    resetFilters();
    renderProducts(products); // Mostrar todos los productos
    updateFilterButtons(); // Actualizar botones y estado
    frame13.style.top = '269px'; // Restaurar posición de frame13
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); // Mostrar todos los productos al inicio
    populateFilters(); // Rellenar filtros de marca, género y precio
    updateFilterButtons(); // Asegurarse de que los botones estén en el estado correcto al cargar
});
