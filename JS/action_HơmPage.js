var image = new  Array()


image[0] = '../IMAGE/laptoptuutruong_800x450.jpg'
image[1] = '../IMAGE/news_Sale.jpg'
image[2] = '../IMAGE/laptop-asus-800-450_800x450.png'
for(var i = 0;i<image.length;i++){
    console.log(image[i]);
}

console.log(image.length);

var x = 0;

function changeBanner(){
    console.log(x);
    document.getElementById('Sale').src=image[x];
    if(x>=image.length-1)
        x = 0;
    else
        x++;
    
    setTimeout('changeBanner()',3000);
}
setTimeout('changeBanner()',3000);


