// function increase and decrease quantity product
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

let listProduct = JSON.parse(localStorage.getItem('ShoppingCart'));
let product_table = ``;
for(let i = 0;i<listProduct.name.length;i++){
  product_table+= `<tr>
                      <th>
                          <img src="${listProduct.img[i]}" alt="">
                      </th>
                      <th>
                          <h3>${listProduct.name[i]}</h3>
                      </th>
                      <th>
                          <form>
                              <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"><p>-</p></div>
                              <input type="number" id="number" value="0" />
                              <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"><p>+</p></div>
                          </form>
                      </th>
                      <th class = "col_name">
                          <h3>${listProduct.price[i]}</h3>
                      </th>
                      <th >
                        <i class="trash_icon fa-sharp fa-solid fa-trash"></i>
                      </th>
                    </tr> `
}




  // let stringg = `<tr>
                    //     <th>
                    //         <img src="${localStorage.getItem(objectProductShopping)}" alt="">
                    //     </th>
                    //     <th>
                    //         <h3>230000VND</h3>
                    //     </th>
                    //     <th>
                    //         <form>
                    //             <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"><p>-</p></div>
                    //             <input type="number" id="number" value="0" />
                    //             <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"><p>+</p></div>
                    //         </form>
                    //     </th>
                    //     <th>
                    //         <h3>Laptop gaming MSI</h3>
                    //     </th>
                    //     <th >
                    //        <i class="trash_icon fa-sharp fa-solid fa-trash"></i>
                    //     </th>
                    // </tr> `


  let table = document.querySelector('.buy_table');
  table.innerHTML = table.innerHTML + product_table


