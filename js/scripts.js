function displayProducts() {
    const productTypes = {
        metal: [],
        plastico: [],
        eletronico: [],
        organico: [],
        papel: []
    };

    products.forEach(product => {
        productTypes[product.type].push(product);
    });

    for (const type in productTypes) {
        const ul = document.querySelector(`#${type} .productList`);
        ul.innerHTML = '';

        productTypes[type].forEach(product => {
            const li = document.createElement('li');
            li.textContent = product.name;
            ul.appendChild(li);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
const productForm = document.getElementById('productForm');
const productContainer = document.getElementById('productContainer');

const products = [];

productForm.addEventListener('submit', (e) => {
e.preventDefault();

const productName = document.getElementById('productName').value;
const productType = document.getElementById('productType').value;

if (productName && productType) {
    products.push({ name: productName, type: productType });
    displayProducts();
    productForm.reset();
}
});

function displayProducts() {
const productTypes = {
    metal: [],
    plastico: [],
    eletronico: [],
    organico: [],
    papel: []
};

products.forEach(product => {
    productTypes[product.type].push(product);
});

for (const type in productTypes) {
    const ul = document.querySelector(`#${type} .productList`);
    ul.innerHTML = '';

    productTypes[type].forEach(product => {
        const li = document.createElement('li');
        li.textContent = product.name;
        ul.appendChild(li);
    });
}
}
});