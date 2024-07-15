
fetch('/cart/data')
  .then(response => response.json())
  .then(data => {
    let categoriesHTML = '';

    data.forEach(order  => {
        categoriesHTML += 
        `<div class="item">
            <span>${order.drug_name}</span>
            <span>${order.no_items}</span>
            <button  class="col col-6 btn_nono" id="delete_entry"><i  class="fas fa-trash nono"></i></button>
        </div>`;
      });
    

    const checkout_list = document.getElementById("item_list");
    checkout_list.innerHTML = categoriesHTML;
    console.log(categoriesHTML);
  })
  .catch(error => console.error('Error fetching data:', error));

    // document.querySelectorAll(".expand_arrow").forEach(button => {
    //   button.addEventListener("click", function() {
    //     const subtable = this.parentElement.nextElementSibling;
    //     const arrow = this.querySelector(".arrow");
    //     subtable.classList.toggle("hide");
    //     arrow.classList.toggle("fa-chevron-down");
    //     arrow.classList.toggle("fa-chevron-right");
    //   });
    // });
  // })
  // .catch(error => console.error('Error fetching data:', error));
