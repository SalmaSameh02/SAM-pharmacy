let btn_search = document.getElementById("pharma_search");
let table = document.getElementById("history_table");
let textBox = document.getElementById("name_drug");

if (btn_search) {
    btn_search.onclick = function() {
        const textBoxValue = textBox.value;
        const data = {
            name: textBoxValue,
        };

        console.log('Button clicked');
        console.log('Sending data:', data);
        let categoriesHTML = `<li class="table-header">
                                <div class="hcol col-1">Name</div>
                                <div class="hcol col-2">drug id</div>
                                <div class="hcol col-3">Number of items</div>
                                <div class="hcol col-4">Price</div>
                                <div class="hcol col-5">expiry date</div>
                                <div class="hcol col-6">category</div>
                              </li>`;

        fetch('/update/getdrug', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log('Response received');
            return response.json();
        })
        .then(orders => {
            if (!Array.isArray(orders)) {
                console.error('Expected orders to be an array');
                return;
            }

            orders.forEach((order) => {
                categoriesHTML += `
                <li class="table-row">
                    <div class="col col-1" data-label="name">${order.drug_name}</div>
                    <div class="col col-2" data-label="drug_id">${order.drug_id}</div>
                    <div class="col col-3" data-label="no_items">${order.stock}</div>
                    <div class="col col-4" data-label="price">$${order.price}</div>
                    <div class="col col-5" data-label="ex_d">${order.expiry_date}</div>
                    <div class="col col-6" data-label="category">${order.category}</div>
                </li>`;
            });

            table.innerHTML = categoriesHTML;
            console.log(categoriesHTML);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
}
