(function () {
    "use strict";
    const productInventory = document.querySelector('#insertProducts');
    const refreshInventoryBtn = document.querySelector('#refresh-inventory');

    // TODO: Create an AJAX GET request for the file under data/inventory.json
    $.ajax('data/inventory.json').done((response) => {
        console.log(response);
        renderInventory(response);
    });

    let refreshInventory = function () {
        $.ajax('data/inventory.json').done((response) => {
            console.log('Refresh Inventory');
            productInventory.innerHTML = "";
            renderInventory(response);
        })
    }

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
    function renderInventory(products) {
        for (let i = 0; i < products.length; i++) {
            productInventory.innerHTML += (`
                <div class="card product-card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${products[i].title}</h5>
                    <p class="card-text"><span>$${products[i].price}</span><span>${products[i].quantity} in stock</span></span></p>
                    <p class="card-text">${products[i].categories.join(' ')}</p>
                    <a href="#" class="btn btn-primary">Add to shopping cart</a>
                    </div>
                </div>

                `)
        }
    }

    refreshInventoryBtn.addEventListener('click', (refreshInventory));
})();