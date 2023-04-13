let shownav = document.getElementById('respon__menu');
shownav.addEventListener('click',function(){
    let sts =  document.querySelector('.nav');
    console.log(isShowNav());
    if(isShowNav())
        sts.style.display = 'none';
    else
        sts.style.display = 'block';
})


function isShowNav(){
    let sts =  document.querySelector('.nav');
    if(sts.style.display == 'block')
        return true;
    else
        return false;
}