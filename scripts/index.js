const products = [
    { id: 1, name: "Producto 1", category: "Hombre" },
    { id: 2, name: "Producto 2", category: "Mujer" },
    { id: 3, name: "Producto 3", category: "Niños" },
    { id: 4, name: "Producto 4", category: "Hombre" },
    { id: 5, name: "Producto 5", category: "Mujer" },
    { id: 6, name: "Producto 6", category: "Niños" },
];

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");
    const filterModal = document.getElementById("filter-modal");
    const toggleFiltersButton = document.getElementById("toggle-filters");
    const applyFiltersButton = document.getElementById("apply-filters");
    const clearFiltersButton = document.getElementById("clear-filters");

    function displayProducts(filteredProducts) {
        productsContainer.innerHTML = "";
        filteredProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.category}</p>`;
            productsContainer.appendChild(productDiv);
        });
    }

    function applyFilters() {
        // Aplica los filtros a los productos
        // Por ahora, simplemente mostrar todos los productos
        displayProducts(products);
    }

    function clearFilters() {
        // Limpia los filtros y muestra todos los productos
        displayProducts(products);
    }

    toggleFiltersButton.addEventListener("click", () => {
        filterModal.style.display = filterModal.style.display === "none" || filterModal.style.display === "" ? "block" : "none";
    });

    applyFiltersButton.addEventListener("click", applyFilters);
    clearFiltersButton.addEventListener("click", clearFilters);

    // Mostrar todos los productos al cargar la página
    displayProducts(products);
});
