// settimeout on top banner 
var image = new  Array()
image[0] = '../IMAGE/laptoptuutruong_800x450.jpg'
image[1] = '../IMAGE/news_Sale.jpg'
image[2] = '../IMAGE/laptop-asus-800-450_800x450.png'

var x = 0;

function changeBanner(){
    document.getElementById('Sale').src=image[x];
    if(x>=image.length-1)
        x = 0;
    else
        x++;
    
    setTimeout('changeBanner()',3000);
}
setTimeout('changeBanner()',3000);

//action ascending item in shopping cart

    function addCart(){
        var cart_count = document.getElementsByClassName("count_product");
        for(var i = 0;i<cart_count.length;i++){
            
            var content = cart_count[i].textContent;
            content = parseInt(content);
            content = content+1
            // console.log(content);
            cart_count[i].innerHTML = `${content}`
        }
    }



    

//function show cart add success
    function showMessAddCart(){
        // console.log("show mess");
        // show message
        let mess_addCart = document.getElementById('addcart--success');
        let all = document.getElementById('wrapper');
        all.style.opacity = 0.6
        mess_addCart.style.display = 'flex';
        let show = document.getElementById('addcart--success')
        show.classList.add('animationShow');
        // auto close after 4.5s
        const timeout = setTimeout(close,2800);
        //close by mouse
        
        let close_let = document.getElementsByClassName('addcart__icon_exit');
        close_let[0].addEventListener('click',function(){
            // console.log("close by mouse");
            // chang attribute 
            let mess_addCart = document.getElementById('addcart--success');
            let all = document.getElementById('wrapper');
            all.style.opacity = 1
            mess_addCart.style.display = 'none';
            // clearTimeout auto close toast
            clearTimeout(timeout);
            // console.log("close by mouse");
        });
    }

    let btn_addCart = document.getElementsByClassName('btn info_Product__Btn--shopping');
    Array.from(btn_addCart).forEach(function(element){
        element.addEventListener('click',showMessAddCart);
    })

    const elementAddCart = document.getElementsByClassName("info_Product__Btn--shopping")
    Array.from(elementAddCart).forEach(function(element){
        element.addEventListener('click',addCart)
        
    })
    // close mess showed
    function close(){
        // console.log("close by auto");
        // chang attribute 
        let mess_addCart = document.getElementById('addcart--success');
        let all = document.getElementById('wrapper');
        all.style.opacity = 1
        mess_addCart.style.display = 'none';
        // clearTimeout auto close toast
    }

// form register buy product
    let buy_btns = document.getElementsByClassName('btn info_Product__Btn--buy while');
    for(let buy_btn of buy_btns){
        buy_btn.addEventListener('click',showPanelBuy)
    }

    function showPanelBuy(){
        let areaBuyNow = document.getElementById('buyNowArea')
        let form_buy = document.getElementById('form_buy');
        form_buy.classList.add('animationShowBuyNow');
        form_buy.style.display = 'flex'
        areaBuyNow.style.display = 'block'
    }

    let exitBuyNow =  document.getElementsByClassName('buyNow__icon_exit')
    exitBuyNow[0].addEventListener('click',closeBuyNow);

    //close when click outside
    
    function closeBuyNow(){
        let areaBuyNow = document.getElementById('buyNowArea')
        let form_buy = document.getElementById('form_buy');
        form_buy.style.display = 'none'
        areaBuyNow.style.display = 'none'
        console.log("close buy now")
    }

    let outsideBuyNow = document.getElementById('buyNowArea')
    outsideBuyNow.addEventListener('click',closeBuyNow);

    let form_buy = document.getElementById('form_buy')
    form_buy.addEventListener('click',function(event){
        event.stopPropagation()
    })
//update info product into form


    // function addProductInput(i){
    //     let inputDonhang = document.getElementById('donHangInput');
    //     console.log(inputDonhang)
    // }
    // addProductInput(0);
// Regex form input
    //regex variable
    let regexTxtName = /^[A-Z][a-z]{0,6}(\s[A-Z][a-z]{0,6}){2,3}$/;
    // let regexTxtAddress = 
    // let regexTxtTel = 
    // let regexTxtEmail = 
    // let regexTxtProduct = 


    let txtName = document.getElementById("formBuyNow_Name");
    let txtAddress = document.getElementById("formBuyNow_Address");
    let txtTel = document.getElementById("formBuyNow_Tel");
    let txtEmail = document.getElementById("formBuyNow_Email");
    let txtProduct = document.getElementById("donHangInput");

    function checkRegex(){
        if(regexTxtName.test(txtName.value))
            {console.log("true")}
        else
            {console.log("false")};
        
    }

    let btn_register = document.getElementById("formBuyNow_register");
    btn_register.addEventListener('click',checkRegex);

    function isShowNav(){
        let sts =  document.querySelector('.nav');
        if(sts.style.display == 'block')
            return true;
        else
            return false;
    }

    let shownav = document.getElementById('respon__menu');
    shownav.addEventListener('click',function(){
        let sts =  document.querySelector('.nav');
        console.log(isShowNav());
        if(isShowNav())
            sts.style.display = 'none';
        else
            sts.style.display = 'block';
    })

// Add item in shoping cart 
// info_Product__Btn--shopping => button them vao gio hang

let btn_addItem = document.getElementsByClassName('info_Product__Btn');

// console.log(btn_addItem);

let i = 0;
let name_product = document.getElementsByClassName('product_name');
let nameProduct = [
    'Predator Helios 18 PH18 71 94SJ',
    'Predator Helios 18 PH18 71 94SJ',
    'Dell AlienWare M15 R6 P109F001CBL',
    'ROG Zephyrus G14 GA402RJ L8030W',
    'MSI crosshair 17 A12UEZ 272VN',
    name_product[i].innerHTML,
    name_product[++i].innerHTML,
    name_product[++i].innerHTML,
    name_product[++i].innerHTML,
    name_product[++i].innerHTML,
    name_product[++i].innerHTML,
    name_product[++i].innerHTML,
    name_product[++i].innerHTML,
    name_product[++i].innerHTML,
    name_product[++i].innerHTML,
]



let price = document.getElementsByClassName('price');
i = 0;
let priceArr=[
    price[i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
    price[++i].innerHTML,
]
i = 0;
let imgProduct = document.getElementsByClassName('img_Product');
let imgProductArr = [
    imgProduct[i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src,
    imgProduct[++i].src   
]
// funtion save product wanna buy into localstorage

    // container all btn add shopping-cart
    let container_AddCart = document.getElementById('product');
    
    // function get element shopping cart clicked => target
    let targetBtn = function(e){
        const childNode = e.target.closest('.info_Product__Btn--shopping');
        for(let i = 0;i<elementAddCart.length;i++ ){
            if(elementAddCart[i] === childNode){
                return i;
            }  
        }
    }
    const objectProductShopping = {
        name:{},
        img:{},
        price:{}
    }
    // create variable temp to container product
    let nameTmp = [];
    let priceTmp = [];
    let imgTmp = [];

    let tmpLocalStorage = JSON.parse(localStorage.getItem('ShoppingCart'));
    nameTmp = tmpLocalStorage.name;
    priceTmp = tmpLocalStorage.price;
    imgTmp = tmpLocalStorage.img;
    // add event into container_AddCart
    container_AddCart.addEventListener('click',function(e){
        targetBtn(e);
        let index = targetBtn(e);  
        if(objectProductShopping.name === null){
            nameTmp = nameProduct[index];
            priceTmp = priceArr[index];
            imgTmp = imgProductArr[index];
        }
        else{
            nameTmp.push(nameProduct[index]);
            priceTmp.push(priceArr[index]);
            imgTmp.push(imgProductArr[index]);
        }
        
        // add to object
        objectProductShopping.name = nameTmp;
        objectProductShopping.price = priceTmp;
        objectProductShopping.img = imgTmp;
        // localStorage.removeItem('ShoppingCart')
        localStorage.setItem('ShoppingCart',JSON.stringify(objectProductShopping));
        let listProduct = JSON.parse(localStorage.getItem('ShoppingCart'));
        console.log(listProduct)
        // localStorage.removeItem('ShoppingCart')

    });
    
    
    


    
