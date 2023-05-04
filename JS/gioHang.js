// format money
const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

// function increase quantity product
  let decrease_btn = document.getElementsByClassName('decrease');
  let value = document.getElementsByClassName('number'); //=> variable value
  let decrease_order = function(e){
    let target = e.target.closest('.decrease');
    for(let i = 0;i<decrease_btn.length;i++){
      if(decrease_btn[i] === target){
        return i;
      }
    }
    return -1
  }

    // function descending value quantity product
    let increase_btn =  document.getElementsByClassName('increase');
    let increase_order = function(e){
      let target = e.target.closest('.increase');
      for(let i = 0;i<increase_btn.length;i++){
        if(increase_btn[i] === target) return i;
      }
      return -1
    }
    // add function increase and descending
    let table_shopping = document.getElementById('table_id');
    table_shopping.addEventListener('click',function(e){
      let index = decrease_order(e);
      if(index>=0){
        let valueInput = parseInt(value[index].value);
        valueInput>0?--value[index].value:value[index].value;
      }
      let index_asc = increase_order(e);
      if(index_asc >=0){
        ++value[index_asc].value;
      }
      localStoragePrice();
    })
    //get list item from localstorage
let getLocalstorege = function(){
  let listProduct = JSON.parse(localStorage.getItem('ShoppingCart'));
  let product_table = ``;
  for(let i = 0;i<listProduct.name.length;i++){
  if(listProduct.name!==null){
    product_table+= `<tr>
                      <th>
                          <img src="${listProduct.img[i]}" alt="">
                      </th>
                      <th>
                          <h3>${listProduct.name[i]}</h3>
                      </th>
                      <th>
                          <form>
                              <div class="value-button decrease" value="Decrease Value"><p>-</p></div>
                              <input type="number" class="number" value="1" />
                              <div class="value-button increase"  value="Increase Value"><p>+</p></div>
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
  
  }
  let table = document.querySelector('.buy_table');
  table.innerHTML = table.innerHTML + product_table
}

getLocalstorege();

//function count item in shoppin-cart

let countItemInCart = document.querySelector('.count_product');
// var count = localStorage.length;
let updateCountShopping = () => countItemInCart.innerHTML = JSON.parse(localStorage.getItem('ShoppingCart')).name.length;


updateCountShopping();

// remove item into trash
let trash = document.getElementsByClassName('trash_icon');

let removeItem = function(e){
  let target = e.target.closest('.trash_icon');
  for(let i = 0;i<trash.length;i++){
    if(trash[i] === target) return i;
  }
}



table_shopping.addEventListener('click',function(e){
   let index = removeItem(e);
   if(index>=0){
    let tmpOb = JSON.parse(localStorage.getItem('ShoppingCart'));
    let nameTmp = tmpOb.name;
    let priceTmp = tmpOb.price;
    let imgTmp = tmpOb.img;
    nameTmp.splice(index,1);
    priceTmp.splice(index,1);
    imgTmp.splice(index,1);
    console.log(nameTmp);
    let ob = {
      name:nameTmp,
      price:priceTmp,
      img:imgTmp
    }
    localStorage.setItem('ShoppingCart',JSON.stringify(ob))
    let refeshTable = document.getElementById('table_id');
    refeshTable.innerHTML = `<tr>
                  <th>Sản phẩm</th>
                  <th class="col_name">Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
                  <th>Xóa</th>
              </tr>`
    getLocalstorege();
    localStoragePrice();
   }
   updateCountShopping();

})

 let total = document.getElementById('total');
  
  let localStoragePrice = function(){
    let subtotal = 0;
    let local = JSON.parse(localStorage.getItem('ShoppingCart'));
    for(let i = 0;i<local.price.length;i++){
      let tmp = '';
      for(let j = 0;j<local.price[i].length;j++){
        if(isNaN(local.price[i][j]/1)==false){
          tmp+=local.price[i][j]
        }
      }
      subtotal = subtotal + parseInt(tmp)*value[i].value;
      
    }
    total.innerHTML = VND.format(subtotal);
  }

localStoragePrice();


