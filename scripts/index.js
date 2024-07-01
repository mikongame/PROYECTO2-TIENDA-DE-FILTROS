document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalButton = document.getElementById('openModal');
  const closeButton = document.querySelector('.close-button');
  const filterForm = document.getElementById('filterForm');
  const productContainer = document.getElementById('productContainer');
  const clearFiltersButton = document.getElementById('clearFilters');

  const products = [
      { id: 1, name: 'Laptop', category: 'electronics', price: 1000 },
      { id: 2, name: 'Smartphone', category: 'electronics', price: 500 },
      { id: 3, name: 'T-shirt', category: 'clothing', price: 20 },
      // Add more products as needed
  ];

  const renderProducts = (productList) => {
      productContainer.innerHTML = '';
      productList.forEach(product => {
          const productElement = document.createElement('div');
          productElement.classList.add('product');
          productElement.innerHTML = `
              <h2>${product.name}</h2>
              <p>Category: ${product.category}</p>
              <p>Price: $${product.price}</p>
          `;
          productContainer.appendChild(productElement);
      });
  };

  const filterProducts = (category, price) => {
      let filteredProducts = products;

      if (category) {
          filteredProducts = filteredProducts.filter(product => product.category === category);
      }

      if (price) {
          filteredProducts = filteredProducts.filter(product => product.price <= price);
      }

      if (filteredProducts.length === 0) {
          // Show suggested products
          const suggestedProducts = products.sort(() => 0.5 - Math.random()).slice(0, 3);
          renderProducts(suggestedProducts);
      } else {
          renderProducts(filteredProducts);
      }
  };

  openModalButton.addEventListener('click', () => {
      modal.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  filterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const category = filterForm.category.value;
      const price = filterForm.price.value;
      filterProducts(category, price);
      modal.style.display = 'none';
  });

  clearFiltersButton.addEventListener('click', () => {
      filterForm.reset();
      renderProducts(products);
  });

  // Initial render
  renderProducts(products);
});
