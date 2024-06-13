function showDetails(type) {
    const details = {
        eletronicos: {
            title: "Descarte de Eletrônicos",
            content: "O descarte correto de eletrônicos é essencial para evitar a poluição ambiental. Procure pontos de coleta especializados."
        },
        plasticos: {
            title: "Descarte de Plásticos",
            content: "Plásticos devem ser reciclados corretamente para evitar danos ao meio ambiente. Utilize os pontos de reciclagem disponíveis."
        },
        organicos: {
            title: "Descarte de Orgânicos",
            content: "Descarte orgânico pode ser transformado em compostagem. Separe seus resíduos corretamente."
        }
    };

    document.getElementById('details-title').innerText = details[type].title;
    document.getElementById('details-content').innerText = details[type].content;
    document.getElementById('details').style.display = 'block';
}

function hideDetails() {
    document.getElementById('details').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    
});
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