// const products = [
//     { id: 1, brand: 'Nike Original', name: 'Air Max 1', price: 120, gender: 'Hombre', image: 'product_images/Air_Max_1.png' },
//     { id: 2, brand: 'New Balance', name: 'New Balance 9060', price: 80, gender: 'Mujer', image: 'product_images/NB_9060.png' },
//     { id: 3, brand: 'Nike Original', name: 'Nike Revolution', price: 90, gender: 'Hombre', image: 'product_images/Nike_Revolution.png' },
//     { id: 4, brand: 'Adidas Original', name: 'Forum Buckle', price: 100, gender: 'Niños', image: 'product_images/Forum_Buckle.png' },
//     { id: 5, brand: 'Adidas Original', name: 'Campus', price: 120, gender: 'Hombre', image: 'product_images/Campus.png' },
//     { id: 6, brand: 'New Balance', name: 'NB 327', price: 120, gender: 'Niños', image: 'product_images/NB_327.png' },
//     { id: 7, brand: 'Nike Original', name: 'Dunk Low', price: 100, gender: 'Hombre', image: 'product_images/Dunk_Low.png' },
//     { id: 8, brand: 'Adidas Original', name: 'Gazelle', price: 90, gender: 'Niños', image: 'product_images/Gazelle.png' },
//     { id: 9, brand: 'Nike Original', name: 'Air Max SC', price: 150, gender: 'Mujer', image: 'product_images/Air_Max_SC.png' },
//     { id: 10, brand: 'Adidas Original', name: 'Handball Spezial', price: 120, gender: 'Hombre', image: 'product_images/Handball_Spezial.png' },
//     { id: 11, brand: 'Nike Original', name: 'Air Force', price: 130, gender: 'Hombre', image: 'product_images/Air_Force.png' },
//     { id: 12, brand: 'New Balance', name: 'NB 9060', price: 100, gender: 'Niños', image: 'product_images/NB_9060_2.png' },
//     { id: 13, brand: 'New Balance', name: 'NB 480', price: 150, gender: 'Mujer', image: 'product_images/NB_480.png' },
//     { id: 14, brand: 'Nike Original', name: 'Full Force Low', price: 70, gender: 'Niños', image: 'product_images/Full_Force_Low.png' },
//     { id: 15, brand: 'Nike Original', name: 'Air Max SC', price: 160, gender: 'Niños', image: 'product_images/Air_Max_SC_2.png' },
//     { id: 16, brand: 'Adidas Original', name: 'Handball Spezial', price: 140, gender: 'Mujer', image: 'product_images/Handball_Spezial_2.png' }
// ];

function createElement(tag, attributes = {}, children = []) {
  const element = document.createElement(tag)
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(...value.split(' '))
    } else if (key === 'id') {
      element.id = value
    } else {
      element.setAttribute(key, value)
    }
  })

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child))
    } else {
      element.appendChild(child)
    }
  })

  return element
}

// **Header**
function createHeader() {
  return createElement('header', { class: 'header' }, [
    createElement('div', { class: 'logo' }, [
      createElement('img', {
        src: 'logos/JD_Sports_logo.png',
        alt: 'JD Sports Logo'
      })
    ]),
    createElement('div', { class: 'menu-icon', id: 'menuIcon' }, [
      createElement('img', { src: 'icons/icon_menu.png', alt: 'Menu Icon' })
    ]),
    createElement('nav', { class: 'nav-links' }, [
      createElement('a', { href: '#', id: 'catalogo', class: 'active' }, [
        'Catálogo'
      ]),
      createElement('a', { href: '#', id: 'hombre' }, ['Hombre']),
      createElement('a', { href: '#', id: 'mujer' }, ['Mujer']),
      createElement('a', { href: '#', id: 'niños' }, ['Niños']),
      createElement('a', { href: '#', id: 'ofertas' }, ['Ofertas'])
    ]),
    createElement('nav', { class: 'nav-icons' }, [
      createElement('img', {
        src: 'icons/icon_filter.png',
        alt: 'Filter Icon',
        id: 'filterIcon'
      }),
      createElement('img', {
        src: 'icons/icon_shopping_basket.png',
        alt: 'Shopping Basket'
      }),
      createElement('img', { src: 'icons/icon_avatar.png', alt: 'User Avatar' })
    ])
  ])
}

function createCover() {
  return createElement('section', { class: 'cover' }, [
    createElement('img', { src: 'main_images/Cover.png', alt: 'Cover Image' })
  ])
}

function createFilterModal() {
  return createElement('div', { id: 'filterModal', class: 'modal hidden' }, [
    createElement('div', { class: 'modal-content' }, [
      createElement('h3', {}, ['Filtros']),
      createElement('form', { id: 'filterForm' }, [
        createElement('label', { for: 'brandFilter' }, ['Marca:']),
        createElement('select', { id: 'brandFilter', name: 'brand' }, [
          createElement('option', { value: '' }, ['Todos'])
        ]),
        createElement('label', { for: 'genderFilter' }, ['Género:']),
        createElement('select', { id: 'genderFilter', name: 'gender' }, [
          createElement('option', { value: '' }, ['Todos'])
        ]),
        createElement('label', { for: 'priceFilter' }, ['Precio Máximo:']),
        createElement('input', {
          type: 'number',
          id: 'priceFilter',
          name: 'maxPrice',
          placeholder: 'Sin Límite'
        }),
        createElement('button', { type: 'submit' }, ['Aplicar Filtros'])
      ])
    ])
  ])
}

function createFrame10() {
  return createElement('section', { id: 'frame10', class: 'frame-10 hidden' }, [
    createElement('div', { class: 'filter-buttons' }, [
      createElement('div', { class: 'brandfilter-button' }, [
        createElement('span', {}, ['Filtrar por Marca'])
      ]),
      createElement('div', { class: 'genderfilter-button' }, [
        createElement('span', {}, ['Filtrar por Género'])
      ]),
      createElement('div', { class: 'maxprice-button' }, [
        createElement('span', {}, ['Filtrar por Precio Máximo'])
      ]),
      createElement('div', { class: 'clear-button' }, [
        createElement('span', {}, ['Limpiar Filtros'])
      ])
    ]),
    createFilterModal()
  ])
}

function createFrame13() {
  return createElement('section', { id: 'frame13', class: 'frame-13' }, [
    createElement('div', { class: 'ellipse' }, [
      createElement('img', {
        src: 'icons/icon_arrow_downward.png',
        alt: 'Arrow Icon',
        class: 'arrow-icon',
        id: 'arrowIcon'
      })
    ])
  ])
}

// **Main Content**
function createMainContent() {
  return createElement('main', { class: 'products-section' }, [
    createElement('section', { id: 'frame10', class: 'frame-10 hidden' }, [
      createElement('div', { class: 'filter-buttons' }, [
        createElement('div', { class: 'brandfilter-button' }, [
          createElement('span', {}, ['Filtrar por Marca'])
        ]),
        createElement('div', { class: 'genderfilter-button' }, [
          createElement('span', {}, ['Filtrar por Género'])
        ]),
        createElement('div', { class: 'maxprice-button' }, [
          createElement('span', {}, ['Filtrar por Precio Máximo'])
        ]),
        createElement('div', { class: 'clear-button' }, [
          createElement('span', {}, ['Limpiar Filtros'])
        ])
      ])
    ]),
    createElement('div', { id: 'productContainer', class: 'product-grid' })
  ])
}

// **Footer**
function createFooter() {
  return createElement('footer', { class: 'footer' }, [
    createElement('div', { class: 'footer-section' }, [
      createElement('h3', {}, ['Compra con JD']),
      createElement('ul', {}, [
        createElement('li', {}, ['Guía de tallas']),
        createElement('li', {}, ['Buscador de tallas']),
        createElement('li', {}, ['Descuento estudiantes']),
        createElement('li', {}, ['Calendario lanzamientos']),
        createElement('li', {}, ['Inscribete a JDX']),
        createElement('li', {}, ['JD Blog'])
      ])
    ]),
    createElement('div', { class: 'footer-section' }, [
      createElement('h3', {}, ['Atención al cliente']),
      createElement('ul', {}, [
        createElement('li', {}, ['Preguntas frecuentes']),
        createElement('li', {}, ['Envíos y devoluciones']),
        createElement('li', {}, ['Seguimiento de envío']),
        createElement('li', {}, ['Contacto'])
      ])
    ]),
    createElement('div', { class: 'footer-section' }, [
      createElement('h3', {}, ['Aviso legal']),
      createElement('ul', {}, [
        createElement('li', {}, ['Términos y condiciones']),
        createElement('li', {}, ['Promociones y condiciones']),
        createElement('li', {}, ['Política de privacidad']),
        createElement('li', {}, ['Política de Cookies']),
        createElement('li', {}, ['Ajustes de Cookies']),
        createElement('li', {}, ['Accesibilidad'])
      ])
    ])
  ])
}

function initApp() {
  createStructure()

  // Lista de productos
  const products = [
    {
      id: 1,
      brand: 'Nike Original',
      name: 'Air Max 1',
      price: 120,
      gender: 'Hombre',
      image: 'product_images/Air_Max_1.png'
    },
    {
      id: 2,
      brand: 'New Balance',
      name: 'New Balance 9060',
      price: 80,
      gender: 'Mujer',
      image: 'product_images/NB_9060.png'
    },
    {
      id: 3,
      brand: 'Nike Original',
      name: 'Nike Revolution',
      price: 90,
      gender: 'Hombre',
      image: 'product_images/Nike_Revolution.png'
    },
    {
      id: 4,
      brand: 'Adidas Original',
      name: 'Forum Buckle',
      price: 100,
      gender: 'Niños',
      image: 'product_images/Forum_Buckle.png'
    },
    {
      id: 5,
      brand: 'Adidas Original',
      name: 'Campus',
      price: 120,
      gender: 'Hombre',
      image: 'product_images/Campus.png'
    },
    {
      id: 6,
      brand: 'New Balance',
      name: 'NB 327',
      price: 120,
      gender: 'Niños',
      image: 'product_images/NB_327.png'
    },
    {
      id: 7,
      brand: 'Nike Original',
      name: 'Dunk Low',
      price: 100,
      gender: 'Hombre',
      image: 'product_images/Dunk_Low.png'
    },
    {
      id: 8,
      brand: 'Adidas Original',
      name: 'Gazelle',
      price: 90,
      gender: 'Niños',
      image: 'product_images/Gazelle.png'
    },
    {
      id: 9,
      brand: 'Nike Original',
      name: 'Air Max SC',
      price: 150,
      gender: 'Mujer',
      image: 'product_images/Air_Max_SC.png'
    },
    {
      id: 10,
      brand: 'Adidas Original',
      name: 'Handball Spezial',
      price: 120,
      gender: 'Hombre',
      image: 'product_images/Handball_Spezial.png'
    },
    {
      id: 11,
      brand: 'Nike Original',
      name: 'Air Force',
      price: 130,
      gender: 'Hombre',
      image: 'product_images/Air_Force.png'
    },
    {
      id: 12,
      brand: 'New Balance',
      name: 'NB 9060',
      price: 100,
      gender: 'Niños',
      image: 'product_images/NB_9060_2.png'
    },
    {
      id: 13,
      brand: 'New Balance',
      name: 'NB 480',
      price: 150,
      gender: 'Mujer',
      image: 'product_images/NB_480.png'
    },
    {
      id: 14,
      brand: 'Nike Original',
      name: 'Full Force Low',
      price: 70,
      gender: 'Niños',
      image: 'product_images/Full_Force_Low.png'
    },
    {
      id: 15,
      brand: 'Nike Original',
      name: 'Air Max SC',
      price: 160,
      gender: 'Niños',
      image: 'product_images/Air_Max_SC_2.png'
    },
    {
      id: 16,
      brand: 'Adidas Original',
      name: 'Handball Spezial',
      price: 140,
      gender: 'Mujer',
      image: 'product_images/Handball_Spezial_2.png'
    }
  ]

  // DOM Elements
  const frame10 = document.getElementById('frame10')
  const frame13 = document.getElementById('frame13')
  const filterModal = document.getElementById('filterModal')
  const filterForm = document.getElementById('filterForm')
  const modalContent = document.querySelector('.modal-content')
  const brandFilter = document.getElementById('brandFilter')
  const genderFilter = document.getElementById('genderFilter')
  const priceFilter = document.getElementById('priceFilter')
  const arrowIcon = document.getElementById('arrowIcon')
  const filterIcon = document.getElementById('filterIcon')
  const clearButton = document.querySelector('.clear-button')
  const brandFilterButton = document.querySelector('.brandfilter-button')
  const genderFilterButton = document.querySelector('.genderfilter-button')
  const priceFilterButton = document.querySelector('.maxprice-button')
  const catalogoBtn = document.getElementById('catalogo')

  // Otros elementos de filtro rápido
  const hombreBtn = document.getElementById('hombre')
  const mujerBtn = document.getElementById('mujer')
  const niñosBtn = document.getElementById('niños')
  const ofertasBtn = document.getElementById('ofertas')

  // Inicializar opciones de filtros (marcas, géneros)
  function populateFilters() {
    const brands = [...new Set(products.map((product) => product.brand))]
    const genders = [...new Set(products.map((product) => product.gender))]

    // Añadir la opción genérica "Todos"
    brandFilter.innerHTML =
      '<option value="">Todos</option>' +
      brands
        .map((brand) => `<option value="${brand}">${brand}</option>`)
        .join('')
    genderFilter.innerHTML =
      '<option value="">Todos</option>' +
      genders
        .map((gender) => `<option value="${gender}">${gender}</option>`)
        .join('')
  }

  // Mostrar productos
  function renderProducts(filteredProducts) {
    const productContainer = document.getElementById('productContainer')
    productContainer.innerHTML = ''

    if (filteredProducts.length === 0) {
      // Si no hay productos filtrados, mostrar 3 productos aleatorios
      const randomProducts = products
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
      const suggestionMessage = `<div id="noProducts" style="display: contents;"><div id="noProductsMessage" style="display: flex; margin: 20px; padding: 15px; gap: 10px; background: #F6F6F6; border: 1px solid #9B9B9B; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); border-radius: 5px; font-family: 'Inter', sans-serif; font-size: 13px; color: #000; justify-content: center; align-self: center;"><p>No se encontraron productos con los filtros aplicados. Aquí tienes algunos productos sugeridos:</p></div></div>`
      productContainer.innerHTML = suggestionMessage
      filteredProducts = randomProducts
    }

    const cardsContainer = document.createElement('div')
    cardsContainer.id = 'cardsContainer'
    cardsContainer.classList.add('product-grid')
    productContainer.appendChild(cardsContainer)

    filteredProducts.forEach((product) => {
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
              `
      cardsContainer.innerHTML += productCard
    })
  }

  // Lógica de filtrado
  function applyFilters() {
    const selectedBrand = brandFilter.value
    const selectedGender = genderFilter.value
    const maxPrice = parseFloat(priceFilter.value)

    const filteredProducts = products.filter((product) => {
      return (
        (!selectedBrand || product.brand === selectedBrand) &&
        (!selectedGender || product.gender === selectedGender) &&
        (!maxPrice || product.price <= maxPrice)
      )
    })

    renderProducts(filteredProducts)
    updateFilterButtons() // Actualizar botones de filtro tras aplicar filtros
  }

  // Función para actualizar los botones de filtro y cambiar el ícono de filtro
  function updateFilterButtons() {
    const selectedBrand = brandFilter.value
    const selectedGender = genderFilter.value
    const maxPrice = parseFloat(priceFilter.value)

    // Actualización de botones visibles
    brandFilterButton.style.display = selectedBrand ? 'inline-block' : 'none'
    genderFilterButton.style.display = selectedGender ? 'inline-block' : 'none'
    priceFilterButton.style.display = maxPrice ? 'inline-block' : 'none'

    // Actualizar texto en los botones de filtro
    brandFilterButton.querySelector('span').textContent =
      selectedBrand || 'Filtrar por Marca'
    genderFilterButton.querySelector('span').textContent =
      selectedGender || 'Filtrar por Género'
    priceFilterButton.querySelector('span').textContent = maxPrice
      ? `Hasta ${maxPrice} €`
      : 'Filtrar por Precio Máximo'

    // Mostrar botón de limpiar si algún filtro está aplicado
    const hasFiltersApplied = selectedBrand || selectedGender || maxPrice
    clearButton.style.display = hasFiltersApplied ? 'inline-block' : 'none'

    // Cambiar ícono de filtro basado en filtros activos
    filterIcon.src = hasFiltersApplied
      ? 'icons/yellow_icon_filter.png'
      : 'icons/icon_filter.png'
  }

  // Función para alternar la visibilidad del modal
  function toggleModal() {
    // Mostrar frame10 si está oculto
    if (frame10.classList.contains('hidden')) {
      toggleFrame10()
    }
    filterModal.classList.toggle('hidden')
  }

  // Función para alternar la visibilidad de frame10 y cambiar la flecha
  function toggleFrame10() {
    const isVisible = !frame10.classList.contains('hidden')
    frame10.classList.toggle('hidden')
    arrowIcon.src = isVisible
      ? 'icons/icon_arrow_downward.png'
      : 'icons/icon_arrow_upward.png'
    frame13.style.top = isVisible ? '269px' : '367px'
  }

  // Mostrar el modal y el formulario cuando se haga clic en los botones de filtro en frame10
  ;[brandFilterButton, genderFilterButton, priceFilterButton].forEach(
    (button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation()

        // Asegurarse de que el modal y el formulario de filtro estén visibles
        filterModal.classList.remove('hidden')
        filterForm.classList.remove('hidden')

        // Mostrar frame10 si está oculto
        if (frame10.classList.contains('hidden')) {
          frame10.classList.remove('hidden')
          arrowIcon.src = 'icons/icon_arrow_upward.png'
          frame13.style.top = '367px'
        }
      })
    }
  )

  // Alternar solo frame10 al hacer clic en arrowIcon (sin interferir con el modal)
  arrowIcon.addEventListener('click', () => {
    const isVisible = !frame10.classList.contains('hidden')
    frame10.classList.toggle('hidden')
    arrowIcon.src = isVisible
      ? 'icons/icon_arrow_downward.png'
      : 'icons/icon_arrow_upward.png'
    frame13.style.top = isVisible ? '269px' : '367px'
  })

  // Cerrar modal si se hace clic fuera de su contenido, excepto en los botones de filtro
  window.addEventListener('click', (e) => {
    if (
      !filterModal.classList.contains('hidden') &&
      !modalContent.contains(e.target) &&
      e.target !== filterIcon &&
      ![brandFilterButton, genderFilterButton, priceFilterButton].includes(
        e.target
      )
    ) {
      filterModal.classList.add('hidden')
    }
  })

  // Mostrar el modal al hacer clic en filterIcon
  filterIcon.addEventListener('click', () => {
    if (filterModal.classList.contains('hidden')) {
      frame10.classList.remove('hidden')
      filterModal.classList.remove('hidden')
      arrowIcon.src = 'icons/icon_arrow_upward.png'
      frame13.style.top = '367px'
    } else {
      filterModal.classList.add('hidden')
      frame10.classList.add('hidden')
      arrowIcon.src = 'icons/icon_arrow_downward.png'
      frame13.style.top = '269px'
    }
  })

  // Limpiar filtros antes de aplicar uno nuevo
  function resetFilters() {
    brandFilter.value = ''
    genderFilter.value = ''
    priceFilter.value = ''
  }

  // Asignar eventos de filtro rápido
  ;[hombreBtn, mujerBtn, niñosBtn, ofertasBtn].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      resetFilters()
      switch (e.target.id) {
        case 'hombre':
          genderFilter.value = 'Hombre'
          break
        case 'mujer':
          genderFilter.value = 'Mujer'
          break
        case 'niños':
          genderFilter.value = 'Niños'
          break
        case 'ofertas':
          priceFilter.value = '99'
          break
      }
      applyFilters()
      if (frame10.classList.contains('hidden')) {
        toggleFrame10()
      }
      updateFilterButtons()
    })
  })

  // Limpiar filtros y mostrar todos los productos al hacer clic en el botón de catálogo
  catalogoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    resetFilters()
    renderProducts(products)
    updateFilterButtons()
    filterModal.classList.add('hidden')
    if (!frame10.classList.contains('hidden')) {
      toggleFrame10()
    }
    frame13.style.top = '269px'
  })

  // Evento para enviar el formulario y aplicar los filtros
  filterForm.addEventListener('submit', (e) => {
    e.preventDefault()
    applyFilters()
    filterModal.classList.add('hidden')
    updateFilterButtons()
  })

  // Limpiar filtros
  clearButton.addEventListener('click', () => {
    resetFilters()
    renderProducts(products)
    updateFilterButtons()
    frame13.style.top = '269px'
  })

  const menuIcon = document.getElementById('menuIcon')
  const navLinks = document.querySelector('.nav-links')

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show')
  })

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('show')
    }
  })
  renderProducts(products)
  populateFilters()
  updateFilterButtons()
}

function createStructure() {
  const app = document.getElementById('app')
  app.appendChild(createHeader())
  app.appendChild(createCover())
  app.appendChild(createFrame10()) // Contiene el modal de filtros
  app.appendChild(createFrame13()) // Agregamos frame13
  app.appendChild(createMainContent())
  app.appendChild(createFooter())
}

// **Ejecutar `initApp()` cuando el DOM esté listo**
document.addEventListener('DOMContentLoaded', initApp)
