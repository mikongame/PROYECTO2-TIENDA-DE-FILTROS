function createStructure() {
    document.body.innerHTML = `
        <header class="header">
        <div class="logo">
            <img src="logos/JD_Sports_logo.png" alt="JD Sports Logo">
        </div>
        <div class="menu-icon" id="menuIcon">
            <img src="icons/icon_menu.png" alt="Menu Icon">
        </div>  
        <nav class="nav-links">
            <a href="#" id="catalogo" class="active">Catálogo</a>
            <a href="#" id="hombre">Hombre</a>
            <a href="#" id="mujer">Mujer</a>
            <a href="#" id="niños">Niños</a>
            <a href="#" id="ofertas">Ofertas</a>
        </nav>         
        <nav class="nav-icons">
            <img src="icons/icon_filter.png" alt="Filter Icon" id="filterIcon">
            <img src="icons/icon_shopping_basket.png" alt="Shopping Basket">
            <img src="icons/icon_avatar.png" alt="User Avatar">
        </nav>        
    </header>
    
    <!-- Cover Section -->
    <section class="cover">
        <img src="main_images/Cover.png" alt="Cover Image">
    </section>

    <!-- Frame 10 (Oculto por defecto) -->
    <section id="frame10" class="frame-10 hidden">
        <div class="filter-buttons">
            <div class="brandfilter-button">
                <span>Filtrar por Marca</span>
            </div>
            <div class="genderfilter-button">
                <span>Filtrar por Género</span>
            </div>
            <div class="maxprice-button">
                <span>Filtrar por Precio Máximo</span>
            </div>
            <div class="clear-button">
                <span>Limpiar Filtros</span>
            </div>
        </div>

        <!-- Modal de Filtros (dentro de Frame 10) -->
        <div id="filterModal" class="modal hidden">
            <div class="modal-content">
                <h3>Filtros</h3>
                <form id="filterForm">
                    <label for="brandFilter">Marca:</label>
                    <select id="brandFilter" name="brand">
                        <option value="">Todos</option>
                        <!-- Opciones dinámicas llenadas en JS -->
                    </select>
                    
                    <label for="genderFilter">Género:</label>
                    <select id="genderFilter" name="gender">
                        <option value="">Todos</option>
                        <!-- Opciones dinámicas llenadas en JS -->
                    </select>
                
                    <label for="priceFilter">Precio Máximo:</label>
                    <input type="number" id="priceFilter" name="maxPrice" placeholder="Sin Límite">
                
                    <button type="submit">Aplicar Filtros</button>
                </form>                
            </div>
        </div>
    </section>

    <!-- Frame 13 -->
    <section id="frame13" class="frame-13">
        <div class="ellipse">
            <img src="icons/icon_arrow_downward.png" alt="Arrow Icon" class="arrow-icon" id="arrowIcon">
        </div>
    </section>

    <!-- Products Section -->
    <main class="products-section">
        <div id="productContainer" class="product-grid">
            <!-- Productos se renderearán dinámicamente aquí -->
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-section">
            <h3>Compra con JD</h3>
            <ul>
                <li>Guía de tallas</li>
                <li>Buscador de tallas</li>
                <li>Descuento estudiantes</li>
                <li>Calendario lanzamientos</li>
                <li>Inscribete a JDX</li>
                <li>JD Blog</li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Atención al cliente</h3>
            <ul>
                <li>Preguntas frecuentes</li>
                <li>Envíos y devoluciones</li>
                <li>Seguimiento de envío</li>
                <li>Contacto</li>
            </ul>
        </div>
        <div class="footer-section">
            <h3>Aviso legal</h3>
            <ul>
                <li>Términos y condiciones</li>
                <li>Promociones y condiciones</li>
                <li>Política de privacidad</li>
                <li>Política de Cookies</li>
                <li>Ajustes de Cookies</li>
                <li>Accesibilidad</li>
            </ul>
        </div>
    </footer>
    `;
}

function initApp() {
    createStructure();

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
    const catalogoBtn = document.getElementById('catalogo'); 


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

        if (filteredProducts.length === 0) {
            // Si no hay productos filtrados, mostrar 3 productos aleatorios
            const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 3);
            const suggestionMessage = `<div id="noProducts" style="display: contents;"><div id="noProductsMessage" style="display: flex; margin: 20px; padding: 15px; gap: 10px; background: #F6F6F6; border: 1px solid #9B9B9B; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); border-radius: 5px; font-family: 'Inter', sans-serif; font-size: 13px; color: #000; justify-content: center; align-self: center;"><p>No se encontraron productos con los filtros aplicados. Aquí tienes algunos productos sugeridos:</p></div></div>`;
            productContainer.innerHTML = suggestionMessage;
            filteredProducts = randomProducts;
        }

        const cardsContainer = document.createElement('div');
        cardsContainer.id = 'cardsContainer';
        cardsContainer.classList.add('product-grid');
        productContainer.appendChild(cardsContainer);

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
            cardsContainer.innerHTML += productCard;
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
            toggleFrame10(); 
        }
        filterModal.classList.toggle('hidden'); 
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
            event.stopPropagation();  

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
            filterModal.classList.add('hidden');
        }
    });

    // Mostrar el modal al hacer clic en filterIcon
    filterIcon.addEventListener('click', () => {
        if (filterModal.classList.contains('hidden')) {
            frame10.classList.remove('hidden');  
            filterModal.classList.remove('hidden'); 
            arrowIcon.src = 'icons/icon_arrow_upward.png'; 
            frame13.style.top = '367px'; 
        } else {
            filterModal.classList.add('hidden'); 
            frame10.classList.add('hidden'); 
            arrowIcon.src = 'icons/icon_arrow_downward.png'; 
            frame13.style.top = '269px'; 
        }
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
            resetFilters(); 
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
                toggleFrame10(); 
            }
            updateFilterButtons(); 
        });
    });

    // Limpiar filtros y mostrar todos los productos al hacer clic en el botón de catálogo
    catalogoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetFilters(); 
        renderProducts(products); 
        updateFilterButtons(); 
        filterModal.classList.add('hidden'); 
        if (!frame10.classList.contains('hidden')) {
            toggleFrame10(); 
        }
        frame13.style.top = '269px'; 
    });

    // Evento para enviar el formulario y aplicar los filtros
    filterForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        applyFilters();
        filterModal.classList.add('hidden'); 
        updateFilterButtons(); 
    });

    // Limpiar filtros
    clearButton.addEventListener('click', () => {
        resetFilters();
        renderProducts(products); 
        updateFilterButtons(); 
        frame13.style.top = '269px'; 
    });


    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('show');
    }
    });
    renderProducts(products);
    populateFilters();
    updateFilterButtons();
}

// **Ejecutar `initApp()` cuando el DOM esté listo**
document.addEventListener('DOMContentLoaded', initApp);


