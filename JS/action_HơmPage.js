var image = new  Array()
image[0] = '../IMAGE/Banner/1.jpg'
image[1] = '../IMAGE/Banner/2.jpg'
image[2] = '../IMAGE/Banner/3.jpg'

for(var i = 0;i<image.length;i++){
    console.log(image[i]);
}

var x = 0;

function changeBanner(){
    document.getElementById('Sale').src=image[x];
    x++;
    if(x==image.length-1)
        x = 0;

        setTimeout('changeBanner()',3000);

}
setTimeout('changeBanner()',3000);
